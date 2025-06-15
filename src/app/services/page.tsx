import React from 'react'
import { Code2, Cloud, Shield, Database, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs. From web applications to enterprise software, we build scalable and maintainable solutions.',
    icon: Code2,
    features: [
      'Web Application Development',
      'Enterprise Software Solutions',
      'API Development & Integration',
      'Legacy System Modernization',
      'Quality Assurance & Testing',
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Harness the power of cloud computing with our comprehensive cloud services. We help businesses migrate, optimize, and manage their cloud infrastructure.',
    icon: Cloud,
    features: [
      'Cloud Migration & Strategy',
      'AWS/Azure/GCP Solutions',
      'Cloud Infrastructure Management',
      'Serverless Architecture',
      'Cloud Security & Compliance',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive cybersecurity solutions. We implement robust security measures to safeguard your business from threats.',
    icon: Shield,
    features: [
      'Security Assessment & Audit',
      'Threat Detection & Prevention',
      'Compliance & Risk Management',
      'Security Architecture Design',
      'Incident Response Planning',
    ],
  },
  {
    id: 'data-solutions',
    title: 'Data Solutions',
    description: 'Transform your data into actionable insights with our data solutions. We help businesses collect, process, and analyze data to drive informed decisions.',
    icon: Database,
    features: [
      'Data Analytics & BI',
      'Big Data Processing',
      'Data Warehouse Solutions',
      'Machine Learning & AI',
      'Data Visualization',
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-services.jpg"
            alt="Cloud computing background"
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive technology solutions to drive your business forward. We combine expertise,
              innovation, and industry best practices to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">What We Offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Technology Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From custom software development to digital transformation, we provide end-to-end solutions
            that help businesses thrive in the digital age.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <service.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <ArrowRight className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Let's work together to create innovative solutions that drive your business forward.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 