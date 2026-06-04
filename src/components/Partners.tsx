"use client";
import React from 'react';
import { motion } from 'framer-motion';

import awsLogo from '../../public/aws.png';
import digitalOceanLogo from '../../public/digital-ocean.png';
import netlifyLogo from '../../public/netlify.png';
import vercelLogo from '../../public/vercel-logo.png';
import supabaseLogo from '../../public/supabase.png';
import kaziboksiLogo from '../../public/kaziboksi.jpg';
import pawaLogo from '../../public/pawa-ai.png';
import sekelaPosLogo from '../../public/sekela-pos.png';
import brevoLogo from '../../public/Brevo.png';


const partners = [
  { name: 'Digital Ocean', logo: digitalOceanLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Netlify', logo: netlifyLogo },
  { name: 'Vercel', logo: vercelLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'kaziboksi', logo: kaziboksiLogo },
  { name: 'Pawa AI', logo: pawaLogo },
  { name: 'Brevo', logo: brevoLogo },
  { name: 'Sekela POS', logo: sekelaPosLogo },
];

export const PartnersSection = () => {

  const tripledPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-white border-b border-black py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "max-content" }}
        >
          {tripledPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};