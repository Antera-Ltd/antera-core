import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const OperationSection = () => {
  const [activeStep, setActiveStep] = useState('discover')

  const steps = [
    { id: 'discover', name: 'Discover', label: 'Phase One', desc: 'Comprehensive discovery loops targeting organizational data dependencies, channel constraints, and workflow pipeline vulnerabilities.' },
    { id: 'analyze', name: 'Analyze', label: 'Phase Two', desc: 'Deep model ingestion validation. We analyze message volume trends, user interaction telemetry, and payload constraints systematically.' },
    { id: 'design', name: 'Design', label: 'Phase Three', desc: 'Engineering exact functional layout plans, localized custom training weights, and rigid multi-tenant transaction routing.' },
    { id: 'build', name: 'Build', label: 'Phase Four', desc: 'Full stack implementation phase. Deploying customized cloud nodes, responsive UI dashboards, and edge-synchronized native endpoints.' },
    { id: 'deploy', name: 'Deploy', label: 'Phase Five', desc: 'Secure execution across isolated enterprise containers, distributed live clouds, or air-gapped secure corporate systems.' },
    { id: 'optimize', name: 'Optimize', label: 'Phase Six', desc: 'Continuous learning calibration cycles. Automated performance tuning to consistently drop latencies and expand edge processing throughput.' },
  ]

  const currentData = steps.find(s => s.id === activeStep)

  return (
    <section id="company" className="bg-white border-b border-black text-black font-sans antialiased w-full">
      
      {/* Top Retro Pixel Indicator Banner */}
      <div className="w-full bg-[#111113] border-b border-black py-16 px-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6 select-none">
          {/* Custom Pixel Running Cog Asset */}
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-[#FA520F]">
            <path d="M6 1h4v2H6V1zm5 3h2v2h-2V4zM3 4h2v2H3V4zm5 5h2v2H8V9zm5 2h2v2h-2v-2zM1 11h2v2H1v-2zM6 13h4v2H6v-2z" fill="currentColor"/>
          </svg>
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400">
            Operational Pipeline Execution
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight max-w-4xl text-white uppercase leading-tight">
          Rigid operational phases engineered for maximum certainty.
        </h2>
      </div>

      {/* Main Multi-tiered Structural Grid Blocks */}
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full min-h-[480px]">
        
        {/* Left Side Tab Matrix Filter Menu */}
        <div className="w-full lg:w-80 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-black p-6 lg:p-8 bg-white">
          <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-6 font-mono px-4">
            Execution Matrix
          </div>
          <div className="flex flex-col gap-1 w-full">
            {steps.map((step) => {
              const isActive = activeStep === step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full flex items-center justify-between px-4 py-4 text-xs font-bold uppercase tracking-wider transition-all border text-left ${
                    isActive 
                      ? 'border-black bg-neutral-50 text-black font-extrabold' 
                      : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[9px] font-mono ${isActive ? 'text-[#FA520F]' : 'text-neutral-300'}`}>
                      {step.label}
                    </span>
                    {step.name}
                  </span>
                  {isActive && <ArrowRight className="w-3.5 h-3.5 text-[#FA520F]" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Dynamic Focus Block Side */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 bg-neutral-50/30 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.15 }}
              className="max-w-xl"
            >
              <div className="font-mono text-[9px] text-[#FA520F] font-bold tracking-widest uppercase mb-4">
                System Active Phase
              </div>
              <h3 className="text-4xl font-bold uppercase tracking-tight text-neutral-900 mb-6">
                {currentData?.name}.
              </h3>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                {currentData?.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export const DataScienceSection = () => {
  const services = [
    { title: 'Customer Profiling', desc: 'Understanding distinct user interaction trajectories, identity validation, and customized cluster segment tracking.', accent: true, area: 'User Analytics' },
    { title: 'CRM Systems', desc: 'Custom core relationship storage blocks tailored explicitly to manage cross-platform enterprise state trees.', accent: false, area: 'State Archiving' },
    { title: 'Systems Design', desc: 'High-performance computing topologies engineered for low latency drop rates and extreme concurrent traffic.', accent: false, area: 'Topology Layout' },
    { title: 'Systems Development', desc: 'Full-cycle advanced application programming across highly reliable processing vectors and backend nodes.', accent: false, area: 'Core Coding' },
    { title: 'Systems Analysis', desc: 'Comprehensive technical system audits, compliance validation metrics, and security leak vulnerability reviews.', accent: false, area: 'Audit Protocols' },
    { title: 'Digital Infrastructure', desc: 'Unified high-throughput messaging conduits supporting distributed transactional automation rulesets.', accent: true, area: 'Messaging Nodes' },
    { title: 'App Ecosystems', desc: 'Scalable distributed client software environments customized around real-time ledger auditing tools.', accent: false, area: 'Client Suites' },
    { title: 'Strategic Consulting', desc: 'Tailored technology alignment roadmaps mapping enterprise raw file layers directly to intelligence workflows.', accent: false, area: 'Data Strategy' },
  ]

  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full">
      
      {/* Asymmetric Header Structure Ribbon Block */}
      <div className="w-full border-b border-black bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold uppercase tracking-tight leading-none">
              Data Science & Consulting
            </h2>
          </div>
          <p className="text-black/50 text-xs max-w-md leading-relaxed font-normal">
            Tailored, domain-specialized technical engineering: from localized tuning models to comprehensive operational field support.
          </p>
        </div>
      </div>

      {/* Grid Framework Content Slots matching Mistral Grid Cards */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch border-b border-black lg:border-b-0">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="p-8 pb-10 bg-white flex flex-col justify-between group transition-colors hover:bg-neutral-50/50 border-b border-r border-black last:border-b-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r border-black lg:[&:nth-child(4n)]:border-r-0 lg:border-b"
          >
            <div className="relative">
              {/* Highlight bar present on specific cards matching reference architecture */}
              {s.accent && <div className="absolute -top-8 -left-8 -right-8 h-1 bg-[#FA520F]" />}
              
              <div className="flex items-center justify-between mb-8 pt-2">
                {/* Custom Inline Pixel Grid Vector Icons */}
                <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black/30 group-hover:text-[#FA520F] transition-colors">
                  <path d="M1 1h8v1H1V1zm0 3h8v1H1V4zm0 3h6v1H1V7z" fill="currentColor"/>
                </svg>
                <span className="font-mono text-[8px] text-neutral-300 group-hover:text-neutral-500 transition-colors tracking-widest font-bold uppercase">
                  {s.area}
                </span>
              </div>
              
              <h3 className="text-sm font-bold tracking-wider text-black mb-3 uppercase group-hover:text-[#FA520F] transition-colors">
                {s.title}
              </h3>
              <p className="text-black/60 text-xs leading-relaxed font-normal max-w-[210px]">
                {s.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between w-full text-[10px] font-mono text-neutral-400 group-hover:text-black transition-colors uppercase font-bold">
              <ArrowRight className="w-3 h-3 text-neutral-300 group-hover:text-[#FA520F] transform group-hover:translate-x-0.5 transition-all stroke-[2.5px]" />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export const WhySection = () => {
  const reasons = [
    { title: 'Enterprise-grade Solutions', desc: 'Architectures engineered strictly for high-fidelity uptime, fault tolerance, and absolute processing capacity.' },
    { title: 'AI-first Core Design', desc: 'System layers built natively around machine learning data parameters and active optimization logic structures.' },
    { title: 'Scalable Architecture', desc: 'Fully decoupled multi-tenant compute frameworks configured to absorb explosive throughput scale smoothly.' },
    { title: 'Secure Infrastructure', desc: 'Isolated sandbox deployment environments ensuring complete regulatory and structural boundary protections.' },
    { title: 'Data-driven Decisions', desc: 'Real-time telemetry pipelines translating raw activities immediately into sharp actionable parameters.' },
    { title: 'Rapid Edge Deployment', desc: 'Pre-evaluated framework blueprints and container systems to minimize time-to-market cycles.' },
    { title: 'Long-term Partnership', desc: 'Dedicated solutions engineering access aligning codebases continuously to shifting internal priorities.' },
    { title: 'Custom Codebases', desc: 'No cookie-cutter templates. Zero debt software engineered uniquely around exact execution tasks.' }
  ]

  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full">
        
        {/* Left Side Static Title Info Panel */}
        <div className="lg:w-4/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black bg-white">
          <div>
            {/* Custom Pixel Stack Icon */}
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-black">
                <path d="M2 2h8v2H2V2zm0 3h8v2H2V5zm0 3h8v2H2V8z" fill="currentColor"/>
              </svg>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                Antera Core Systems
              </span>
            </div>
            <h2 className="text-4xl font-normal tracking-tight uppercase leading-[0.9] text-neutral-900">
              Why Teams Choose <span className="text-[#FA520F] block font-bold">Antera.</span>
            </h2>
          </div>
          
          <div className="mt-16 pt-6 border-t border-black/5 font-mono text-[9px] text-neutral-300 uppercase tracking-wider font-bold">
            Advantage Verification Index
          </div>
        </div>

        {/* Right Twin-Column Parameters Array matching Mistral layouts */}
        <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black items-stretch bg-neutral-50/20">
          
          {/* First column array */}
          <div className="divide-y divide-black/10 flex flex-col h-full bg-white">
            {reasons.slice(0, 4).map((reason, i) => (
              <div key={i} className="p-8 lg:p-10 flex flex-col justify-start group hover:bg-neutral-50/50 transition-colors h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] text-[#FA520F] font-bold">
                    [0{i + 1}]
                  </span>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-neutral-900 group-hover:text-[#FA520F] transition-colors">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed pl-8 max-w-sm">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Second column array */}
          <div className="divide-y divide-black/10 flex flex-col h-full bg-white">
            {reasons.slice(4, 8).map((reason, i) => (
              <div key={i} className="p-8 lg:p-10 flex flex-col justify-start group hover:bg-neutral-50/50 transition-colors h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] text-[#FA520F] font-bold">
                    [0{i + 5}]
                  </span>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-neutral-900 group-hover:text-[#FA520F] transition-colors">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed pl-8 max-w-sm">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}