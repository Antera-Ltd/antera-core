import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Shield, Cpu, BarChart3, Bot, MessageCircle, Smartphone, Globe, Code, Zap, Database, Terminal, ArrowRight, LucideIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations'

export const TrustSection = () => {
  return (
    <section className="bg-white border-y border-[#1F1F1F]/5 py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight text-[#1F1F1F]">
                Technology That Works Across Your <span className="font-serif italic font-normal text-[#FA520F]">Entire</span> Organization
              </h2>
              <p className="text-[#1F1F1F]/60 text-lg leading-relaxed font-light mb-8">
                Capture data gathered at all your branches, agents, customers, applications, social media platforms, and website traffic in real-time while delivering exceptional customer experiences.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-sm font-mono text-[#FA520F] uppercase tracking-widest">Connect everything</div>
                <div className="flex-1 h-px bg-[#FA520F]/20" />
              </div>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-2 gap-px bg-[#1F1F1F]/5 border border-[#1F1F1F]/5">
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
  <div className="p-10 bg-[#fffaeb] group hover:bg-white transition-colors h-full">
    <div className="text-[#1F1F1F]/40 group-hover:text-[#FA520F] mb-6 transition-colors">
      <Icon className="w-6 h-6 stroke-[1.5px]" />
    </div>
    <div className="font-medium text-lg leading-snug text-[#1F1F1F]/80 group-hover:text-[#1F1F1F]">{title}</div>
  </div>
)

export const ServicesSection = () => {
  const services = [
    { title: 'AI Assistants', desc: 'Custom AI solutions that automate tasks, support customers, and improve operational efficiency.', icon: Bot },
    { title: 'Chatbots', desc: 'Intelligent conversational systems for WhatsApp, websites, and social platforms.', icon: MessageCircle },
    { title: 'Mobile Applications', desc: 'Custom Android and iOS applications tailored to business needs.', icon: Smartphone },
    { title: 'Web Applications', desc: 'Scalable web systems, dashboards, and enterprise platforms.', icon: Globe },
    { title: 'Backend & API Development', desc: 'Secure infrastructure powering applications and integrations.', icon: Code },
    { title: 'WhatsApp Automation', desc: 'Automated customer engagement, messaging, and workflow solutions.', icon: Zap },
    { title: 'Data Analytics', desc: 'Transform raw data into actionable business intelligence.', icon: Database },
    { title: 'Business Automation', desc: 'Streamline repetitive operations through intelligent automation.', icon: Terminal },
  ]

  return (
    <section id="products" className="bg-[#fffaeb] py-32">
      <div className="section-container">
        <FadeIn direction="none">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#1F1F1F]">What We Build</h2>
              <p className="text-[#1F1F1F]/40 text-xl font-light">End-to-end technical solutions designed for scale and impact.</p>
            </div>
            <div className="flex items-center gap-2 text-[#FA520F] font-mono text-xs uppercase tracking-[0.2em]">
              Capabilities <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#1F1F1F]/10">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className="p-10 border-r border-b border-[#1F1F1F]/10 bg-white hover:bg-[#fffaeb] transition-all group h-full">
                  <div className="text-[#1F1F1F]/40 group-hover:text-[#FA520F] mb-8 transition-colors">
                    <service.icon className="w-8 h-8 stroke-[1px]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-[#1F1F1F] group-hover:text-[#FA520F] transition-colors">{service.title}</h3>
                  <p className="text-[#1F1F1F]/50 leading-relaxed text-sm font-light">
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
