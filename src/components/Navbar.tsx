import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F1F1F]/80 backdrop-blur-xl border-b border-brand-cream/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-3">
            <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-8 w-8 object-contain rounded-none grayscale brightness-200 contrast-200" />
            <span className="text-xl font-bold tracking-tight text-brand-cream">ANTERA</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#models">Models</NavLink>
            <NavLink href="#company">Company</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-xs uppercase tracking-widest font-bold text-brand-cream/60 hover:text-brand-cream transition-colors">
            Contact sales
          </button>
          <button className="btn-primary py-2 text-xs uppercase tracking-[0.2em] font-bold">
            Start building
          </button>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-xs uppercase tracking-[0.2em] font-bold text-brand-cream/50 hover:text-brand-orange transition-colors"
  >
    {children}
  </a>
)
