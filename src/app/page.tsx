'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Globe, Shield, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import homeData from '@/data/home.json'

const { features, testimonials, showcaseItems } = homeData

const featureIcons: { [key: string]: React.ElementType } = {
  Code,
  Globe,
  Shield,
  Users,
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section with theme-aware gradient and local image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-home.jpg"
            alt="Digital technology abstract background"
            className="w-full h-full object-cover object-center opacity-70 dark:opacity-60"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 opacity-90 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tech-title mb-6 animate-fade-in">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              We help businesses thrive in the digital age with innovative solutions and cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Started
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Slider Section with theme-aware styles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Digital Solutions
          </h2>
          
          <div className="showcase-slider">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="pb-12"
            >
              {showcaseItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={`h-[400px] rounded-2xl p-8 ${item.image} relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition-colors"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="text-6xl mb-4">{item.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section with theme-aware styles */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to succeed in the digital world
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We provide comprehensive digital solutions to help your business grow and thrive in the modern marketplace.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = featureIcons[feature.icon]
                return (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      {Icon && <Icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />}
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <Link href="/contact" className="text-sm font-semibold leading-6 text-blue-600">
                          Learn more <span aria-hidden="true">→</span>
                        </Link>
                      </p>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section with theme-aware styles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Clients Say
          </h2>
          
          <div className="testimonial-slider max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section with theme-aware gradient */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Let's work together to create innovative solutions that drive your business forward.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Started
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 