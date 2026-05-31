import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Star, ShieldCheck, Zap } from 'lucide-react';

export const CustomersPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-black mb-6">
            Trusted by <span className="text-[#FA520F]">Leaders.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Powering critical infrastructure for the region's most ambitious organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Financial Services', metric: '99.99%', label: 'Uptime' },
            { name: 'Public Sector', metric: '10M+', label: 'Citizens Served' },
            { name: 'Telecoms', metric: '500TPS', label: 'Processing' },
          ].map((item) => (
            <div key={item.name} className="p-12 border-4 border-black bg-neutral-50 text-center">
              <h3 className="text-sm font-bold uppercase text-neutral-400 mb-4">{item.name}</h3>
              <div className="text-5xl font-bold text-black mb-2">{item.metric}</div>
              <div className="text-xs font-mono font-bold uppercase text-[#FA520F]">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-black text-white border-4 border-black flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#FA520F] text-[#FA520F]" />)}
            </div>
            <blockquote className="text-2xl font-light italic leading-relaxed mb-8">
              "ANTERA transformed our data processing pipeline from days to minutes. Their technical depth is unparalleled in the market."
            </blockquote>
            <div className="font-bold uppercase tracking-widest">— CTO, Leading Logistics Firm</div>
          </div>
          <div className="w-32 h-32 bg-[#FA520F] rounded-full flex items-center justify-center flex-shrink-0">
             <ShieldCheck className="w-16 h-16 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
