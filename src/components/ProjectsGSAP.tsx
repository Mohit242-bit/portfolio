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

  // Featured projects - Updated with your real GitHub repositories
  const featuredProjects = [
    {
      id: 1,
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery with Next.js and Vercel deployment.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-orange-600 to-red-600",
      icon: "🍕",
      liveUrl: "https://restaurent-hazel.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/restaurent",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product catalog, and admin dashboard.",
      tech: ["React", "Next.js", "Stripe", "TypeScript"],
      gradient: "from-blue-600 to-purple-600",
      icon: "🛒",
      liveUrl: "https://ecommerceh.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Digital Marketing Website",
      description: "Professional digital marketing agency website showcasing services and portfolio with modern design.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-purple-600 to-pink-600",
      icon: "📈",
      liveUrl: "https://mohit242-bit.github.io/DigitalMarketingwebsite/",
      codeUrl: "https://github.com/Mohit242-bit/DigitalMarketingwebsite",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Blog Summarizer Extension",
      description: "Chrome extension that uses AI to automatically summarize articles and blog posts with advanced NLP.",
      tech: ["JavaScript", "Chrome API", "AI/NLP"],
      gradient: "from-green-600 to-teal-600",
      icon: "📝",
      liveUrl: "https://github.com/Mohit242-bit/auto-blog-summarizer",
      codeUrl: "https://github.com/Mohit242-bit/auto-blog-summarizer",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=300&fit=crop&crop=center"
    }
  ];

  // Other projects from GitHub
  const otherProjects = [
    {
      id: 5,
      title: "Morpho - Design System",
      description: "Modern design system and component library with TypeScript and Storybook integration.",
      tech: ["TypeScript", "React", "Design System"],
      liveUrl: "https://morpho-beryl.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/morpho",
      icon: "🎨"
    },
    {
      id: 6,
      title: "SCANE - Scanning Application",
      description: "Advanced scanning and document processing application with real-time analysis.",
      tech: ["TypeScript", "React", "Computer Vision"],
      liveUrl: "https://scane-kycs.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/scane",
      icon: "📱"
    },
    {
      id: 7,
      title: "SIH - Government Solution",
      description: "Smart India Hackathon project - innovative solution for government challenges.",
      tech: ["TypeScript", "Next.js", "Full-Stack"],
      liveUrl: "https://sih-theta-two.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/SIH",
      icon: "🏛️"
    },
    {
      id: 8,
      title: "AI for Climate",
      description: "Machine learning project for climate change analysis and prediction using Python.",
      tech: ["JavaScript", "Python", "ML"],
      liveUrl: "https://github.com/Mohit242-bit/aiforclimate",
      codeUrl: "https://github.com/Mohit242-bit/aiforclimate",
      icon: "🌍"
    },
    {
      id: 9,
      title: "Spotify Clone",
      description: "Full-featured music streaming application cloning Spotify's core functionality.",
      tech: ["JavaScript", "HTML/CSS", "Audio API"],
      liveUrl: "https://github.com/Mohit242-bit/spotifyclone",
      codeUrl: "https://github.com/Mohit242-bit/spotifyclone",
      icon: "🎵"
    },
    {
      id: 10,
      title: "PDF AI Editor",
      description: "Intelligent PDF editor using Google's Gemini AI for smart document editing.",
      tech: ["Python", "Gemini API", "PDF Processing"],
      liveUrl: "https://github.com/Mohit242-bit/gemini-pdf-editor",
      codeUrl: "https://github.com/Mohit242-bit/gemini-pdf-editor",
      icon: "📄"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group transition-all duration-300"
              >
                {/* Project Image/Thumbnail */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden group">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    gradient={project.gradient}
                    icon={project.icon}
                    className="h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1">
                    <span className="text-xs font-medium text-white">Featured</span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-2xl sm:text-3xl drop-shadow-lg">{project.icon}</div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full font-medium border border-gray-700 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <StarBorder className="w-full text-center py-2 sm:py-3" color="#3B82F6">
                        <span className="text-xs sm:text-sm font-medium">Live Demo</span>
                      </StarBorder>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <StarBorder className="w-full text-center py-2 sm:py-3" color="#6B7280">
                        <span className="text-xs sm:text-sm font-medium">View Code</span>
                      </StarBorder>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Other <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card-small bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group h-full flex flex-col"
              >
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <div className="text-2xl sm:text-3xl ml-2 flex-shrink-0">{project.icon}</div>
                  </div>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md font-medium border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button className="w-full px-3 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors">
                        Live / Code
                      </button>
                    </a>
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
