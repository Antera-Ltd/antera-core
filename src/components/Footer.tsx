import React from 'react'
import { ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react'

export const FinalCTA = () => {
  return (
    <section className="bg-black py-40 border-t border-white/10 relative overflow-hidden mistral-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      <div className="section-container relative z-10 text-center">
        <h2 className="text-6xl md:text-[100px] font-bold mb-12 tracking-tight leading-[0.95] text-mistral-gradient">
          Ready to Build <br /> the <span className="font-serif italic font-normal text-white/90">Future?</span>
        </h2>
        <p className="text-xl text-brand-gray-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Let's discuss how ANTERA can help your organization automate processes, leverage data, and deploy intelligent digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="btn-primary w-full sm:w-auto">
            Start a Project
          </button>
          <button className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-8 w-8 object-contain rounded-none" />
              <span className="text-2xl font-bold tracking-tight">ANTERA</span>
            </div>
            <p className="text-brand-gray-500 text-sm leading-relaxed font-light mb-10">
              Advanced Neural Technologies & Engineering Research Agency. <br /><br />
              Building Intelligent Software, AI Solutions, Automation & Digital Infrastructure.
            </p>
            <div className="flex gap-4">
               {['X', 'LinkedIn', 'GitHub'].map(social => (
                 <a key={social} href="#" className="text-xs font-mono text-brand-gray-600 hover:text-brand-orange transition-colors tracking-widest uppercase">{social}</a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-10 text-[10px] uppercase tracking-[0.3em] text-brand-gray-600">Services</h4>
            <ul className="space-y-6">
              <li><FooterLink>AI Assistants</FooterLink></li>
              <li><FooterLink>Web & Mobile Apps</FooterLink></li>
              <li><FooterLink>Automation</FooterLink></li>
              <li><FooterLink>Data Intelligence</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 text-[10px] uppercase tracking-[0.3em] text-brand-gray-600">Company</h4>
            <ul className="space-y-6">
              <li><FooterLink>About Us</FooterLink></li>
              <li><FooterLink>Careers</FooterLink></li>
              <li><FooterLink>Research</FooterLink></li>
              <li><FooterLink>Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 text-[10px] uppercase tracking-[0.3em] text-brand-gray-600">Contact</h4>
            <ul className="space-y-8">
              <li className="group cursor-pointer">
                <div className="text-[10px] uppercase tracking-widest text-brand-gray-600 mb-2">Email</div>
                <div className="text-sm font-medium group-hover:text-brand-orange transition-colors">hello@antera.ai</div>
              </li>
              <li className="group cursor-pointer">
                <div className="text-[10px] uppercase tracking-widest text-brand-gray-600 mb-2">Support</div>
                <div className="text-sm font-medium group-hover:text-brand-orange transition-colors">WhatsApp Community</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-gray-600 text-[10px] font-mono tracking-widest uppercase">
            © 2026 ANTERA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <FooterLink className="text-[10px] uppercase tracking-widest">Terms</FooterLink>
            <FooterLink className="text-[10px] uppercase tracking-widest">Privacy</FooterLink>
            <FooterLink className="text-[10px] uppercase tracking-widest">Cookies</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a href="#" className={`text-brand-gray-400 hover:text-white transition-colors text-sm font-light ${className}`}>
    {children}
  </a>
)
