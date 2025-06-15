import React from 'react'
import { Calendar, Clock, User, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing in 2024',
    description: 'Explore the latest trends and innovations shaping the cloud computing landscape, from edge computing to serverless architectures.',
    category: 'Cloud Technology',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Remote Work',
    description: 'Essential security measures and best practices to protect your organization in the era of remote and hybrid work environments.',
    category: 'Cybersecurity',
    author: 'Michael Rodriguez',
    date: 'March 10, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    title: 'Digital Transformation: A Roadmap for Success',
    description: 'Learn how to navigate the complex journey of digital transformation and drive meaningful change in your organization.',
    category: 'Digital Transformation',
    author: 'Emily Thompson',
    date: 'March 5, 2024',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    title: 'The Rise of AI in Enterprise Software',
    description: 'Discover how artificial intelligence is revolutionizing enterprise software and creating new opportunities for business innovation.',
    category: 'Artificial Intelligence',
    author: 'David Kim',
    date: 'February 28, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    title: 'DevOps: Breaking Down Silos for Better Delivery',
    description: 'How implementing DevOps practices can improve collaboration, accelerate delivery, and enhance software quality.',
    category: 'DevOps',
    author: 'Lisa Wang',
    date: 'February 20, 2024',
    readTime: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    title: 'Data-Driven Decision Making in Modern Business',
    description: 'Explore how businesses are leveraging data analytics to make informed decisions and gain competitive advantages.',
    category: 'Data Analytics',
    author: 'James Wilson',
    date: 'February 15, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
]

const categories = [
  'All Posts',
  'Cloud Technology',
  'Cybersecurity',
  'Digital Transformation',
  'Artificial Intelligence',
  'DevOps',
  'Data Analytics',
]

export default function Blog() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section with techy background */}
        <section className="relative py-20 overflow-hidden tech-hero-bg">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tech-title mb-6">Insights & Blog</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Latest insights, stories, and updates from Logibyte.</p>
            </div>
          </div>
        </section>

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Blog & Insights</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Industry Insights & Thought Leadership
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Stay informed about the latest trends, technologies, and best practices in the IT industry.
              Our experts share their knowledge and insights to help you navigate the digital landscape.
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
                      <a href={`/blog/${post.id}`}>
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
                Stay Updated with Our Newsletter
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Get the latest insights, articles, and updates delivered straight to your inbox.
              </p>
              <form className="mx-auto mt-10 max-w-md">
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 