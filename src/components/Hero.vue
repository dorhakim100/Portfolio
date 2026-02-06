<template>
  <section
    id="home"
    class="hero"
  >
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-text slide-up">
          <h1 class="hero-title">
            {{ $t('hero.title') }}
            <span class="hero-name">{{ $t('hero.name') }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ $t('hero.subtitle') }}</h2>
          <p class="hero-description text-body">
            {{ $t('hero.description') }}
          </p>
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
        <div class="hero-visual scale-in">
          <div class="hero-image-wrapper">
            <img
              src="/public/profile.jpg"
              alt="Hero Image"
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
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
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

  &-container {
    position: relative;
    z-index: 1;
  }

  &-content {
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

  &-text {
    flex: 1;
    max-width: 600px;
  }

  &-title {
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

  &-name {
    background: linear-gradient(
      135deg,
      $primary-color 0%,
      $secondary-color 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &-subtitle {
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

  &-description {
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

  &-actions {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    width: 100%;

    @include respond-to(sm) {
      flex-direction: row;
      width: auto;
    }
  }

  &-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-image-wrapper {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 1;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: $radius-xl;
    }
  }

  &-image-placeholder {
    width: 100%;
    height: 100%;
    border-radius: $radius-xl;
    background: linear-gradient(
      135deg,
      $primary-color 0%,
      $secondary-color 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: $shadow-xl;
    animation: float 6s ease-in-out infinite;

    svg {
      width: 80%;
      height: 80%;
    }
  }

  &-scroll-indicator {
    position: absolute;
    bottom: $spacing-lg;
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @include respond-to(md) {
      display: block;
    }
  }

  &-scroll-mouse {
    width: 24px;
    height: 40px;
    border: 2px solid $text-secondary;
    border-radius: 12px;
    position: relative;

    .dark-mode & {
      border-color: rgba(255, 255, 255, 0.5);
    }

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background: $text-secondary;
      border-radius: 2px;
      animation: scroll 2s infinite;

      .dark-mode & {
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
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

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }
}
</style>
