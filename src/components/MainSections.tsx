
import React from 'react'
import { ArrowRight } from 'lucide-react'

export const TrustSection = () => {
  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full">
        
        {/* Left Side Label Block */}
        <div className="lg:w-4/12 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-8 select-none">
              {/* Pixel Badge Graphic */}
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F]">
                <path d="M1 1h8v2H1V1zm1 4h6v1H2V5zm2 3h2v1H4V8z" fill="currentColor"/>
              </svg>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                Validation Layer
              </span>
            </div>
            <h3 className="text-3xl font-normal tracking-tight uppercase leading-[0.95] mb-4">
              System Performance Integrity
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-xs font-normal">
              Continuous infrastructure verification parameters across active engagement channels and core telemetry distribution layers.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 text-[9px] font-mono text-neutral-300 tracking-wider uppercase">
            Secure Node Verified Matrix
          </div>
        </div>

        {/* Right Side Content Grid matching Mistral asymmetric column rules */}
        <div className="lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-black bg-neutral-50/10">
          
          <div className="p-8 lg:p-12 bg-white flex flex-col justify-between min-h-[220px] group hover:bg-neutral-50/50 transition-colors relative border-b border-black sm:border-b-0">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#FA520F]" />
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[8px] text-neutral-400 font-bold uppercase tracking-wider">
                SLA Guarantee
              </span>
              <span className="w-1 h-1 rounded-full bg-[#FA520F]" />
            </div>
            <div className="pt-6">
              <h4 className="text-lg font-bold uppercase tracking-wider text-black mb-2">
                Maximum Availability
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Engineered for strict operational uptime loops to maintain persistent connection states across all regional carrier gateways.
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-white flex flex-col justify-between min-h-[220px] group hover:bg-neutral-50/50 transition-colors relative">
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-[8px] text-neutral-400 font-bold uppercase tracking-wider">
                Security Perimeter
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-200 group-hover:bg-[#FA520F] transition-colors" />
            </div>
            <div className="pt-6">
              <h4 className="text-lg font-bold uppercase tracking-wider text-black mb-2">
                Zero Compromise
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Isolated sandbox boundaries ensuring complete transaction protection, customer confidentiality, and regulatory alignment.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export const ServicesSection = () => {
  const keyHighlights = [
    {
      title: 'Neural Optimization',
      desc: 'Deep parameter tuning loops engineered specifically to handle massive scale distributed enterprise learning pipelines safely.',
      id: 'Infrastructure Optimization',
      accent: true,
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-blue-500 mb-8">
          <path d="M2 2h4v4H2V2zm8 0h4v4h-4V2zM2 10h4v4H2v-4zm8 0h4v4h-4v-4z" fill="currentColor"/>
          <path d="M6 4h4v1H6V4zm0 8h4v1H6v-1zM4 6h1v4H4V6zm7 0h1v4h-1V6z" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Secure Compute',
      desc: 'Isolated container boundaries configured directly for sensitive operations, encryption protocols, and sovereign infrastructure storage.',
      id: 'Data Protection',
      accent: false,
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-orange-500 mb-8">
          <path d="M4 2h8v2H4V2zm-2 4h12v6H2V6zm3 3h6v1H5V9z" fill="currentColor"/>
          <path d="M5 4h6v2H5V4z" fill="white" opacity="0.2"/>
        </svg>
      )
    },
    {
      title: 'Global Delivery',
      desc: 'Edge-synchronized routing routers designed to safely pipeline system transactional instructions with zero latency degradation risks.',
      id: 'Latency Mitigation',
      accent: false,
      pixelIcon: (
        <svg width="28" height="28" viewBox="0 0 16 16" fill="none" className="text-teal-500 mb-8">
          <path d="M1 5h14v6H1V5zm3 2h8v2H4V7z" fill="currentColor"/>
          <path d="M6 2h4v3H6V2zm0 9h4v3H6v-3z" fill="currentColor" opacity="0.4"/>
        </svg>
      )
    },
  ]

  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full">
        
        {/* Core Capabilities Descriptive Panel */}
        <div className="lg:w-4/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black bg-white">
          <div className="max-w-xs">
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black">
                <path d="M1 2h8v6H1V2zm2 2h4v2H3V4z" fill="currentColor"/>
              </svg>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                Core Capabilities Frame
              </span>
            </div>
            
            <h2 className="text-4xl font-normal tracking-tight uppercase leading-[0.9] mb-6">
              Core Technological <span className="text-[#FA520F] block font-bold">Framework.</span>
            </h2>
            <p className="text-neutral-500 text-xs leading-relaxed font-normal">
              We design specialized software components built to integrate cleanly into complex operational environments and automated messaging setups.
            </p>
          </div>
          
          <div className="mt-16 pt-6 border-t border-black/5 font-mono text-[9px] text-neutral-300 uppercase tracking-wider">
            Framework Activation Layer
          </div>
        </div>

        {/* Content Slots Matrix Cards Grid Row Layout */}
        <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-3 items-stretch divide-y md:divide-y-0 md:divide-x divide-black bg-neutral-50/20">
          {keyHighlights.map((item, i) => (
            <div 
              key={i} 
              className="p-8 lg:p-10 bg-white flex flex-col justify-between min-h-[380px] relative group hover:bg-neutral-50/40 transition-colors"
            >
              {/* Asymmetric orange accent flag at top of highlighted item */}
              {item.accent && <div className="absolute top-0 left-0 right-0 h-1 bg-[#FA520F]" />}
              
              <div>
                <div className="flex items-center justify-between w-full mb-6">
                  {item.pixelIcon}
                  <span className="font-mono text-[8px] text-neutral-300 group-hover:text-neutral-500 transition-colors uppercase tracking-wider font-bold">
                    {item.id}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3 group-hover:text-[#FA520F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between w-full text-[10px] font-mono text-neutral-400 group-hover:text-black transition-colors uppercase font-bold">
                <span>View Specs</span>
                <ArrowRight className="w-3 h-3 text-neutral-300 group-hover:text-[#FA520F] transform group-hover:translate-x-0.5 transition-all stroke-[2.5px]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

