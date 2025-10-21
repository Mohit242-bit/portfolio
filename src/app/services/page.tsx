"use client"

import { ScrollAnimation, StaggerAnimation } from '../../components/ScrollAnimations'

export default function ServicesPage() {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with React, Next.js, and modern CSS frameworks. I focus on performance, accessibility, and pixel-perfect designs that work seamlessly across all devices.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Backend Development", 
      description: "Building robust, scalable server-side applications with Node.js, Express, and database integration. I ensure your backend can handle growth and provides secure, efficient APIs.",
      features: ["Node.js & Express", "Database Design", "API Development", "Security & Authentication"]
    },
    {
      title: "SEO Optimization",
      description: "Boosting your website's visibility with technical SEO, performance optimization, and search engine best practices. Get found by your target audience and drive organic traffic.",
      features: ["Technical SEO", "Performance Tuning", "Meta Optimization", "Sitemap & Schema"]
    },
    {
      title: "Business Automation & AI",
      description: "Streamlining your business processes with n8n workflows, AI integrations, and custom automation solutions. Save time, reduce errors, and scale your operations efficiently.",
      features: ["Workflow Automation", "AI Integration", "Process Optimization", "Custom Tools"]
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end web development from concept to deployment. I handle everything: frontend, backend, database design, hosting, and ongoing maintenance for complete peace of mind.",
      features: ["Complete Development", "Deployment & Hosting", "Maintenance Support", "Scalable Architecture"]
    }
  ];

  return (
    <section className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive Web Development
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-6">
              I provide end-to-end web development services tailored to help your business grow and succeed in the digital landscape.
            </p>
          </div>

          <StaggerAnimation 
            animation="fadeUp" 
            stagger={0.15}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {services.map((service: any, index: number) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Key Features:</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </StaggerAnimation>

          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center px-4">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6">
              Not sure which service fits your needs? Let&apos;s discuss your project!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-gray-800/60 hover:bg-gray-700/60 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
