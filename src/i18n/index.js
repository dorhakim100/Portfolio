import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import he from './locales/he.js'

// Get saved language from localStorage or default to 'en'
const savedLang = localStorage.getItem('portfolioPrefs')
  ? JSON.parse(localStorage.getItem('portfolioPrefs')).lang || 'en'
  : 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: {
    en,
    he
  }
})

export default i18n
