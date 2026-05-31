import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Star, ShieldCheck } from 'lucide-react';

export const CustomersPage = () => {
  const { t } = useLanguage();

  const metrics = [
    { name: 'Financial Services', metric: '99.99%', label: 'Uptime' },
    { name: 'Public Sector', metric: '10M+', label: 'Citizens Served' },
    { name: 'Telecoms', metric: '500TPS', label: 'Processing' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Header Block */}
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
          
          <h1 className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-none mb-6 font-mono">
            Trusted by <span className="text-[#FA520F] font-bold">Leaders.</span>
          </h1>
          <p className="text-neutral-600 font-mono text-xs md:text-sm max-w-2xl leading-relaxed font-normal">
            Powering critical infrastructure for the region's most ambitious organizations.
          </p>
        </div>

        {/* Metrics Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {metrics.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 md:p-12 border-4 border-black bg-neutral-50 relative shadow-[4px_4px_0px_0px_#000000] flex flex-col justify-between"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <h3 className="text-xs font-bold uppercase font-mono tracking-wider text-neutral-400 mb-6">
                {item.name}
              </h3>
              
              <div>
                <div className="text-4xl md:text-5xl font-black font-mono tracking-tight text-black mb-2">
                  {item.metric}
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FA520F]">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block Container */}
        <div className="mt-16 p-8 md:p-12 bg-[#111113] border-4 border-black text-white flex flex-col md:flex-row items-stretch justify-between gap-8 relative shadow-[8px_8px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-white/10 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-[#FA520F] text-[#FA520F]" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl font-mono leading-relaxed mb-6 font-normal text-neutral-200">
              "ANTERA transformed our data processing pipeline from days to minutes. Their technical depth is unparalleled in the market."
            </blockquote>
            
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              — CTO, Leading Logistics Firm
            </div>
          </div>

          {/* Sharp Brutalist Side Emblem */}
          <div className="w-24 h-24 md:w-32 md:h-auto border-4 border-black bg-[#FA520F] flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_#000000] p-4">
            <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-white stroke-[2.5px]" />
          </div>
        </div>

      </div>
    </div>
  );
};