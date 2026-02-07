<template>
  <section
    id="home"
    class="hero"
  >
    <div class="container hero-container">
      <div class="hero-content">
        <div
          class="hero-text scroll-in-up opacity-animation"
          v-scroll-in
        >
          <h1 class="hero-title">
            {{ $t('hero.title') }}
            <span class="hero-name">{{ $t('hero.name') }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ $t('hero.subtitle') }}</h2>
          <p class="hero-description text-body">{{ $t('hero.description') }}</p>
          <div class="hero-actions">
            <CustomButton
              variant="primary"
              size="lg"
              @click="scrollToSection('projects')"
            >
              {{ $t('hero.viewWork') }}
            </CustomButton>
            <CustomButton
              variant="outline"
              size="lg"
              @click="scrollToSection('contact')"
            >
              {{ $t('hero.getInTouch') }}
            </CustomButton>
          </div>
        </div>
        <div
          class="hero-visual scroll-in-scale opacity-animation"
          v-scroll-in
          data-scroll-delay="80"
        >
          <div class="hero-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Hero"
              class="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomButton from './CustomButton.vue'

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 1em;
  padding-top: calc(100px + $spacing-md);
  padding-bottom: $spacing-2xl;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  .dark-mode & {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  }
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 70%
    );
    animation: float 20s ease-in-out infinite;
  }
}

.hero-container {
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
  align-items: center;
  text-align: center;
  @include respond-to(md) {
    flex-direction: row;
    text-align: left;
    gap: $spacing-2xl;
  }
  [dir='rtl'] & {
    @include respond-to(md) {
      text-align: right;
    }
  }
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  margin-bottom: $spacing-sm;
  color: $text-primary;
  .dark-mode & {
    color: white;
  }
  @include respond-to(md) {
    font-size: $font-size-4xl;
  }
  @include respond-to(lg) {
    font-size: $font-size-5xl;
  }
}

.hero-name {
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: $font-size-xl;
  font-weight: $font-weight-medium;
  color: $text-secondary;
  margin-bottom: $spacing-md;
  .dark-mode & {
    color: rgba(255, 255, 255, 0.8);
  }
  @include respond-to(md) {
    font-size: $font-size-2xl;
  }
}

.hero-description {
  margin-bottom: $spacing-xl;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  .dark-mode & {
    color: rgba(255, 255, 255, 0.8);
  }
  @include respond-to(md) {
    margin-left: 0;
    margin-right: 0;
    [dir='rtl'] & {
      margin-left: auto;
      margin-right: 0;
    }
  }
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
  width: 100%;
  justify-self: center;
  @include respond-to(sm) {
    flex-direction: row;
    width: auto;
  }
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-wrapper {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: $radius-xl;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
