import { supabase } from '@/lib/supabase';
import { LayoutDashboard, FileText, Users, Eye, TrendingUp } from 'lucide-react';
import Link from 'next/link';

async function getStats() {
  // Fetch total number of blog posts from database
  const { count: postsCount } = await supabase.from('blog_posts').select('*', { count: 'exact', head: true });
  
  // Fetch number of published posts
  const { count: publishedCount } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');
  
  // Fetch total number of email subscribers from database
  const { count: subCount } = await supabase.from('blog_subscribers').select('*', { count: 'exact', head: true });

  // Fetch all post views data
  const { data: viewsData } = await supabase.from('blog_posts').select('views');
  
  // Calculate total views by summing all individual post views
  const totalViews = viewsData?.reduce((acc, curr) => acc + (curr.views || 0), 0) || 0;

  // Calculate engagement rate: (published posts / total posts) * 100
  // If there are no posts, default to 0
  const totalPostsCount = postsCount || 0;
  const currentPublishedCount = publishedCount || 0;
  const engagementRate = totalPostsCount > 0
    ? Math.round((currentPublishedCount / totalPostsCount) * 100)
    : 0;

  return { 
    postsCount: totalPostsCount,
    publishedCount: currentPublishedCount,
    subCount: subCount || 0,
    totalViews,
    engagementRate 
  };
}

export default async function AdminDashboard() {
  // Load all statistics data
  const stats = await getStats();

  // Reusable card component for displaying statistics
  const StatCard = ({ title, value, icon: Icon, color, subtitle }: any) => (
    // Card container with retro border and shadow styling
    <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000000] relative overflow-hidden group">
        {/* Decorative rotated background square that animates on hover */}
        <div className={`absolute right-0 top-0 w-16 h-16 ${color} opacity-10 translate-x-8 -translate-y-8 rotate-45 group-hover:rotate-12 transition-transform`} />
        {/* Icon and value displayed side by side */}
        <div className="flex items-center justify-between mb-4">
            <div className={`p-2 border border-black ${color} text-white`}>
                <Icon size={20} />
            </div>
            <span className="text-2xl font-black font-mono tracking-tighter">{value}</span>
        </div>
        {/* Label for the statistic */}
        <p className="text-xs font-mono font-bold uppercase text-neutral-400">{title}</p>
        {subtitle && (
          <p className="text-[10px] font-mono text-neutral-400 mt-1">{subtitle}</p>
        )}
    </div>
  );

  return (
    // Main container with top padding to prevent navbar overlap
    <div className="pt-24 px-4 md:px-10 pb-10 bg-neutral-50 min-h-screen">
      {/* Header section with title and action button */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-1">Dashboard</h1>
            <p className="text-sm font-mono text-neutral-500">Blog metrics overview.</p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 w-full md:w-auto">
            <Link href="/admin/posts" className="bg-white text-black px-4 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-[10px] md:text-sm text-center">
              Manage Posts
            </Link>
            <Link href="/admin/subscribers" className="bg-white text-black px-4 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-[10px] md:text-sm text-center">
              Subscribers
            </Link>
            <Link href="/admin/broadcast" className="bg-white text-black px-4 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-[10px] md:text-sm text-center">
              Broadcast
            </Link>
            {/* Button to create new blog post with hover animation */}
            <Link href="/admin/posts/new" className="bg-[#FA520F] text-white px-4 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-[10px] md:text-sm text-center">
              New Post
            </Link>
        </div>
      </div>

      {/* Statistics cards grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard 
          value={stats.postsCount} 
          icon={FileText} 
          color="bg-blue-500" 
        />
        <StatCard 
          value={stats.subCount} 
          icon={Users} 
          color="bg-green-500" 
        />
        <StatCard 
          value={stats.totalViews} 
          icon={Eye} 
          color="bg-orange-500" 
        />
        <StatCard 
          value={`${stats.engagementRate}%`} 
          icon={TrendingUp} 
          color="bg-purple-500"
          subtitle={`${stats.publishedCount} published / ${stats.postsCount} total`}
        />
      </div>

      {/* Placeholder section for quick actions or recent posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions or Recent Posts will go here */}
      </div>
    </div>
  );
}