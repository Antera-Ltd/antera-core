import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { postSchema } from '@/lib/validations';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const limit = parseInt(searchParams.get('limit') || '10');

  let query = supabase
    .from('blog_posts')
    .select('*, blog_authors(*), blog_categories(*)')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const validation = postSchema.safeParse(body);
  if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
  }

  const { data, error } = await supabase.from('blog_posts').insert(validation.data).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data[0]);
}
