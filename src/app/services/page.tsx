'use client'

import React from 'react'
import { Code, Cloud, Shield, Database, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { services as enServices } from '@/data/EN/services.json'
import { services as frServices } from '@/data/FR/services.json'

const serviceIcons: { [key: string]: React.ElementType } = {
  Code,
  Cloud,
  Shield,
  Database,
}

export default function Services() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const services = lang === 'fr' ? frServices : enServices

  const text = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive technology solutions to drive your business forward',
      description: 'We offer a wide range of technology services designed to help your business thrive in the digital age.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      contactLink: '/contact',
      backgroundAlt: 'Technology services background',
    },
    fr: {
      title: 'Nos Services',
      subtitle: 'Solutions technologiques complètes pour faire avancer votre entreprise',
      description: 'Nous offrons une large gamme de services technologiques conçus pour aider votre entreprise à prospérer à l\'ère numérique.',
      getStarted: 'Commencer',
      learnMore: 'En Savoir Plus',
      contactLink: '/fr/contact',
      backgroundAlt: 'Arrière-plan des services technologiques',
    },
  }[lang]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-services.jpg"
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
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{text.subtitle}</p>
            <p className="text-base text-gray-600 dark:text-gray-300">{text.description}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]
              return (
                <div key={service.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                    {Icon && <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature: string) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={text.contactLink}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {text.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <Link
              href={text.contactLink}
              className="btn-primary"
            >
              {text.getStarted}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 