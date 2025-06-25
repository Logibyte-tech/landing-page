'use client'

import React from 'react'
import Link from 'next/link'
import { Handshake, Users, Globe, Rocket, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import PartnerLogoCarousel from '../../components/partnership/PartnerLogoCarousel'
import { benefits as enBenefits, partnershipTypes as enPartnershipTypes } from '@/data/EN/partnership.json'
import { benefits as frBenefits, partnershipTypes as frPartnershipTypes } from '@/data/FR/partnership.json'

const partnershipIcons: { [key: string]: React.ElementType } = {
  Handshake,
  Users,
  Globe,
  Rocket,
}

export default function Partnership() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const benefits = lang === 'fr' ? frBenefits : enBenefits
  const partnershipTypes = lang === 'fr' ? frPartnershipTypes : enPartnershipTypes

  const text = {
    en: {
      title: 'Partner With Us',
      subtitle: 'Join our network of trusted partners and grow your business together',
      ourPartners: 'Our Partners',
      partnershipOpportunities: 'Partnership Opportunities',
      learnMore: 'Learn More',
      whyPartnerWithUs: 'Why Partner With Us?',
      readyToPartner: 'Ready to Partner With Us?',
      description: 'Let\'s discuss how we can create a successful partnership together',
      getStarted: 'Get Started',
      contactLink: '/contact',
      backgroundAlt: 'Handshake partnership background',
    },
    fr: {
      title: 'Partenariat avec Nous',
      subtitle: 'Rejoignez notre réseau de partenaires de confiance et développez votre entreprise ensemble',
      ourPartners: 'Nos Partenaires',
      partnershipOpportunities: 'Opportunités de Partenariat',
      learnMore: 'En Savoir Plus',
      whyPartnerWithUs: 'Pourquoi Partenariat avec Nous ?',
      readyToPartner: 'Prêt à Partenariat avec Nous ?',
      description: 'Discutons de la façon dont nous pouvons créer un partenariat réussi ensemble',
      getStarted: 'Commencer',
      contactLink: '/fr/contact',
      backgroundAlt: 'Arrière-plan de poignée de main de partenariat',
    },
  }[lang]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-partnership.jpg"
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

      {/* Our Partners (Logo Carousel) Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">{text.ourPartners}</h2>
          <PartnerLogoCarousel />
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {text.partnershipOpportunities}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => {
              const Icon = partnershipIcons[type.icon as keyof typeof partnershipIcons]
              return (
                <div key={type.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4">
                    {Icon && <Icon className="w-12 h-12" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {text.whyPartnerWithUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
               const Icon = partnershipIcons[benefit.icon as keyof typeof partnershipIcons]
               return (
                <div key={benefit.name} className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400">
                    {Icon && <Icon className="w-12 h-12" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              )}
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {text.readyToPartner}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {text.description}
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