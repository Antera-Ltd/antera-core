
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

interface BlogLink {
  title: string
  href: string
}

interface CategoryItem {
  name: string
  href: string
}

export const Navbar = () => {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const blogLatestPosts: BlogLink[] = [
    { title: 'Antera Group Office ', href: '#' },
    { title: 'Solutions.', href: '#' },
    { title: 'Introducing Search Toolkit', href: '#' },
  ]

  const blogCategories: CategoryItem[] = [
    { name: 'Product', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Engineering', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Company', href: '#' },
  ]

  return (
    <>
      {/* Top Header */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black text-[14px] font-sans antialiased"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex items-stretch justify-between h-14">
          
          {/* Left Navigation Block */}
          <div className="flex items-stretch">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 px-6 border-r border-black hover:bg-neutral-50 transition-colors flex-shrink-0">
              <img src="/antera-logo.jpeg" alt="ANTERA Logo" className="h-6 w-6 object-contain" />
              <span className="font-bold tracking-wider text-black text-sm">ANTERA</span>
            </Link>

            {/* Nav Items */}
            <div className="hidden lg:flex items-stretch">
              <Link to="/products" className="px-5 border-r border-black font-medium text-black/80 hover:text-black transition-colors flex items-center">
                {t('nav.products')}
              </Link>
              <Link to="/solutions" className="px-5 border-r border-black font-medium text-black/80 hover:text-black transition-colors flex items-center">
                {t('nav.solutions')}
              </Link>
              <Link to="/sekela-apis" className="px-5 border-r border-black font-medium text-black/80 hover:text-black transition-colors flex items-center">
                {t('nav.sekela_apis')}
              </Link>
              <Link to="/developers" className="px-5 border-r border-black font-medium text-black/80 hover:text-black transition-colors flex items-center">
                {t('nav.developers')}
              </Link>
              
              {/* Active / Dropdown Trigger (Blog) */}
              <button 
                onMouseEnter={() => setActiveMenu('Blog')}
                className={`px-5 border-r border-black font-medium transition-colors flex items-center gap-1 ${
                  activeMenu === 'Blog' ? 'bg-[#fffaeb] text-black' : 'text-black/80 hover:text-black'
                }`}
              >
                {t('nav.blog')}
              </button>

              <Link to="/customers" className="px-5 border-r border-black font-medium text-black/80 hover:text-black transition-colors flex items-center">
                {t('nav.customers')}
              </Link>
              <Link to="/company" className="px-5 border-r border-black font-medium text-black/80 hover:text-black transition-colors flex items-center">
                {t('nav.company')}
              </Link>
            </div>
          </div>

          {/* Right Action Block */}
          <div className="hidden lg:flex items-stretch">
            <button className="px-6 flex items-center gap-2 border-l border-black font-medium text-black hover:bg-neutral-50 transition-colors">
              {t('nav.start_building')}
              <ChevronDown className="w-4 h-4 opacity-60" />
            </button>
            <a href="#" className="px-6 bg-black text-white font-medium flex items-center justify-center hover:bg-neutral-900 transition-colors gap-2">
              {t('nav.contact_sales')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden px-6 flex items-center justify-center text-black border-l border-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* The Rigid Structural Dropdown Panel */}
        <AnimatePresence>
          {activeMenu === 'Blog' && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.1 }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-black z-40"
            >
              <div className="flex max-w-[680px] border-r border-black">
                
                {/* Left Column: Latest Posts */}
                <div className="w-7/12 border-r border-black flex flex-col">
                  <div className="px-6 py-4 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50/50 border-b border-black/5">
                    Latest Posts
                  </div>
                  <div className="flex flex-col divide-y divide-black/5">
                    {blogLatestPosts.map((post, i) => (
                      <a 
                        key={i} 
                        href={post.href} 
                        className="px-6 py-4 flex items-center justify-between text-black hover:bg-neutral-50 font-medium group transition-colors"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform duration-150">{post.title}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-black/40 group-hover:text-black transition-colors" />
                      </a>
                    ))}
                  </div>
                  <a href="#" className="px-6 py-4 mt-auto border-t border-black/5 text-xs font-bold text-black flex items-center gap-1.5 hover:bg-neutral-50 transition-colors">
                    Read all news
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Right Column: Categories */}
                <div className="w-5/12 bg-white flex flex-col">
                  <div className="px-6 py-4 text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-neutral-50/50 border-b border-black/5">
                    Categories
                  </div>
                  <div className="p-6 flex flex-col gap-3 font-medium text-black">
                    {blogCategories.map((category, i) => (
                      <a 
                        key={i} 
                        href={category.href} 
                        className="hover:text-neutral-500 transition-colors"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-14 bg-white z-40 lg:hidden flex flex-col divide-y divide-black border-t border-black overflow-y-auto"
          >
            <div className="flex flex-col divide-y divide-black/10 text-base font-medium">
              <Link to="/products" className="px-6 py-4 hover:bg-neutral-50" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.products')}</Link>
              <Link to="/solutions" className="px-6 py-4 hover:bg-neutral-50" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.solutions')}</Link>
              <Link to="/sekela-apis" className="px-6 py-4 hover:bg-neutral-50" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.sekela_apis')}</Link>
              <Link to="/developers" className="px-6 py-4 hover:bg-neutral-50" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.developers')}</Link>
              <Link to="/blog" className="px-6 py-4 bg-[#fffaeb]" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.blog')}</Link>
              <Link to="/customers" className="px-6 py-4 hover:bg-neutral-50" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.customers')}</Link>
              <Link to="/company" className="px-6 py-4 hover:bg-neutral-50" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.company')}</Link>
            </div>
            <div className="mt-auto bg-neutral-50 flex flex-col divide-y divide-black border-t border-black">
              <button className="p-4 font-medium text-center text-black">{t('nav.start_building')}</button>
              <a href="#" className="p-4 font-medium text-center bg-black text-white">{t('nav.contact_sales')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

