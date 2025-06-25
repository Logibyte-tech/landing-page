'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Language, SUPPORTED_LANGUAGES, LANGUAGE_NAMES, LANGUAGE_FLAGS, getLanguageFromPath, getAlternateLanguagePath } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = getLanguageFromPath(pathname);

  const handleLanguageChange = (language: Language) => {
    const newPath = getAlternateLanguagePath(pathname, language);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span>{LANGUAGE_FLAGS[currentLanguage]}</span>
        <span className="hidden sm:inline">{LANGUAGE_NAMES[currentLanguage]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  currentLanguage === language ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{LANGUAGE_FLAGS[language]}</span>
                  <span>{LANGUAGE_NAMES[language]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 