import { createI18n } from 'vue-i18n'
import en from './assets/i18n/en.json'
import de from './assets/i18n/de.json'
import tr from './assets/i18n/tr.json'
const messages = {
  en: en,
  tr: tr,
  de:de
};

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  messages: messages,
  fallbackLocale:  localStorage.getItem('lang')|| 'en',
 
});

export default i18n;