'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ProductsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const products = [
    { title: 'Sekela APIs', desc: 'High-throughput communication endpoints for SMS, USSD, and voice automation.' },
    { title: 'Infrastructure Audit', desc: 'Systematic mapping and security auditing of distributed digital assets.' },
    { title: 'Cloud Orchestration', desc: 'Auto-scaling deployments optimized for latency across the African continent.' },
    { title: 'Custom SDKs', desc: 'Tailored integration kits for rapid deployment in mobile and web environments.' }
  ];

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen py-12 md:py-24 selection:bg-[#FA520F] selection:text-white">
      {/* Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left" style={{ scaleX }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header - Using clamp for responsive text that won't break mobile layouts */}
        <header className="mb-16 md:mb-32">
          <h1 className="text-[16vw] md:text-[8rem] font-bold tracking-[-0.04em] leading-[0.85] uppercase">
            Core <br className="md:hidden"/> Products.
          </h1>
        </header>

        {/* Grid System - Responsive adjustments */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black">
          {products.map((p, i) => (
            <div 
              key={p.title} 
              className="group border-b border-r border-black p-8 md:p-12 min-h-[320px] md:min-h-[400px] flex flex-col justify-between hover:bg-neutral-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-8 md:mb-0">
                <span className="font-mono text-xs md:text-sm tracking-widest uppercase">0{i + 1}</span>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-45 transition-transform duration-300" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-4 md:mb-6">{p.title}</h3>
                <p className="max-w-md text-base md:text-lg leading-relaxed text-neutral-600 font-mono">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};