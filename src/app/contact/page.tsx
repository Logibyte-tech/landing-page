'use client'

import React, { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'

  const text = {
    en: {
      title: 'Contact Us',
      subtitle: 'Reach out to us for inquiries, support, or partnership opportunities',
      getInTouch: 'Get In Touch',
      description: "We're here to help and answer any question you might have. We look forward to hearing from you.",
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone number',
      message: 'Message',
      sending: 'Sending...',
      sendMessage: 'Send message',
      successMessage: 'Message sent successfully! We\'ll be in touch soon.',
      errorMessage: 'Something went wrong. Please try again later.',
      orReachUs: 'Or reach us directly at',
      backgroundAlt: 'Telephone booth background',
    },
    fr: {
      title: 'Contactez-Nous',
      subtitle: 'Contactez-nous pour des demandes, du support ou des opportunités de partenariat',
      getInTouch: 'Entrez en Contact',
      description: 'Nous sommes là pour vous aider et répondre à toute question que vous pourriez avoir. Nous avons hâte d\'avoir de vos nouvelles.',
      name: 'Nom',
      company: 'Entreprise',
      email: 'Email',
      phone: 'Numéro de téléphone',
      message: 'Message',
      sending: 'Envoi...',
      sendMessage: 'Envoyer le message',
      successMessage: 'Message envoyé avec succès ! Nous vous contacterons bientôt.',
      errorMessage: 'Quelque chose s\'est mal passé. Veuillez réessayer plus tard.',
      orReachUs: 'Ou contactez-nous directement à',
      backgroundAlt: 'Arrière-plan de cabine téléphonique',
    },
  }[lang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message.')
      }

      setStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="relative isolate bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-contact.jpg"
            alt={text.backgroundAlt}
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">{text.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {text.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* New Centered Layout */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-xl lg:max-w-2xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{text.getInTouch}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {text.description}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {text.name}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-400 sm:text-sm sm:leading-6 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {text.company}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-400 sm:text-sm sm:leading-6 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {text.email}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-400 sm:text-sm sm:leading-6 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {text.phone}
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-400 sm:text-sm sm:leading-6 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {text.message}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-400 sm:text-sm sm:leading-6 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? text.sending : text.sendMessage}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-center text-green-600">{text.successMessage}</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-center text-red-600">{text.errorMessage}</p>
            )}
          </form>

          {/* Direct Contact Details */}
          <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-10 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{text.orReachUs}</h3>
            <dl className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-x-10 gap-y-6 text-base leading-7 text-gray-600 dark:text-gray-400">
              <div className="flex justify-center gap-x-3">
                <Phone className="h-6 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <a href="tel:+1 (647) 366-6276">+1 (647) 366-6276</a>
              </div>
              <div className="flex justify-center gap-x-3">
                <Mail className="h-6 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <a href="mailto:contact@logibyte.ca">contact@logibyte.ca</a>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 