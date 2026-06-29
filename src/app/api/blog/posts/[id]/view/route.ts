import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Increment the views column by 1 using Supabase's rpc or direct update
    // Using increment logic
    const { data, error } = await supabaseAdmin.rpc('increment_post_views', { post_id: id });

    if (error) {
        // Fallback if RPC doesn't exist
        const { data: post, error: fetchError } = await supabaseAdmin
            .from('blog_posts')
            .select('views')
            .eq('id', id)
            .single();

        if (fetchError) throw fetchError;

        const { error: updateError } = await supabaseAdmin
            .from('blog_posts')
            .update({ views: (post.views || 0) + 1 })
            .eq('id', id);

        if (updateError) throw updateError;
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('View increment error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
