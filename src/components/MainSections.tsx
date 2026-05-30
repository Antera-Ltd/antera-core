import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Shield, Cpu, BarChart3, Bot, MessageCircle, Smartphone, Globe, Code, Zap, Database, Terminal, ArrowRight, LucideIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations'

export const TrustSection = () => {
  return (
    <section className="bg-[#09090B] border-y border-white/5 py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight text-white">
                Technology That Works Across Your <span className="font-serif italic font-normal text-primary">Entire</span> Organization
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                Capture data gathered at all your branches, agents, customers, applications, social media platforms, and website traffic in real-time while delivering exceptional customer experiences.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-sm font-mono text-primary uppercase tracking-widest">Connect everything</div>
                <div className="flex-1 h-px bg-primary/20" />
              </div>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
              <StaggerItem><MetricCard title="Real-Time Insights" Icon={Activity} /></StaggerItem>
              <StaggerItem><MetricCard title="24/7 Automation" Icon={Zap} /></StaggerItem>
              <StaggerItem><MetricCard title="Scalable Infrastructure" Icon={Shield} /></StaggerItem>
              <StaggerItem><MetricCard title="Data-Driven Decisions" Icon={BarChart3} /></StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

const MetricCard = ({ title, Icon }: { title: string; Icon: LucideIcon }) => (
  <div className="p-10 bg-[#111827] group hover:bg-surface/80 transition-colors h-full">
    <div className="text-white/40 group-hover:text-primary mb-6 transition-colors">
      <Icon className="w-6 h-6 stroke-[1.5px]" />
    </div>
    <div className="font-medium text-lg leading-snug text-white/80 group-hover:text-white">{title}</div>
  </div>
)

export const ServicesSection = () => {
  const services = [
    { title: 'Enterprise AI', desc: 'Agentic workflows and custom LLM solutions that automate mission-critical tasks and improve operational leverage.', icon: Bot },
    { title: 'Conversational Intelligence', desc: 'Sophisticated multi-channel systems for WhatsApp, web, and social platforms with deep backend integration.', icon: MessageCircle },
    { title: 'Native Mobile Apps', desc: 'High-performance Android and iOS applications engineered for scale, security, and exceptional user experience.', icon: Smartphone },
    { title: 'Web Platforms', desc: 'Scalable cloud-native web systems, command centers, and enterprise-grade internal tools.', icon: Globe },
    { title: 'Infrastructure & APIs', desc: 'Resilient, high-concurrency backend systems and secure API layers powering global applications.', icon: Code },
    { title: 'Omnichannel Automation', desc: 'Unified customer engagement and automated workflow solutions across WhatsApp, SMS, and Voice.', icon: Zap },
    { title: 'Advanced Analytics', desc: 'Converting high-velocity data streams into actionable intelligence and predictive business models.', icon: Database },
    { title: 'Process Orchestration', desc: 'End-to-end intelligent automation that eliminates operational bottlenecks and optimizes organizational throughput.', icon: Terminal },
  ]

  return (
    <section id="products" className="bg-[#09090B] py-32">
      <div className="section-container">
        <FadeIn direction="none">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">What We Build</h2>
              <p className="text-gray-400 text-xl font-light">End-to-end technical solutions designed for scale and impact.</p>
            </div>
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.2em]">
              Capabilities <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className="p-10 border-r border-b border-white/10 bg-[#111827] hover:bg-[#111827]/80 transition-all group h-full">
                  <div className="text-white/40 group-hover:text-primary mb-8 transition-colors">
                    <service.icon className="w-8 h-8 stroke-[1px]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">
                    {service.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
