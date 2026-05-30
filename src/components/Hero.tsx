import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white font-sans antialiased">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url('/src/assets/content.png')` }}
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Main Copy Frame */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex flex-col justify-center min-h-screen py-20">
        
        {/* Main Structural Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Engineering
          <br />
          Intelligent <span className="text-[#FA520F]">systems</span>
          <br />
          for businesses.
        </motion.h1>

        {/* Subtitle Body */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-12 font-normal"
        >
          ANTERA helps organizations build, automate, and scale through AI-powered
          <br />
          solutions, custom infrastructure tuning, and deep technical engineering.
        </motion.p>

        {/* Block Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-white/90 transition-colors flex items-center gap-2 group">
            Start building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
            Contact sales
          </button>
        </motion.div>

      </div>

    </section>
  )
}