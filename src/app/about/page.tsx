import React from 'react'
import { Building2, Users, Target, Award } from 'lucide-react'

const stats = [
  { id: 1, name: 'Years of Experience', value: '10+' },
  { id: 2, name: 'Projects Completed', value: '200+' },
  { id: 3, name: 'Team Members', value: '50+' },
  { id: 4, name: 'Client Satisfaction', value: '98%' },
]

const values = [
  {
    name: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    icon: Target,
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client service.',
    icon: Award,
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and close collaboration with our clients.',
    icon: Users,
  },
  {
    name: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency.',
    icon: Building2,
  },
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Logibyte</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a leading IT consulting firm dedicated to helping businesses navigate the digital landscape. 
            With over a decade of experience, we've helped numerous organizations transform their operations 
            through innovative technology solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our core values guide everything we do, from how we work with clients to how we develop our team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the experienced professionals who lead our company and drive our success.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {/* Add team members here */}
          <li>
            <img
              className="aspect-[14/13] w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">John Doe</h3>
            <p className="text-base leading-7 text-gray-600">Chief Executive Officer</p>
          </li>
          <li>
            <img
              className="aspect-[14/13] w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Jane Smith</h3>
            <p className="text-base leading-7 text-gray-600">Chief Technology Officer</p>
          </li>
          <li>
            <img
              className="aspect-[14/13] w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Michael Johnson</h3>
            <p className="text-base leading-7 text-gray-600">Head of Operations</p>
          </li>
          <li>
            <img
              className="aspect-[14/13] w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Sarah Williams</h3>
            <p className="text-base leading-7 text-gray-600">Head of Client Success</p>
          </li>
        </ul>
      </div>
    </div>
  )
} 