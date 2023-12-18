import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLocale from '../locales/en/translation.json';
import uaLocale from '../locales/ua/translation.json';
import { localStorageKey } from './constants';

const customPath = {
  name: 'fromPath',
  lookup() {
    let found;
    if (typeof window !== 'undefined') {
      const location = window.location.pathname;
      if (location !== '/') {
        found = location.slice(1, 3);
      }
    }
    return found;
  },
};

const defaultLang = {
  name: 'defaultLang',
  lookup() {
    return 'ua';
  },
};

const languageDetector = new LanguageDetector();

languageDetector.addDetector(customPath);
languageDetector.addDetector(defaultLang);

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['fromPath', 'localStorage', 'defaultLang'],
      lookupLocalStorage: localStorageKey,
    },
    resources: {
      en: { translation: enLocale },
      ua: { translation: uaLocale },
    },
  });
