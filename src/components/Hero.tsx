import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NetworkVisualization } from './NetworkVisualization'
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations'

export const Hero = () => {
  const chips = [
    'AI Assistants', 'Automation', 'Mobile Apps', 'Web Apps',
    'Data Intelligence', 'APIs', 'WhatsApp Automation', 'Analytics'
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 mistral-grid opacity-20" />
      <NetworkVisualization />

      <div className="section-container relative z-10 py-24">
        <div className="max-w-5xl">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 bg-primary/5 mb-10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary uppercase">
                Antera Research: Physics-based AI now in beta
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-7xl md:text-[8rem] font-bold leading-[0.85] tracking-tighter mb-12 text-white">
              Engineering <br />
              Intelligent <span className="font-serif italic font-normal gradient-text">Systems</span> <br />
              <span className="text-white/90">for Modern Businesses</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-16">
              ANTERA helps organizations build, automate, and scale through AI-powered solutions, software engineering, data intelligence, and digital infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-wrap items-center gap-6 mb-20">
              <button className="bg-primary text-white px-8 py-4 font-bold rounded-lg flex items-center gap-3 group hover:bg-primary/90 transition-all">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-white border border-white/20 px-8 py-4 font-bold rounded-lg hover:bg-white/10 transition-all">
                Book a Consultation
              </button>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="flex flex-wrap gap-3">
              {chips.map((chip, i) => (
                <StaggerItem key={i}>
                  <div className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all cursor-default rounded-md">
                    {chip}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#09090B] to-transparent pointer-events-none" />
    </section>
  )
}
