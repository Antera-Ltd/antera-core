import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Code, Cloud, Zap, Shield, Repeat } from 'lucide-react';

export const ProductsPage = () => {
  const { t } = useLanguage();

  const products = [
    {
      title: 'Sekela APIs',
      desc: 'High-throughput communication endpoints for SMS, USSD, and voice automation.',
      icon: Zap,
      tags: ['Connectivity', 'Carrier-Grade']
    },
    {
      title: 'Infrastructure Audit',
      desc: 'Systematic mapping and security auditing of distributed digital assets.',
      icon: Shield,
      tags: ['Security', 'Governance']
    },
    {
      title: 'Cloud Orchestration',
      desc: 'Auto-scaling deployments optimized for latency across the African continent.',
      icon: Cloud,
      tags: ['DevOps', 'AWS/DO']
    },
    {
      title: 'Custom SDKs',
      desc: 'Tailored integration kits for rapid deployment in mobile and web environments.',
      icon: Code,
      tags: ['Development', 'Multi-Platform']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#09090B]">
            Core <span className="text-[#FA520F]">Products.</span>
          </h1>
          <p className="text-xl text-neutral-600 mt-6 max-w-2xl">
            Technical primitives designed for the most demanding enterprise workloads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-4 border-black">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 hover:bg-neutral-50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-8">
                <p.icon className="w-10 h-10 text-black group-hover:text-[#FA520F] transition-colors" />
                <div className="flex gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono font-bold uppercase border border-black/10 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">{p.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{p.desc}</p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FA520F] cursor-pointer">
                Technical Docs <Repeat className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
