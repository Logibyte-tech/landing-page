"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Code, Globe, Shield, Users, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import enData from "@/data/EN/home.json";
import frData from "@/data/FR/home.json";

const featureIcons: { [key: string]: React.ElementType } = {
  Code,
  Globe,
  Shield,
  Users,
};

const text = {
  en: {
    heroTitle: "Transforming Ideas into Digital Reality",
    heroDesc:
      "We help businesses thrive in the digital age with innovative solutions and cutting-edge technology",
    ctaPrimary: "Get Started",
    ctaSecondary: "Explore Services",
    showcaseTitle: "Our Digital Solutions",
    featuresTitle: "Our Services",
    featuresDesc:
      "We provide comprehensive digital solutions to help your business grow and thrive in the modern marketplace.",
    featuresMain: "Everything you need to succeed in the digital world",
    featuresLearnMore: "Learn more",
    testimonialsTitle: "What Our Clients Say",
    ctaSectionTitle: "Ready to Transform Your Business?",
    ctaSectionDesc:
      "Let's work together to create innovative solutions that drive your business forward.",
    ctaSectionPrimary: "Get Started",
    ctaSectionSecondary: "Learn More",
    contactLink: "/contact",
    servicesLink: "/services",
    aboutLink: "/about",
  },
  fr: {
    heroTitle: "Transformer les Idées en Réalité Numérique",
    heroDesc:
      "Nous aidons les entreprises à prospérer à l'ère numérique avec des solutions innovantes et une technologie de pointe",
    ctaPrimary: "Commencer",
    ctaSecondary: "Explorer nos Services",
    showcaseTitle: "Nos Solutions Numériques",
    featuresTitle: "Nos Services",
    featuresDesc:
      "Nous fournissons des solutions numériques complètes pour aider votre entreprise à croître et prospérer sur le marché moderne.",
    featuresMain: "Tout ce dont vous avez besoin pour réussir dans le monde numérique",
    featuresLearnMore: "En savoir plus",
    testimonialsTitle: "Ce que Disent Nos Clients",
    ctaSectionTitle: "Prêt à Transformer Votre Entreprise ?",
    ctaSectionDesc:
      "Travaillons ensemble pour créer des solutions innovantes qui font avancer votre entreprise.",
    ctaSectionPrimary: "Commencer",
    ctaSectionSecondary: "En Savoir Plus",
    contactLink: "/fr/contact",
    servicesLink: "/fr/services",
    aboutLink: "/fr/about",
  },
};

export default function Home() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/fr") ? "fr" : "en";
  const homeData = lang === "fr" ? frData : enData;
  const t = text[lang];
  const { features, testimonials, showcaseItems } = homeData;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-home.jpg"
            alt={lang === "fr" ? "Arrière-plan abstrait de technologie numérique" : "Digital technology abstract background"}
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
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={t.contactLink} className="btn-primary">
                {t.ctaPrimary}
              </Link>
              <Link href={t.servicesLink} className="btn-secondary">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Slider Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.showcaseTitle}
          </h2>
          <div className="showcase-slider">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
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

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">{t.featuresTitle}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t.featuresMain}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t.featuresDesc}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      {Icon && <Icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />}
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <Link href={t.contactLink} className="text-sm font-semibold leading-6 text-blue-600">
                          {t.featuresLearnMore} <span aria-hidden="true">→</span>
                        </Link>
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.testimonialsTitle}
          </h2>
          <div className="testimonial-slider max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t.ctaSectionTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              {t.ctaSectionDesc}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href={t.contactLink} className="btn-primary">
                {t.ctaSectionPrimary}
              </Link>
              <Link href={t.aboutLink} className="btn-secondary">
                {t.ctaSectionSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 