
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Shield, Server, Zap } from 'lucide-react';

const apiCategories = [
  {
    title: 'Identity & Access',
    desc: 'Secure authentication and role-based access control for multi-tenant applications.',
    endpoints: ['/auth/login', '/auth/mfa', '/users/profile']
  },
  {
    title: 'Operational Logic',
    desc: 'Core business processing engines for financial and logistics workflows.',
    endpoints: ['/logic/process', '/logic/validate', '/logic/commit']
  },
  {
    title: 'Messaging Gateway',
    desc: 'Low-latency SMS, USSD, and social media communication endpoints.',
    endpoints: ['/sms/send', '/ussd/callback', '/social/webhook']
  },
  {
    title: 'Neural Inference',
    desc: 'Direct access to our advanced neural models for real-time predictions.',
    endpoints: ['/ai/predict', '/ai/analyze', '/ai/extract']
  }
];

export const SekelaAPISPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="py-20 px-6 border-b border-black bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
                Sekela <br />
                <span className="text-[#FA520F]">APIS</span>
              </h1>
              <p className="text-lg text-black/60 font-light mb-8">
                Powerful, standardized interface endpoints designed to integrate seamlessly into your existing ecosystem. Robust, secure, and built for scale.
              </p>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600 bg-green-50 px-3 py-1 border border-green-200">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  System Status: Optimal
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-black/40 px-3 py-1 border border-black/10">
                  v2.4.0-stable
                </span>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/3 p-8 border-4 border-black bg-white shadow-[12px_12px_0px_0px_#FA520F]">
            <h3 className="font-bold uppercase mb-4 text-sm">Quick Connectivity</h3>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 border border-black/5 font-mono text-xs">
                curl -X GET "https://api.sekela.io/v2/health"
              </div>
              <button className="w-full bg-black text-white py-3 font-bold uppercase text-xs hover:bg-[#FA520F] transition-colors">
                View Spec (OpenAPI)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {apiCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border-4 border-black bg-white group hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{cat.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="p-3 border-2 border-black group-hover:bg-[#FA520F] group-hover:text-white transition-colors">
                  <Layout className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                {cat.endpoints.map((ep, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border border-black/5 font-mono text-xs hover:border-black/20">
                    <span className="text-[#FA520F] font-bold">GET</span>
                    <span>{ep}</span>
                    <Zap className="w-3 h-3 text-black/20" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
