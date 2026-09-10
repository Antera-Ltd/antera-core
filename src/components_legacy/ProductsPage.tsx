'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Code, 
  Settings, 
  Cloud, 
  Box, 
  Brain
} from 'lucide-react';

export const ProductsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const products = [
    { 
      id: 'sekela', 
      title: 'Bonga APIs', 
      desc: 'High-throughput communication endpoints for SMS, USSD, and voice automation.', 
      icon: Code,
      span: 'large'
    },
    { 
      id: 'audit', 
      title: 'Infrastructure Audit', 
      desc: 'Systematic mapping and security auditing of distributed digital assets.', 
      icon: Settings,
      span: 'small'
    },
    { 
      id: 'cloud', 
      title: 'Cloud Orchestration', 
      desc: 'Auto-scaling deployments optimized for latency across the African continent.', 
      icon: Cloud,
      span: 'small'
    },
    { 
      id: 'sdk', 
      title: 'Custom SDKs', 
      desc: 'Tailored integration kits for rapid deployment in mobile and web environments.', 
      icon: Box,
      span: 'small'
    },
    { 
      id: 'ai', 
      title: 'Applied AI Services', 
      desc: 'End-to-end AI solutions for enterprise transformation.', 
      icon: Brain,
      span: 'tall'
    },
    { 
      id: 'ml', 
      title: 'Machine Learning Models', 
      desc: 'State-of-the-art machine learning models trained for African content and contexts.', 
      icon: Brain,
      span: 'large'
    },
  ];

  // Determine grid placement based on span
  const getGridClass = (span: string) => {
    switch(span) {
      case 'large': return 'md:col-span-2';
      case 'tall': return 'md:row-span-2';
      default: return '';
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-[#171321] font-sans w-full py-24 md:py-32 relative overflow-hidden border-t border-gray-100"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#171321] z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <header className="mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Do it all with Antera.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-600 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            High-throughput communication endpoints, infrastructure auditing, and applied AI solutions for the African market.
          </motion.p>
        </header>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            const isPurple = index % 2 === 0;
            const gridClass = getGridClass(product.span);
            
            return (
              <motion.div
                key={product.id}
                className={`${gridClass} flex flex-col justify-between p-10 min-h-[360px] transition-all duration-300 hover:-translate-y-2 ${
                  isPurple 
                    ? 'bg-[#EFE8FF] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]' 
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
              >
                <div>
                  <div className="mb-8">
                    <Icon className="w-12 h-12 text-[#171321]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171321] mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-snug">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPage;