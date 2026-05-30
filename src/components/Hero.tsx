import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { NetworkVisualization } from './NetworkVisualization'

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 overflow-hidden flex flex-col items-center justify-start mistral-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />

      {/* Animated Network Visual */}
      <NetworkVisualization />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-[10px] uppercase tracking-[0.2em] font-mono mb-12 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            ANTERA Research: Physics-based AI now in Beta
          </span>

          <h1 className="text-6xl md:text-[120px] font-bold tracking-tight mb-12 leading-[0.95] text-mistral-gradient">
            Engineering <br />
            Intelligent <span className="font-serif italic font-normal text-white/90">Systems</span> <br />
            for Modern <br />
            Businesses
          </h1>

          <p className="text-lg md:text-xl text-brand-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            ANTERA helps organizations build, automate, and scale through AI-powered solutions, software engineering, data intelligence, and digital infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary group w-full sm:w-auto">
              Get Started
            </button>
            <button className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <Play className="w-4 h-4 fill-current" />
              Book a Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Capability Chips */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden py-10 pointer-events-none">
        <div className="flex justify-center items-center gap-3 flex-wrap max-w-5xl mx-auto px-6">
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
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.1 * i }}
              className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-[11px] font-mono tracking-wider uppercase"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
