import { supabase } from '@/lib/supabase';
import { Edit2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import DeletePostButton from '@/components/admin/DeletePostButton';

async function getPosts() {
  // Fetch all blog posts with selected fields, ordered by creation date (newest first)
  const { data } = await supabase
    .from('blog_posts')
    .select('id, title, status, created_at, views, slug')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function AdminPostsList() {
  // Load all posts from database
  const posts = await getPosts();

  return (
    // Main container with top padding to prevent navbar overlap
    <div className="pt-24 px-10 pb-10 bg-neutral-50 min-h-screen">
      {/* Header section with title and create button */}
      <div className="mb-12 flex justify-between items-end">
        <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Manage Posts</h1>
        </div>
        <Link href="/admin/posts/new" className="bg-black text-white px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#FA520F] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm">
            Create New
        </Link>
      </div>

      {/* Table container with retro box-shadow styling */}
      <div className="bg-white border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_#000000]">
        <table className="w-full text-left border-collapse">
            {/* Table header with column labels */}
            <thead>
                <tr className="bg-neutral-100 border-b-2 border-black text-[10px] font-mono font-bold uppercase tracking-wider">
                    <th className="p-4">Post Title</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Views</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                </tr>
            </thead>
            {/* Table body with post data rows */}
            <tbody className="divide-y divide-neutral-200">
                {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-neutral-50 transition-colors">
                        {/* Post title */}
                        <td className="p-4 font-bold uppercase text-sm">{post.title}</td>
                        {/* Status badge with color coding */}
                        <td className="p-4">
                            <span className={`text-[10px] font-mono font-bold uppercase px-2 py-1 border ${post.status === 'published' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-yellow-100 text-yellow-700 border-yellow-200'}`}>
                                {post.status}
                            </span>
                        </td>
                        {/* View count */}
                        <td className="p-4 font-mono text-sm">{post.views || 0}</td>
                        {/* Formatted creation date */}
                        <td className="p-4 font-mono text-xs text-neutral-400">{new Date(post.created_at).toLocaleDateString()}</td>
                        {/* Action buttons: View, Edit, Delete */}
                        <td className="p-4 text-right">
                            <div className="flex justify-end gap-2">
                                <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 border border-black hover:bg-neutral-100">
                                    <ExternalLink size={16} />
                                </Link>
                                <Link href={`/admin/posts/edit/${post.id}`} className="p-2 border border-black hover:bg-blue-100 text-blue-600">
                                    <Edit2 size={16} />
                                </Link>
                                <DeletePostButton postId={post.id} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}