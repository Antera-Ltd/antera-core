import React from 'react';
import { motion } from 'framer-motion';
import kaziboksiLogo from '../assets/kaziboksi.jpg';
import sekelaPosLogo from '../assets/sekela-pos.png';

const partners = [
  { name: 'Digital Ocean', type: 'text' },
  { name: 'AWS', type: 'text' },
  { name: 'Netlify', type: 'text' },
  { name: 'Vercel', type: 'text' },
  { name: 'Pawa AI', type: 'text' },
  { name: 'Brevo', type: 'text' },
  { name: 'Supabase', type: 'text' },
  { name: 'kaziboksi', type: 'image', src: kaziboksiLogo },
  { name: 'Sekela POS', type: 'image', src: sekelaPosLogo },
];

export const PartnersSection = () => {
  // Double the partners to create a seamless loop
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="bg-white border-b border-black py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-2 select-none">
          <div className="w-2 h-2 bg-[#FA520F]" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400">
            Strategic Infrastructure Partners
          </span>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {doubledPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-100"
            >
              {partner.type === 'image' ? (
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-8 md:h-10 object-contain"
                />
              ) : (
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-black font-sans">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
