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
    <section id="company" className="bg-[#fffaeb] py-32 border-t border-[#1F1F1F]/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight text-[#1F1F1F]">How We <span className="font-serif italic font-normal text-[#FA520F]">Operate</span></h2>
              <p className="text-[#1F1F1F]/60 text-xl font-light leading-relaxed mb-8">
                We bring together people from diverse backgrounds, expertise, partnerships, and experience to deliver measurable results.
              </p>
              <p className="text-[#1F1F1F]/60 text-xl font-light leading-relaxed">
                We leverage technology to automate processes, enhance customer interactions, and unlock predictive insights that drive growth.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="flex flex-col gap-px bg-[#1F1F1F]/10 border border-[#1F1F1F]/10">
              {steps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-10 p-8 bg-[#fffaeb] group hover:bg-white transition-all">
                    <div className="font-mono text-xs text-[#1F1F1F]/30 group-hover:text-[#FA520F] transition-colors">0{i + 1}</div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-2xl font-bold tracking-tight text-[#1F1F1F]">{step.name}</span>
                      <div className="text-[#1F1F1F]/30 group-hover:text-[#FA520F] transition-colors">
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
    <section className="bg-white py-32 border-t border-[#1F1F1F]/10">
      <div className="section-container">
        <FadeIn direction="none">
          <div className="text-center max-w-3xl mx-auto mb-24">
             <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-[#1F1F1F]">Data Science & <span className="font-serif italic font-normal text-[#FA520F]">Consulting</span></h2>
             <p className="text-[#1F1F1F]/60 text-lg font-light leading-relaxed">Tailored, domain-specialized AI: from custom pre-training with your data to scaled deployment—with expert guidance throughout.</p>
          </div>
        </FadeIn>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#1F1F1F]/10">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group p-10 border-r border-b border-[#1F1F1F]/10 bg-[#fffaeb] hover:bg-white transition-all h-full">
                  <div className="text-[#1F1F1F]/30 group-hover:text-[#FA520F] mb-10 transition-colors">
                    <s.icon className="w-10 h-10 stroke-[1px]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-[#1F1F1F] group-hover:text-[#FA520F] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#1F1F1F]/50 leading-relaxed font-light">{s.desc}</p>
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
    <section className="bg-[#fffaeb] py-32 border-t border-[#1F1F1F]/10 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <FadeIn>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-tight text-[#1F1F1F]">Why Organizations <br />Choose <span className="font-serif italic font-normal text-[#FA520F]">ANTERA</span></h2>
              <div className="w-24 h-1 bg-[#FA520F]" />
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {reasons.map((reason, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-6 border-b border-[#1F1F1F]/10 pb-8 h-full">
                    <div className="mt-1 font-mono text-[10px] text-[#FA520F] font-bold tracking-widest">0{i + 1}</div>
                    <span className="font-bold text-xl tracking-tight text-[#1F1F1F]/80 group-hover:text-[#FA520F] transition-colors">{reason}</span>
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
