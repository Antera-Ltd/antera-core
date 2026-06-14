'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const divisionData = [
  { name: 'I', value: 342, fill: '#FA520F' },
  { name: 'II', value: 215, fill: '#111113' },
  { name: 'III', value: '#A3A3A3', fill: '#A3A3A3' },
  { name: 'IV', value: 204, fill: '#E5E5E5' },
  { name: '0', value: 59, fill: '#000000' },
];

const subjectData = [
  { subject: 'Math', fail: 58 },
  { subject: 'English', fail: 22 },
  { subject: 'Science', fail: 35 },
  { subject: 'History', fail: 28 },
  { subject: 'Kiswahili', fail: 12 },
];

const genderData = [
  { name: 'Female', value: 82.5 },
  { name: 'Male', value: 85.1 },
];

export const ModelsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-black font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-16 relative shadow-[4px_4px_0px_0px_#000000]">
          <span className="absolute inset-0 border-t-2 border-l-2 border-neutral-100 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-neutral-200 pointer-events-none" />
          
          <h1 className="text-4xl md:text-7xl font-normal uppercase tracking-tighter leading-none mb-6 font-mono">
            Data <span className="text-[#FA520F] font-bold">Intelligence.</span>
          </h1>
          <p className="text-neutral-600 font-mono text-xs md:text-sm max-w-3xl leading-relaxed font-normal">
            {t('page.models.desc')}
          </p>
        </div>

        {/* Lower Action Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111113] text-white p-8 md:p-12 text-left border-4 border-black relative shadow-[8px_8px_0px_0px_#000000] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <span className="absolute inset-0 border-t-2 border-l-2 border-white/10 pointer-events-none" />
          <span className="absolute inset-0 border-b-2 border-r-2 border-black/40 pointer-events-none" />
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-normal uppercase font-mono tracking-tight">Ready to deploy clean data modules?</h2>
          </div>
          
          <button className="bg-[#FA520F] text-white border-2 border-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-75 shrink-0">
            Contact Engineering
          </button>
        </motion.div>

      </div>
    </div>
  );
};export default ModelsPage;
