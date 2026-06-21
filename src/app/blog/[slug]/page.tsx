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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const relatedPosts = post.category_id ? await getRelatedPosts(post.category_id, post.id) : [];
  const readingTime = Math.ceil(post.content.split(' ').length / 200);

  return (
    <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
             <span className="text-xs font-mono font-bold uppercase px-3 py-1 bg-[#FA520F] text-white">
                {post.blog_categories?.name || 'Uncategorized'}
             </span>
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
                {post.blog_authors?.avatar_url && (
                    <Image src={post.blog_authors.avatar_url} alt={post.blog_authors.name} fill className="object-cover" />
                )}
             </div>
             <div>
                <p className="text-sm font-black uppercase tracking-wide">{post.blog_authors?.name || 'Antera AI'}</p>
                <p className="text-xs font-mono text-neutral-400 uppercase">Neural Intelligence Specialist</p>
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
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {relatedPosts.length > 0 && (
          <section className="pt-20 border-t-2 border-black">
              <h3 className="text-2xl font-black uppercase mb-8">Related Transmissions</h3>
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
