import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const en = {
  translation: {
    welcome: 'Welcome to our application',
    counter: 'Count is {{count}}',
    editAndSave: 'Edit <1>src/App.tsx</1> and save to test HMR',
    clickOnVite: 'Click on the Vite and React logos to learn more',
    learnMore: 'Learn more',
    aboutVite: 'about Vite',
    aboutReact: 'about React',
  },
};

// Arabic translations
const ar = {
  translation: {
    welcome: 'مرحباً بكم في تطبيقنا',
    counter: 'العدد هو {{count}}',
    editAndSave: 'قم بتحرير <1>src/App.tsx</1> واحفظه لاختبار HMR',
    clickOnVite: 'انقر على شعارات Vite و React لمعرفة المزيد',
    learnMore: 'معرفة المزيد',
    aboutVite: 'حول Vite',
    aboutReact: 'حول React',
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en,
      ar,
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;