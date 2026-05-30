import React from 'react'
import { motion } from 'framer-motion'

const PARTNERS = [
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
  { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
  { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.svg' },
  { name: 'Hugging Face', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Hugging_Face_logo.svg' },
  { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg' },
  { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg' },
]

export const LogoCloud = () => {
  return (
    <div className="bg-[#09090B] py-16 border-b border-white/5">
      <div className="section-container">
        <p className="text-center text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-12">
          Infrastructure Partners & Trusted By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="flex justify-center px-4">
              <img
                className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-70"
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
