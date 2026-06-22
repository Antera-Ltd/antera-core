import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendBroadcastEmail } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const { subject, message } = await request.json();

    if (!subject || !message) {
      return NextResponse.json({ error: 'Subject and message are required' }, { status: 400 });
    }

    // Fetch all active subscribers
    const { data: subscribers, error } = await supabase
      .from('blog_subscribers')
      .select('email')
      .eq('status', 'active');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ message: 'No active subscribers found' }, { status: 200 });
    }

    // Send broadcast email
    const result = await sendBroadcastEmail(subject, message, subscribers);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ message: `Broadcast sent to ${subscribers.length} subscribers` });
  } catch (error: any) {
    console.error('Broadcast Route Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
