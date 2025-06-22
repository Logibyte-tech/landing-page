import React from 'react'
import { Building2, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'
import aboutData from '@/data/about.json'

const { stats, values, team } = aboutData

const valueIcons: { [key: string]: React.ElementType } = {
  Building2,
  Users,
  Target,
  Award,
}

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-about.jpg"
            alt="Teamwork meeting background"
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">About Logibyte</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We are a leading IT consulting firm dedicated to helping businesses navigate the digital landscape. 
              With over a decade of experience, we've helped numerous organizations transform their operations 
              through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Founded in 2013, Logibyte has grown from a small team of passionate developers to a full-service 
              IT consulting firm serving clients across various industries.
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our core values guide everything we do, from how we work with clients to how we develop our team.
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Leadership Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Meet the experienced professionals who lead our company and drive our success.
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
          href="/contact"
          className="btn-primary"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
} 