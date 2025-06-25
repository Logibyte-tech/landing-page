'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Building2, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'
import enData from '@/data/EN/about.json'
import frData from '@/data/FR/about.json'

const valueIcons: { [key: string]: React.ElementType } = {
  Building2,
  Users,
  Target,
  Award,
}

export default function About() {
  const pathname = usePathname()
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const aboutData = lang === 'fr' ? frData : enData
  const { stats, values, team } = aboutData

  // Text content for both languages
  const text = {
    en: {
      heroTitle: 'About Logibyte',
      heroDesc: `We are a leading IT consulting firm dedicated to helping businesses navigate the digital landscape. With over a decade of experience, we've helped numerous organizations transform their operations through innovative technology solutions.`,
      storyTitle: 'Our Story',
      storyDesc: `Founded in 2013, Logibyte has grown from a small team of passionate developers to a full-service IT consulting firm serving clients across various industries.`,
      valuesTitle: 'Our Values',
      valuesDesc: 'Our core values guide everything we do, from how we work with clients to how we develop our team.',
      teamTitle: 'Our Leadership Team',
      teamDesc: 'Meet the experienced professionals who lead our company and drive our success.',
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    fr: {
      heroTitle: 'À Propos de Logibyte',
      heroDesc: `Nous sommes une firme de conseil IT de premier plan dédiée à aider les entreprises à naviguer dans le paysage numérique. Avec plus d'une décennie d'expérience, nous avons aidé de nombreuses organisations à transformer leurs opérations grâce à des solutions technologiques innovantes.`,
      storyTitle: 'Notre Histoire',
      storyDesc: `Fondée en 2013, Logibyte a grandi d'une petite équipe de développeurs passionnés à une firme de conseil IT à service complet desservant des clients dans diverses industries.`,
      valuesTitle: 'Nos Valeurs',
      valuesDesc: 'Nos valeurs fondamentales guident tout ce que nous faisons, de la façon dont nous travaillons avec les clients à la façon dont nous développons notre équipe.',
      teamTitle: 'Notre Équipe de Direction',
      teamDesc: `Rencontrez les professionnels expérimentés qui dirigent notre entreprise et stimulent notre succès.`,
      cta: 'Commencer',
      ctaLink: '/fr/contact',
    },
  }[lang]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-about.jpg"
            alt={lang === 'fr' ? "Arrière-plan de réunion d'équipe" : "Teamwork meeting background"}
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">{text.heroTitle}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {text.heroDesc}
            </p>
          </div>
        </div>
      </section>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{text.storyTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {text.storyDesc}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col">
                  <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{text.valuesTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {text.valuesDesc}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons]
              return (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {Icon && <Icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" aria-hidden="true" />}
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{text.teamTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {text.teamDesc}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt={person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 dark:text-white">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-16">
        <Link
          href={text.ctaLink}
          className="btn-primary"
        >
          {text.cta}
        </Link>
      </div>
    </div>
  )
} 