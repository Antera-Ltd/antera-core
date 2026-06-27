'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Cpu, Database, Layout, ArrowRight } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const DevelopersPage = () => {
  const { t } = useLanguage();

  const docs = [
    { title: 'API Reference', icon: Terminal },
    { title: 'SDK Libraries', icon: Cpu },
    { title: 'Data Schema', icon: Database },
    { title: 'UI Components', icon: Layout }
  ];

  return (
    <div className="relative pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <header className="mb-12 md:mb-20">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Built for <br />
            <span className="text-[#FA520F]">Engineers.</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-600 font-mono mt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('page.developers.desc')}
          </motion.p>
        </header>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black">
          {docs.map((item, i) => (
            <motion.div 
              key={item.title} 
              className={`group border-b border-black p-6 md:p-8 lg:p-12 min-h-[200px] md:min-h-[240px] flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer ${i % 2 === 0 ? 'md:border-r' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black bg-neutral-50 flex items-center justify-center group-hover:bg-[#FA520F] group-hover:text-white group-hover:border-[#FA520F] transition-colors flex-shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5px]" />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tight group-hover:text-[#FA520F] transition-colors">
                  {item.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 group-hover:text-[#FA520F] group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DevelopersPage;