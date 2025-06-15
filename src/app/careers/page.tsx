import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Briefcase, MapPin, Clock, GraduationCap, Users, Building2, Globe, Heart, Sparkles } from 'lucide-react'

const openPositions = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build scalable and innovative solutions using cutting-edge technologies.',
    requirements: [
      '5+ years of software development experience',
      'Strong expertise in JavaScript/TypeScript',
      'Experience with React and Node.js',
      'Knowledge of cloud platforms (AWS/Azure/GCP)',
      'Excellent problem-solving skills',
    ],
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with containerization and orchestration',
      'Knowledge of infrastructure as code',
      'CI/CD pipeline implementation',
      'Cloud platform expertise',
    ],
  },
  {
    id: 3,
    title: 'Solutions Architect',
    department: 'Professional Services',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and implement enterprise solutions for our clients.',
    requirements: [
      '7+ years of IT consulting experience',
      'Strong architecture design skills',
      'Experience with enterprise systems',
      'Excellent communication skills',
      'Cloud architecture expertise',
    ],
  },
  {
    id: 4,
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Protect our clients\' digital assets and ensure security compliance.',
    requirements: [
      '4+ years of security experience',
      'Security certifications (CISSP, CEH, etc.)',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards',
      'Incident response experience',
    ],
  },
]

const benefits = [
  {
    name: 'Competitive Compensation',
    description: 'We offer competitive salaries and comprehensive benefits packages.',
    icon: Briefcase,
  },
  {
    name: 'Flexible Work Arrangements',
    description: 'Work remotely or in our modern offices with flexible hours.',
    icon: Clock,
  },
  {
    name: 'Professional Development',
    description: 'Continuous learning opportunities and career growth paths.',
    icon: GraduationCap,
  },
  {
    name: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive environment.',
    icon: Users,
  },
  {
    name: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs.',
    icon: Heart,
  },
  {
    name: 'Global Opportunities',
    description: 'Work with international clients and teams.',
    icon: Globe,
  },
  {
    name: 'Innovation Focus',
    description: 'Work with cutting-edge technologies and innovative solutions.',
    icon: Sparkles,
  },
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-careers.jpg"
            alt="Career growth background"
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">Careers</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Be part of a team that's shaping the future of digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Open Positions
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
                  href={`/careers/${position.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Apply Now
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
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.name}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {React.createElement(benefit.icon, { className: 'w-12 h-12' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 