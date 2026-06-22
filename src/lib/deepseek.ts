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
  const prompt = `Generate a comprehensive blog post about ${topic} with a ${tone} tone.
  Include a catchy title, excerpt, and the main content in markdown format.
  Also suggest 5 relevant tags and a suitable category.`;

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