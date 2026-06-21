import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/lib/deepseek';

export async function POST(request: Request) {
  const { topic, tone } = await request.json();
  try {
    const content = await generateBlogPost(topic, tone);
    return NextResponse.json({ content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
