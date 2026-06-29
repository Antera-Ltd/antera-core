import { supabase } from '@/lib/supabase';
import { Mail, Calendar, CheckCircle, XCircle } from 'lucide-react';
import UnsubscribeButton from './UnsubscribeButton';

async function getSubscribers() {
  // Fetch all subscribers from database, ordered by subscription date (newest first)
  const { data } = await supabase
    .from('blog_subscribers')
    .select('*')
    .order('subscribed_at', { ascending: false });
  return data || [];
}

export default async function AdminSubscribers() {
  // Load all subscribers from database
  const subscribers = await getSubscribers();

  return (
    // Main container with top padding to prevent navbar overlap
    <div className="pt-24 px-4 md:px-10 pb-10 bg-neutral-50 min-h-screen">
      {/* Header section with title */}
      <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-1">Subscribers</h1>
            <p className="text-sm font-mono text-neutral-500">List of All {subscribers.length} Subscribers.</p>
      </div>

      {/* Table container with retro box-shadow styling */}
      <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0px_0px_#000000]">
        <table className="w-full text-left border-collapse min-w-[600px]">
            {/* Table header with column labels */}
            <thead>
                <tr className="bg-neutral-100 border-b-2 border-black text-[10px] font-mono font-bold uppercase tracking-wider">
                    <th className="p-4">Email Address</th>
                    <th className="p-4">Joined</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                </tr>
            </thead>
            {/* Table body with subscriber data rows */}
            <tbody className="divide-y divide-neutral-200">
                {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-neutral-50 transition-colors">
                        {/* Subscriber email */}
                        <td className="p-4 font-mono text-sm">{sub.email}</td>
                        {/* Formatted subscription date */}
                        <td className="p-4 font-mono text-xs text-neutral-400">{new Date(sub.subscribed_at).toLocaleDateString()}</td>
                        {/* Status badge with icon */}
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
                        {/* Action button to unsubscribe user */}
                        <td className="p-4 text-right">
                             <UnsubscribeButton id={sub.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}