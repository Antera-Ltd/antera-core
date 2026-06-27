'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, Cpu, Radio, Code2, ArrowRight } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const SolutionsPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -80]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const solutions = [
    {
      title: 'Communication Hub',
      desc: 'Centralized management of SMS, USSD, and Social channels for multi-region operations.',
      icon: Radio,
    },
    {
      title: 'Big Data Pipeline',
      desc: 'Ingesting and cleaning high-volume transactional data for real-time auditing.',
      icon: Database,
    },
    {
      title: 'Neural Networks',
      desc: 'Deploying predictive models to forecast demand and automate logistical routing.',
      icon: Cpu,
    },
    {
      title: 'Technical Consulting',
      desc: 'Advisive services for legacy system modernization and digital transformation.',
      icon: Code2,
    }
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
            Engineering <br /> The Future.
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-600 font-mono mt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('page.solutions.desc')}
          </motion.p>
        </header>

        {/* Solutions Grid - Mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black">
          {solutions.map((s, i) => (
            <motion.div 
              key={s.title} 
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
                  <s.icon className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-tight">{s.title}</h3>
                </div>
                <p className="max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-neutral-600 font-mono">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - No top border */}
        <motion.div 
          className="mt-12 md:mt-20 pt-8 md:pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-xl">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              From Idea to Impact. Together.
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base text-neutral-600 font-mono leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Behind every successful product is a team that actually enjoys working together. We build software, the workflows, and the tooling that turn chaos into clarity. Whether you're shipping your first feature or scaling across the country, our platform keeps everyone aligned, informed, and moving forward from whiteboard to deploy.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-black text-white font-mono text-sm font-bold uppercase tracking-wider px-6 md:px-8 py-3 md:py-4 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default SolutionsPage;