// 'use client';
// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ArrowUpRight, 
//   Store, 
//   Warehouse, 
//   ShoppingCart,
//   FileText,
//   Search,
//   MessageCircle,
//   Crown,
//   BarChart3,
//   Link,
//   Smartphone
// } from 'lucide-react';

// const marqueeItems = [
//   {
//     product: 'Sekela Pos',
//     title: 'Cloud-Native POS',
//     desc: 'Designed to digitize and scale MSMEs across Tanzania and East Africa. Modernizing the entire retail ecosystem.',
//     icon: Store,
//   },
//   {
//     product: 'Sekela Pos',
//     title: 'Smart Fulfillment',
//     desc: 'Balance inventory, automate replenishment, and optimize across stores, warehouses, and digital channels seamlessly.',
//     icon: Warehouse,
//   },
//   {
//     product: 'Sekela Pos',
//     title: 'Branch Management',
//     desc: 'Track units from warehouse to customer, manage transfers, and get instant stock valuations in real-time.',
//     icon: ShoppingCart,
//   },
//   {
//     product: 'Kava',
//     title: 'AI Resume Enhancer',
//     desc: 'Multi-step builder with smart AI enhancement for summaries and achievements. Built for the modern professional.',
//     icon: FileText,
//   },
//   {
//     product: 'Kava',
//     title: 'Skill Gap Analysis',
//     desc: 'Compare your CV against job descriptions to identify missing skills immediately. Jumpstart your career path.',
//     icon: Search,
//   },
//   {
//     product: 'Kava',
//     title: 'Kenja AI Coach',
//     desc: 'Context-aware career assistant supporting English & Swahili with personalized job matches tailored to you.',
//     icon: MessageCircle,
//   },
//   {
//     product: 'Kava',
//     title: 'Tiered Access',
//     desc: 'Tiered subscription options tailored for every professional: Bure (Free), Eva (Premium), & Sekela (Pro).',
//     icon: Crown,
//   },
//   {
//     product: 'Sekela Pos',
//     title: 'Real-Time Insights',
//     desc: 'Make data-driven decisions with real-time analytics and reporting dashboards at your fingertips.',
//     icon: BarChart3,
//   },
//   {
//     product: 'Kava',
//     title: 'Seamless Integrations',
//     desc: 'Connect with your favorite tools and platforms for a unified workflow experience without friction.',
//     icon: Link,
//   },
//   {
//     product: 'Sekela Pos',
//     title: 'Mobile POS',
//     desc: 'Manage your business on the go with our mobile-first point of sale solution. Anywhere, Anytime.',
//     icon: Smartphone,
//   },
// ];

// export const NewProductsMarquee = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

//   return (
//     <section 
//       ref={containerRef} 
//       className="text-black font-sans w-full overflow-hidden relative selection:bg-[#FA520F] selection:text-white"
//       style={{ backgroundColor: '#F9FAFB' }}
//     >
//       {/* Subtle background */}
//       <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
//       </div>

//       <div className="w-full py-20 md:py-28 relative z-10">
        
//         {/* Header matched to the split layout in the design */}
//         <header className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-20 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
//           <motion.h1 
//             className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.05]"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           >
//             What we are<br />building.
//           </motion.h1>
//           <motion.div 
//             className="pb-2 md:pb-4"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.15, duration: 0.6 }}
//           >
//             <p className="text-lg md:text-xl max-w-md leading-relaxed text-neutral-600 font-medium">
//               Explore our upcoming platforms for the future of business and career development in East Africa.
//             </p>
//           </motion.div>
//         </header>

//         {/* Marquee Section */}
//         <div className="relative w-full overflow-hidden py-4">
          
//           <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

//           <motion.div
//             className="flex gap-6 w-max relative z-10 px-6"
//             animate={{ x: [0, -4000] }}
//             transition={{
//               duration: 50,
//               ease: 'linear',
//               repeat: Infinity,
//               repeatType: 'loop',
//             }}
//             whileHover={{ transition: { duration: 80 } }}
//           >
//             {duplicatedItems.map((item, index) => {
//               const Icon = item.icon;
//               // Applying product-specific accent colors to match the colored text in the design
//               const accentColor = item.product === 'Sekela Pos' ? 'text-blue-500' : 'text-orange-400';
              
//               // Formatting index for the top-left number
//               const itemNumber = String((index % marqueeItems.length) + 1).padStart(2, '0');

//               return (
//                 <motion.div
//                   key={index}
//                   className="w-[320px] md:w-[360px] shrink-0 bg-[#1C1C1C] p-8 md:p-10 flex flex-col h-[480px] rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 >
//                   <div className="flex flex-col h-full">
                    
//                     {/* Top Number */}
//                     <div className="text-white/30 text-sm font-mono mb-8">
//                       {itemNumber}
//                     </div>
                    
//                     {/* Colored Label with Icon */}
//                     <div className={`flex items-center gap-2 mb-4 ${accentColor}`}>
//                       <Icon className="w-4 h-4" />
//                       <span className="text-sm font-medium tracking-wide">
//                         {item.product}
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h4 className="text-[26px] md:text-3xl font-semibold text-white tracking-tight leading-snug mb-5">
//                       {item.title}
//                     </h4>

//                     {/* Description */}
//                     <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed flex-grow">
//                       {item.desc}
//                     </p>

//                     {/* Bottom Action Button */}
//                     <button className="relative w-full py-3.5 px-4 rounded-full text-[15px] font-semibold mt-auto overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
//                       {/* Glass background with blur effect */}
//                       <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full" />
                      
//                       {/* Shine overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
//                       {/* Inner glow */}
//                       <div className="absolute inset-[1px] bg-gradient-to-b from-white/5 to-transparent rounded-full" />
                      
//                       {/* Button content */}
//                       <span className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
//                         Explore {item.product}
//                         <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//                       </span>
//                     </button>

//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Call to Action Bottom Section */}
//         <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <a
//             href="https://wa.me/255760984921"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#EAEAEA] text-black p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-[#DCDCDC] transition-colors duration-200 rounded-2xl"
//           >
//             <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Request a Demo</h3>
//             <ArrowUpRight className="w-8 h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
//           </a>
//           <a
//             href="https://wa.me/255760984921"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#1C1C1C] text-white p-8 md:p-10 flex items-center justify-between group cursor-pointer hover:bg-black transition-colors duration-200 rounded-2xl"
//           >
//             <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Start Building</h3>
//             <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };