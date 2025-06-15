import React from 'react'
import { Handshake, Users, Globe, Rocket } from 'lucide-react'

const benefits = [
  {
    name: 'Strategic Collaboration',
    description: 'Join forces with us to create innovative solutions that drive business growth and technological advancement.',
    icon: Handshake,
  },
  {
    name: 'Global Network',
    description: 'Access our extensive network of industry leaders, clients, and technology partners worldwide.',
    icon: Globe,
  },
  {
    name: 'Expert Team',
    description: 'Work with our team of experienced professionals who bring deep expertise in various technology domains.',
    icon: Users,
  },
  {
    name: 'Innovation Hub',
    description: 'Collaborate on cutting-edge projects and stay ahead of industry trends through our innovation initiatives.',
    icon: Rocket,
  },
]

const partnershipTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate your technology solutions with our services to deliver comprehensive offerings to clients.',
    features: [
      'Joint solution development',
      'Technical integration support',
      'Co-marketing opportunities',
      'Shared resources and expertise',
    ],
  },
  {
    title: 'Channel Partners',
    description: 'Resell our services and solutions to your clients while earning competitive margins.',
    features: [
      'Dedicated partner support',
      'Sales and technical training',
      'Marketing resources',
      'Lead generation support',
    ],
  },
  {
    title: 'Strategic Alliances',
    description: 'Form long-term strategic partnerships to address complex business challenges together.',
    features: [
      'Joint go-to-market strategies',
      'Shared innovation initiatives',
      'Industry-specific solutions',
      'Global market expansion',
    ],
  },
]

export default function Partnership() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Partner With Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our network of partners and together, let's create innovative solutions that drive business growth and technological advancement.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partnership Benefits</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the advantages of partnering with Logibyte and how we can help you grow your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Partnership types section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partnership Types</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the partnership model that best fits your business goals and objectives.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partnershipTypes.map((type) => (
            <div key={type.title} className="flex flex-col">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">{type.title}</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">{type.description}</p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {type.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-blue-200 to-blue-600"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Let's discuss how we can create value together and drive mutual growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 