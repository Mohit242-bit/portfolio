'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Add DrawSVG plugin script dynamically
if (typeof window !== 'undefined') {
  // Load DrawSVG plugin from CDN
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/DrawSVGPlugin.min.js';
  script.async = true;
  document.head.appendChild(script);
}

interface DrawSVGProps {
  children: React.ReactNode;
  className?: string;
}

const DrawSVGSection = ({ children, className = '' }: DrawSVGProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const container = containerRef.current;
    const svg = svgRef.current;

    // Create animated line drawings
    const lines = svg.querySelectorAll('path, line, polyline, polygon, circle, rect');
    
    // Set initial state - hide all paths
    gsap.set(lines, { 
      strokeDasharray: function(index, target) {
        const length = target.getTotalLength ? target.getTotalLength() : 100;
        return `${length} ${length}`;
      },
      strokeDashoffset: function(index, target) {
        return target.getTotalLength ? target.getTotalLength() : 100;
      }
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        markers: false
      }
    });

    // Animate lines drawing
    tl.to(lines, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.inOut"
    });

    // Animate content appearing after lines
    tl.from('.draw-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Animated SVG Lines */}
      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Decorative lines that will be drawn */}
        <path 
          d="M100 100 Q600 50 1100 100" 
          stroke="#3b82f6" 
          strokeWidth="2" 
          fill="none"
          className="draw-line"
        />
        <path 
          d="M100 200 L1100 200" 
          stroke="#8b5cf6" 
          strokeWidth="1" 
          fill="none"
          className="draw-line"
        />
        <path 
          d="M100 700 Q600 750 1100 700" 
          stroke="#10b981" 
          strokeWidth="2" 
          fill="none"
          className="draw-line"
        />
        <circle 
          cx="200" 
          cy="150" 
          r="30" 
          stroke="#f59e0b" 
          strokeWidth="2" 
          fill="none"
          className="draw-line"
        />
        <circle 
          cx="1000" 
          cy="150" 
          r="20" 
          stroke="#ef4444" 
          strokeWidth="2" 
          fill="none"
          className="draw-line"
        />
        <path 
          d="M50 400 L150 300 L250 400 L350 300" 
          stroke="#06b6d4" 
          strokeWidth="2" 
          fill="none"
          className="draw-line"
        />
        <path 
          d="M850 400 L950 300 L1050 400 L1150 300" 
          stroke="#f97316" 
          strokeWidth="2" 
          fill="none"
          className="draw-line"
        />
      </svg>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default DrawSVGSection;
