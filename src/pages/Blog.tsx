
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    date: '2024.03.15',
    category: 'Research',
    title: 'Advancements in Distributed Neural Inference',
    author: 'Dr. Sarah Chen'
  },
  {
    date: '2024.03.10',
    category: 'Engineering',
    title: 'Optimizing GPU Workloads for Real-Time Edge Processing',
    author: 'Mark Jarkowski'
  },
  {
    date: '2024.03.05',
    category: 'Product',
    title: 'Introducing Antera Mesh: Global Sync for AI',
    author: 'Alex Thorne'
  },
  {
    date: '2024.02.28',
    category: 'Company',
    title: 'Antera Group Office Expansion into Warsaw',
    author: 'Elena Rossi'
  }
];

export const BlogPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="py-24 px-6 border-b-4 border-black bg-[#fffaeb]">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-8"
          >
            Antera <span className="text-[#FA520F]">Journal</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <p className="text-lg max-w-xl font-medium leading-tight">
              Deep dives into neural engineering, distributed systems, and the future of industrial AI.
            </p>
            <div className="flex gap-4">
              {['All', 'Research', 'Engineering', 'Product'].map(cat => (
                <button key={cat} className="text-[10px] font-bold uppercase tracking-widest border-2 border-black px-4 py-1.5 hover:bg-black hover:text-white transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 divide-y-2 divide-black border-x-4 border-black">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 group flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-neutral-50 transition-colors relative"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs font-bold text-[#FA520F]">{post.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5">{post.category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-[#FA520F] transition-colors max-w-3xl">
                  {post.title}
                </h2>
              </div>
              <div className="mt-8 md:mt-0 flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-[10px] uppercase font-bold text-neutral-400">Written by</p>
                  <p className="font-bold uppercase text-xs">{post.author}</p>
                </div>
                <div className="w-16 h-16 border-4 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-24 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.4em] mb-8">Stay Synchronized</p>
          <div className="flex flex-col md:flex-row max-w-2xl mx-auto border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 p-6 font-mono text-sm font-bold uppercase focus:outline-none"
            />
            <button className="bg-black text-white px-10 py-6 font-bold uppercase text-sm hover:bg-[#FA520F] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
