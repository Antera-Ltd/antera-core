import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Globe, Layout, Database, MessageSquare, Bot, Code } from 'lucide-react'

export const NetworkVisualization = () => {
  const nodes = [
    { icon: <Cpu />, label: 'AI', x: 20, y: 30 },
    { icon: <Zap />, label: 'Automation', x: 80, y: 25 },
    { icon: <Database />, label: 'Data', x: 50, y: 15 },
    { icon: <Globe />, label: 'APIs', x: 70, y: 70 },
    { icon: <Layout />, label: 'Apps', x: 30, y: 75 },
    { icon: <MessageSquare />, label: 'Comm', x: 50, y: 85 },
    { icon: <Bot />, label: 'Agents', x: 15, y: 55 },
    { icon: <Code />, label: 'Engine', x: 85, y: 50 },
  ]

  const connections = [
    [0, 2], [1, 2], [2, 7], [7, 3], [3, 5], [5, 4], [4, 6], [6, 0], [0, 7], [1, 3]
  ]

  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Animated Connections */}
        {connections.map(([start, end], i) => (
          <motion.line
            key={i}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="white"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center gap-2"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <div className="p-3 bg-black border border-white/10 rounded-full text-brand-orange">
            {React.cloneElement(node.icon as React.ReactElement, { size: 16 })}
          </div>
          <span className="text-[10px] font-mono text-brand-gray-500 uppercase tracking-tighter">{node.label}</span>
        </motion.div>
      ))}

      {/* Pulsing Data Particles */}
      {[...Array(5)].map((_, i) => (
        <DataParticle key={i} delay={i * 2} />
      ))}
    </div>
  )
}

const DataParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-brand-orange rounded-full blur-[1px]"
      initial={{ left: "50%", top: "15%", opacity: 0 }}
      animate={{
        left: ["50%", "85%", "70%", "50%", "15%", "50%"],
        top: ["15%", "50%", "70%", "85%", "55%", "15%"],
        opacity: [0, 1, 1, 1, 1, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  )
}
