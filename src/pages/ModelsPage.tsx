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

// Data derived from NECTA FTNA 2020 Analysis
const divisionData = [
  { name: 'I', value: 342, fill: '#FA520F' },
  { name: 'II', value: 215, fill: '#09090B' },
  { name: 'III', value: 180, fill: '#3b82f6' },
  { name: 'IV', value: 204, fill: '#10b981' },
  { name: '0', value: 59, fill: '#ef4444' },
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
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-8 border-[#FA520F] pl-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#09090B] mb-4">
            Data <span className="text-neutral-400">Intelligence.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            {t('page.models.desc')}
          </p>
        </motion.div>

        {/* Live Case Study: NECTA FTNA 2020 */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-black/10" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FA520F]">
              Live Case Study: NECTA FTNA 2020
            </h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Division Distribution */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2 bg-neutral-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000]"
            >
              <h3 className="text-lg font-bold uppercase mb-8 font-mono">Performance by Division</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={divisionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#000', border: 'none', color: '#fff' }}
                      itemStyle={{ color: '#FA520F' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {divisionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Pass Rate Pie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#FA520F]"
            >
              <h3 className="text-lg font-bold uppercase mb-8 font-mono text-[#FA520F]">Overall Pass Rate</h3>
              <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Pass', value: 941 },
                        { name: 'Fail', value: 59 }
                      ]}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#FA520F" />
                      <Cell fill="#3F3F46" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl font-bold">94.1%</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500">Qualified</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subject Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white border-4 border-black p-6">
              <h4 className="text-xs font-bold uppercase mb-4 text-neutral-400">Gender Parity</h4>
              <div className="space-y-6">
                {genderData.map((g) => (
                  <div key={g.name}>
                    <div className="flex justify-between text-sm font-bold uppercase mb-2">
                      <span>{g.name}</span>
                      <span>{g.value}%</span>
                    </div>
                    <div className="h-2 bg-neutral-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.value}%` }}
                        className="h-full bg-[#FA520F]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 lg:col-span-2">
              <h4 className="text-xs font-bold uppercase mb-4 text-neutral-400">Subject-Specific Failure Rates (High Risk)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {subjectData.map((s) => (
                  <div key={s.subject} className="flex flex-col items-center p-4 bg-neutral-50 border border-neutral-200">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase mb-2">{s.subject}</span>
                    <span className={`text-2xl font-bold ${s.fail > 30 ? 'text-[#FA520F]' : 'text-black'}`}>
                      {s.fail}%
                    </span>
                    <span className="text-[8px] uppercase tracking-tighter mt-1 text-neutral-400">Failure Rate</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#09090B] text-white p-12 text-center border-4 border-black relative overflow-hidden"
        >
          <div className="mistral-grid absolute inset-0 opacity-20" />
          <h2 className="text-3xl font-bold uppercase mb-6 relative z-10">Ready to build your dashboard?</h2>
          <button className="bg-[#FA520F] text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors relative z-10">
            Contact Engineering
          </button>
        </motion.div>
      </div>
    </div>
  );
};
