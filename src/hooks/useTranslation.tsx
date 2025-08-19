import { useState, useEffect, useCallback } from 'react';

interface GeolocationData {
  country: string;
  language: string;
  currency: string;
  timezone: string;
}

interface TranslationState {
  isTranslating: boolean;
  currentLanguage: string;
  detectedLanguage: string;
  isDetecting: boolean;
  error: string | null;
}

// Language mapping based on country codes
const countryToLanguage: { [key: string]: string } = {
  'ES': 'es', // Spain
  'FR': 'fr', // France
  'DE': 'de', // Germany
  'IT': 'it', // Italy
  'PT': 'pt', // Portugal
  'NL': 'nl', // Netherlands
  'PL': 'pl', // Poland
  'RU': 'ru', // Russia
  'CN': 'zh', // China
  'JP': 'ja', // Japan
  'KR': 'ko', // Korea
  'AR': 'ar', // Arabic countries
  'BR': 'pt', // Brazil
  'MX': 'es', // Mexico
  'TR': 'tr', // Turkey
  'TH': 'th', // Thailand
  'VN': 'vi', // Vietnam
  'ID': 'id', // Indonesia
  'MY': 'ms', // Malaysia
  'IN': 'hi', // India
  'PK': 'ur', // Pakistan
  'BD': 'bn', // Bangladesh
  'IR': 'fa', // Iran
  'SA': 'ar', // Saudi Arabia
  'EG': 'ar', // Egypt
  'MA': 'ar', // Morocco
  'DZ': 'ar', // Algeria
  'TN': 'ar', // Tunisia
  'LB': 'ar', // Lebanon
  'JO': 'ar', // Jordan
  'SY': 'ar', // Syria
  'IQ': 'ar', // Iraq
  'KW': 'ar', // Kuwait
  'QA': 'ar', // Qatar
  'AE': 'ar', // UAE
  'OM': 'ar', // Oman
  'YE': 'ar', // Yemen
  'GB': 'en', // United Kingdom
  'US': 'en', // United States
  'CA': 'en', // Canada
  'AU': 'en', // Australia
  'NZ': 'en', // New Zealand
  'IE': 'en', // Ireland
  'ZA': 'en', // South Africa
};

const languageNames: { [key: string]: string } = {
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'pt': 'Português',
  'nl': 'Nederlands',
  'pl': 'Polski',
  'ru': 'Русский',
  'zh': '中文',
  'ja': '日本語',
  'ko': '한국어',
  'ar': 'العربية',
  'tr': 'Türkçe',
  'th': 'ไทย',
  'vi': 'Tiếng Việt',
  'id': 'Bahasa Indonesia',
  'ms': 'Bahasa Malaysia',
  'hi': 'हिन्दी',
  'ur': 'اردو',
  'bn': 'বাংলা',
  'fa': 'فارسی',
};

export const useTranslation = () => {
  const [state, setState] = useState<TranslationState>({
    isTranslating: false,
    currentLanguage: 'en',
    detectedLanguage: 'en',
    isDetecting: true,
    error: null,
  });

  const [geolocation, setGeolocation] = useState<GeolocationData | null>(null);

  // Detect user location and language from IP
  const detectLanguageFromIP = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isDetecting: true, error: null }));
      
      // Try multiple IP geolocation services as fallback
      const services = [
        'http://ip-api.com/json/?fields=country,countryCode,timezone,currency',
        'https://ipapi.co/json/',
        'https://api.ipify.org?format=json' // Fallback to just get IP
      ];

      let detected = false;
      
      for (const service of services) {
        try {
          const response = await fetch(service);
          const data = await response.json();
          
          let countryCode = '';
          
          if (data.countryCode) {
            countryCode = data.countryCode;
          } else if (data.country_code) {
            countryCode = data.country_code;
          } else if (data.country) {
            // If we only have country name, try to map it
            countryCode = data.country;
          }

          if (countryCode) {
            const language = countryToLanguage[countryCode.toUpperCase()] || 'en';
            
            setGeolocation({
              country: data.country || data.country_name || countryCode,
              language: language,
              currency: data.currency || '',
              timezone: data.timezone || '',
            });

            setState(prev => ({
              ...prev,
              detectedLanguage: language,
              currentLanguage: language,
              isDetecting: false,
            }));

            detected = true;
            break;
          }
        } catch (error) {
          console.warn(`Geolocation service failed:`, error);
          continue;
        }
      }

      if (!detected) {
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0];
        const detectedLang = Object.keys(languageNames).includes(browserLang) ? browserLang : 'en';
        
        setState(prev => ({
          ...prev,
          detectedLanguage: detectedLang,
          currentLanguage: detectedLang,
          isDetecting: false,
        }));
      }
    } catch (error) {
      console.error('Failed to detect language:', error);
      setState(prev => ({
        ...prev,
        isDetecting: false,
        error: 'Failed to detect location',
      }));
    }
  }, []);

  // Initialize language detection on mount
  useEffect(() => {
    detectLanguageFromIP();
  }, [detectLanguageFromIP]);

  // Simple translation function (mock implementation)
  // In a real app, you'd use Google Translate API, DeepL, or similar service via Supabase Edge Function
  const translateText = useCallback(async (text: string, targetLanguage: string): Promise<string> => {
    if (targetLanguage === 'en' || !text) return text;

    try {
      setState(prev => ({ ...prev, isTranslating: true }));
      
      // Mock translation delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simple translation mappings for demo
      const translations: { [key: string]: { [key: string]: string } } = {
        'es': {
          'Course Info': 'Información del Curso',
          'Programme': 'Programa',
          'Pricing': 'Precios',
          'Contact': 'Contacto',
          'Enquire Now': 'Consultar Ahora',
          'Search courses, info...': 'Buscar cursos, información...',
        },
        'fr': {
          'Course Info': 'Info Cours',
          'Programme': 'Programme',
          'Pricing': 'Tarifs',
          'Contact': 'Contact',
          'Enquire Now': 'Renseignez-vous',
          'Search courses, info...': 'Rechercher des cours, des infos...',
        },
        'de': {
          'Course Info': 'Kurs-Info',
          'Programme': 'Programm',
          'Pricing': 'Preise',
          'Contact': 'Kontakt',
          'Enquire Now': 'Jetzt Anfragen',
          'Search courses, info...': 'Kurse, Infos suchen...',
        }
      };

      const result = translations[targetLanguage]?.[text] || text;
      
      setState(prev => ({ ...prev, isTranslating: false }));
      return result;
    } catch (error) {
      console.error('Translation failed:', error);
      setState(prev => ({ 
        ...prev, 
        isTranslating: false, 
        error: 'Translation failed' 
      }));
      return text;
    }
  }, []);

  const changeLanguage = useCallback((language: string) => {
    setState(prev => ({ ...prev, currentLanguage: language }));
  }, []);

  const getCurrentLanguageName = useCallback(() => {
    return languageNames[state.currentLanguage] || 'English';
  }, [state.currentLanguage]);

  return {
    ...state,
    geolocation,
    translateText,
    changeLanguage,
    getCurrentLanguageName,
    availableLanguages: Object.keys(languageNames),
    languageNames,
  };
};