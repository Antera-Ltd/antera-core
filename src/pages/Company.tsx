
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Landmark, History } from 'lucide-react';

export const CompanyPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Editorial Style Hero */}
      <section className="py-24 px-6 bg-[#FA520F] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 italic">
              Advancing the Neural Frontier.
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-tight tracking-tight">
              Antera is an engineering agency dedicated to the research, development, and deployment of frontier artificial intelligence systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
          {[
            { icon: Target, title: 'Precision', desc: 'Every line of code and every model parameter is tuned for absolute operational accuracy.' },
            { icon: Users, title: 'Collaboration', desc: 'We operate as an extension of your technical team, solving challenges in tandem.' },
            { icon: Landmark, title: 'Integrity', desc: 'Secure, ethical, and transparent AI implementation is at the core of our philosophy.' },
            { icon: History, title: 'Legacy', desc: 'We build systems designed to scale and endure across industrial generations.' },
          ].map((item, i) => (
            <div key={i} className="p-12 hover:bg-neutral-50 transition-colors">
              <item.icon className="w-10 h-10 text-[#FA520F] mb-8" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-black/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-black text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-mono font-bold uppercase tracking-[0.5em] text-[#FA520F] mb-16">Operational History</h2>
          <div className="relative border-l-4 border-[#FA520F] pl-8 space-y-24">
            {[
              { year: '2020', title: 'Agency Foundation', desc: 'ANTERA established as a specialized neural research laboratory.' },
              { year: '2021', title: 'Core Inference Engine', desc: 'Release of Antera Core v1.0, setting new benchmarks for edge latency.' },
              { year: '2022', title: 'Sekela Integration', desc: 'Unified API ecosystem launched to provide standardized access to neural workloads.' },
              { year: '2023', title: 'Global Expansion', desc: 'Deployment infrastructure reached 12 countries across 3 continents.' },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[44px] top-0 w-8 h-8 bg-[#FA520F] border-4 border-black"></div>
                <span className="text-6xl font-bold font-mono text-white/10 absolute -top-8 left-4 select-none">{milestone.year}</span>
                <h3 className="text-3xl font-bold uppercase tracking-tight relative z-10">{milestone.title}</h3>
                <p className="text-white/50 max-w-xl mt-4 relative z-10">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
