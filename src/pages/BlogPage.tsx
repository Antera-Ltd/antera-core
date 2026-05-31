import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogPage = () => {
  const { t } = useLanguage();

  const posts = [
    { title: 'Antera Group Office Expansion', date: 'Oct 12, 2024', category: 'News' },
    { title: 'The Future of AI in East Africa', date: 'Oct 05, 2024', category: 'Analysis' },
    { title: 'Scaling USSD Infrastructure', date: 'Sep 28, 2024', category: 'Technical' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold uppercase tracking-tighter text-black mb-16 text-center">
          Intelligence <span className="text-neutral-400">Briefings.</span>
        </h1>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border-b-4 border-black pb-12 group cursor-pointer"
            >
              <div className="flex items-center gap-4 text-xs font-bold uppercase text-[#FA520F] mb-4">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-black rounded-full" />
                <span className="text-neutral-400">{post.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase group-hover:text-[#FA520F] transition-colors mb-6">
                {post.title}
              </h2>
              <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest">
                Read Post <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
