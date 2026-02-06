import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const STORAGE_KEY = 'portfolioPrefs'

const defaultPrefs = {
  lang: 'en',
  isDarkMode: false
}

// Get preferences from localStorage or use defaults
const getStoredPrefs = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error reading preferences from localStorage:', error)
  }
  return { ...defaultPrefs }
}

// Initialize preferences
const prefs = ref(getStoredPrefs())

// Save preferences to localStorage
const savePrefs = (newPrefs) => {
  try {
    prefs.value = { ...prefs.value, ...newPrefs }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs.value))
  } catch (error) {
    console.error('Error saving preferences to localStorage:', error)
  }
}

// Watch for changes and update document direction and theme
watch(
  () => prefs.value.lang,
  (newLang) => {
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr'
  },
  { immediate: true }
)

watch(
  () => prefs.value.isDarkMode,
  (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  },
  { immediate: true }
)

export const usePreferences = () => {
  const setLanguage = (lang) => {
    savePrefs({ lang })
  }

  const toggleDarkMode = () => {
    savePrefs({ isDarkMode: !prefs.value.isDarkMode })
  }

  const setDarkMode = (isDark) => {
    savePrefs({ isDarkMode: isDark })
  }

  return {
    prefs,
    setLanguage,
    toggleDarkMode,
    setDarkMode
  }
}
