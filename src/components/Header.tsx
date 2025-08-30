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
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <Link href="/" className="transition-colors text-white flex items-center gap-3">
              <AnimatedReactLogo />
              <ShinyText text="Portfolio" speed={4} className="text-2xl font-bold" />
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
              className="md:hidden p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="mt-4 pb-4 border-t border-white/20 bg-white/5 rounded-lg backdrop-blur-lg">
              <div className="flex flex-col space-y-3 pt-4 px-4">
                {navLinks.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="relative text-white/90 hover:text-white py-2 font-medium transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
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
