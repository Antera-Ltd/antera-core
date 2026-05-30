import React from 'react'
import { motion } from 'framer-motion'
import { Users, Layout, Activity, Code, Search, Radio, Smartphone, Microscope, ArrowRight, LucideIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations'

export const OperationSection = () => {
  const steps = [
    { name: 'Identification', icon: Search },
    { name: 'Structural Analysis', icon: Microscope },
    { name: 'Architecting', icon: Layout },
    { name: 'Engineering', icon: Code },
    { name: 'Deployment', icon: Activity },
    { name: 'Continuous Intelligence', icon: ArrowRight },
  ]

  return (
    <section id="company" className="bg-[#09090B] py-32 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight text-white">Our Execution <span className="font-serif italic font-normal text-primary">Framework</span></h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-8">
                We synthesize diverse technical expertise, strategic partnerships, and deep industry experience to deliver high-integrity results.
              </p>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                By leveraging frontier technologies, we automate complex workflows and unlock predictive insights that capitalize on market opportunities.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="flex flex-col gap-px bg-white/10 border border-white/10">
              {steps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-10 p-8 bg-[#111827] group hover:bg-[#111827]/80 transition-all">
                    <div className="font-mono text-xs text-white/30 group-hover:text-primary transition-colors">0{i + 1}</div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-2xl font-bold tracking-tight text-white">{step.name}</span>
                      <div className="text-white/30 group-hover:text-primary transition-colors">
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
    { title: 'Algorithmic Profiling', desc: 'Deep behavioral analysis and predictive user segmentation.', icon: Users },
    { title: 'CRM Architecture', desc: 'Enterprise-grade relationship management systems with AI-driven insights.', icon: Layout },
    { title: 'Systems Engineering', desc: 'Fault-tolerant, high-performance technical infrastructures.', icon: Code },
    { title: 'Full-Stack Development', desc: 'End-to-end engineering of mission-critical software solutions.', icon: Smartphone },
    { title: 'Integrity Audits', desc: 'Rigorous analysis of system performance, security, and scalability.', icon: Microscope },
    { title: 'Signal Distribution', icon: Radio, desc: 'Advanced digital communication and messaging networks.' },
    { title: 'Platform Engineering', icon: Smartphone, desc: 'Developing the next generation of scalable mobile and web ecosystems.' },
    { title: 'Intelligence Strategy', icon: Search, desc: 'Strategic consulting for data-centric organizational transformation.' },
  ]

  return (
    <section className="bg-[#09090B] py-32 border-t border-white/10">
      <div className="section-container">
        <FadeIn direction="none">
          <div className="text-center max-w-3xl mx-auto mb-24">
             <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white">Data Science & <span className="font-serif italic font-normal text-primary">Consulting</span></h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed">Tailored, domain-specialized AI: from custom pre-training with your data to scaled deployment—with expert guidance throughout.</p>
          </div>
        </FadeIn>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group p-10 border-r border-b border-white/10 bg-[#111827] hover:bg-[#111827]/80 transition-all h-full">
                  <div className="text-white/30 group-hover:text-primary mb-10 transition-colors">
                    <s.icon className="w-10 h-10 stroke-[1px]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{s.desc}</p>
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
    <section className="bg-[#09090B] py-32 border-t border-white/10 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <FadeIn>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight text-white">Why Organizations <br />Choose <span className="font-serif italic font-normal text-primary">ANTERA</span></h2>
              <div className="w-24 h-1 bg-primary" />
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {reasons.map((reason, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-6 border-b border-white/10 pb-8 h-full">
                    <div className="mt-1 font-mono text-[10px] text-primary font-bold tracking-widest">0{i + 1}</div>
                    <span className="font-bold text-xl tracking-tight text-white/80 group-hover:text-primary transition-colors">{reason}</span>
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
