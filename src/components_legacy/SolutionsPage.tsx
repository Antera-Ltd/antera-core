'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, Cpu, Radio, Terminal, ArrowRight } from 'lucide-react';

export const SolutionsPage = () => {
  const { t } = useLanguage();

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
      icon: Terminal,
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Aggressive Structural Header Panel */}
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
          
          <span className="text-[#FA520F] font-mono text-xs font-bold uppercase tracking-wider mb-4 block">
            Enterprise Solutions 
          </span>
          
          <h1 className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-[0.9] mb-8 font-mono">
            Engineering <br /> 
            <span className="text-neutral-900 font-bold block mt-2">The Future.</span>
          </h1>
          
          <p className="text-neutral-600 font-mono text-sm max-w-2xl leading-relaxed font-normal">
            {t('page.solutions.desc')}
          </p>
        </div>

        {/* Core Capabilities Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border-4 border-black p-8 flex flex-col justify-between group shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 relative"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-neutral-200" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <div>
                {/* Fixed Icon block layout */}
                <div className="w-12 h-12 border-4 border-black bg-[#FA520F] text-white flex items-center justify-center mb-8 shadow-[2px_2px_0px_0px_#000000]">
                  <s.icon className="w-5 h-5 stroke-[2.5px]" />
                </div>
                
                <h3 className="text-base font-bold uppercase mb-4 tracking-wider font-mono text-neutral-900 group-hover:text-[#FA520F] transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-neutral-600 font-mono text-xs leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-[#FA520F] transition-colors stroke-[2.5px]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Matrix Integration Section Block */}
        <div className="mt-20 border-4 border-black bg-neutral-50 flex flex-col md:flex-row items-stretch justify-between relative shadow-[8px_8px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-4 border-l-4 border-white pointer-events-none" />
          <span className="absolute inset-0 border-b-4 border-r-4 border-neutral-300 pointer-events-none" />

          <div className="p-8 md:p-12 max-w-xl flex flex-col justify-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 font-mono tracking-tight">
              Vertical Integration
            </h2>
            <p className="text-neutral-600 font-mono text-xs leading-relaxed font-normal">
              We don't just build applications. We design the concrete structures that support them, coordinating full operational logic layers from core system frameworks straight through to client nodes.
            </p>
          </div>

          {/* Clean architectural checkerboard block grid accent */}
          <div className="w-full md:w-1/2 min-h-[200px] border-t-4 md:border-t-0 md:border-l-4 border-black bg-white relative overflow-hidden select-none flex items-center justify-center p-8 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-70">
            <div className="w-16 h-16 border-4 border-black bg-[#FA520F] transform rotate-12 shadow-[4px_4px_0px_0px_#000000]" />
            <div className="w-12 h-12 border-4 border-black bg-white absolute top-8 right-12 transform -rotate-12 shadow-[2px_2px_0px_0px_#000000]" />
          </div>
        </div>

      </div>
    </div>
  );
};export default SolutionsPage;
