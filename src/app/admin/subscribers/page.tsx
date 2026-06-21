import { supabase } from '@/lib/supabase';
import { Mail, Calendar, CheckCircle, XCircle } from 'lucide-react';

async function getSubscribers() {
  const { data } = await supabase
    .from('blog_subscribers')
    .select('*')
    .order('subscribed_at', { ascending: false });
  return data || [];
}

export default async function AdminSubscribers() {
  const subscribers = await getSubscribers();

  return (
    <div className="p-10 bg-neutral-50 min-h-screen">
      <div className="mb-12">
            <h1 className="text-4xl font-black uppercase tracking-tighter">Network Nodes</h1>
            <p className="text-sm font-mono text-neutral-500">Verified intelligence recipients.</p>
      </div>

      <div className="bg-white border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_#000000]">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-neutral-100 border-b-2 border-black text-[10px] font-mono font-bold uppercase tracking-wider">
                    <th className="p-4">Email Address</th>
                    <th className="p-4">Joined</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
                {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="p-4 font-mono text-sm">{sub.email}</td>
                        <td className="p-4 font-mono text-xs text-neutral-400">{new Date(sub.subscribed_at).toLocaleDateString()}</td>
                        <td className="p-4">
                            <div className="flex items-center gap-1">
                                {sub.status === 'active' ? (
                                    <CheckCircle size={14} className="text-green-500" />
                                ) : (
                                    <XCircle size={14} className="text-red-500" />
                                )}
                                <span className="text-[10px] font-mono font-bold uppercase">{sub.status}</span>
                            </div>
                        </td>
                        <td className="p-4 text-right">
                             <button className="text-xs font-bold uppercase text-red-600 hover:underline">Unsubscribe</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
