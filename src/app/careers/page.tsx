'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Briefcase, MapPin, Clock, GraduationCap, Users, Building2, Globe, Heart, Sparkles } from 'lucide-react'
import { openPositions as enOpenPositions, benefits as enBenefits } from '@/data/EN/careers.json'
import { openPositions as frOpenPositions, benefits as frBenefits } from '@/data/FR/careers.json'

const benefitIcons: { [key: string]: React.ElementType } = {
  Briefcase,
  Clock,
  GraduationCap,
  Users,
  Globe,
  Heart,
  Sparkles,
}

export default function Careers() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const openPositions = lang === 'fr' ? frOpenPositions : enOpenPositions
  const benefits = lang === 'fr' ? frBenefits : enBenefits

  const text = {
    en: {
      title: 'Careers',
      subtitle: 'Be part of a team that\'s shaping the future of digital transformation',
      openPositions: 'Open Positions',
      applyNow: 'Apply Now',
      whyJoinUs: 'Why Join Us?',
      dontSeeRole: 'Don\'t See Your Perfect Role?',
      description: 'We\'re always looking for talented individuals. Send us your resume and we\'ll keep you in mind for future opportunities.',
      sendResume: 'Send Your Resume',
      contactLink: '/contact',
      backgroundAlt: 'Career growth background',
    },
    fr: {
      title: 'Carrières',
      subtitle: 'Faites partie d\'une équipe qui façonne l\'avenir de la transformation numérique',
      openPositions: 'Postes Ouverts',
      applyNow: 'Postuler Maintenant',
      whyJoinUs: 'Pourquoi Nous Rejoindre ?',
      dontSeeRole: 'Vous Ne Voyez Pas Votre Rôle Idéal ?',
      description: 'Nous cherchons toujours des individus talentueux. Envoyez-nous votre CV et nous vous garderons à l\'esprit pour les futures opportunités.',
      sendResume: 'Envoyer Votre CV',
      contactLink: '/fr/contact',
      backgroundAlt: 'Arrière-plan de croissance de carrière',
    },
  }[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-careers.jpg"
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

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {text.openPositions}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    {position.type}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
                    {position.location}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {position.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {position.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {position.requirements.map((req) => (
                    <span
                      key={req}
                      className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                </div>
                <a
                  href={`${lang === 'fr' ? '/fr' : ''}/careers/${position.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {text.applyNow}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {text.whyJoinUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons]
              return (
                <div key={benefit.name} className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400">
                    {Icon && <Icon className="w-12 h-12" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {text.dontSeeRole}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {text.description}
            </p>
            <Link
              href={text.contactLink}
              className="btn-primary"
            >
              {text.sendResume}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 