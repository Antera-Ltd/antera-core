import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import BlogCTA from '@/components/BlogCTA';

async function getPosts() {
  const { data } = await supabase
    .from('blog_posts')
    .select('*, blog_authors(name, avatar_url)')
    .eq('status', 'published')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">Articles</h1>
        <p className="text-xl text-neutral-600 max-w-2xl font-mono">Get Updates, and deep dives into the future.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group border-2 border-black hover:shadow-[8px_8px_0px_0px_#FA520F] transition-all flex flex-col">
            {post.featured_image && (
                <div className="aspect-video relative border-b-2 border-black overflow-hidden">
                    <Image src={post.featured_image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-1 bg-black text-white">Neural Tech</span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase">{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors">{post.title}</h2>
              <p className="text-neutral-600 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto flex items-center gap-3 pt-6 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden border border-black">
                    {post.blog_authors?.avatar_url && <img src={post.blog_authors.avatar_url} alt={post.blog_authors.name} />}
                </div>
                <span className="text-xs font-bold uppercase">{post.blog_authors?.name || 'Antera Team'}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-neutral-200">
              <p className="font-mono text-neutral-400">No Blog Post For Now.</p>
          </div>
      )}

      <div className="mt-20">
          <BlogCTA />
      </div>
    </div>
  );
}
