'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Phone, ArrowRight, Bot, Sprout, CloudRain } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const SekelaAPIsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const apis = [
    {
      title: 'SMS Gateway',
      desc: 'Reliable SMS delivery for alerts, notifications, and customer engagement.',
      icon: MessageSquare
    },
    {
      title: 'USSD MENU',
      desc: 'Build interactive menus that work on any mobile phone, even without internet.',
      icon: Phone
    },
    {
      title: 'ChatBot APIs',
      desc: 'Automate customer support and internal workflows with intelligent chat interfaces.',
      icon: Bot
    },
    {
      title: 'Shamba API',
      desc: 'Plug-and-play alerts for farmers: weather updates, crop advice, and farming insights.',
      icon: Sprout
    },
  ];

  return (
    <div ref={containerRef} className="relative pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[9997] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <header className="mb-12 md:mb-32">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Sekela <span className="text-[#FA520F]">APIs.</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg max-w-3xl leading-relaxed text-neutral-600 font-mono mt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('page.sekela.desc')}
          </motion.p>
        </header>

        {/* APIs Grid - Mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black">
          {apis.map((api, i) => (
            <motion.div 
              key={api.title} 
              className={`group border-b border-black p-6 md:p-8 lg:p-12 min-h-[240px] md:min-h-[320px] lg:min-h-[400px] flex flex-col justify-between hover:bg-neutral-50 transition-colors ${i % 2 === 0 ? 'md:border-r' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-between items-start mb-6 md:mb-0">
                <span className="font-mono text-xs md:text-sm tracking-widest uppercase">0{i + 1}</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 group-hover:rotate-45 transition-transform duration-300" />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-6">
                  <api.icon className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 flex-shrink-0 group-hover:text-[#FA520F] transition-colors" />
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-tight">{api.title}</h3>
                </div>
                <p className="max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-neutral-600 font-mono">
                  {api.desc}
                </p>
                <button className="mt-4 md:mt-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SekelaAPIsPage;