'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, Landmark, Globe } from 'lucide-react';

export const CompanyPage = () => {
  const { t } = useLanguage();
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  const principles = [
    { title: 'Mission', desc: 'Accelerating digital independence through high-performance engineering.', icon: Target },
    { title: 'Global Reach', desc: 'Deploying edge infrastructure across multiple continents.', icon: Globe },
    { title: 'Governance', desc: 'Absolute compliance with international data safety standards.', icon: Landmark },
    { title: 'Talent', desc: 'A collective of rigorous technical minds.', icon: Users },
  ];

  const matrixBlocks = Array.from({ length: 16 });

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Identity Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-24">
          
          {/* Main Typography Control Node */}
          <div className="border-4 border-black bg-white p-8 md:p-12 flex flex-col justify-center relative shadow-[4px_4px_0px_0px_#000000]">
            <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
            <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
            
            <h1 className="text-5xl md:text-7xl font-normal uppercase tracking-tighter leading-[0.9] mb-8 font-mono">
              Agency <br /> of <span className="text-neutral-400 font-bold">Scale.</span>
            </h1>
            
            <p className="text-neutral-600 font-mono text-xs md:text-sm leading-relaxed font-normal">
              {t('page.company.desc')}
            </p>
          </div>


          <div className="min-h-[300px] lg:h-auto border-4 border-black bg-neutral-50 relative overflow-hidden shadow-[8px_8px_0px_0px_#FA520F] p-8 flex items-center justify-center">
            <span className="absolute inset-0 border-t-4 border-l-4 border-white pointer-events-none" />
            <span className="absolute inset-0 border-b-4 border-r-4 border-neutral-300 pointer-events-none" />
            
            {/* Geometric interactive layout mesh */}
            <div className="grid grid-cols-4 gap-2 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000000]">
              {matrixBlocks.map((_, index) => {
                const isShapeA = [1, 5, 9, 10].includes(index);
                const isShapeB = [12, 13, 14].includes(index);
                
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredBlock(index)}
                    onMouseLeave={() => setHoveredBlock(null)}
                    className={`w-10 h-10 border-2 border-black transition-all duration-100 cursor-crosshair relative ${
                      isShapeA 
                        ? 'bg-black text-white' 
                        : isShapeB 
                        ? 'bg-[#FA520F]' 
                        : 'bg-neutral-100 hover:bg-neutral-200'
                    } ${hoveredBlock === index ? 'scale-95 shadow-inner' : ''}`}
                  >
                    <span className="absolute inset-0 border-t border-l border-white/20 pointer-events-none" />
                    <span className="absolute inset-0 border-b border-r border-black/20 pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Principles Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {principles.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border-4 border-black p-6 md:p-8 flex flex-col justify-between group shadow-[4px_4px_0px_0px_#000000] transition-transform duration-75 relative"
            >
              <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none group-hover:border-neutral-200" />
              <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
              
              <div>
                <div className="w-10 h-10 border-2 border-black bg-neutral-50 text-black group-hover:bg-[#FA520F] group-hover:text-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_#000000] transition-colors duration-100 shrink-0">
                  <item.icon className="w-4 h-4 stroke-[2.5px]" />
                </div>
                
                <h3 className="text-base font-bold uppercase mb-3 font-mono tracking-wider text-neutral-900">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 font-mono text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};export default CompanyPage;
