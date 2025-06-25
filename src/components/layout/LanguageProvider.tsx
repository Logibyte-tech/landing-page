'use client'

import { useEffect } from 'react'

interface LanguageProviderProps {
  lang: string
  children: React.ReactNode
}

export default function LanguageProvider({ lang, children }: LanguageProviderProps) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return <>{children}</>
} 