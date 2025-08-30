'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import StarBorder from './StarBorder';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins and load SplitText
gsap.registerPlugin(ScrollTrigger);

// Declare SplitText for TypeScript
declare global {
  interface Window {
    SplitText: any;
  }
}

const ProjectsGSAP = () => {
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<any>(null);
  const animationRef = useRef<any>(null);

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Gym Website",
      description: "Complete gym management system with member portal and class booking.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-green-600 to-teal-600",
      icon: "🏋️"
    },
    {
      id: 2,
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery.",
      tech: ["Next.js", "Tailwind", "Framer"],
      gradient: "from-orange-600 to-red-600",
      icon: "🍕"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack web application with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-600 to-purple-600",
      icon: "�"
    },
    {
      id: 4,
      title: "Digital Marketing Website",
      description: "Professional digital marketing website for agencies and freelancers.",
      tech: ["Next.js", "TypeScript", "SEO"],
      gradient: "from-purple-600 to-pink-600",
      icon: "📈"
    }
  ];

  useEffect(() => {
    // Load SplitText plugin
    const loadSplitText = async () => {
      if (typeof window !== 'undefined' && !window.SplitText) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        return new Promise((resolve) => {
          script.onload = resolve;
        });
      }
    };

    loadSplitText().then(() => {
      if (!titleContainerRef.current || !gridContainerRef.current || !window.SplitText) return;

      // Setup SplitText
      const setupSplit = () => {
        if (splitRef.current) splitRef.current.revert();
        if (animationRef.current) animationRef.current.revert();
        
        splitRef.current = new window.SplitText('.projects-title', {
          type: "chars,words,lines"
        });
      };

      setupSplit();

      // Title Animation Timeline with SplitText
      let titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleContainerRef.current,
          pin: true,
          start: 'top top',
          end: '+=800',
          scrub: 1,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: 'power1.inOut'
          }
        }
      });

      // Character animation (like your example)
      titleTl.addLabel('chars')
        .from(splitRef.current.chars, {
          x: 150,
          opacity: 0,
          duration: 0.7,
          ease: "power4",
          stagger: 0.04
        })
        .addLabel('words')
        .to(splitRef.current.words, {
          y: -50,
          rotation: "random(-20, 20)",
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15
        })
        .addLabel('lines')
        .to(splitRef.current.lines, {
          rotationX: 15,
          transformOrigin: "50% 50% -160px",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.25
        })
        .addLabel('final')
        .to(splitRef.current.chars, {
          rotation: 0,
          x: 0,
          y: 0,
          scale: 1,
          color: '#3b82f6',
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.02
        })
        .addLabel('reset')
        .to(splitRef.current.chars, {
          rotation: 0,
          x: 0,
          y: 0,
          scale: 1,
          color: '#ffffff',
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.01
        })
        .to(splitRef.current.words, {
          rotation: 0,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05
        }, "-=0.4")
        .to(splitRef.current.lines, {
          rotationX: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1
        }, "-=0.3")
        .addLabel('end');

      // Projects Grid Animation
      gsap.set('.project-card', { 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        rotation: 10
      });

      gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Individual card hover animations
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, y: -10, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      // Cleanup
      const handleResize = () => setupSplit();
      window.addEventListener('resize', handleResize);

      return () => {
        titleTl.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
        window.removeEventListener('resize', handleResize);
        if (splitRef.current) splitRef.current.revert();
        if (animationRef.current) animationRef.current.revert();
      };
    });
  }, []);

  return (
    <>
      {/* Title Section - SplitText Animation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div 
            ref={titleContainerRef}
            className="min-h-screen flex items-center justify-center relative"
            style={{ perspective: '500px' }}
          >
            <h1 
              className="projects-title text-white font-bold text-center whitespace-nowrap"
              style={{ 
                fontSize: 'clamp(2rem, 12vw, 8rem)',
                lineHeight: '1.2',
                textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                perspective: '500px'
              }}
            >
              Projects you might like
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div 
            ref={gridContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80vw] max-w-[80vw] mx-auto"
          >
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">{project.icon}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-white">Featured</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <StarBorder className="flex-1" color="#C0C0C0">
                      Live Demo
                    </StarBorder>
                    <StarBorder className="flex-1" color="#C0C0C0">
                      View Code
                    </StarBorder>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsGSAP;
