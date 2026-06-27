'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Share2, User } from 'lucide-react';
// Import images directly
import shadrackovskyImage from '@/assets/shadrackovsky.jpeg';
import anteraLogoImage from '@/assets/antera-logo.jpeg';

export default function TeamPage() {
  const team = [
    {
      name: 'Shadrackovsky',
      role: 'CEO & Founder',
      bio: 'Leading the agency in building the next generation of neural technologies and enterprise infrastructure.',
      image: shadrackovskyImage, // Use imported image
      socials: {
        twitter: 'https://twitter.com/shadrackovsky',
        github: 'https://github.com/shadrackovsky'
      }
    },
    {
      name: 'Josia O Mosses',
      role: 'Co-Founder',
      bio: 'Directing strategic partnerships and core architectural development across Antera\'s global service layers.',
      image: anteraLogoImage, // Use imported image
      socials: {
        linkedin: 'https://linkedin.com/',
        github: 'https://github.com/'
      }
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-white text-black font-sans antialiased">
      <header className="mb-20 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8"
        >
          Our <span className="text-[#FA520F]">Collective</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-neutral-600 font-mono"
        >
          A team of engineers, researchers, and architects dedicated to digital independence.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 + 0.2 }}
            className="group relative border-4 border-black p-8 bg-white shadow-[12px_12px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 border-4 border-black mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                />
                <div className="absolute inset-0 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              </div>

              <div className="text-center">
                <p className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FA520F] mb-2">{member.role}</p>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">{member.name}</h2>
                <p className="text-neutral-600 font-mono text-sm leading-relaxed mb-8 max-w-sm">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 border-2 border-black hover:bg-[#FA520F] hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <User size={18} />
                  </a>
                  <a href="#" className="p-3 border-2 border-black hover:bg-[#FA520F] hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none">
                    <Share2 size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 border-4 border-dashed border-neutral-200 p-20 text-center"
      >
        <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">Joining the team</h3>
        <p className="font-mono text-neutral-400 mb-8 max-w-xl mx-auto italic">
          We are always looking for exceptional engineers and researchers to help us scale digital infrastructure.
        </p>
        <a href="mailto:info@antera.co.tz" className="inline-block bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-sm shadow-[8px_8px_0px_0px_#FA520F] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
          Join Us
        </a>
      </motion.div>
    </div>
  );
}