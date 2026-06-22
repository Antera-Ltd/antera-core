'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function UnsubscribeButton({ subId }: { subId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleUnsubscribe = async () => {
    if (!confirm('Are you sure you want to remove this subscriber from the network?')) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('blog_subscribers')
        .delete()
        .eq('id', subId);

      if (error) throw error;
      router.refresh();
    } catch (err: any) {
      alert('Error removing subscriber: ' + err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleUnsubscribe}
      disabled={isDeleting}
      className="text-xs font-bold uppercase text-red-600 hover:underline disabled:opacity-50 flex items-center gap-1"
    >
      {isDeleting ? <Loader2 size={12} className="animate-spin" /> : 'Unsubscribe'}
    </button>
  );
}
