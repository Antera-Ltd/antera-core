import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

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

    // Send welcome email asynchronously
    sendWelcomeEmail(email).catch(e => console.error("Async Welcome Email Error:", e));

    return NextResponse.json(data[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Perform direct deletion and return the deleted record for confirmation
    const { data, error } = await supabase
      .from('blog_subscribers')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      console.error("Supabase DELETE Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      // If no data returned, either record didn't exist or ID mismatch
      return NextResponse.json({ error: 'Subscriber not found in database' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Subscriber successfully removed', deleted: data[0] });
  } catch (err: any) {
    console.error("Internal Server Error in DELETE subscriber:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
