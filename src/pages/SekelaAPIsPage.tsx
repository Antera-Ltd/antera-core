import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Shield, MessageSquare, Phone, ArrowRight } from 'lucide-react';

export const SekelaAPIsPage = () => {
  const { t } = useLanguage();

  const apis = [
    { title: 'SMS Gateway', desc: 'Global SMS delivery with sub-second latency.', icon: MessageSquare },
    { title: 'USSD Engine', desc: 'Build interactive menus for offline users.', icon: Phone },
    { title: 'Voice API', desc: 'Automated infrastructure and IVR systems.', icon: Zap },
    { title: 'Verification', desc: 'Secure 2FA and OTP services.', icon: Shield },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Header Block */}
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
          
          <h1 className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-none mb-6 font-mono">
            Sekela <span className="text-[#FA520F] font-bold">APIs.</span>
          </h1>
          <p className="text-neutral-600 font-mono text-xs md:text-sm max-w-3xl leading-relaxed font-normal">
            {t('page.sekela.desc')}
          </p>
        </div>

        {/* APIs Core Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {apis.map((api, i) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 md:p-10 border-4 border-black bg-neutral-50 flex flex-col justify-between group shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-75 relative"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 border-4 border-black bg-white text-black group-hover:bg-[#FA520F] group-hover:text-white flex items-center justify-center mb-8 shadow-[2px_2px_0px_0px_#000000] transition-colors duration-100 shrink-0">
                  <api.icon className="w-5 h-5 stroke-[2.5px]" />
                </div>
                
                <h3 className="text-xl font-bold uppercase mb-4 font-mono tracking-tight text-neutral-900 group-hover:text-[#FA520F] transition-colors">
                  {api.title}
                </h3>
                
                <p className="text-neutral-600 font-mono text-xs leading-relaxed font-normal mb-8">
                  {api.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-start">
                <button className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#FA520F] transition-colors">
                  <span>View Documentation</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};