'use client';

import { useEffect, useRef } from 'react';

export default function ViewCounter({ postId }: { postId: string }) {
  const incremented = useRef(false);

  useEffect(() => {
    if (!incremented.current) {
      fetch(`/api/blog/posts/${postId}/view`, { method: 'POST' })
        .catch(err => console.error('Failed to increment view:', err));
      incremented.current = true;
    }
  }, [postId]);

  return null;
}
