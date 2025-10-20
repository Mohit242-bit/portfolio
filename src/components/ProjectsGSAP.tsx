'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import StarBorder from './StarBorder';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * PROJECT DATA SOURCE:
 * All project links and deployment URLs are fetched from your GitHub repositories:
 * API: https://api.github.com/users/Mohit242-bit/repos
 * 
 * The live demo URLs come from:
 * - `homepage` field in each GitHub repository
 * - Vercel deployments (restaurent-hazel.vercel.app, ecommerceh.vercel.app, etc.)
 * - GitHub Pages deployments
 * 
 * These are YOUR real projects from your GitHub account.
 * You can verify them at: https://github.com/Mohit242-bit
 */

// Image component with loading and error handling
const ProjectImage = ({ src, alt, gradient, icon, className }: {
  src: string;
  alt: string;
  gradient: string;
  icon: string;
  className?: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageError && (
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      )}
      {/* Fallback gradient - shown when image fails or while loading */}
      <div className={`${
        imageError || !imageLoaded ? 'opacity-100' : 'opacity-0'
      } absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-500`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl animate-pulse">{icon}</div>
        </div>
      </div>
    </div>
  );
};

const ProjectsGSAP = () => {
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Featured projects - Updated with only 4 projects for home page
  const featuredProjects = [
    {
      id: 1,
      title: "Morphoverse",
      description: "Modern design system and component library with TypeScript and Storybook integration for scalable UI development.",
      tech: ["TypeScript", "React", "Design System"],
      gradient: "from-purple-600 to-pink-600",
      icon: "�",
      liveUrl: "https://morpho-beryl.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/morpho",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Scanezy",
      description: "Advanced scanning and document processing application with real-time analysis and KYC verification capabilities.",
      tech: ["TypeScript", "React", "Computer Vision"],
      gradient: "from-blue-600 to-cyan-600",
      icon: "�",
      liveUrl: "https://scane-kycs.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/scane",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery with Next.js and Vercel deployment.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-orange-600 to-red-600",
      icon: "🍕",
      liveUrl: "https://restaurent-hazel.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/restaurent",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "E-Commerce Website",
      description: "Full-featured online store with payment integration, product catalog, and admin dashboard for seamless shopping.",
      tech: ["React", "Next.js", "Stripe", "TypeScript"],
      gradient: "from-green-600 to-teal-600",
      icon: "�",
      liveUrl: "https://ecommerceh.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center"
    }
  ];



  useEffect(() => {
    // Enhanced GSAP animations for better visual impact
    if (!titleContainerRef.current || !gridContainerRef.current) return;

    // Enhanced title animation with character-by-character effect
    const titleElement = titleContainerRef.current.querySelector('.projects-title');
    if (titleElement) {
      // Add GPU acceleration
      (titleElement as HTMLElement).style.willChange = 'transform, opacity';
      
      // Split text into individual characters for animation
      const text = titleElement.textContent || '';
      titleElement.innerHTML = text
        .split('')
        .map((char, i) => `<span class="char" style="display: inline-block; opacity: 0; transform: translateY(50px) rotateX(90deg);">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      const chars = titleElement.querySelectorAll('.char');
      
      // Animate each character with stagger
      gsap.fromTo(chars, 
        { 
          opacity: 0, 
          y: 50, 
          rotationX: 90,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: titleContainerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          onComplete: () => {
            // Remove will-change after animation
            (titleElement as HTMLElement).style.willChange = 'auto';
          }
        }
      );

      // Add a subtle floating animation to the title
      gsap.to(titleElement, {
        y: -5,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1
      });
    }

    // Enhanced Projects Grid Animation with more dynamic effects
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add GPU acceleration to all cards - Simplified for better performance
    projectCards.forEach((card, index) => {
      (card as HTMLElement).style.willChange = 'transform, opacity';
      (card as HTMLElement).style.transform = 'translate3d(0, 0, 0)'; // Enable GPU
      
      // Set initial state - simplified to 2D transforms only
      gsap.set(card, { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      });
    });

    // Animate cards with simplified effects for better performance
    gsap.to('.project-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridContainerRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      onComplete: () => {
        // Remove will-change after animation
        projectCards.forEach((card) => {
          (card as HTMLElement).style.willChange = 'auto';
        });
      }
    });

    // Simplified hover animations - removed 3D transforms
    let hoverTimeout: NodeJS.Timeout;
    projectCards.forEach((card, index) => {
      const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        
        // Simplified hover effect - 2D transforms only
        gsap.to(card, { 
          scale: 1.03, 
          y: -4,
          duration: 0.25, 
          ease: "power2.out",
          overwrite: true
        });

        // Add subtle glow effect
        gsap.to(card, {
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
          duration: 0.25,
          ease: "power2.out"
        });

        // Animate the image inside
        const img = card.querySelector('img');
        if (img) {
          gsap.to(img, {
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out"
          });
        }
      };
      
      const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
          gsap.to(card, { 
            scale: 1, 
            y: 0,
            duration: 0.25, 
            ease: "power2.out",
            overwrite: true
          });

          // Remove glow effect
          gsap.to(card, {
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            duration: 0.25,
            ease: "power2.out"
          });

          // Reset image scale
          const img = card.querySelector('img');
          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.25,
              ease: "power2.out"
            });
          }
        }, 50);
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
        (card as HTMLElement).style.willChange = 'auto';
      });
      if (titleElement) {
        (titleElement as HTMLElement).style.willChange = 'auto';
      }
      clearTimeout(hoverTimeout);
    };
  }, []);

  return (
    <>
      {/* Title Section with Animated Background */}
  <section className="py-4 sm:py-6 md:py-8 bg-black relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div 
            ref={titleContainerRef}
            className="min-h-[10vh] sm:min-h-[12vh] md:min-h-[14vh] flex items-center justify-center relative"
          >
            <h1 
              className="projects-title text-white font-bold text-center px-4"
              style={{ 
                fontSize: 'clamp(1.5rem, 6vw, 6rem)',
                lineHeight: '1.2',
                textShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
              }}
            >
              Projects you might like
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid with Enhanced Background */}
      <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div 
            ref={gridContainerRef}
            className="flex flex-col gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto"
          >
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group transition-all duration-300"
              >
                {/* Project Image/Thumbnail - Full Width */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    gradient={project.gradient}
                    icon={project.icon}
                    className="h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Action Buttons Overlay */}
                  <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-800/90 hover:bg-gray-700/90 text-white rounded-full font-semibold text-sm shadow-lg backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                    >
                      View Code
                    </a>
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl drop-shadow-lg">{project.icon}</div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <p className="text-gray-300 mb-4 text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-4 py-2 bg-gray-800/80 text-gray-300 text-sm rounded-lg font-medium border border-gray-700 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
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
