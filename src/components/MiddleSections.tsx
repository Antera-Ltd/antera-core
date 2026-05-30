import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CommunicationSection = () => {
  const channels = [
    { name: 'SMS Communication', meta: 'Carrier Routing' },
    { name: 'USSD Solutions', meta: 'Interactive Nodes' },
    { name: 'Social Media Integration', meta: 'Cross Platform' },
    { name: 'Robo Calls', meta: 'Voice Automation' },
    { name: 'Email Campaigns', meta: 'Broadcast Loops' },
    { name: 'Customer Messaging', meta: 'Automated Response' },
  ];

  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Left Core Structural Copy Block */}
        <div className="lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black bg-white">
          <div>
            {/* Custom Pixel Art Icon Combo Header Block */}
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F]">
                <path d="M2 1h6v1H2V1zm-1 2h8v4H1V3zm2 5h4v1H3V8z" fill="currentColor"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black">
                <path d="M1 2h8v6H1V2zm2 2h4v2H3V4z" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
              Unified Customer <span className="text-neutral-400 block">Communication.</span>
            </h2>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-md">
              Bring all operational engagement systems under a singular endpoint matrix. Capture and dispatch user events across SMS, USSD, and custom distributed social channels safely.
            </p>
          </div>
          
          <div className="mt-16 pt-6 border-t border-black/10 flex items-center justify-between font-mono text-[9px] text-neutral-400 tracking-wider uppercase font-bold">
          </div>
        </div>

        {/* Right Side: Mistral-Style Grid Links Matrix */}
        <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-black bg-neutral-50/40">
          {channels.map((channel, i) => (
            <a 
              href="#" 
              key={i} 
              className="p-8 lg:p-12 bg-white flex flex-col justify-between group relative overflow-hidden transition-colors border-b border-black last:border-b-0 sm:even:border-l-0 min-h-[180px]"
            >
              <div className="flex items-center justify-between w-full mb-12">
                {/* Pixel Icon Box Replacement */}
                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors">
                  <path d="M2 2h6v1H2V2zm0 3h4v1H2V5zm0 3h5v1H2V8z" fill="currentColor"/>
                </svg>
                <span className="font-mono text-[9px] text-neutral-400 group-hover:text-black transition-colors uppercase font-bold tracking-wider">
                  {channel.meta}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 mt-auto">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-[#FA520F] transition-colors">
                  {channel.name}
                </h3>
                <ArrowRight className="w-3.5 h-3.5 text-[#FA520F] transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all stroke-[2.5px]" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export const ApplicationSection = () => {
  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full flex flex-col">
      
      {/* Structural Sub-header Horizontal Banner */}
      <div className="border-b border-black bg-white w-full">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#FA520F] mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FA520F]" /> Infrastructure Layer
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tight leading-none">
              Custom Application Ecosystems
            </h2>
          </div>
          <p className="text-black/50 text-xs max-w-md leading-relaxed font-normal">
            We architect and build tailored web dashboards and mobile channels designed to streamline multi-tenant processing flows and real-time operational ledger metrics.
          </p>
        </div>
      </div>

      {/* Main Structural Grid Block Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black">
        
        {/* Left Slot: Mobile Framework UI */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white group hover:bg-neutral-50/20 transition-colors">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors">
                <path d="M3 1h6v10H3V1zm1 1v6h4V2H4z" fill="currentColor"/>
              </svg>
              <span className="font-mono text-[9px] text-neutral-400 uppercase font-bold tracking-wider">Mobile Client Architecture</span>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
              Native Mobile Deployments
            </h3>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-md">
              Secure client applications optimized for real-time edge synchronization, absolute off-grid validation caching, and robust interface operations.
            </p>
          </div>
          
          {/* Flat Minimalist Structural Blueprint Wireframe */}
          <div className="border border-black bg-white p-4 h-52 flex flex-col justify-between relative overflow-hidden font-mono select-none">
            <div className="absolute right-3 top-3 text-[8px] text-neutral-300 font-bold uppercase">Antera Core</div>
            <div className="h-5 w-24 bg-neutral-50 border border-black text-[8px] flex items-center justify-center font-bold uppercase tracking-wider">System Menu</div>
            <div className="grid grid-cols-3 gap-2.5 my-4 flex-grow">
              <div className="bg-neutral-50 border border-black/10 p-2 flex flex-col justify-between">
                <div className="w-4 h-1 bg-black/20" />
                <div className="w-full h-1.5 bg-[#FA520F]" />
              </div>
              <div className="bg-neutral-50 border border-black/10 p-2 flex flex-col justify-between">
                <div className="w-4 h-1 bg-black/20" />
                <div className="w-full h-1.5 bg-black" />
              </div>
              <div className="bg-neutral-50 border border-black/10 p-2 flex flex-col justify-between">
                <div className="w-4 h-1 bg-black/20" />
                <div className="w-full h-1.5 bg-black/10" />
              </div>
            </div>
            <div className="h-9 bg-black text-white text-[9px] font-bold uppercase tracking-wider flex items-center justify-center">
              Initialize Transaction Loop
            </div>
          </div>
        </div>

        {/* Right Slot: Web Engine UI */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white group hover:bg-neutral-50/20 transition-colors">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-black group-hover:text-[#FA520F] transition-colors">
                <path d="M1 2h10v7H1V2zm1 2v4h8V4H2z" fill="currentColor"/>
              </svg>
              <span className="font-mono text-[9px] text-neutral-400 uppercase font-bold tracking-wider">Enterprise Management Screen</span>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
              Web Command Dashboards
            </h3>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-md">
              Highly responsive back-office interfaces designed to safely orchestrate complex workflow pipelines, permission monitoring, and centralized client statistics.
            </p>
          </div>
          
          {/* Flat Minimalist Structural Blueprint Wireframe */}
          <div className="border border-black bg-white flex h-52 relative overflow-hidden font-mono select-none">
            <div className="w-14 border-r border-black bg-neutral-50 h-full p-2 flex flex-col gap-1.5">
              <div className="w-full h-2 bg-[#FA520F]" />
              <div className="w-2/3 h-1.5 bg-black/20" />
              <div className="w-3/4 h-1.5 bg-black/10" />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between bg-white">
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <div className="h-2 w-16 bg-black" />
                <div className="w-3 h-3 rounded-full bg-neutral-100 border border-black/10" />
              </div>
              <div className="grid grid-cols-2 gap-3 my-2 flex-grow">
                <div className="border border-black/10 bg-neutral-50/50 p-2 flex flex-col justify-between">
                  <span className="text-[7px] text-neutral-400 font-bold uppercase">Verification Pipeline</span>
                  <span className="text-[10px] font-bold tracking-tight text-[#FA520F] uppercase">Active Status</span>
                </div>
                <div className="border border-black/10 bg-neutral-50/50 p-2 flex flex-col justify-between">
                  <span className="text-[7px] text-neutral-400 font-bold uppercase">Response Cycle</span>
                  <span className="text-[10px] font-bold tracking-tight text-black uppercase">Low Latency</span>
                </div>
              </div>
              <div className="h-6 bg-neutral-50 border border-black/20 flex items-center px-2 text-[7px] text-neutral-400 font-bold uppercase tracking-wider">
                Connection Status Stable and Active
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const DataIntelligenceSection = () => {
  const features = [
    { title: 'Business Intelligence', meta: 'By Antera' },
    { title: 'Predictive Analytics', meta: 'By Antera' },
    { title: 'Real-Time Dashboards', meta: 'By Antera' },
    { title: 'Customer Insights', meta: 'By Antera' },
    { title: 'Performance Monitoring', meta: 'By Antera' },
    { title: 'Decision Support Systems', meta: 'By Antera' },
  ];

  return (
    <section className="bg-white border-b border-black text-black font-sans antialiased w-full">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Matrix Link Grid layout */}
        <div className="lg:w-7/12 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 bg-white divide-y sm:divide-y-0 sm:divide-x divide-black border-t lg:border-t-0 border-black items-stretch">
          <div className="divide-y divide-black flex flex-col justify-between h-full">
            {features.slice(0, 3).map((f, i) => (
              <DataFeatureCard key={i} title={f.title} meta={f.meta} />
            ))}
          </div>
          <div className="divide-y divide-black flex flex-col justify-between h-full sm:border-t-0">
            {features.slice(3, 6).map((f, i) => (
              <DataFeatureCard key={i} title={f.title} meta={f.meta} />
            ))}
          </div>
        </div>

        {/* Right Side: Copy block details */}
        <div className="lg:w-5/12 order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-between lg:border-l border-black bg-white">
          <div>
            {/* Custom Pixel Art Icon Combo Header Block */}
            <div className="flex items-center gap-1.5 mb-8 select-none">
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-black">
                <path d="M1 1h8v1H1V1zm0 3h8v1H1V4zm0 3h5v1H1V7zm7 0h2v1H8V7z" fill="currentColor"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="text-[#FA520F]">
                <path d="M4 1h2v8H4V1zM1 4h8v2H1V4z" fill="currentColor"/>
              </svg>

            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
              Turn Raw Data <span className="text-neutral-400 block">Into Actions.</span>
            </h2>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed mb-10">
              We engineer safe analytical warehouses and aggregation loops that systematically empower teams to audit traffic logs, analyze predictions, and extract real insights instantly.
            </p>
            
            <button className="border border-black px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-black text-white hover:bg-[#FA520F] hover:text-white transition-colors flex items-center justify-between gap-6 w-full sm:max-w-xs group">
              <span>Explore Platforms</span> 
              <ArrowRight className="w-4 h-4 text-white transform -translate-x-1 group-hover:translate-x-0 transition-transform stroke-[2.5px]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

/* Data intelligence component card box matching structural columns perfectly */
const DataFeatureCard = ({ title, meta }: { title: string; meta: string }) => (
  <div className="p-8 lg:p-12 bg-white flex flex-col justify-between group hover:bg-neutral-50/40 transition-colors h-48 w-full relative">
    <div className="flex items-center justify-between w-full">
      <svg width="18" height="18" viewBox="0 0 10 10" fill="none" className="text-black/40 group-hover:text-[#FA520F] transition-colors">
        <path d="M1 1h8v1H1V1zm0 3h3v1H1V4zm0 3h5v1H1V7z" fill="currentColor"/>
      </svg>
      <span className="font-mono text-[8px] text-neutral-400 group-hover:text-black transition-colors uppercase font-bold tracking-wider">
        {meta}
      </span>
    </div>
    
    <div className="flex items-end justify-between w-full mt-auto gap-4">
      <h4 className="text-xs font-bold uppercase tracking-wider text-black max-w-[180px] leading-tight group-hover:text-[#FA520F] transition-colors">
        {title}
      </h4>
      <div className="w-1.5 h-1.5 bg-black/10 group-hover:bg-[#FA520F] transition-colors" />
    </div>
  </div>
);