'use client'

import { useState, useEffect } from 'react'
import ShinyText from './ShinyText'
import AnimatedReactLogo from './AnimatedReactLogo'
import Link from 'next/link'

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-white/3 backdrop-blur-lg'
      }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
            <Link href="/" className="transition-colors text-white flex items-center gap-2 sm:gap-3">
              <AnimatedReactLogo />
              <ShinyText text="Portfolio" speed={4} className="text-xl sm:text-2xl font-bold" />
            </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="relative font-medium text-white/90 transition-all duration-300 hover:text-white py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
          </div>

          {/* CTA Button */}
          {/* You can add a CTA button here if needed, currently left empty */}
          <div className="hidden md:block"></div>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10 backdrop-blur-sm active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-white/20 bg-white/5 rounded-lg backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1 sm:space-y-2 pt-3 sm:pt-4 px-3 sm:px-4">
                {navLinks.map((item, index) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="relative text-white/90 hover:text-white active:text-blue-400 py-3 sm:py-2 px-2 font-medium transition-all duration-300 group rounded-lg hover:bg-white/5 active:bg-white/10 text-center sm:text-left"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-1rem)]"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
