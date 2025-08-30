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
    // Create WhatsApp message
    const message = `Hi! I&apos;m ${formData.name}. I&apos;m interested in ${formData.service}. Email: ${formData.email}, Phone: ${formData.phone}. Message: ${formData.message}`
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
    <section className="min-h-screen bg-black flex items-center justify-center">
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
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <div className="text-white font-bold text-lg">WhatsApp</div>
              <a href="https://wa.me/918766545911" className="text-blue-400 text-base font-semibold hover:underline" target="_blank" rel="noopener noreferrer">+91 8766545911</a>
              <div className="text-gray-400 text-xs">Click to start a conversation</div>
              <div className="mt-2 text-gray-300 text-sm text-center">Custom Web Development, Business Automation, AI Integration, SEO Optimization, Full Stack Solutions</div>
              <div className="mt-2 text-gray-300 text-xs">Response Time: Usually within 2-4 hours</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
