'use client';
import { useState } from 'react';
import { Send, Loader2, Megaphone } from 'lucide-react';

export default function BroadcastPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/admin/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Failed to send broadcast');
      }
    } catch (err) {
      setStatus('error');
      setResponseMsg('An unexpected error occurred');
    }
  };

  return (
    <div className="pt-24 px-10 pb-10 bg-neutral-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter flex items-center gap-3">
            <Megaphone size={32} className="text-[#FA520F]" />
            Signal Broadcast
          </h1>
          <p className="text-sm font-mono text-neutral-500 mt-2">Transmit product alerts and services to all registered nodes.</p>
        </div>

        <form onSubmit={handleBroadcast} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000000] space-y-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase mb-2 text-neutral-400">Broadcast Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. New Product Launch: Antera AI v2"
              className="w-full p-4 border-2 border-black outline-none focus:shadow-[4px_4px_0px_0px_#FA520F] transition-all font-bold uppercase tracking-tight"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase mb-2 text-neutral-400">Message Content</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-4 border-2 border-black outline-none focus:shadow-[4px_4px_0px_0px_#FA520F] transition-all font-mono text-sm h-64"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-black text-white p-4 font-black uppercase flex items-center justify-center gap-2 hover:bg-[#FA520F] transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Transmitting...
              </>
            ) : (
              <>
                <Send size={20} /> Initiate Broadcast
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="p-4 bg-green-50 border-2 border-green-500 text-green-700 font-mono text-sm font-bold uppercase">
              {responseMsg}
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-50 border-2 border-red-500 text-red-700 font-mono text-sm font-bold uppercase">
              {responseMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
