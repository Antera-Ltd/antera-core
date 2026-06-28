'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Target, Users, Globe, ArrowRight, Shield, Zap, Search, Settings } from 'lucide-react';
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
    {
      title: 'Our Mission',
      desc: 'To enable organizations across Africa to compete and grow in a digital-first world by adopting secure, scalable, and intelligent technology solutions.',
      icon: Target
    },
    {
      title: 'African Market Reach',
      desc: 'Delivering practical technology solutions tailored to the unique needs and growth of African businesses.',
      icon: Globe
    },
    {
      title: 'Our Expertise',
      desc: 'Built by engineers with hands-on experience delivering cloud, AI, data, and cybersecurity solutions across diverse environments.',
      icon: Users
    },
  ];

  const howWeWork = [
    { title: 'Assess', desc: 'Understand business goals, systems, and risks.', icon: Search },
    { title: 'Design', desc: 'Create secure, scalable, and practical architectures.', icon: Settings },
    { title: 'Deliver', desc: 'Implement solutions in clear phases and milestones.', icon: Zap },
    { title: 'Optimize', desc: 'Measure impact and continuously improve.', icon: Shield },
  ];

  const values = [
    'Security-first thinking',
    'Practical, outcome-driven solutions',
    'Transparency and accountability',
    'Continuous learning and improvement'
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
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 font-mono">
              Our <span className="text-[#FA520F]">Mission.</span>
            </h1>
            <p className="text-xl md:text-3xl text-neutral-900 leading-relaxed font-mono">
              Our mission is to enable organizations across Africa to compete and grow in a digital-first world by adopting secure, scalable, and intelligent technology solutions that deliver real business value.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black mb-32">
          {principles.map((item) => (
            <div key={item.title} className="bg-white p-8 group hover:bg-neutral-50 transition-colors">
              <item.icon className="w-6 h-6 text-black mb-8 group-hover:text-[#FA520F] transition-colors" />
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 font-mono">{item.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-16 font-mono">
            How We <span className="text-[#FA520F]">Work.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((item, index) => (
              <div key={item.title} className="relative p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000000]">
                <span className="absolute -top-4 -left-4 w-10 h-10 bg-black text-white flex items-center justify-center font-mono font-bold">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold uppercase mb-4 mt-2 font-mono">{item.title}</h3>
                <p className="text-sm text-neutral-600 font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 font-mono">
                Our <span className="text-[#FA520F]">Values.</span>
              </h2>
              <div className="space-y-4">
                {values.map((value, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-[#FA520F] group-hover:scale-150 transition-transform" />
                    <p className="text-lg font-mono text-neutral-800">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 bg-neutral-900 text-white border-4 border-black shadow-[12px_12px_0px_0px_#FA520F]">
              <h3 className="text-2xl font-bold uppercase mb-6 font-mono">Our Expertise</h3>
              <p className="text-neutral-400 font-mono leading-relaxed">
                Our team combines strong technical skills with a practical understanding of business operations and risk. We have hands-on experience delivering cloud, AI, data, and cybersecurity solutions across diverse environments.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
