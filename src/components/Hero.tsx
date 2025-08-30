'use client'

import { useState, useEffect } from 'react';
import ShinyText from './ShinyText';
import StarBorder from './StarBorder';
import { Plasma } from './Plasma';

export default function Hero() {
  const [plasmaColor, setPlasmaColor] = useState('#6366f1');

  useEffect(() => {
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setPlasmaColor(colors[colorIndex]);
    }, 8000); // Change color every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-32 bg-black">
      {/* Plasma Background */}
      <div className="absolute inset-0 z-0">
        <Plasma 
          color={plasmaColor} 
          speed={0.5} 
          direction="forward" 
          scale={1.0} 
          opacity={0.6} 
          mouseInteractive={true}
        />
      </div>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-10"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Creating Digital
            <ShinyText text="Experiences" speed={4} className="block" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate web developer specializing in modern, responsive websites 
            that help businesses grow and make a lasting impression online.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <StarBorder as="a" href="#projects" className="px-10 py-4 text-lg font-semibold" color="#C0C0C0" style={{background: '#000'}}>
              <span className="flex items-center justify-center">
                View My Work
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </StarBorder>
            <StarBorder as="a" href="#contact" className="px-10 py-4 text-lg font-semibold" color="#C0C0C0" style={{background: '#000'}}>
              <span className="flex items-center justify-center">
                Get In Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </StarBorder>
          </div>
          {/* Stats panels hidden on initial load. If needed, move these to About or below the fold. */}
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
