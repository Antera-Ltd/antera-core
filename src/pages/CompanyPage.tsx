import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, Landmark, Globe } from 'lucide-react';

export const CompanyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-[#FA520F] font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Our Identity</span>
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8 text-black">
              Agency <br /> of <span className="text-neutral-400">Scale.</span>
            </h1>
            <p className="text-neutral-600 text-xl font-light leading-relaxed">
              {t('page.company.desc')}
            </p>
          </div>
          <div className="mistral-grid h-[400px] border-4 border-black bg-neutral-50 shadow-[12px_12px_0px_0px_#FA520F]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: 'Mission', desc: 'Accelerating digital independence through high-performance engineering.', icon: Target },
            { title: 'Global Reach', desc: 'Deploying edge infrastructure across multiple continents.', icon: Globe },
            { title: 'Governance', desc: 'Absolute compliance with international data safety standards.', icon: Landmark },
            { title: 'Talent', desc: 'A collective of the world\'s most rigorous technical minds.', icon: Users },
          ].map((item) => (
            <div key={item.title} className="flex flex-col">
              <item.icon className="w-8 h-8 text-[#FA520F] mb-6" />
              <h3 className="text-lg font-bold uppercase mb-4 text-black tracking-wider">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
