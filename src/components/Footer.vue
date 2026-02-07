<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-logo">Portfolio</h3>
          <p class="text-small footer-tagline">{{ $t('footer.tagline') }}</p>
        </div>
        <div class="footer-links">
          <div class="footer-link-group">
            <h4 class="footer-link-title">{{ $t('footer.navigation') }}</h4>
            <ul class="footer-link-list">
              <li><a href="#home" @click="scrollToSection('home')">{{ $t('nav.home') }}</a></li>
              <li><a href="#about" @click="scrollToSection('about')">{{ $t('nav.about') }}</a></li>
              <li><a href="#projects" @click="scrollToSection('projects')">{{ $t('nav.projects') }}</a></li>
              <li><a href="#contact" @click="scrollToSection('contact')">{{ $t('nav.contact') }}</a></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h4 class="footer-link-title">{{ $t('footer.connect') }}</h4>
            <ul class="footer-link-list">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:your.email@example.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="text-small footer-copyright">© {{ currentYear }} Your Name. {{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.footer {
  background: $bg-dark;
  color: white;
  padding: $spacing-2xl 0 $spacing-lg;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
  @include respond-to(md) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  flex: 1;
}

.footer-logo {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $primary-light;
  margin-bottom: $spacing-sm;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.7);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  @include respond-to(sm) {
    flex-direction: row;
    gap: $spacing-2xl;
  }
}

.footer-link-group {
  min-width: 150px;
}

.footer-link-title {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  margin-bottom: $spacing-sm;
  color: white;
}

.footer-link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: $font-size-sm;
    transition: color $transition-fast;
    &:hover {
      color: $primary-light;
    }
  }
}

.footer-bottom {
  padding-top: $spacing-lg;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.6);
}
</style>
