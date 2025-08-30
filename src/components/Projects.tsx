'use client'

import { ScrollAnimation, StaggerAnimation } from './ScrollAnimations'

export default function Projects() {
  
  const projects = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "Fitness Gym Platform",
      description: "Complete gym management system with member portal and class booking.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Store",
      description: "Full-featured online store with payment integration and admin dashboard.",
      tech: ["Next.js", "Stripe", "Prisma"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS and multi-language support.",
      tech: ["Next.js", "Sanity", "Vercel"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for portfolio management with real-time analytics.",
      tech: ["React", "Chart.js", "Firebase"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Booking System",
      description: "Advanced booking system for services with calendar integration.",
      tech: ["Next.js", "Prisma", "Stripe"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gray-700 text-blue-400 rounded-full text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in 
              modern web development and design.
            </p>
          </div>
          
          {/* Featured Projects */}
          <StaggerAnimation 
            animation="fadeUp" 
            stagger={0.3}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-600"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                      <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-600">
                    <span className="text-xs font-medium text-blue-400">Featured</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full font-medium border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl}
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-blue-700 transition-colors group"
                    >
                      <span className="flex items-center justify-center">
                        Live Demo
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                    <a 
                      href={project.codeUrl}
                      className="flex-1 border-2 border-gray-600 text-gray-300 py-3 px-6 rounded-xl text-center font-semibold hover:border-gray-500 hover:bg-gray-600 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </StaggerAnimation>
          
          {/* Other Projects */}
          <ScrollAnimation animation="fadeUp">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <StaggerAnimation 
              animation="fadeUp" 
              stagger={0.15}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {otherProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-600"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 2).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded font-medium">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={project.demoUrl}
                        className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Demo
                      </a>
                      <a 
                        href={project.codeUrl}
                        className="flex-1 border-2 border-gray-500 text-gray-300 py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-gray-600 transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerAnimation>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
