
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    category: 'Enterprise',
    title: 'Custom AI Strategy',
    description: 'We partner with enterprise leaders to design and implement bespoke AI roadmaps that align with core business objectives.',
    features: ['Operational Auditing', 'Infrastructure Design', 'Custom Model Tuning']
  },
  {
    category: 'Automation',
    title: 'Workflow Intelligence',
    description: 'Automate complex operational pipelines with intelligent agents that learn and adapt to your specific business logic.',
    features: ['Process Mining', 'Agentic Workflows', 'Error Mitigation']
  },
  {
    category: 'Infrastructure',
    title: 'Neural Architecture',
    description: 'Scalable, high-performance computing environments optimized specifically for heavy neural workloads and data processing.',
    features: ['GPU Orchestration', 'Low-Latency Routing', 'Distributed Computing']
  }
];

export const SolutionsPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="py-20 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8] mb-8"
            >
              Enterprise <br />
              <span className="text-[#FA520F]">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-black/60 font-light"
            >
              Solving the most complex engineering challenges through advanced neural technologies and research-driven strategies.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col gap-24">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="font-mono text-xs font-bold text-[#FA520F] uppercase tracking-widest mb-4 block">
                  {solution.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                  {solution.title}
                </h2>
                <p className="text-black/60 text-lg leading-relaxed mb-8">
                  {solution.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FA520F]" />
                      <span className="font-medium uppercase text-sm tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="group relative border-4 border-black bg-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[6px_6px_0px_0px_#FA520F] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className={`bg-neutral-100 aspect-video border-4 border-black relative overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-black/10 flex items-center justify-center">
                     <span className="font-mono text-[10px] text-black/20 uppercase tracking-[0.5em]">Visualization Placeholder</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
