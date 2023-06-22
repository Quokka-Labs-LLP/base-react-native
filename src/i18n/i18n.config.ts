import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en, fr, } from './translations'

//empty for now
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
