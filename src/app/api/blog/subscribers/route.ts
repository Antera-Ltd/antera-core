import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
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

    // Ensure we are targetting the correct table and column
    const { data, error } = await supabase
      .from('blog_subscribers')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      console.error("Supabase Error (Delete Subscriber):", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Check if anything was actually deleted
    if (!data || data.length === 0) {
      // Fallback: search by email if id failed? No, ID should work.
      // Maybe the ID passed was not a UUID or didn't match.
      return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Subscriber deleted successfully', deleted: data[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
