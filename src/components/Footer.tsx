import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import { FadeIn } from '../lib/animations'

export const Footer = () => {
  return (
    <footer className="bg-[#fffaeb] pt-32 pb-12 border-t border-[#1F1F1F]/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-bold tracking-tight text-[#1F1F1F]">ANTERA</span>
            </div>
            <p className="text-[#1F1F1F]/50 font-light leading-relaxed mb-8">
              Advanced Neural Technologies & Engineering Research Agency.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#1F1F1F]">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="#">AI Solutions</FooterLink>
              <FooterLink href="#">App Development</FooterLink>
              <FooterLink href="#">Data Science</FooterLink>
              <FooterLink href="#">Automation</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#1F1F1F]">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Solutions</FooterLink>
              <FooterLink href="#">Models</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#1F1F1F]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#1F1F1F]/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@antera.agency</span>
              </li>
              <li className="flex items-center gap-3 text-[#1F1F1F]/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-[#1F1F1F]/60">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">WhatsApp Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#1F1F1F]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#1F1F1F]/40 font-mono uppercase tracking-widest">
            © 2026 ANTERA. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-[#1F1F1F]/40 hover:text-[#FA520F] transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs text-[#1F1F1F]/40 hover:text-[#FA520F] transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-sm text-[#1F1F1F]/50 hover:text-[#FA520F] transition-colors font-light">
      {children}
    </a>
  </li>
)

export const FinalCTA = () => {
  return (
    <section className="bg-white py-32">
      <div className="section-container">
        <div className="bg-[#FA520F] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 mistral-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-bold text-[#fffaeb] mb-8 tracking-tighter">Ready to Build <br />the Future?</h2>
              <p className="text-[#fffaeb]/80 text-xl font-light leading-relaxed mb-12">
                Let's discuss how ANTERA can help your organization automate processes, leverage data, and deploy intelligent digital solutions.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-[#fffaeb] text-[#FA520F] px-8 py-4 font-bold hover:bg-[#1F1F1F] hover:text-[#fffaeb] transition-all">
                  Start a Project
                </button>
                <button className="border border-[#fffaeb] text-[#fffaeb] px-8 py-4 font-bold hover:bg-[#fffaeb] hover:text-[#FA520F] transition-all">
                  Contact Us
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
