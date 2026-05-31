
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NetworkVisualization } from './NetworkVisualization'
import { useLanguage } from '../context/LanguageContext'

export const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white">
      {/* Structural Background Element (1px grid) */}
      <div className="absolute inset-0 mistral-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Minimalist Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-neutral-50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA520F] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/60">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#09090B] leading-[0.95] mb-8">
              {t('hero.title_part1')} <br />
              <span className="text-[#FA520F] italic font-serif font-normal">{t('hero.title_part2')}</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-10 font-medium">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-black text-white font-bold transition-all hover:bg-neutral-900 flex items-center gap-2 overflow-hidden">
                <span className="relative z-10">{t('hero.cta_start')}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-[#FA520F]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </button>
              <button className="px-8 py-4 border border-black font-bold hover:bg-neutral-50 transition-colors">
                {t('hero.cta_demo')}
              </button>
            </div>

            {/* Technical Meta (Social Proof / Stats) */}
            <div className="mt-16 flex items-center gap-8 border-t border-black/5 pt-8">
              <div>
                <div className="text-2xl font-bold text-black">99.9%</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Uptime Guaranteed</div>
              </div>
              <div className="w-px h-8 bg-black/10" />
              <div>
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Expert Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FA520F]/5 to-transparent rounded-full blur-3xl" />
            <NetworkVisualization />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
