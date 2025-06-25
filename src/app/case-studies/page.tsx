'use client'

import React from 'react'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'
import Link from 'next/link'
import { caseStudies as enCaseStudies } from '@/data/EN/caseStudies.json'
import { caseStudies as frCaseStudies } from '@/data/FR/caseStudies.json'

export default function CaseStudies() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const caseStudies = lang === 'fr' ? frCaseStudies : enCaseStudies

  const text = {
    en: {
      title: 'Case Studies',
      subtitle: 'Real-world examples of our successful implementations',
      description: 'Discover how we\'ve helped businesses transform their operations and achieve remarkable results through innovative technology solutions.',
      viewCaseStudy: 'View Case Study',
      backgroundAlt: 'Case studies background',
    },
    fr: {
      title: 'Études de Cas',
      subtitle: 'Exemples concrets de nos implémentations réussies',
      description: 'Découvrez comment nous avons aidé les entreprises à transformer leurs opérations et à obtenir des résultats remarquables grâce à des solutions technologiques innovantes.',
      viewCaseStudy: 'Voir l\'Étude de Cas',
      backgroundAlt: 'Arrière-plan des études de cas',
    },
  }[lang]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-case-studies.jpg"
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

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {study.challenge}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {study.teamSize}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    href={`${lang === 'fr' ? '/fr' : ''}/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {text.viewCaseStudy}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 