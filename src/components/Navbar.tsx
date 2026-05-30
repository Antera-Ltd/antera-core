import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-8 w-8 object-contain rounded" />
            <span className="text-xl font-bold tracking-tight">ANTERA</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#models">Models</NavLink>
            <NavLink href="#company">Company</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium hover:text-white/70 transition-colors">
            Contact sales
          </button>
          <button className="btn-primary py-2 text-sm">
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
    className="text-sm font-medium text-white/60 hover:text-white transition-colors"
  >
    {children}
  </a>
)
