import React from 'react'
import { motion } from 'framer-motion'

export const NetworkVisualization = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-w-[600px] text-black/10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Background Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 800}
            cy={Math.random() * 600}
            r={Math.random() * 2 + 1}
            fill="currentColor"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central Core Connection */}
        <motion.circle
          cx="400"
          cy="300"
          r="80"
          stroke="#FA520F"
          strokeWidth="1"
          strokeDasharray="10 5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.circle
          cx="400"
          cy="300"
          r="120"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Technical Symbols */}
        <g className="text-[#FA520F]">
          <motion.path
            d="M380 280L420 320M420 280L380 320"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>

        {/* Connecting Lines */}
        <path
          d="M400 300L200 150M400 300L600 150M400 300L200 450M400 300L600 450"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FA520F]/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-[80px]" />
    </div>
  )
}
