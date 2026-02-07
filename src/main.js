import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import i18n from './i18n'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { usePreferences } from './composables/usePreferences'
import { scrollIn } from './directives/scrollIn'

// Initialize preferences to set direction and theme
const { prefs } = usePreferences()

// Sync i18n locale with preferences
i18n.global.locale.value = prefs.value.lang

const app = createApp(App)
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.directive('scroll-in', scrollIn)
app.mount('#app')
