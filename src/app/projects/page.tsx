"use client"

import { ScrollAnimation } from '../../components/ScrollAnimations'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Business Website Automation",
      description: "Automated lead generation, CRM integration, and workflow automation for startups using n8n and AI tools."
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with custom checkout, inventory management, and analytics."
    },
    {
      title: "Portfolio & Personal Branding",
      description: "Modern portfolio sites with interactive animations, blog, and contact integrations."
    },
    {
      title: "Custom Web Apps",
      description: "Tailored solutions for unique business needs, including dashboards, booking systems, and more."
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollAnimation animation="fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Projects</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900/90 rounded-2xl p-6 hover:bg-gray-800/90 transition-colors border border-gray-700 shadow-md">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-base">{project.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
