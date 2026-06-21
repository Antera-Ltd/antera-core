import { supabase } from '@/lib/supabase';
import { LayoutDashboard, FileText, Users, Eye } from 'lucide-react';
import Link from 'next/link';

async function getStats() {
  const { count: postsCount } = await supabase.from('blog_posts').select('*', { count: 'exact', head: true });
  const { count: subCount } = await supabase.from('blog_subscribers').select('*', { count: 'exact', head: true });

  const { data: viewsData } = await supabase.from('blog_posts').select('views');
  const totalViews = viewsData?.reduce((acc, curr) => acc + (curr.views || 0), 0) || 0;

  return { postsCount, subCount, totalViews };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000000] relative overflow-hidden group">
        <div className={`absolute right-0 top-0 w-16 h-16 ${color} opacity-10 translate-x-8 -translate-y-8 rotate-45 group-hover:rotate-12 transition-transform`} />
        <div className="flex items-center justify-between mb-4">
            <div className={`p-2 border border-black ${color} text-white`}>
                <Icon size={20} />
            </div>
            <span className="text-2xl font-black font-mono tracking-tighter">{value}</span>
        </div>
        <p className="text-xs font-mono font-bold uppercase text-neutral-400">{title}</p>
    </div>
  );

  return (
    <div className="p-10 bg-neutral-50 min-h-screen">
      <div className="mb-12 flex justify-between items-end">
        <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Command Center</h1>
            <p className="text-sm font-mono text-neutral-500">System metrics and intelligence overview.</p>
        </div>
        <Link href="/admin/posts/new" className="bg-[#FA520F] text-white px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase text-sm">
            Deploy New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Total Transmissions" value={stats.postsCount} icon={FileText} color="bg-blue-500" />
        <StatCard title="Intelligence Nodes" value={stats.subCount} icon={Users} color="bg-green-500" />
        <StatCard title="Total Signal Reach" value={stats.totalViews} icon={Eye} color="bg-orange-500" />
        <StatCard title="Network Engagement" value="84%" icon={LayoutDashboard} color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions or Recent Posts will go here */}
      </div>
    </div>
  );
}
