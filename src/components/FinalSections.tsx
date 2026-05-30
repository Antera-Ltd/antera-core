import React from 'react'
import { motion } from 'framer-motion'
import { Users, Layout, Activity, Code, Search, Radio, Smartphone, Microscope, ArrowRight, LucideIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations'

export const OperationSection = () => {
  const steps = [
    { name: 'Discover', icon: Search },
    { name: 'Analyze', icon: Microscope },
    { name: 'Design', icon: Layout },
    { name: 'Build', icon: Code },
    { name: 'Deploy', icon: Activity },
    { name: 'Optimize', icon: ArrowRight },
  ]

  return (
    <section id="company" className="bg-black py-32 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight text-brand-cream">How We <span className="font-serif italic font-normal text-brand-orange">Operate</span></h2>
              <p className="text-brand-cream/60 text-xl font-light leading-relaxed mb-8">
                We bring together people from diverse backgrounds, expertise, partnerships, and experience to deliver measurable results.
              </p>
              <p className="text-brand-cream/60 text-xl font-light leading-relaxed">
                We leverage technology to automate processes, enhance customer interactions, and unlock predictive insights that drive growth.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="flex flex-col gap-px bg-white/10 border border-white/10">
              {steps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-10 p-8 bg-black group hover:bg-brand-gray-900 transition-all">
                    <div className="font-mono text-xs text-brand-gray-600 group-hover:text-brand-orange transition-colors">0{i + 1}</div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-2xl font-bold tracking-tight">{step.name}</span>
                      <div className="text-brand-gray-600 group-hover:text-brand-orange transition-colors">
                         <step.icon className="w-6 h-6 stroke-[1.5px]" />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export const DataScienceSection = () => {
  const services = [
    { title: 'Customer Profiling', desc: 'Understanding user behavior and segmentation.', icon: Users },
    { title: 'CRM Systems', desc: 'Custom relationship management architectures.', icon: Layout },
    { title: 'Systems Design', desc: 'High-performance technical architectures.', icon: Code },
    { title: 'Systems Development', desc: 'Full-cycle software engineering.', icon: Smartphone },
    { title: 'Systems Analysis & Review', desc: 'Performance and security audits.', icon: Microscope },
    { title: 'Digital Communication', icon: Radio, desc: 'Unified messaging infrastructure.' },
    { title: 'Application Development', icon: Smartphone, desc: 'Scalable mobile and web apps.' },
    { title: 'Data Science Consulting', icon: Search, desc: 'Strategic AI and data roadmaps.' },
  ]

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="section-container">
        <FadeIn direction="none">
          <div className="text-center max-w-3xl mx-auto mb-24">
             <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-brand-cream">Data Science & <span className="font-serif italic font-normal text-brand-orange">Consulting</span></h2>
             <p className="text-brand-cream/60 text-lg font-light leading-relaxed">Tailored, domain-specialized AI: from custom pre-training with your data to scaled deployment—with expert guidance throughout.</p>
          </div>
        </FadeIn>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group p-10 border-r border-b border-white/10 hover:bg-brand-gray-900 transition-all h-full">
                  <div className="text-brand-gray-600 group-hover:text-brand-orange mb-10 transition-colors">
                    <s.icon className="w-10 h-10 stroke-[1px]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-brand-cream transition-colors">{s.title}</h3>
                  <p className="text-sm text-brand-cream/40 leading-relaxed font-light">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

export const WhySection = () => {
  const reasons = [
    'Enterprise-grade Solutions',
    'AI-first Approach',
    'Scalable Architecture',
    'Secure Infrastructure',
    'Data-driven Decision Making',
    'Rapid Deployment',
    'Long-term Partnership',
    'Custom Development'
  ]

  return (
    <section className="bg-black py-32 border-t border-white/10 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <FadeIn>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight text-brand-cream">Why Organizations <br />Choose <span className="font-serif italic font-normal text-brand-orange">ANTERA</span></h2>
              <div className="w-24 h-1 bg-brand-orange" />
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {reasons.map((reason, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-6 border-b border-white/5 pb-8 h-full">
                    <div className="mt-1 font-mono text-[10px] text-brand-orange font-bold tracking-widest">0{i + 1}</div>
                    <span className="font-bold text-xl tracking-tight text-brand-cream/80 group-hover:text-brand-orange transition-colors">{reason}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
