import React from 'react'
import { Building2, Users, ArrowUpRight, ChartBar, Clock, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Digital Transformation for Global Retailer',
    client: 'RetailCorp International',
    industry: 'Retail',
    challenge: 'A leading retail chain needed to modernize their legacy systems and implement a cloud-based infrastructure to support their global operations.',
    solution: 'We designed and implemented a comprehensive digital transformation strategy, including cloud migration, microservices architecture, and modern e-commerce platform.',
    results: [
      '40% reduction in operational costs',
      '60% improvement in system performance',
      '99.9% uptime achieved',
      'Seamless integration across 50+ locations',
    ],
    duration: '18 months',
    teamSize: '25+ experts',
    technologies: ['AWS', 'Kubernetes', 'React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Cybersecurity Overhaul for Financial Institution',
    client: 'SecureBank',
    industry: 'Finance',
    challenge: 'A regional bank needed to enhance their security posture and comply with new regulatory requirements while maintaining system availability.',
    solution: 'Implemented a comprehensive security framework including zero-trust architecture, advanced threat detection, and automated compliance monitoring.',
    results: [
      '100% compliance with new regulations',
      '75% reduction in security incidents',
      'Real-time threat detection implemented',
      'Automated compliance reporting',
    ],
    duration: '12 months',
    teamSize: '15+ experts',
    technologies: ['Azure', 'SIEM', 'Zero Trust', 'AI/ML', 'Automation'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    title: 'Healthcare Data Platform Modernization',
    client: 'HealthTech Solutions',
    industry: 'Healthcare',
    challenge: 'A healthcare technology provider needed to modernize their data platform to handle increasing data volumes and enable advanced analytics.',
    solution: 'Developed a scalable data platform with real-time analytics capabilities, machine learning integration, and HIPAA-compliant security measures.',
    results: [
      '5x increase in data processing speed',
      '90% reduction in data access time',
      'Advanced analytics capabilities enabled',
      'Full HIPAA compliance achieved',
    ],
    duration: '15 months',
    teamSize: '20+ experts',
    technologies: ['GCP', 'BigQuery', 'TensorFlow', 'Python', 'Kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-case-studies.jpg"
            alt="Success graph background"
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">Case Studies</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover how we've helped businesses achieve their digital transformation goals
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={study.duration} className="text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Duration: {study.duration}
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 