<template>
  <nav
    class="navbar"
    :class="{ 'navbar-scrolled': scrolled }"
  >
    <div class="navbar-container">
      <a
        href="#home"
        class="navbar-logo"
        >{{ $t('nav.siteName') }}</a
      >
      <div class="navbar-right">
        <LanguageToggle />
        <button
          class="navbar-toggle"
          :class="{ 'navbar-toggle-active': mobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          class="navbar-menu"
          :class="{
            'navbar-menu-open': mobileMenuOpen,
            'dark-mode': prefs.isDarkMode,
          }"
        >
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="navbar-item"
          >
            <a
              :href="item.href"
              class="navbar-link"
              @click="handleNavClick"
              >{{ $t(item.key) }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageToggle from './LanguageToggle.vue'
import { usePreferences } from '../composables/usePreferences'
const { prefs } = usePreferences()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const menuItems = [
  { id: 1, key: 'nav.home', href: '#home' },
  { id: 2, key: 'nav.about', href: '#about' },
  { id: 3, key: 'nav.projects', href: '#projects' },
  { id: 4, key: 'nav.contact', href: '#contact' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleNavClick = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.navbar {
  padding: 0 1em;
  position: fixed;
  top: 0;
  left: 0;
  // width: 100%;
  right: 0;
  z-index: $z-fixed;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all $transition-base;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  .dark-mode & {
    background: rgba(31, 41, 55, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  @include respond-to(sm) {
    // width: auto;
  }
}

.navbar-scrolled {
  box-shadow: $shadow-md;
}

.navbar-container {
  @include flex-between;
  gap: $spacing-md;
  padding-top: $spacing-md;
  padding-bottom: $spacing-md;
  align-items: center;
}

.navbar-logo {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $primary-color;
  transition: color $transition-fast;
  &:hover {
    color: $primary-dark;
  }

  @media (max-width: $breakpoint-sm) {
    display: none;
  }
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  justify-content: flex-end;
  @media (max-width: $breakpoint-sm) {
    justify-content: center;
    width: 100%;
  }
}

.navbar-toggle {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  margin-top: 0.5em;
  @include respond-to(md) {
    display: none;
  }
  span {
    width: 100%;
    height: 2px;
    background: $text-primary;
    border-radius: $radius-full;
    transition: all $transition-base;
    .dark-mode & {
      background: rgba(255, 255, 255, 0.9);
    }
  }
}

.navbar-toggle-active {
  span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

.navbar-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: $shadow-lg;
  padding: $spacing-md;
  gap: $spacing-sm;

  @include respond-to(md) {
    display: flex;
    flex-direction: row;
    position: static;
    box-shadow: none;
    padding: 0;
    gap: $spacing-lg;
  }
  background: transparent !important;
  @media (max-width: $breakpoint-md) {
    &.navbar-menu-open {
      background: white !important;
      &.dark-mode {
        background: $bg-dark-secondary !important;
      }
    }
  }
}

.navbar-menu-open {
  display: flex;
}

.navbar-item {
  list-style: none;
}

.navbar-link {
  display: block;
  padding: $spacing-sm $spacing-md;
  color: $text-primary;
  font-weight: $font-weight-medium;
  border-radius: $radius-md;
  transition: all $transition-fast;
  .dark-mode & {
    color: rgba(255, 255, 255, 0.9);
  }
  @include respond-to(md) {
    padding: $spacing-xs $spacing-sm;
  }
  &:hover {
    color: $primary-color;
    background: $bg-secondary;
    .dark-mode & {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
