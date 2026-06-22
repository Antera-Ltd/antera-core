'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UnsubscribeButton({ id }: { id: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/blog/subscribers?id=${id}`, { method: 'DELETE' });
      const result = await response.json();

      if (response.ok) {
        router.refresh();
      } else {
        alert(`Error: ${result.error || 'Failed to delete'}`);
      }
    } catch (err) {
      alert('Network error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-xs font-bold uppercase text-red-600 hover:underline disabled:opacity-50"
    >
      {isDeleting ? 'Removing...' : 'Unsubscribe'}
    </button>
  );
}
