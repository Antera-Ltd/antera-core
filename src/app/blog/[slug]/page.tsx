import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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
    title: `${post.title} | ANTERA Intelligence`,
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

  const relatedPosts = post.category_id ? await getRelatedPosts(post.category_id, post.id) : [];
  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
             <span className="text-xs font-mono text-neutral-400">
                {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
             </span>
             <span className="text-xs font-mono text-neutral-400">• {readingTime} min read</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            {post.title}
        </h1>

        <div className="flex items-center gap-4 py-8 border-y-2 border-black">
             <div className="relative w-12 h-12 rounded-full border-2 border-black bg-neutral-100 overflow-hidden">
                <Image
                    src={post.blog_authors?.avatar_url || '/antera-logo.jpeg'}
                    alt={post.blog_authors?.name || 'Antera AI'}
                    fill
                    className="object-cover"
                />
             </div>
             <div>
                <p className="text-sm font-black uppercase tracking-wide">{post.blog_authors?.name || 'Antera AI'}</p>
             </div>
        </div>
      </header>

      {post.featured_image && (
          <div className="mb-12 relative aspect-video border-2 border-black shadow-[12px_12px_0px_0px_#000000]">
              <Image src={post.featured_image} alt={post.title} fill className="object-cover" priority />
          </div>
      )}

      <div
        className="prose prose-neutral max-w-none mb-20
        prose-h2:uppercase prose-h2:font-black prose-h2:tracking-tight prose-h2:text-3xl prose-h2:mt-12
        prose-p:text-lg prose-p:leading-relaxed prose-p:text-neutral-800
        prose-pre:bg-black prose-pre:text-white prose-pre:rounded-none prose-pre:border-2 prose-pre:border-black
        prose-blockquote:border-l-4 prose-blockquote:border-[#FA520F] prose-blockquote:font-mono prose-blockquote:italic
        prose-ul:list-disc prose-ul:pl-6
        prose-table:border-collapse prose-th:border-2 prose-th:border-black prose-th:px-4 prose-th:py-2 prose-td:border-2 prose-td:border-black prose-td:px-4 prose-td:py-2
        prose-h3:font-bold prose-h3:text-xl
        prose-a:text-[#FA520F] prose-a:no-underline hover:prose-a:underline
        prose-strong:font-black prose-strong:text-neutral-900
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-4xl font-black uppercase mb-6" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-2xl font-bold uppercase mt-8 mb-4" {...props} />,
          p: ({node, ...props}) => <p className="mb-6 last:mb-0" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
          li: ({node, ...props}) => <li className="pl-2" {...props} />,
          table: ({node, ...props}) => (
            <div className="overflow-x-auto my-8 border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
              <table className="w-full border-collapse" {...props} />
            </div>
          ),
          th: ({node, ...props}) => <th className="border-2 border-black p-4 bg-neutral-100 font-black uppercase text-xs text-left" {...props} />,
          td: ({node, ...props}) => <td className="border-2 border-black p-4 text-sm" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#FA520F] pl-6 py-2 italic font-mono bg-neutral-50 mb-6" {...props} />,
          code: ({node, inline, ...props}: any) =>
            inline
              ? <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-sm" {...props} />
              : <code className="block bg-black text-white p-6 font-mono text-sm overflow-x-auto border-2 border-black mb-6" {...props} />,
        }}
      >
        {post.content.replace(/\\n/g, '\n')}
      </ReactMarkdown>
    </div>

      {relatedPosts.length > 0 && (
          <section className="pt-20 border-t-2 border-black">
              <h3 className="text-2xl font-black uppercase mb-8">Related Blogs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                          <div className="aspect-video relative border-2 border-black mb-4 overflow-hidden">
                              {rp.featured_image && <Image src={rp.featured_image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform" />}
                          </div>
                          <h4 className="font-bold uppercase text-sm group-hover:text-[#FA520F]">{rp.title}</h4>
                      </Link>
                  ))}
              </div>
          </section>
      )}
    </article>
  );
}