'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Wand2, Save, Send } from 'lucide-react';
import { postSchema } from '@/lib/validations';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleAIByTitle = async () => {
    if (!title) return alert('Please enter a title first.');
    setIsGenerating(true);
    try {
      const res = await fetch('/api/blog/ai/generate', {
        method: 'POST',
        body: JSON.stringify({ topic: title, tone: 'professional and tech-focused' }),
      });
      const data = await res.json();

      if (data.content) {
          let raw = data.content;

          // Strip markers and update state
          const titleMatch = raw.match(/TITLE:\s*([^\n]+)/i);
          const excerptMatch = raw.match(/EXCERPT:\s*([^\n]+)/i);
          const contentMatch = raw.match(/CONTENT:\s*([\s\S]*)/i);

          if (titleMatch) setTitle(titleMatch[1].trim());
          if (excerptMatch) setExcerpt(excerptMatch[1].trim());

          let extractedContent = contentMatch ? contentMatch[1].trim() : raw;

          // Remove potential wrapping code blocks
          extractedContent = extractedContent.replace(/^```(markdown|html)?\n([\s\S]*)\n```$/i, '$2');

          setContent(extractedContent);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    const postData = {
      title,
      content,
      excerpt,
      slug: title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
      status,
    };

    const validation = postSchema.safeParse(postData);
    if (!validation.success) {
        alert('Validation failed: ' + JSON.stringify(validation.error.format()));
        setIsSaving(false);
        return;
    }

    try {
        const res = await fetch('/api/blog/posts', {
          method: 'POST',
          body: JSON.stringify(validation.data),
        });
        if (res.ok) {
            router.push('/admin/posts');
        } else {
            const err = await res.json();
            alert('Error: ' + err.error);
        }
    } finally {
        setIsSaving(false);
    }
  };

  return (
    <div className="pt-24 px-8 pb-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-black">Write Articles</h1>
          <div className="flex gap-3">
              <button
                onClick={() => handleSubmit('draft')}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2 border-2 border-black font-bold uppercase text-sm hover:bg-neutral-100 transition-all text-black"
              >
                <Save size={16} /> Save Draft
              </button>
              <button
                onClick={() => handleSubmit('published')}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2 bg-[#FA520F] text-white border-2 border-black font-bold uppercase text-sm shadow-[4px_4px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <Send size={16} /> Publish Now
              </button>
          </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase mb-2 text-neutral-400">Title</label>
                  <div className="flex gap-2">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 p-4 border-2 border-black text-xl font-bold uppercase tracking-tight focus:shadow-[4px_4px_0px_0px_#FA520F] outline-none transition-all text-black"
                      />
                      <button
                        onClick={handleAIByTitle}
                        disabled={isGenerating}
                        className="px-4 bg-black text-white border-2 border-black hover:bg-[#FA520F] transition-colors"
                      >
                        <Wand2 size={20} className={isGenerating ? 'animate-spin' : ''} />
                      </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase mb-2 text-neutral-400">Main Content</label>
                  <RichTextEditor content={content} onChange={setContent} />
                </div>
            </div>

            <div className="space-y-6">
                <div className="p-6 border-2 border-black bg-neutral-50 shadow-[4px_4px_0px_0px_#000000]">
                    <label className="block text-[10px] font-mono font-bold uppercase mb-4 text-neutral-400">Blog Excerpt</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full p-3 border-2 border-black font-mono text-xs h-32 outline-none focus:border-[#FA520F] transition-colors text-black"
                        placeholder="Short summary..."
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
