import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Logibyte',
    default: 'Logibyte - Innovative Technology Solutions for Modern Businesses',
  },
  description:
    'Logibyte specializes in digital transformation, cloud solutions, cybersecurity, and custom software development. We empower businesses to thrive in the digital age.',
  keywords: [
    'Digital Transformation',
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Software',
    'IT Consulting',
    'Logibyte',
    'Technology Solutions',
  ],
  authors: [{ name: 'Logibyte', url: 'https://www.logibyte.ca' }],
  creator: 'Logibyte',
  publisher: 'Logibyte',
  openGraph: {
    title: 'Logibyte - Innovative Technology Solutions',
    description: 'Empowering businesses with cutting-edge digital transformation, cloud, and security services.',
    url: 'https://www.logibyte.ca',
    siteName: 'Logibyte',
    images: [
      {
        url: 'https://www.logibyte.ca/images/og-image.jpg', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Logibyte Logo and Tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logibyte - Innovative Technology Solutions',
    description: 'Empowering businesses with cutting-edge digital transformation, cloud, and security services.',
    // images: ['https://www.logibyte.ca/images/og-image.jpg'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://www.logibyte.ca'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <Toaster position="top-right" />
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 