"use client"

import { useState } from 'react'
import { ScrollAnimation } from '../../components/ScrollAnimations'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message with clean formatting
    const message = `Hello! 👋

Name: ${formData.name}
Service: ${formData.service}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`
    const whatsappUrl = `https://wa.me/918766545911?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <ScrollAnimation animation="fadeUp">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact</h1>
          <div className="bg-gray-900/90 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex-1 space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name*" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email*" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none">
                <option value="">Service Needed*</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Business Automation">Business Automation</option>
                <option value="AI Integration">AI Integration</option>
                <option value="Other">Other</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={2} placeholder="Message" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
              <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded hover:from-blue-600 hover:to-purple-600 transition-colors">Send via WhatsApp</button>
            </form>
            {/* Contact Info */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              {/* WhatsApp */}
              <div className="text-center">
                <div className="text-white font-bold text-lg mb-1">WhatsApp</div>
                <a href="https://wa.me/918766545911" className="text-blue-400 text-base font-semibold hover:underline" target="_blank" rel="noopener noreferrer">+91 8766545911</a>
                <div className="text-gray-400 text-xs">Click to start a conversation</div>
              </div>
              
              {/* Email */}
              <div className="text-center">
                <div className="text-white font-bold text-lg mb-1">Email</div>
                <a href="mailto:mohit25rawat@gmail.com" className="text-blue-400 text-base font-semibold hover:underline">mohit25rawat@gmail.com</a>
                <div className="text-gray-400 text-xs">Professional inquiries welcome</div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/mohit-rawat-7a579132b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/Mohit242-bit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
              
              <div className="mt-2 text-gray-300 text-sm text-center">Custom Web Development, Business Automation, AI Integration, SEO Optimization, Full Stack Solutions</div>
              <div className="text-gray-300 text-xs">Response Time: Usually within 2-4 hours</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
