'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import StarBorder from './StarBorder';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

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

  // Featured projects data - reordered: Restaurant, E-commerce, Digital Marketing, Gym
  const featuredProjects = [
    {
      id: 1,
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery.",
      tech: ["Next.js", "Tailwind", "Framer"],
      gradient: "from-orange-600 to-red-600",
      icon: "🍕",
      liveUrl: "https://restaurent-hazel.vercel.app/",
      codeUrl: "#",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack web application with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-600 to-purple-600",
      icon: "🛒",
      liveUrl: "https://ecommerceh.vercel.app/",
      codeUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Digital Marketing Website",
      description: "Professional digital marketing website for agencies and freelancers.",
      tech: ["Next.js", "TypeScript", "SEO"],
      gradient: "from-purple-600 to-pink-600",
      icon: "📈",
      liveUrl: "https://mohit242-bit.github.io/DigitalMarketingwebsite/",
      codeUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Gym Website",
      description: "Complete gym management system with member portal and class booking.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-green-600 to-teal-600",
      icon: "🏋️",
      liveUrl: "#",
      codeUrl: "#",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center"
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
    
    // Add GPU acceleration to all cards
    projectCards.forEach((card, index) => {
      (card as HTMLElement).style.willChange = 'transform, opacity';
      
      // Set initial state with more dramatic effect
      gsap.set(card, { 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        rotationY: 45,
        transformOrigin: "center center"
      });
    });

    // Animate cards with enhanced effects
    gsap.to('.project-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: gridContainerRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      onComplete: () => {
        // Remove will-change after animation and add subtle floating
        projectCards.forEach((card, index) => {
          (card as HTMLElement).style.willChange = 'auto';
          
          // Add subtle floating animation to each card
          gsap.to(card, {
            y: Math.sin(index) * 3,
            duration: 3 + (index * 0.5),
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2
          });
        });
      }
    });

    // Enhanced hover animations with more dramatic effects
    let hoverTimeout: NodeJS.Timeout;
    projectCards.forEach((card, index) => {
      const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        
        // More dramatic hover effect
        gsap.to(card, { 
          scale: 1.05, 
          y: -8, 
          rotationY: 5,
          rotationX: 3,
          duration: 0.3, 
          ease: "power2.out",
          overwrite: true,
          transformOrigin: "center center"
        });

        // Add glow effect
        gsap.to(card, {
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Animate the image inside
        const img = card.querySelector('img');
        if (img) {
          gsap.to(img, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      };
      
      const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
          gsap.to(card, { 
            scale: 1, 
            y: Math.sin(index) * 3, // Return to floating position
            rotationY: 0,
            rotationX: 0,
            duration: 0.3, 
            ease: "power2.out",
            overwrite: true
          });

          // Remove glow effect
          gsap.to(card, {
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out"
          });

          // Reset image scale
          const img = card.querySelector('img');
          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.3,
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
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            ref={titleContainerRef}
            className="min-h-[60vh] flex items-center justify-center relative"
          >
            <h1 
              className="projects-title text-white font-bold text-center"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 6rem)',
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
      <section className="py-20 bg-black relative overflow-hidden">
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            ref={gridContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80vw] max-w-[80vw] mx-auto"
          >
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group transition-all duration-300"
              >
                {/* Project Image/Thumbnail */}
                <div className="relative h-48 overflow-hidden group">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    gradient={project.gradient}
                    icon={project.icon}
                    className="h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-white">Featured</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-3xl drop-shadow-lg">{project.icon}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full font-medium border border-gray-700 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <StarBorder className="w-full text-center" color="#3B82F6">
                        <span className="text-sm font-medium">Live Demo</span>
                      </StarBorder>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <StarBorder className="w-full text-center" color="#6B7280">
                        <span className="text-sm font-medium">View Code</span>
                      </StarBorder>
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
