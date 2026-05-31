import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';

export const DevelopersPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-[#09090B] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
              Built for <br /><span className="text-[#FA520F]">Engineers.</span>
            </h1>
            <p className="text-neutral-400 text-xl mb-12">
              {t('page.developers.desc')}
            </p>

            <div className="space-y-8">
              {[
                { title: 'API Reference', icon: Terminal },
                { title: 'SDK Libraries', icon: Cpu },
                { title: 'Data Schema', icon: Database },
                { title: 'UI Components', icon: Layout }
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-[#FA520F] group-hover:border-[#FA520F] transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="border-2 border-white/10 bg-neutral-900 rounded-lg p-6 font-mono text-sm shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-blue-400">
                <code>{`// Initialize Antera Client
const antera = new Antera({
  apiKey: 'ant_live_51M...',
  environment: 'production'
});

// Deploy Neural Pipeline
await antera.pipelines.deploy({
  model: 'transformer-v4',
  scaling: 'auto'
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
