import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/lib/deepseek';

export async function POST(request: Request) {
  try {
    const { topic, tone } = await request.json();
    const content = await generateBlogPost(topic, tone);
    // The AI might return JSON or raw string depending on DeepSeek's response
    return NextResponse.json({ content });
  } catch (error: any) {
    console.error("AI Generate Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
