import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Code, Cloud, Zap, Shield, ArrowRight } from 'lucide-react';

export const ProductsPage = () => {
  const { t } = useLanguage();

  const products = [
    {
      title: 'Sekela APIs',
      desc: 'High-throughput communication endpoints for SMS, USSD, and voice automation.',
      icon: Zap
    },
    {
      title: 'Infrastructure Audit',
      desc: 'Systematic mapping and security auditing of distributed digital assets.',
      icon: Shield
    },
    {
      title: 'Cloud Orchestration',
      desc: 'Auto-scaling deployments optimized for latency across the African continent.',
      icon: Cloud
    },
    {
      title: 'Custom SDKs',
      desc: 'Tailored integration kits for rapid deployment in mobile and web environments.',
      icon: Code
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Panel */}
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
          
          <h1 className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-none mb-6 font-mono">
            Core <span className="text-[#FA520F] font-bold">Products.</span>
          </h1>
          <p className="text-neutral-600 font-mono text-xs md:text-sm max-w-2xl leading-relaxed font-normal">
            Technical primitives designed for the most demanding enterprise workloads.
          </p>
        </div>

        {/* Products Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border-4 border-black p-8 md:p-12 flex flex-col justify-between group shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 relative"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div className="w-12 h-12 border-4 border-black bg-neutral-50 text-black group-hover:bg-[#FA520F] group-hover:text-white flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] transition-colors duration-100 shrink-0">
                    <p.icon className="w-5 h-5 stroke-[2.5px]" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-tight font-mono text-neutral-900 group-hover:text-[#FA520F] transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-neutral-600 font-mono text-xs leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FA520F] cursor-pointer group-hover:underline">
                  <span>Technical Docs</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};