
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Building2, Globe2, Briefcase } from 'lucide-react';

const testimonials = [
  {
    quote: "Antera's neural infrastructure allowed us to scale our processing power by 400% while reducing latency by half. Their engineering team is unmatched.",
    author: "James Wilson",
    role: "CTO, Global Logistics Corp",
    logo: Building2
  },
  {
    quote: "The Sekela APIs have become the backbone of our digital operations. Integration was seamless, and the performance has been flawless.",
    author: "Amina Juma",
    role: "Head of Engineering, Pawa Financial",
    logo: Globe2
  },
  {
    quote: "Strategic AI implementation that actually delivers ROI. Antera doesn't just build models; they solve real business problems.",
    author: "Robert Kowalski",
    role: "COO, Horizon Manufacturing",
    logo: Briefcase
  }
];

export const CustomersPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="py-20 px-6 border-b-4 border-black bg-black text-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-12">
              Our <br />
              <span className="text-[#FA520F]">Partners.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
              {[
                { label: 'Total Deployments', val: '500+' },
                { label: 'Uptime Reliability', val: '99.99%' },
                { label: 'Countries Served', val: '12' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#FA520F] mb-2">{stat.label}</p>
                  <p className="text-5xl font-bold uppercase tracking-tighter">{stat.val}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-12 items-center p-12 border-4 border-black shadow-[12px_12px_0px_0px_#000000] relative group hover:shadow-none transition-all duration-300"
            >
              <div className="w-20 h-20 bg-[#FA520F] flex items-center justify-center border-4 border-black shrink-0">
                <Quote className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="p-2 border-2 border-black">
                    <t.logo className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-widest">{t.author}</p>
                    <p className="text-xs font-mono font-bold text-black/40 uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-black bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16 text-center">Trusted by Industrial Leaders</h2>
           <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
              {/* Logo placeholders - in a real app these would be actual brand SVGs */}
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black"></div>
                  <span className="font-bold uppercase tracking-widest text-xl">BRAND {i}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
