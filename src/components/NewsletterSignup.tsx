'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/blog/subscribers', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
        setStatus('success');
        setEmail('');
    } else {
        setStatus('error');
    }
  };

  return (
    <div className="border-2 border-black p-8 bg-white shadow-[8px_8px_0px_0px_#000000]">
      <h3 className="text-2xl font-black uppercase mb-2 tracking-tight">{t('blog.subscribe')}</h3>
      <p className="text-neutral-500 text-sm mb-6 font-mono">Get technical and product briefings delivered directly to your email.</p>

      <form onSubmit={handleSubscribe} className="flex gap-2">
        <input
          type="email"
          placeholder=""
          className="flex-1 p-3 border-2 border-black outline-none focus:shadow-[4px_4px_0px_0px_#FA520F] transition-all font-mono text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-black text-white px-6 font-bold uppercase hover:bg-[#FA520F] transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : t('blog.subscribe_button')}
        </button>
      </form>

      {status === 'success' && <p className="mt-4 text-green-600 font-mono text-xs font-bold uppercase">Node Registered Successfully.</p>}
      {status === 'error' && <p className="mt-4 text-red-600 font-mono text-xs font-bold uppercase">Registration Failed.</p>}
    </div>
  );
};
