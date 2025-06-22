'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { MapPin, Phone, Mail } from 'lucide-react'
import navigation from '@/data/navigation.json'

const socialIcons: { [key: string]: React.ElementType } = {
  Facebook: FaFacebook,
  X: FaTwitter,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  GitHub: FaGithub,
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Logibyte
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = socialIcons[item.name]
                return (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center text-sm leading-6 text-gray-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    100 King St W, 6060, Toronto, Ontario M5X 1E2, CA
                  </li>
                  <li className="flex items-center text-sm leading-6 text-gray-300">
                    <Phone className="h-5 w-5 mr-2" />
                    +1 (647) 366-6276
                  </li>
                  <li className="flex items-center text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 mr-2" />
                    contact@logibyte.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Logibyte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 