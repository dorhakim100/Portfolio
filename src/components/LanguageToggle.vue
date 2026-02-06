<template>
  <div class="language-toggle">
    <button
      class="language-toggle-button"
      :class="{ 'language-toggle-button--active': prefs.isDarkMode }"
      @click="toggleDarkMode"
      :aria-label="prefs.isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <span class="language-toggle-icon">{{ prefs.isDarkMode ? '🌙' : '☀️' }}</span>
    </button>
    <div class="language-toggle-divider"></div>
    <button
      class="language-toggle-button"
      :class="{ 'language-toggle-button--active': prefs.lang === 'en' }"
      @click="setLanguage('en')"
      aria-label="Switch to English"
    >
      EN
    </button>
    <button
      class="language-toggle-button"
      :class="{ 'language-toggle-button--active': prefs.lang === 'he' }"
      @click="setLanguage('he')"
      aria-label="Switch to Hebrew"
    >
      עברית
    </button>
  </div>
</template>

<script setup>
import { usePreferences } from '../composables/usePreferences'
import { useI18n } from 'vue-i18n'

const { prefs, setLanguage: setPrefsLanguage, toggleDarkMode } = usePreferences()
const { locale } = useI18n()

const setLanguage = (lang) => {
  setPrefsLanguage(lang)
  locale.value = lang
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.language-toggle {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-xs;
  background: rgba(255, 255, 255, 0.1);
  border-radius: $radius-lg;
  backdrop-filter: blur(10px);

  .dark-mode & {
    background: rgba(0, 0, 0, 0.3);
  }

  @include respond-to(md) {
    gap: $spacing-sm;
    padding: $spacing-xs $spacing-sm;
  }
}

.language-toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-xs $spacing-sm;
  min-width: 36px;
  height: 36px;
  border-radius: $radius-md;
  background: transparent;
  color: $text-primary;
  font-weight: $font-weight-medium;
  font-size: $font-size-sm;
  transition: all $transition-fast;
  cursor: pointer;
  border: none;

  .dark-mode & {
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: $primary-color;

    .dark-mode & {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }

  &--active {
    background: $primary-color;
    color: white;

    &:hover {
      background: $primary-dark;
      color: white;
    }
  }
}

.language-toggle-icon {
  font-size: $font-size-lg;
}

.language-toggle-divider {
  width: 1px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 $spacing-xs;

  .dark-mode & {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
