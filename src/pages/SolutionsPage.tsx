import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Database, Cpu, Radio, Terminal } from 'lucide-react';

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
    <div className="pt-24 pb-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <span className="text-[#FA520F] font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            Enterprise Solutions
          </span>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
            Engineering <br /> <span className="text-neutral-700">The Future.</span>
          </h1>
          <p className="text-neutral-400 text-xl max-w-2xl font-light">
            {t('page.solutions.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900/50 border border-white/10 p-8 hover:border-[#FA520F]/50 transition-all group"
            >
              <div className="w-12 h-12 bg-[#FA520F] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold uppercase mb-4 tracking-wider">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 border-2 border-white/5 bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-md">
             <h2 className="text-3xl font-bold uppercase mb-4">Vertical Integration</h2>
             <p className="text-neutral-500 text-sm">
               We don't just build software. We build the infrastructure that powers it, from bare-metal servers to edge-node communication arrays.
             </p>
           </div>
           <div className="w-full md:w-1/2 h-64 mistral-grid opacity-30" />
        </div>
      </div>
    </div>
  );
};
