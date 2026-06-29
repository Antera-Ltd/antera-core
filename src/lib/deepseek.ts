export async function getAnteraResponse(messages: { role: string; parts: { text: string }[] }[]) {
  const endpoint = process.env.NEXT_PUBLIC_CHAT_API_URL || '/api/chat';

  if (!endpoint || endpoint === 'your_supabase_edge_function_url') {
    if (process.env.NODE_ENV === 'development') {
        return "Antera AI development mode active. Please configure NEXT_PUBLIC_CHAT_API_URL for production.";
    }
    console.error("CHAT_API_URL is not defined");
    throw new Error("Chat service is currently unavailable.");
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to get response from Antera AI");
  }

  const data = await response.json();
  return data.text;
}

export async function generateBlogPost(topic: string, tone: string = 'professional') {
  const prompt = `Generate an elite, professional, and ultra-long-form (2500+ words) blog post about "${topic}" with a ${tone} tone.

  Requirements:
  1. Structure: Start with a detailed Table of Contents (using anchor links).
  2. Depth: Deep technical and strategic analysis. Use <h2> for main sections and <h3> for sub-sections.
  3. Visual Data: Include at least two detailed HTML tables representing data, roadmaps, or comparisons.
  4. Formatting: Use professional HTML tags and Markdown. Ensure clean paragraph spacing and bullet points.
  5. Tone: Authoritative, visionary, and data-driven.

  Return your response in the following exact format:
  TITLE: Put the title here
  EXCERPT: Put a brief summary here (max 160 chars)
  CONTENT:
  Put the full HTML/Markdown content here...
  `;

  return await getAnteraResponse([
    { role: 'user', parts: [{ text: prompt }] }
  ]);
}

export async function improveContent(content: string) {
  const prompt = `Improve and humanize the following blog post content while maintaining its core message:

  ${content}`;

  return await getAnteraResponse([
    { role: 'user', parts: [{ text: prompt }] }
  ]);
}

export async function generateSEOMeta(title: string, content: string) {
  const prompt = `Generate an SEO meta description (max 160 characters) and 5 focus keywords for a blog post titled "${title}" with this content:

  ${content.substring(0, 500)}...`;

  return await getAnteraResponse([
    { role: 'user', parts: [{ text: prompt }] }
  ]);
}
