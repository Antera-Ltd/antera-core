import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Phone, Mail, Share2, Hash, Radio, BarChart, Search, PieChart, TrendingUp, Monitor, UserCheck, ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../lib/animations'

export const CommunicationSection = () => {
  const features = [
    { title: 'SMS Communication', icon: <Hash /> },
    { title: 'USSD Solutions', icon: <Radio /> },
    { title: 'Social Media Integration', icon: <Share2 /> },
    { title: 'Robo Calls', icon: <Phone /> },
    { title: 'Email Campaigns', icon: <Mail /> },
    { title: 'Customer Messaging', icon: <MessageSquare /> },
  ]

  return (
    <section id="solutions" className="bg-black py-32 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <FadeIn>
            <div>
               <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">Unified Customer <span className="font-serif italic font-normal text-white/80">Communication</span></h2>
               <p className="text-brand-gray-400 text-xl font-light leading-relaxed">
                Bring all customer engagement channels together through a single platform.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="bg-black p-10 flex flex-col items-center text-center group hover:bg-brand-gray-900 transition-colors h-full">
                    <div className="text-brand-gray-600 mb-6 group-hover:text-brand-orange transition-colors">
                      {React.cloneElement(f.icon as React.ReactElement, { className: 'w-10 h-10 stroke-[1px]' })}
                    </div>
                    <span className="font-medium text-sm uppercase tracking-wider text-brand-gray-400 group-hover:text-white transition-colors">{f.title}</span>
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

export const ApplicationSection = () => {
  return (
    <section className="bg-black py-32 border-t border-white/10 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="left" fullWidth>
            <div className="relative">
              <div className="aspect-[4/3] bg-brand-gray-900 mistral-border rounded-none overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-10 bg-black border-b border-white/10 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                   </div>
                   <div className="mx-auto text-[10px] font-mono text-brand-gray-600 uppercase tracking-widest">Dashboard Preview v2.0</div>
                </div>
                <div className="p-16 flex flex-col gap-10 mt-6">
                  <div className="h-6 w-1/3 bg-white/10" />
                  <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 border border-white/5 bg-black" />
                    <div className="h-32 border border-white/5 bg-black" />
                    <div className="h-32 border border-white/5 bg-black" />
                  </div>
                  <div className="h-40 border border-white/5 bg-black" />
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">Applications Built <br />Around Your <span className="font-serif italic font-normal text-white/80">Business</span></h2>
              <p className="text-brand-gray-400 text-xl font-light leading-relaxed mb-12">
                We design and develop web and mobile applications customized for your organization's unique workflows, customer engagement processes, transactions, and information dissemination needs.
              </p>
              <div className="space-y-6">
                {['Mobile App Mockups', 'Dashboard Screens', 'Enterprise Software UI Concepts'].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-default">
                    <div className="w-10 h-px bg-brand-orange/30 group-hover:w-16 transition-all duration-500" />
                    <span className="text-lg font-medium group-hover:text-brand-orange transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export const DataIntelligenceSection = () => {
  const features = [
    { title: 'Business Intelligence', icon: <PieChart /> },
    { title: 'Predictive Analytics', icon: <TrendingUp /> },
    { title: 'Real-Time Dashboards', icon: <BarChart /> },
    { title: 'Customer Insights', icon: <Search /> },
    { title: 'Performance Monitoring', icon: <Monitor /> },
    { title: 'Decision Support Systems', icon: <UserCheck /> },
  ]

  return (
    <section id="models" className="bg-black py-32 border-t border-white/10">
      <div className="section-container">
        <FadeIn direction="none">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">Turn <span className="font-serif italic font-normal text-white/80">Data</span> Into Action</h2>
              <p className="text-brand-gray-400 text-xl font-light leading-relaxed">
                We build intelligent dashboards and analytics systems that help organizations understand customer behavior, identify opportunities, and make informed decisions in real-time.
              </p>
            </div>
            <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-[0.2em]">
              Analytics <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <div className="p-12 border-r border-b border-white/10 hover:bg-brand-gray-900 transition-all group h-full">
                  <div className="text-brand-gray-600 mb-10 group-hover:text-brand-orange transition-colors">
                    {React.cloneElement(f.icon as React.ReactElement, { className: 'w-10 h-10 stroke-[1px]' })}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">{f.title}</h3>
                  <div className="w-0 h-px bg-brand-orange group-hover:w-full transition-all duration-700 mt-4" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
