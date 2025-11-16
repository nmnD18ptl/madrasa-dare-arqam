import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from '../locales/en.json';
import urTranslations from '../locales/ur.json';
import mrTranslations from '../locales/mr.json';
import hiTranslations from '../locales/hi.json';
import arTranslations from '../locales/ar.json';
import knTranslations from '../locales/kn.json';

const resources = {
  en: { translation: enTranslations },
  ur: { translation: urTranslations },
  mr: { translation: mrTranslations },
  hi: { translation: hiTranslations },
  ar: { translation: arTranslations },
  kn: { translation: knTranslations },
};

// RTL languages
const rtlLanguages = ['ar', 'ur'];

// Function to update HTML direction
const updateHtmlDirection = (lng: string) => {
  const html = document.documentElement;
  if (rtlLanguages.includes(lng)) {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', lng);
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', lng);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ur', 'mr', 'hi', 'ar', 'kn'],
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  })
  .then(() => {
    // Set initial direction
    updateHtmlDirection(i18n.language);
  });

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  updateHtmlDirection(lng);
});

export default i18n;

