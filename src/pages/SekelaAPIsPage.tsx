import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Shield, Globe, Terminal, MessageSquare, Phone } from 'lucide-react';

export const SekelaAPIsPage = () => {
  const { t } = useLanguage();

  const apis = [
    { title: 'SMS Gateway', desc: 'Global SMS delivery with sub-second latency.', icon: MessageSquare },
    { title: 'USSD Engine', desc: 'Build interactive menus for offline users.', icon: Phone },
    { title: 'Voice API', desc: 'Automated robo-calls and IVR systems.', icon: Zap },
    { title: 'Verification', desc: 'Secure 2FA and OTP services.', icon: Shield },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-8 border-[#FA520F] pl-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#09090B] mb-4">
            Sekela <span className="text-neutral-400">APIs.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            {t('page.sekela.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apis.map((api, i) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-10 border-4 border-black bg-neutral-50 shadow-[8px_8px_0px_0px_#000000] hover:shadow-none transition-all"
            >
              <api.icon className="w-12 h-12 text-[#FA520F] mb-6" />
              <h3 className="text-2xl font-bold uppercase mb-4">{api.title}</h3>
              <p className="text-neutral-600 mb-8">{api.desc}</p>
              <button className="font-mono text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1">
                View Documentation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
