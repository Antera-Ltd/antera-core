'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Target, Users, Landmark, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const CompanyPage = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const principles = [
    { title: 'Mission', desc: 'Accelerating digital independence through high-performance engineering.', icon: Target },
    { title: 'Global Reach', desc: 'Deploying edge infrastructure across multiple continents.', icon: Globe },
    { title: 'Governance', desc: 'Absolute compliance with international data safety standards.', icon: Landmark },
    { title: 'Talent', desc: 'A collective of rigorous technical minds.', icon: Users },
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen text-black font-sans antialiased selection:bg-[#FA520F] selection:text-white">
      <GrainOverlay />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#FA520F] z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <section className="mb-32">
          <div className="max-w-3xl">
            <p className="text-xl md:text-3xl text-neutral-900 leading-relaxed font-mono">
              {t('page.company.desc')}
            </p>
            <button className="group mt-12 flex items-center gap-3 bg-black text-white px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-[#FA520F] transition-colors w-fit">
              Read Our Manifesto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black">
          {principles.map((item) => (
            <div key={item.title} className="bg-white p-8 group hover:bg-neutral-50 transition-colors">
              <item.icon className="w-6 h-6 text-black mb-8 group-hover:text-[#FA520F] transition-colors" />
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};