import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import { FadeIn } from '../lib/animations'

export const FinalCTA = () => {
  return (
    <section className="bg-primary py-32 relative overflow-hidden">
      <div className="absolute inset-0 mistral-grid opacity-10" />
      <div className="section-container relative z-10 text-center">
        <FadeIn direction="none">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">Ready to Build the Future?</h2>
          <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Let's discuss how ANTERA can help your organization automate processes, leverage data, and deploy intelligent digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-primary px-10 py-5 font-bold rounded-lg hover:bg-white/90 transition-all flex items-center gap-3 group">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white border border-white/30 px-10 py-5 font-bold rounded-lg hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-[#09090B] pt-32 pb-16 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="w-8 h-8 rounded" />
              <span className="text-2xl font-bold tracking-tighter text-white">ANTERA</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Advanced Neural Technologies & <br />Engineering Research Agency
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="hover:text-primary cursor-pointer transition-colors">AI Assistants</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Business Automation</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Mobile Applications</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Web Applications</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="hover:text-primary cursor-pointer transition-colors">Enterprise AI</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Data Intelligence</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Communication Systems</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Digital Infrastructure</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center gap-3 hover:text-primary cursor-pointer transition-colors">
                <Mail className="w-4 h-4" /> hello@antera.ai
              </li>
              <li className="flex items-center gap-3 hover:text-primary cursor-pointer transition-colors">
                <Phone className="w-4 h-4" /> +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-3 hover:text-primary cursor-pointer transition-colors">
                <MessageSquare className="w-4 h-4" /> WhatsApp Support
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">© 2026 ANTERA. All Rights Reserved.</p>
          <div className="flex gap-12 text-gray-500 text-sm">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
