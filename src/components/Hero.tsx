import { motion } from 'framer-motion'
import { FadeIn, Section } from './Layout'
import { ArrowRight, Sparkles, Globe, Database, Code, Smartphone, Zap, BarChart } from 'lucide-react'
import { cn } from '../lib/utils'

const chips = [
  { icon: Sparkles, text: 'AI Assistants', color: 'text-blue-400' },
  { icon: Zap, text: 'Automation', color: 'text-violet-400' },
  { icon: Smartphone, text: 'Mobile Apps', color: 'text-emerald-400' },
  { icon: Globe, text: 'Web Apps', color: 'text-sky-400' },
  { icon: Database, text: 'Data Intelligence', color: 'text-purple-400' },
  { icon: Code, text: 'APIs', color: 'text-amber-400' },
  { icon: Zap, text: 'WhatsApp Automation', color: 'text-green-400' },
  { icon: BarChart, text: 'Analytics', color: 'text-rose-400' },
]

export const Hero = () => {
  return (
    <Section className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Next-Gen Engineering Agency
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Engineering <span className="text-gradient">Intelligent Systems</span> for Modern Businesses
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              ANTERA helps organizations build, automate, and scale through AI-powered solutions, software engineering, data intelligence, and digital infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                Book a Consultation
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="relative h-[500px] hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Animated Network Visualization - Abstract representation */}
             <div className="relative w-full h-full">
                {chips.map((chip, i) => (
                  <motion.div
                    key={chip.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0],
                    }}
                    transition={{
                      delay: i * 0.1,
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={cn(
                      "absolute p-4 glass rounded-2xl flex items-center gap-3 whitespace-nowrap",
                      i === 0 && "top-[10%] left-[10%]",
                      i === 1 && "top-[20%] right-[15%]",
                      i === 2 && "top-[45%] left-[5%]",
                      i === 3 && "top-[50%] right-[5%]",
                      i === 4 && "bottom-[20%] left-[15%]",
                      i === 5 && "bottom-[10%] right-[20%]",
                      i === 6 && "top-[35%] left-[40%]",
                      i === 7 && "bottom-[40%] right-[30%]",
                    )}
                  >
                    <chip.icon className={cn("w-5 h-5", chip.color)} />
                    <span className="text-sm font-semibold">{chip.text}</span>
                  </motion.div>
                ))}

                {/* Connecting lines - Abstract */}
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 400 400">
                   <motion.circle
                    cx="200" cy="200" r="150"
                    fill="none" stroke="currentColor" strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                   />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
