
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Shield, Zap, BarChart } from 'lucide-react';

const products = [
  {
    title: 'Antera Core',
    description: 'The foundation of our neural architecture, providing low-latency inference and robust scaling capabilities.',
    icon: Cpu,
    color: '#FA520F'
  },
  {
    title: 'Neural Stream',
    description: 'Real-time data processing pipeline designed for high-throughput operational environments.',
    icon: Zap,
    color: '#000000'
  },
  {
    title: 'Edge Sentinel',
    description: 'Secure, localized AI deployment for sensitive data and off-grid operational requirements.',
    icon: Shield,
    color: '#FA520F'
  },
  {
    title: 'Global Mesh',
    description: 'Distributed infrastructure for seamless synchronization across multiple geographic regions.',
    icon: Globe,
    color: '#000000'
  },
  {
    title: 'Data Vault',
    description: 'Encrypted, high-performance storage solution for enterprise-grade data intelligence.',
    icon: Database,
    color: '#FA520F'
  },
  {
    title: 'Insight Matrix',
    description: 'Advanced analytics and visualization layer for real-time decision support.',
    icon: BarChart,
    color: '#000000'
  }
];

export const ProductsPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-black bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6"
          >
            Our <span className="text-neutral-400">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-black/60 max-w-2xl font-light"
          >
            Engineering the next generation of neural infrastructure. Each product is a building block for absolute operational intelligence.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
            >
              <div className="mb-6">
                <product.icon className="w-12 h-12" style={{ color: product.color }} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{product.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed mb-8">{product.description}</p>
              <button className="text-xs font-mono font-bold uppercase tracking-wider border-b-2 border-black pb-1 hover:text-[#FA520F] hover:border-[#FA520F] transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
