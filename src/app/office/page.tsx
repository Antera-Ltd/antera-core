'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone, Globe } from 'lucide-react';

export default function OfficePage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-white text-black font-sans antialiased">
      <header className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6"
        >
          Our <span className="text-[#FA520F]">Office</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-neutral-600 max-w-2xl font-mono"
        >
          Antera Group operational headquarters and engineering hub.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border-4 border-black p-10 bg-white shadow-[12px_12px_0px_0px_#000000] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Location</h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase text-neutral-400 mb-1">City & Country</p>
                <p className="text-2xl font-bold uppercase">Dar es Salaam, Tanzania</p>
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold uppercase text-neutral-400 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-lg font-bold uppercase">Active Hub</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-black/5">
            <p className="font-mono text-sm text-neutral-500 leading-relaxed italic">
              Our Dar es Salaam office serves as the primary research and development agency for Advanced Neural Technologies & Engineering.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="border-2 border-black p-8 bg-neutral-50 shadow-[8px_8px_0px_0px_#FA520F]"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="text-[#FA520F]" size={20} />
              <h3 className="text-lg font-black uppercase">Operating Hours</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
              <div>
                <p className="font-bold text-black">MON — FRI</p>
                <p className="text-neutral-500">08:00 - 18:00 EAT</p>
              </div>
              <div>
                <p className="font-bold text-black">SAT — SUN</p>
                <p className="text-neutral-500">Closed (Remote Only)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="border-2 border-black p-8 bg-black text-white shadow-[8px_8px_0px_0px_#000000]"
          >
            <div className="flex items-center gap-4 mb-6">
              <Globe className="text-[#FA520F]" size={20} />
              <h3 className="text-lg font-black uppercase">Connect</h3>
            </div>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400">EMAIL</span>
                <span className="font-bold">INFO@ANTERA.CO.TZ</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400">PHONE</span>
                <span className="font-bold">+255 760 984 921</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400">WHATSAPP</span>
                <span className="font-bold">VERIFIED BUSINESS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 border-t-4 border-black pt-20"
      >
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Infrastructure Logistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Global Connectivity', desc: 'Direct fiber link to international subsea cables for ultra-low latency.' },
            { title: 'Redundant Power', desc: 'Tier-3 data center standards with multi-layered power backup systems.' },
            { title: 'Secure Access', desc: 'Biometric and multi-factor physical security protocols for R&D labs.' }
          ].map((item, i) => (
            <div key={i} className="p-6 border-2 border-black bg-white group hover:bg-neutral-50 transition-colors">
              <h4 className="font-black uppercase mb-3 text-[#FA520F]">{item.title}</h4>
              <p className="text-sm font-mono text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
