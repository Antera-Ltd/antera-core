
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Braces, Rocket, ShieldCheck } from 'lucide-react';

export const DevelopersPage = () => {
  return (
    <div className="bg-[#09090B] text-white min-h-screen font-mono">
      {/* Dev Header */}
      <section className="py-24 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#FA520F 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#FA520F] rounded-full animate-pulse"></div>
              <span className="text-[#FA520F] uppercase font-bold tracking-[0.3em] text-xs">Developer Portal</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8] mb-8">
              Built by <br />
              <span className="text-[#FA520F]">Engineers.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl font-light mb-12">
              Advanced tooling, comprehensive documentation, and robust APIs designed for building industrial-grade AI applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 font-bold uppercase text-xs hover:bg-[#FA520F] hover:text-white transition-colors">
                View Documentation
              </button>
              <button className="border border-white/20 px-6 py-3 font-bold uppercase text-xs hover:bg-white/5 transition-colors">
                Get API Key
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack / Features */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { icon: Terminal, title: 'CLI Tools', desc: 'Powerful command-line interface for managing neural workloads.' },
            { icon: Code2, title: 'SDKs', desc: 'Native support for Python, TypeScript, Rust, and Go.' },
            { icon: Braces, title: 'REST & gRPC', desc: 'Flexible API endpoints with low-latency performance.' },
            { icon: Cpu, title: 'GPU Access', desc: 'Direct orchestration of bare-metal GPU resources.' },
            { icon: ShieldCheck, title: 'Secure Vault', desc: 'End-to-end encryption for all model parameters.' },
            { icon: Rocket, title: 'Fast Deploy', desc: 'One-click deployment to global edge nodes.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#09090B] p-12 hover:bg-white/[0.02] transition-colors group">
              <item.icon className="w-8 h-8 text-[#FA520F] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold uppercase mb-4 tracking-wider">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="border border-white/10 bg-white/[0.01] p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-widest">quickstart.py</span>
          </div>
          <pre className="text-sm md:text-base text-white/80 overflow-x-auto">
            <code>{`import antera

# Initialize Antera Client
client = antera.Client(api_key="your_api_key")

# Deploy a Neural Node
node = client.nodes.create(
    model="antera-core-v1",
    region="us-east-1",
    scaling="auto"
)

print(f"Node deployed at: {node.endpoint}")`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};
