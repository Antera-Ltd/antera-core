import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

async function getPosts(categorySlug?: string) {
  let query = supabase
    .from('blog_posts')
    .select('*, blog_authors(name, avatar_url), blog_categories!inner(name, slug)')
    .eq('status', 'published');

  if (categorySlug) {
      query = query.eq('blog_categories.slug', categorySlug);
  }

  const { data } = await query.order('created_at', { ascending: false });
  return data || [];
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = await getPosts(params.slug);
  const categoryName = posts[0]?.blog_categories?.name || params.slug;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">{categoryName}</h1>
        <p className="text-xl text-neutral-600 max-w-2xl font-mono">Filtered briefing transmissions.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group border-2 border-black hover:shadow-[8px_8px_0px_0px_#FA520F] transition-all flex flex-col">
            <div className="aspect-video relative border-b-2 border-black overflow-hidden">
                {post.featured_image && <Image src={post.featured_image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors">{post.title}</h2>
              <p className="text-neutral-600 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
