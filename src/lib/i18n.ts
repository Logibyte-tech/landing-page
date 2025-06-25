export type Language = 'en' | 'fr';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr'];

export const LANGUAGE_NAMES: Record<Language, string> = {
    en: 'English',
    fr: 'Français'
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
    en: '🇺🇸',
    fr: '🇫🇷'
};

export function getLanguageFromPath(pathname: string): Language {
    if (pathname.startsWith('/fr/') || pathname === '/fr') {
        return 'fr';
    }
    return 'en';
}

export function getPathWithLanguage(pathname: string, language: Language): string {
    if (language === 'fr') {
        // Add /fr prefix if not already present
        if (!pathname.startsWith('/fr')) {
            return `/fr${pathname === '/' ? '' : pathname}`;
        }
    } else {
        // Remove /fr prefix for English
        if (pathname.startsWith('/fr/')) {
            return pathname.replace('/fr/', '/');
        }
        if (pathname === '/fr') {
            return '/';
        }
    }
    return pathname;
}

export function getDataPath(language: Language, filename: string): string {
    const langFolder = language === 'fr' ? 'FR' : 'EN';
    return `/src/data/${langFolder}/${filename}.json`;
}

export async function loadData<T>(language: Language, filename: string): Promise<T> {
    const langFolder = language === 'fr' ? 'FR' : 'EN';
    const data = await import(`../data/${langFolder}/${filename}.json`);
    return data.default;
}

export function getAlternateLanguagePath(currentPath: string, targetLanguage: Language): string {
    const currentLang = getLanguageFromPath(currentPath);

    if (currentLang === targetLanguage) {
        return currentPath;
    }

    return getPathWithLanguage(currentPath, targetLanguage);
} 