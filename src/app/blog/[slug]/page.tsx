import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

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
        prose-h2:uppercase prose-h2:font-black prose-h2:tracking-tighter prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-4
        prose-h3:uppercase prose-h3:font-black prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:text-neutral-800
        prose-p:text-xl prose-p:leading-[1.9] prose-p:text-neutral-700 prose-p:mb-10
        prose-pre:bg-black prose-pre:text-white prose-pre:rounded-none prose-pre:border-4 prose-pre:border-black prose-pre:p-10 prose-pre:shadow-[8px_8px_0px_0px_#FA520F]
        prose-blockquote:border-l-8 prose-blockquote:border-[#FA520F] prose-blockquote:font-mono prose-blockquote:italic prose-blockquote:bg-neutral-50 prose-blockquote:p-10 prose-blockquote:text-2xl prose-blockquote:my-12
        prose-ul:list-disc prose-ul:pl-8 prose-ul:mb-10 prose-ul:space-y-6
        prose-ol:list-decimal prose-ol:pl-8 prose-ol:mb-10 prose-ol:space-y-6
        prose-li:text-xl prose-li:text-neutral-700 prose-li:leading-relaxed
        prose-table:border-4 prose-table:border-black prose-table:my-16 prose-table:shadow-[16px_16px_0px_0px_#000000] prose-table:w-full
        prose-th:bg-black prose-th:text-white prose-th:p-6 prose-th:uppercase prose-th:text-xs prose-th:tracking-[0.2em] prose-th:border-r-2 prose-th:border-neutral-800 last:prose-th:border-r-0
        prose-td:p-6 prose-td:border-2 prose-td:border-neutral-100 prose-td:text-lg prose-td:leading-relaxed
        prose-tr:hover:bg-neutral-50 prose-tr:transition-colors
        prose-a:text-[#FA520F] prose-a:font-black prose-a:no-underline hover:prose-a:underline prose-a:border-b-2 prose-a:border-[#FA520F]/30 hover:prose-a:border-[#FA520F]
        prose-strong:font-black prose-strong:text-black
        prose-img:border-4 prose-img:border-black prose-img:shadow-[12px_12px_0px_0px_#000000]
      "
      dangerouslySetInnerHTML={{ __html: post.content }}
    />

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