import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Share2, Mail, ExternalLink } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  const { data } = await supabase
    .from('blog_posts')
    .select('*, blog_authors(*), blog_categories(*)')
    .eq('slug', slug)
    .single();
  return data;
}

async function getRelatedPosts(categoryId: string, currentPostId: string) {
    const { data } = await supabase
        .from('blog_posts')
        .select('title, slug, featured_image, created_at')
        .eq('category_id', categoryId)
        .neq('id', currentPostId)
        .eq('status', 'published')
        .limit(3);
    return data || [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Blog Post`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  let displayContent = post.content;

  // Refined extraction logic to handle multiple formats
  if (displayContent.includes('CONTENT:')) {
    const contentMatch = displayContent.match(/CONTENT:\s*([\s\S]*)/i);
    if (contentMatch) {
      displayContent = contentMatch[1].trim();
    }
  } else {
    try {
      // to Handle potential JSON (sometimes AI or TipTap might wrap it)
      const cleaned = displayContent.replace(/```json\n?|\n?```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      if (parsed.content) displayContent = parsed.content;
      else if (typeof parsed === 'string') displayContent = parsed;
    } catch (e) {

    }
  }

  // Remove markdown code block markers if they wrap the entire content
  displayContent = displayContent.replace(/^```(markdown|html)\n([\s\S]*)\n```$/i, '$2');

  // Table of Contents Generation (Support for both MD and HTML headings)
  const toc: { level: number; text: string; id: string }[] = [];

  // Regex to match both MD (##) and HTML (<h2>) - handles multi-line and extra attributes
  const headingRegex = /(?:^(#{2,3})\s+(.*)$)|(?:<(h[2-3])(?:\s+[^>]*?id="([^"]*)")?[^>]*?>([\s\S]*?)<\/\3>)/gm;
  let match;

  while ((match = headingRegex.exec(displayContent)) !== null) {
    let level = 0;
    let text = '';
    let id = '';

    if (match[1]) { // Markdown
      level = match[1].length;
      text = match[2].trim().replace(/[*_#]/g, '');
    } else if (match[3]) { // HTML
      level = parseInt(match[3][1]);
      text = match[5].replace(/<[^>]*>/g, '').trim();
      id = match[4] || '';
    }

    if (!id) {
      id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    }

    if (text) {
      toc.push({ level, text, id });
    }
  }

  const relatedPosts = post.category_id ? await getRelatedPosts(post.category_id, post.id) : [];
  const readingTime = Math.ceil(displayContent.split(/\s+/).length / 200);
  const shareUrl = `https://www.antera.co.tz/blog/${slug}`;

  return (
    <article className="pt-32 pb-20 px-6 max-w-7xl mx-auto bg-white min-h-screen text-black">
      <header className="max-w-4xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-6">
             <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-widest">
                {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
             </span>
             <span className="text-xs font-mono text-neutral-400">• {readingTime} min read</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-black">
            {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y-2 border-black">
             <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full border-2 border-black bg-neutral-100 overflow-hidden">
                    <Image
                        src={post.blog_authors?.avatar_url || '/antera-logo.jpeg'}
                        alt={post.blog_authors?.name || 'Antera Team'}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm font-black uppercase tracking-wide text-black">{post.blog_authors?.name || 'Antera Team'}</p>
                </div>
             </div>

             <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase mr-2 text-neutral-400">Share post:</span>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                    <Share2 size={14} />
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${shareUrl}`} className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                    <Mail size={14} />
                </a>
                <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                    <ExternalLink size={14} />
                </a>
             </div>
        </div>
      </header>

      {post.featured_image && (
          <div className="max-w-5xl mx-auto mb-20 relative aspect-video border-2 border-black shadow-[16px_16px_0px_0px_#000000]">
              <Image src={post.featured_image} alt={post.title} fill className="object-cover" priority />
          </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3">
            <div className="sticky top-32">
                <div className="p-6 border-2 border-black bg-[#F9F9F9] shadow-[8px_8px_0px_0px_#FA520F]">
                    <h4 className="text-xs font-black uppercase mb-6 border-b-2 border-black pb-2 tracking-tighter text-black">Table of Contents</h4>
                    <ul className="space-y-4">
                        {toc.length > 0 ? toc.map((item, idx) => (
                            <li key={idx} className={`text-[10px] font-bold uppercase tracking-tight ${item.level === 3 ? 'ml-4 opacity-60' : ''}`}>
                                <a href={`#${item.id}`} className="hover:text-[#FA520F] transition-colors line-clamp-2 leading-tight text-black">
                                    {item.text}
                                </a>
                            </li>
                        )) : (
                            <li className="text-[10px] font-mono text-neutral-400 italic">No headings</li>
                        )}
                    </ul>
                </div>
            </div>
        </aside>

        <div className="lg:col-span-9">
            <div className="prose prose-neutral max-w-none mb-32 text-black
                prose-headings:text-black prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter
                prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-4
                prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6
                prose-p:text-xl prose-p:leading-[1.8] prose-p:text-neutral-800 prose-p:mb-10
                prose-pre:bg-black prose-pre:text-white prose-pre:rounded-none prose-pre:border-4 prose-pre:border-black prose-pre:p-8 prose-pre:shadow-[12px_12px_0px_0px_#FA520F]
                prose-blockquote:border-l-[12px] prose-blockquote:border-[#FA520F] prose-blockquote:font-mono prose-blockquote:italic prose-blockquote:bg-neutral-50 prose-blockquote:p-10 prose-blockquote:text-2xl prose-blockquote:my-16
                prose-ul:list-disc prose-ul:pl-10 prose-ul:mb-12 prose-ul:space-y-6
                prose-ol:list-decimal prose-ol:pl-10 prose-ol:mb-12 prose-ol:space-y-6
                prose-li:text-lg prose-li:text-neutral-800
                prose-table:border-4 prose-table:border-black prose-table:my-20 prose-table:shadow-[16px_16px_0px_0px_#000000]
                prose-th:bg-black prose-th:text-white prose-th:p-6 prose-th:uppercase prose-th:text-xs prose-th:tracking-widest
                prose-td:p-6 prose-td:border-2 prose-td:border-neutral-200 prose-td:text-base
                prose-tr:hover:bg-neutral-50 prose-tr:transition-colors
                prose-a:text-[#FA520F] prose-a:font-black prose-a:no-underline hover:prose-a:underline
                prose-strong:font-black prose-strong:text-black
                prose-img:border-4 prose-img:border-black prose-img:shadow-[12px_12px_0px_0px_#000000] prose-img:my-16
            ">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h2: ({node: _, ...props}) => {
                            const text = String(props.children || '').replace(/<[^>]*>/g, '');
                            const id = props.id || text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                            return <h2 id={id} {...props} />
                        },
                        h3: ({node: _, ...props}) => {
                            const text = String(props.children || '').replace(/<[^>]*>/g, '');
                            const id = props.id || text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                            return <h3 id={id} {...props} />
                        }
                    }}
                >
                    {displayContent}
                </ReactMarkdown>
            </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
          <section className="pt-24 border-t-4 border-black">
              <h3 className="text-3xl font-black uppercase mb-12 tracking-tighter text-black">Recommended Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {relatedPosts.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block border-2 border-black p-4 hover:bg-neutral-50 transition-all hover:-translate-y-2">
                          <div className="aspect-video relative border-2 border-black mb-6 overflow-hidden">
                              {rp.featured_image && <Image src={rp.featured_image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />}
                          </div>
                          <h4 className="font-black uppercase text-lg leading-tight group-hover:text-[#FA520F] transition-colors line-clamp-2 text-black">{rp.title}</h4>
                          <div className="mt-4 flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold uppercase px-2 py-1 bg-black text-white">Read Blog</span>
                          </div>
                      </Link>
                  ))}
              </div>
          </section>
      )}
    </article>
  );
}