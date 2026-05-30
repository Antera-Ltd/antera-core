import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffaeb]/80 backdrop-blur-xl border-b border-[#1F1F1F]/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-3">
            <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-8 w-8 object-contain rounded-none contrast-125" />
            <span className="text-xl font-bold tracking-tight text-[#1F1F1F]">ANTERA</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#models">Models</NavLink>
            <NavLink href="#company">Company</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-xs uppercase tracking-widest font-bold text-[#1F1F1F]/60 hover:text-[#1F1F1F] transition-colors">
            Contact sales
          </button>
          <button className="bg-[#FA520F] text-[#fffaeb] px-6 py-2 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#1F1F1F] transition-all">
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
    className="text-xs uppercase tracking-[0.2em] font-bold text-[#1F1F1F]/50 hover:text-[#FA520F] transition-colors"
  >
    {children}
  </a>
)
