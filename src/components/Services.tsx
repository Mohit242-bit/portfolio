'use client'

import { ScrollAnimation, StaggerAnimation } from './ScrollAnimations'

export default function Services() {
  
  const services = [
    {
      title: "Website Development",
      description: "Custom websites built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern UI/UX"],
      icon: "🌐",
      price: "Starting at $2,500"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management.",
      features: ["Payment Gateway", "Admin Dashboard", "Mobile Optimized", "Secure Checkout"],
      icon: "🛒",
      price: "Starting at $3,500"
    },
    {
      title: "Business Websites",
      description: "Professional websites for restaurants, gyms, and local businesses.",
      features: ["Contact Forms", "Gallery", "Booking System", "Social Integration"],
      icon: "🏢",
      price: "Starting at $1,800"
    },
    {
      title: "Web Applications",
      description: "Custom web applications tailored to your specific business needs.",
      features: ["Database Integration", "User Authentication", "Real-time Updates", "API Development"],
      icon: "⚡",
      price: "Starting at $4,000"
    }
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What I Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I offer comprehensive web development services to help your business 
              establish a strong online presence and achieve your digital goals.
            </p>
          </div>
          
          <StaggerAnimation 
            animation="fadeUp" 
            stagger={0.3}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <div className="text-right">
                    <span className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <a 
                    href="#contact" 
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-blue-700 transition-colors group"
                  >
                    <span className="flex items-center justify-center">
                      Get Started
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                  <a 
                    href="#projects" 
                    className="flex-1 border-2 border-gray-600 text-gray-300 py-3 px-6 rounded-xl text-center font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
                  >
                    View Examples
                  </a>
                </div>
              </div>
            ))}
          </StaggerAnimation>
          
          {/* Process Section */}
          <ScrollAnimation animation="fadeUp" className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">My Process</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                I follow a proven process to ensure your project is delivered on time and exceeds expectations.
              </p>
            </div>
            
            <StaggerAnimation 
              animation="fadeUp" 
              stagger={0.2}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                { step: "01", title: "Discovery", description: "Understanding your goals and requirements" },
                { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
                { step: "03", title: "Development", description: "Building your website with modern technologies" },
                { step: "04", title: "Launch", description: "Testing, deployment, and ongoing support" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors border border-gray-600">
                    <span className="text-blue-400 font-bold text-lg group-hover:text-white transition-colors">{item.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </StaggerAnimation>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
