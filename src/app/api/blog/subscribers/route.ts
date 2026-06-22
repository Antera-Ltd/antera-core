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
