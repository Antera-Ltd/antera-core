import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { NetworkVisualization } from './NetworkVisualization'

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-48 pb-20 overflow-hidden flex flex-col items-center justify-start mistral-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/0 via-[#1F1F1F]/50 to-[#1F1F1F] pointer-events-none" />

      <NetworkVisualization />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-[9px] uppercase tracking-[0.3em] font-bold mb-16 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange"></span>
            </span>
            ANTERA Research: Physics-based AI now in Beta
          </span>

          <h1 className="text-7xl md:text-[140px] font-bold tracking-tight mb-16 leading-[0.85] text-brand-cream">
            Engineering <br />
            Intelligent <span className="font-serif italic font-normal text-brand-orange">Systems</span> <br />
            for Modern <br />
            Businesses
          </h1>

          <p className="text-xl md:text-2xl text-brand-cream/60 max-w-2xl mx-auto mb-20 leading-relaxed font-light">
            ANTERA helps organizations build, automate, and scale through AI-powered solutions, software engineering, data intelligence, and digital infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="btn-primary w-full sm:w-auto uppercase tracking-widest text-xs font-bold py-4 px-10">
              Get Started
            </button>
            <button className="text-brand-cream/40 hover:text-brand-orange transition-colors flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold">
              <Play className="w-4 h-4 fill-current" />
              Book a Consultation
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 overflow-hidden py-10 pointer-events-none">
        <div className="flex justify-center items-center gap-4 flex-wrap max-w-5xl mx-auto px-6">
          {[
            'AI Assistants',
            'Automation',
            'Mobile Apps',
            'Web Apps',
            'Data Intelligence',
            'APIs',
            'WhatsApp Automation',
            'Analytics'
          ].map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.1 * i }}
              className="px-5 py-2 border border-brand-cream/10 bg-brand-cream/5 text-[9px] font-bold tracking-[0.2em] uppercase"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
