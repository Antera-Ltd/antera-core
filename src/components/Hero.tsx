import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black font-sans antialiased overflow-hidden">
      {/* Background Image with Sunset Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/src/assets/hero.jpg')` }}
        />
        {/* Sunset-inspired gradient overlay: dark -> orange-red -> cream-yellow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#FA520F]/30 to-[#FCD34D]/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Editorial-Style Headline (Near-Serif) */}
          <h1 className="mb-6 text-5xl font-light leading-[1.2] tracking-tight text-white md:text-7xl lg:text-8xl font-serif">
            Frontier AI.
            <br />
            In your hands.
          </h1>

          {/* Supporting Copy */}
          <p className="mb-12 max-w-xl text-base leading-relaxed text-white/80 md:text-lg font-light">
            ANTERA helps organizations build, automate, and scale through
            AI-powered solutions, custom infrastructure tuning, and deep
            technical engineering.
          </p>

          {/* CTA Buttons (Rectangular, 8px radius) */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="group flex items-center gap-2 rounded-md bg-[#FA520F] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#FA520F]/90 hover:shadow-lg">
              Start building
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
              Contact sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};