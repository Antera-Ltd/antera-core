'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { Wand2, Save, Send, Loader2 } from 'lucide-react';
import { postSchema } from '@/lib/validations';
import { supabase } from '@/lib/supabase';

export default function EditPost() {
  // State management for form fields and UI status
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  // Load existing post data when component mounts
  useEffect(() => {
    async function loadPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (data) {
        setTitle(data.title);
        setContent(data.content);
        setExcerpt(data.excerpt || '');
      }
      setIsLoading(false);
    }
    if (id) loadPost();
  }, [id]);

  // AI content generation based on title input
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
          setContent(data.content);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle post update submission
  const handleSubmit = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    // Generate URL-friendly slug from title
    const postData = {
      title,
      content,
      excerpt,
      slug: title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
      status,
    };

    // Validate post data before submission
    const validation = postSchema.safeParse(postData);
    if (!validation.success) {
        alert('Validation failed: ' + JSON.stringify(validation.error.format()));
        setIsSaving(false);
        return;
    }

    try {
        // Update existing post in database
        const { error } = await supabase
            .from('blog_posts')
            .update(validation.data)
            .eq('id', id);

        if (!error) {
            router.push('/admin/posts');
        } else {
            alert('Error: ' + error.message);
        }
    } finally {
        setIsSaving(false);
    }
  };

  // Show loading spinner while fetching post data
  if (isLoading) return <div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin" /></div>;

  return (
    // Main container with top padding to prevent navbar overlap
    <div className="pt-24 px-8 pb-8 max-w-5xl mx-auto">
      {/* Header with title and action buttons */}
      <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tighter">Edit Blog Post</h1>
          <div className="flex gap-3">
              <button
                onClick={() => handleSubmit('draft')}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2 border-2 border-black font-bold uppercase text-sm hover:bg-neutral-100 transition-all"
              >
                <Save size={16} /> Update Draft
              </button>
              <button
                onClick={() => handleSubmit('published')}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2 bg-[#FA520F] text-white border-2 border-black font-bold uppercase text-sm shadow-[4px_4px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <Send size={16} /> Publish Changes
              </button>
          </div>
      </div>

      {/* Main form content area */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Title and Content Editor */}
            <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase mb-2 text-neutral-400">Title</label>
                  <div className="flex gap-2">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 p-4 border-2 border-black text-xl font-bold uppercase tracking-tight focus:shadow-[4px_4px_0px_0px_#FA520F] outline-none transition-all"
                      />
                      <button
                        onClick={handleAIByTitle}
                        disabled={isGenerating}
                        className="px-4 bg-black text-white border-2 border-black hover:bg-[#FA520F] transition-colors"
                        title="Generate content from title"
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

            {/* Right column - Metadata section */}
            <div className="space-y-6">
                <div className="p-6 border-2 border-black bg-neutral-50 shadow-[4px_4px_0px_0px_#000000]">
                    <label className="block text-[10px] font-mono font-bold uppercase mb-4 text-neutral-400">Excerpt</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full p-3 border-2 border-black font-mono text-xs h-32 outline-none focus:border-[#FA520F] transition-colors"
                        placeholder="Short summary for the index..."
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}