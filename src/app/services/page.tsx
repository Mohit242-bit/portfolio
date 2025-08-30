"use client"

import { useState, useEffect } from 'react'
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack'

export default function ServicesPage() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Detect low performance devices for simplified animations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowDevice = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    setIsLowPerformance(isMobile || isSlowDevice);
  }, []);

  const services = [
    {
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces with React, Next.js, and modern CSS frameworks. I focus on performance, accessibility, and pixel-perfect designs that work seamlessly across all devices.",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎨"
    },
    {
      title: "Backend Development", 
      description: "Building robust, scalable server-side applications with Node.js, Express, and database integration. I ensure your backend can handle growth and provides secure, efficient APIs.",
      gradient: "from-purple-500 to-pink-500",
      icon: "⚙️"
    },
    {
      title: "SEO Optimization",
      description: "Boosting your website&apos;s visibility with technical SEO, performance optimization, and search engine best practices. Get found by your target audience and drive organic traffic.",
      gradient: "from-green-500 to-emerald-500", 
      icon: "📈"
    },
    {
      title: "Business Automation & AI",
      description: "Streamlining your business processes with n8n workflows, AI integrations, and custom automation solutions. Save time, reduce errors, and scale your operations efficiently.",
      gradient: "from-orange-500 to-red-500",
      icon: "🤖"
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end web development from concept to deployment. I handle everything: frontend, backend, database design, hosting, and ongoing maintenance for complete peace of mind.",
      gradient: "from-indigo-500 to-purple-500",
      icon: "🚀"
    }
  ];

  return (
    <section className="min-h-screen bg-black overflow-hidden">
      <div className="text-center pt-8 pb-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Services</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-6 mb-8">
          Comprehensive web development and automation solutions for modern businesses
        </p>
      </div>
      <div className="w-full">
        <ScrollStack
          itemDistance={isLowPerformance ? 80 : 120}
          itemScale={isLowPerformance ? 0.02 : 0.05}
          itemStackDistance={isLowPerformance ? 25 : 40}
          stackPosition="10%"
          baseScale={0.92}
          rotationAmount={isLowPerformance ? 1 : 2}
          className="h-[calc(100vh-200px)] w-full hide-scrollbar"
        >
          {services.map((service, index) => (
            <ScrollStackItem key={index}>
              <div className={`h-full bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-4 right-4 text-6xl opacity-20">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg md:text-xl leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
