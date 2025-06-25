'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects as enProjects } from '@/data/EN/projects.json'
import { projects as frProjects } from '@/data/FR/projects.json'

export default function Projects() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const projects = lang === 'fr' ? frProjects : enProjects

  const text = {
    en: {
      title: 'Our Projects',
      subtitle: 'Discover our latest work and innovative solutions',
      description: 'Explore our portfolio of successful projects that demonstrate our expertise in delivering cutting-edge technology solutions.',
      viewProject: 'View Project',
      viewCaseStudy: 'View Case Study',
      backgroundAlt: 'Project portfolio background',
    },
    fr: {
      title: 'Nos Projets',
      subtitle: 'Découvrez nos derniers travaux et solutions innovantes',
      description: 'Explorez notre portefeuille de projets réussis qui démontrent notre expertise dans la livraison de solutions technologiques de pointe.',
      viewProject: 'Voir le Projet',
      viewCaseStudy: 'Voir l\'Étude de Cas',
      backgroundAlt: 'Arrière-plan du portefeuille de projets',
    },
  }[lang]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-projects.jpg"
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

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  {project.caseStudyId ? (
                    <Link
                      href={`${lang === 'fr' ? '/fr' : ''}/case-studies/${project.caseStudyId}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      {text.viewCaseStudy}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <Link
                      href={`${lang === 'fr' ? '/fr' : ''}/projects/${project.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      {text.viewProject}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 