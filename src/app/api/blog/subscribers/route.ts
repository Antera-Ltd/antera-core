import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/brevo';

export async function POST(request: Request) {
  const { email } = await request.json();

  const { data, error } = await supabase
    .from('blog_subscribers')
    .insert({ email })
    .select();

  if (error) {
    if (error.code === '23505') { // Unique violation
        return NextResponse.json({ message: "Already subscribed" }, { status: 200 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send welcome email
  await sendWelcomeEmail(email);

  return NextResponse.json(data[0]);
}
