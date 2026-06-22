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
    console.error("Supabase Error (Subscribers):", error);
    if (error.code === '23505') { // Unique violation
        return NextResponse.json({ message: "Already subscribed" }, { status: 200 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send welcome email
  try {
    const emailResult = await sendWelcomeEmail(email);
    if (!emailResult.success) {
      console.error("Welcome email failed but subscriber was added:", emailResult.error);
    }
  } catch (e) {
    console.error("Exception during welcome email:", e);
  }

  return NextResponse.json(data[0]);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('blog_subscribers')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    console.error("Supabase Error (Delete Subscriber):", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Subscriber deleted successfully', deleted: data[0] });
}
