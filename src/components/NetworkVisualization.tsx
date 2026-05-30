import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Globe, Layout, Database, MessageSquare, Bot, Code, LucideIcon } from 'lucide-react'

export const NetworkVisualization = () => {
  const nodes = [
    { icon: Cpu, label: 'AI', x: 20, y: 30 },
    { icon: Zap, label: 'Auto', x: 80, y: 25 },
    { icon: Database, label: 'Data', x: 50, y: 15 },
    { icon: Globe, label: 'APIs', x: 70, y: 70 },
    { icon: Layout, label: 'Apps', x: 30, y: 75 },
    { icon: MessageSquare, label: 'Comm', x: 50, y: 85 },
    { icon: Bot, label: 'Agents', x: 15, y: 55 },
    { icon: Code, label: 'Engine', x: 85, y: 50 },
  ]

  const connections = [
    [0, 2], [1, 2], [2, 7], [7, 3], [3, 5], [5, 4], [4, 6], [6, 0], [0, 7], [1, 3]
  ]

  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([start, end], i) => (
          <motion.line
            key={i}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="#FA520F"
            strokeWidth="0.08"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        >
          <div className="p-2 bg-white border border-brand-orange/20 rounded-none text-brand-orange shadow-sm">
            <node.icon size={12} />
          </div>
          <span className="text-[8px] font-mono text-brand-dark/40 uppercase tracking-tighter font-bold">{node.label}</span>
        </motion.div>
      ))}

      {[...Array(3)].map((_, i) => (
        <DataParticle key={i} delay={i * 3} />
      ))}
    </div>
  )
}

const DataParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-0.5 h-0.5 bg-brand-orange rounded-full"
      initial={{ left: "50%", top: "15%", opacity: 0 }}
      animate={{
        left: ["50%", "85%", "70%", "50%", "15%", "50%"],
        top: ["15%", "50%", "70%", "85%", "55%", "15%"],
        opacity: [0, 0.8, 0.8, 0.8, 0.8, 0]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  )
}
