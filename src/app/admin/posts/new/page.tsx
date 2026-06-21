'use client';
import { useState } from 'react';
import RichTextEditor from '@/components/admin/RichTextEditor';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/blog/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, slug: title.toLowerCase().replace(/ /g, '-'), status: 'draft' }),
    });
    if (res.ok) alert('Post created!');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black mb-8 uppercase tracking-tighter">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border-2 border-black focus:shadow-[4px_4px_0px_0px_#000000] outline-none transition-shadow"
            placeholder="Post Title"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold uppercase mb-2">Content</label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>
        <button
          type="submit"
          className="bg-[#FA520F] text-white font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
        >
          Save as Draft
        </button>
      </form>
    </div>
  );
}
