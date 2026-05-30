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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fffaeb]">
      <div className="absolute inset-0 mistral-grid opacity-40" />
      <NetworkVisualization />

      <div className="section-container relative z-10 py-24">
        <div className="max-w-5xl">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#FA520F]/30 bg-[#FA520F]/5 mb-10">
              <div className="w-2 h-2 rounded-full bg-[#FA520F] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#FA520F] uppercase">
                Antera Research: Physics-based AI now in beta
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-7xl md:text-[11rem] font-bold leading-[0.85] tracking-tighter mb-12 text-[#1F1F1F]">
              Engineering <br />
              Intelligent <span className="font-serif italic font-normal text-[#FA520F]">Systems</span> <br />
              <span className="text-[#1F1F1F]/90">for Modern Businesses</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-[#1F1F1F]/70 max-w-2xl font-light leading-relaxed mb-16">
              ANTERA helps organizations build, automate, and scale through AI-powered solutions, software engineering, data intelligence, and digital infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-wrap items-center gap-6 mb-20">
              <button className="bg-[#FA520F] text-[#fffaeb] px-8 py-4 font-bold flex items-center gap-3 group hover:bg-[#1F1F1F] transition-all">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent text-[#1F1F1F] border border-[#1F1F1F] px-8 py-4 font-bold hover:bg-[#1F1F1F] hover:text-[#fffaeb] transition-all">
                Book a Consultation
              </button>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="flex flex-wrap gap-3">
              {chips.map((chip, i) => (
                <StaggerItem key={i}>
                  <div className="px-5 py-2.5 bg-white border border-[#1F1F1F]/5 text-[#1F1F1F]/60 text-xs font-bold uppercase tracking-widest hover:border-[#FA520F]/50 hover:text-[#FA520F] transition-all cursor-default">
                    {chip}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#fffaeb] to-transparent pointer-events-none" />
    </section>
  )
}
