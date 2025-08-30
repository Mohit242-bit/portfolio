'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Add MotionPath plugin script dynamically
if (typeof window !== 'undefined') {
  // Load MotionPath plugin from CDN
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/MotionPathPlugin.min.js';
  script.async = true;
  document.head.appendChild(script);
}

interface MotionPathProps {
  children: React.ReactNode;
  className?: string;
}

const MotionPathSection = ({ children, className = '' }: MotionPathProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current || !elementRef.current) return;

    const container = containerRef.current;
    const path = pathRef.current;
    const element = elementRef.current;

    // Create motion path animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    // Animate element along the path
    tl.to(element, {
      duration: 3,
      ease: "none",
      motionPath: {
        path: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });

    // Animate path drawing
    gsap.fromTo(path, 
      {
        strokeDasharray: function() {
          return path.getTotalLength() + " " + path.getTotalLength();
        },
        strokeDashoffset: function() {
          return path.getTotalLength();
        }
      },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "center center",
          scrub: 1
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* SVG Path */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path 
          ref={pathRef}
          d="M100 400 Q300 200 600 400 T1100 400" 
          stroke="#3b82f6" 
          strokeWidth="3" 
          fill="none"
          className="motion-path"
        />
      </svg>

      {/* Moving Element */}
      <div 
        ref={elementRef}
        className="absolute w-6 h-6 bg-blue-500 rounded-full shadow-lg z-20"
        style={{ 
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
          filter: 'blur(0px)'
        }}
      >
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};

export default MotionPathSection;
