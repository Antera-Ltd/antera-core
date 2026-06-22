import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/brevo';
import { cookies } from 'next/headers';

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
      // Return a partial success if email failed
      return NextResponse.json({
        ...data[0],
        warning: "Subscriber added but welcome email could not be sent. Please check email service configuration."
      });
    }
  } catch (e) {
    console.error("Exception during welcome email:", e);
  }

  return NextResponse.json(data[0]);
}

export async function DELETE(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (token !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('blog_subscribers')
    .delete()
    .eq('id', id);

  if (error) {
    console.error("Supabase Error (Delete Subscriber):", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Subscriber deleted successfully' });
}
