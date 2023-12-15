import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLocale from '../locales/en/translation.json';
import uaLocale from '../locales/ua/translation.json';
import { localStorageKey } from './constants';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    detection: {
      lookupLocalStorage: localStorageKey,
    },
    resources: {
      en: { translation: enLocale },
      ua: { translation: uaLocale },
    },
  });
