'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone, Globe, ArrowRight } from 'lucide-react';

const GrainOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

export default function OfficePage() {
  return (
    <div className="relative pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <GrainOverlay />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <header className="mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] uppercase"
          >
            Our <span className="text-[#FA520F]">Office</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-neutral-600 max-w-2xl font-mono mt-4"
          >
            Antera Group operational headquarters and engineering hub.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-black p-6 md:p-8 lg:p-10 bg-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-75 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black bg-black text-white flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Location</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase text-neutral-400 mb-1">City & Country</p>
                  <p className="text-xl md:text-2xl font-bold uppercase">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-black/5">
              <p className="font-mono text-xs md:text-sm text-neutral-500 leading-relaxed italic">
                Our Dar es Salaam office serves as the primary research and development agency for Advanced Neural Technologies & Engineering.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="border border-black p-6 md:p-8 bg-neutral-50 shadow-[4px_4px_0px_0px_#FA520F] hover:shadow-[2px_2px_0px_0px_#FA520F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-75"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Clock className="text-[#FA520F] w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-base md:text-lg font-bold uppercase">Operating Hours</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs md:text-sm">
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

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="border border-black p-6 md:p-8 bg-black text-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-75"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Globe className="text-[#FA520F] w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-base md:text-lg font-bold uppercase">Connect</h3>
              </div>
              <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2 md:pb-3 gap-1 sm:gap-0">
                  <span className="text-neutral-400 text-[10px] md:text-xs">EMAIL</span>
                  <span className="font-bold text-xs md:text-sm break-all">INFO@ANTERA.CO.TZ</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-2 md:pb-3 gap-1 sm:gap-0">
                  <span className="text-neutral-400 text-[10px] md:text-xs">PHONE</span>
                  <span className="font-bold text-xs md:text-sm">+255 760 984 921</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}