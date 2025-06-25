'use client'

import React from 'react'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { blogPosts as enBlogPosts, categories as enCategories } from '@/data/EN/blog.json'
import { blogPosts as frBlogPosts, categories as frCategories } from '@/data/FR/blog.json'

export default function Blog() {
  // Detect language from URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  const blogPosts = lang === 'fr' ? frBlogPosts : enBlogPosts
  const categories = lang === 'fr' ? frCategories : enCategories

  const text = {
    en: {
      title: 'Insights & Blog',
      subtitle: 'Latest insights, stories, and updates from Logibyte.',
      blogInsights: 'Blog & Insights',
      industryInsights: 'Industry Insights & Thought Leadership',
      description: 'Stay informed about the latest trends, technologies, and best practices in the IT industry. Our experts share their knowledge and insights to help you navigate the digital landscape.',
      stayUpdated: 'Stay Updated with Our Newsletter',
      newsletterDescription: 'Get the latest insights, articles, and updates delivered straight to your inbox.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      backgroundAlt: 'Blog writing background',
    },
    fr: {
      title: 'Aperçus & Blog',
      subtitle: 'Derniers aperçus, histoires et mises à jour de Logibyte.',
      blogInsights: 'Blog & Aperçus',
      industryInsights: 'Aperçus de l\'Industrie & Leadership d\'Opinion',
      description: 'Restez informé des dernières tendances, technologies et meilleures pratiques dans l\'industrie IT. Nos experts partagent leurs connaissances et aperçus pour vous aider à naviguer dans le paysage numérique.',
      stayUpdated: 'Restez à Jour avec Notre Newsletter',
      newsletterDescription: 'Recevez les derniers aperçus, articles et mises à jour directement dans votre boîte de réception.',
      emailPlaceholder: 'Entrez votre email',
      subscribe: 'S\'abonner',
      backgroundAlt: 'Arrière-plan d\'écriture de blog',
    },
  }[lang]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with local background image */}
      <section className="relative py-20 overflow-hidden tech-hero-bg">
        <div className="absolute inset-0">
          <img
            src="/images/hero-blog.jpg"
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
          </div>
        </div>
      </section>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">{text.blogInsights}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {text.industryInsights}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {text.description}
          </p>
        </div>

        {/* Categories */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </time>
                  <span className="text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    <a href={`${lang === 'fr' ? '/fr' : ''}/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {post.category}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mx-auto mt-32 max-w-2xl sm:mt-40">
          <div className="relative isolate overflow-hidden bg-gray-900 dark:bg-gray-800 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {text.stayUpdated}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              {text.newsletterDescription}
            </p>
            <form className="mx-auto mt-10 max-w-md">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  {lang === 'fr' ? 'Adresse email' : 'Email address'}
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder={text.emailPlaceholder}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {text.subscribe}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 