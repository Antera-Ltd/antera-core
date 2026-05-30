import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { NetworkVisualization } from './NetworkVisualization'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-14 overflow-hidden bg-white text-black font-sans antialiased border-b border-black">
      
      {/* Background Structural Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle geometric background grid characteristic of Mistral */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <NetworkVisualization />
      </div>

      {/* Main Copy Frame */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex items-center py-20">
        <div className="max-w-5xl">
          
          {/* Main Structural Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black uppercase leading-[0.95] mb-8">
            Engineering <br />
            Intelligent <span className="font-serif italic font-normal text-[#FA520F] lowercase">systems</span> <br />
            <span className="text-black/40">for businesses.</span>
          </h1>

          {/* Subtitle Body */}
          <p className="text-base md:text-lg text-black/60 max-w-xl leading-relaxed mb-10 font-normal">
            ANTERA helps organizations build, automate, and scale through AI-powered 
            solutions, custom infrastructure tuning, and deep technical engineering.
          </p>

          {/* Block Action Controls */}
          <div className="flex flex-wrap items-stretch gap-0 border border-black max-w-fit bg-white">
            <button className="bg-black text-white px-8 py-4 font-medium text-sm flex items-center gap-3 hover:bg-[#FA520F] transition-colors border-r border-black group">
              Start building
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="bg-white text-black px-8 py-4 font-medium text-sm hover:bg-neutral-50 hover:text-[#FA520F] transition-colors">
              Contact sales
            </button>
          </div>

        </div>
      </div>

      {/* Grid Integrated Ticker Row */}
      <div className="relative z-10 border-t border-black w-full bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          
          {/* Left Title Label Block */}
          <div className="px-6 lg:px-8 py-4 border-b md:border-b-0 md:border-r border-black flex items-center flex-shrink-0 bg-neutral-50/50">
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FA520F]" /> Trusted by enterprise
            </span>
          </div>

          {/* Moving Text Logos Block */}
          <div className="flex-grow px-6 lg:px-8 py-4 flex flex-wrap items-center gap-x-12 gap-y-3 font-mono text-[11px] font-medium tracking-widest text-black/50 overflow-hidden">
            <span className="hover:text-[#FA520F] transition-colors cursor-default">SNOWFLAKE</span>
            <span className="hover:text-[#FA520F] transition-colors cursor-default">CMA CGM</span>
            <span className="hover:text-[#FA520F] transition-colors cursor-default">BNP PARIBAS</span>
            <span className="hover:text-[#FA520F] transition-colors cursor-default">STELLANTIS</span>
            <span className="hover:text-[#FA520F] transition-colors cursor-default">MINDEB</span>
            <span className="hover:text-[#FA520F] transition-colors cursor-default">HTX</span>
          </div>

        </div>
      </div>

    </section>
  )
}