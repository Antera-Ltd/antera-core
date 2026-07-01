
// Helper function to clean markdown
const cleanMarkdown = (text: string): string => {
  if (!text) return text;

  let cleaned = text
    // Remove bold/italic markers but keep content
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    // Remove code markers
    .replace(/`(.*?)`/g, '$1')
    // Remove link formatting but keep text
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    // Remove image syntax
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // Remove header markers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove blockquote markers
    .replace(/^>\s*/gm, '')
    // Remove em dashes
    .replace(/[—–]/g, '-')
    // Clean up multiple spaces
    .replace(/\s{2,}/g, ' ')
    // Clean up multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return cleaned;
};

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
  return cleanMarkdown(data.text);
}

export async function getAnteraResponseStream(
  messages: { role: string; parts: { text: string }[] }[],
  onChunk?: (chunk: string) => void
): Promise<string> {
  const endpoint = process.env.NEXT_PUBLIC_CHAT_API_URL || '/api/chat';

  if (!endpoint || endpoint === 'your_supabase_edge_function_url') {
    if (process.env.NODE_ENV === 'development') {
      const devMsg = "Antera AI development mode active. Please configure NEXT_PUBLIC_CHAT_API_URL for production.";
      if (onChunk) {
        const words = devMsg.split(' ');
        for (let i = 0; i < words.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 50));
          onChunk(words[i] + (i < words.length - 1 ? ' ' : ''));
        }
      }
      return devMsg;
    }
    console.error("CHAT_API_URL is not defined");
    throw new Error("Chat service is currently unavailable.");
  }

  try {
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
    const text = cleanMarkdown(data.text || '');
    
    if (onChunk && text) {
      // Simulate streaming by breaking into chunks
      const words = text.split(' ');
      for (let i = 0; i < words.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 30));
        onChunk(words[i] + (i < words.length - 1 ? ' ' : ''));
      }
    }
    
    return text;
  } catch (error) {
    console.error('Streaming error:', error);
    throw error;
  }
}

export async function generateBlogPost(topic: string, tone: string = 'professional') {
  const prompt = `Generate an elite, professional, and ultra-long-form (7,000+ words) blog post about "${topic}" with a ${tone} tone.

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

export async function generateBlogPostStream(
  topic: string, 
  tone: string = 'professional',
  onChunk?: (chunk: string) => void
) {
  const prompt = `Generate an elite, professional, and ultra-long-form (7,000+ words) blog post about "${topic}" with a ${tone} tone.

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

  return await getAnteraResponseStream(
    [{ role: 'user', parts: [{ text: prompt }] }],
    onChunk
  );
}

export async function improveContent(content: string) {
  const prompt = `Improve and humanize the following blog post content while maintaining its core message:

  ${content}`;

  return await getAnteraResponse([
    { role: 'user', parts: [{ text: prompt }] }
  ]);
}

export async function improveContentStream(
  content: string,
  onChunk?: (chunk: string) => void
) {
  const prompt = `Improve and humanize the following blog post content while maintaining its core message:

  ${content}`;

  return await getAnteraResponseStream(
    [{ role: 'user', parts: [{ text: prompt }] }],
    onChunk
  );
}

export async function generateSEOMeta(title: string, content: string) {
  const prompt = `Generate an SEO meta description (max 160 characters) and 5 focus keywords for a blog post titled "${title}" with this content:

  ${content.substring(0, 500)}...`;

  return await getAnteraResponse([
    { role: 'user', parts: [{ text: prompt }] }
  ]);
}

export async function generateSEOMetaStream(
  title: string, 
  content: string,
  onChunk?: (chunk: string) => void
) {
  const prompt = `Generate an SEO meta description (max 160 characters) and 5 focus keywords for a blog post titled "${title}" with this content:

  ${content.substring(0, 500)}...`;

  return await getAnteraResponseStream(
    [{ role: 'user', parts: [{ text: prompt }] }],
    onChunk
  );
}