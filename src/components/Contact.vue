<template>
  <Section id="contact" variant="accent">
    <div class="contact">
      <div class="contact-header text-center fade-in">
        <h2 class="heading-2">{{ $t('contact.title') }}</h2>
        <p class="text-body contact-header-description">
          {{ $t('contact.description') }}
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info slide-up">
          <h3 class="heading-3 contact-section-title">{{ $t('contact.connect') }}</h3>
          <p class="text-body contact-info-description">
            {{ $t('contact.connectDescription') }}
          </p>

          <div class="contact-links">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link"
            >
              <span class="contact-link-icon">{{ link.icon }}</span>
              <span class="contact-link-text">{{ link.name }}</span>
            </a>
          </div>
        </div>

        <div class="contact-form-wrapper scale-in">
          <CustomCard class="contact-form-card">
            <h3 class="heading-3 contact-form-title">{{ $t('contact.sendMessage') }}</h3>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="contact-form-group">
                <label for="name" class="contact-label">{{ $t('contact.name') }}</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="contact-input"
                  :placeholder="$t('contact.namePlaceholder')"
                  required
                />
              </div>

              <div class="contact-form-group">
                <label for="email" class="contact-label">{{ $t('contact.email') }}</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="contact-input"
                  :placeholder="$t('contact.emailPlaceholder')"
                  required
                />
              </div>

              <div class="contact-form-group">
                <label for="message" class="contact-label">{{ $t('contact.message') }}</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="contact-textarea"
                  rows="5"
                  :placeholder="$t('contact.messagePlaceholder')"
                  required
                ></textarea>
              </div>

              <CustomButton variant="primary" size="lg" type="submit" :full-width="true">
                {{ $t('contact.submit') }}
              </CustomButton>
            </form>
          </CustomCard>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Section from './Section.vue'
import CustomCard from './CustomCard.vue'
import CustomButton from './CustomButton.vue'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const socialLinks = [
  { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com' },
  { name: 'GitHub', icon: '💻', url: 'https://github.com' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' }
]

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  alert(t('contact.submitSuccess'))
  form.value = { name: '', email: '', message: '' }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.contact {
  &-header {
    margin-bottom: $spacing-2xl;

    &-description {
      max-width: 600px;
      margin: $spacing-md auto 0;
    }
  }

  &-section-title {
    margin-bottom: $spacing-lg;
  }

  &-info-description {
    margin-bottom: $spacing-xl;
  }

  &-form-title {
    margin-bottom: $spacing-lg;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: $spacing-2xl;

    @include respond-to(md) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &-info {
    flex: 1;
  }

  &-form-wrapper {
    flex: 1;
  }

  &-form-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }

  &-links {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  &-link {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-lg;
    transition: all $transition-base;
    color: white;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(8px);

      [dir='rtl'] & {
        transform: translateX(-8px);
      }
    }
  }

  &-link-icon {
    font-size: $font-size-2xl;
  }

  &-link-text {
    font-weight: $font-weight-medium;
  }

  &-form {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  &-form-group {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
  }

  &-label {
    font-weight: $font-weight-medium;
    color: $text-primary;
    font-size: $font-size-sm;
  }

  &-input,
  &-textarea {
    padding: $spacing-sm $spacing-md;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: $radius-md;
    font-family: inherit;
    font-size: $font-size-base;
    transition: all $transition-fast;
    background: white;

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    &::placeholder {
      color: $text-light;
    }
  }

  &-textarea {
    resize: vertical;
    min-height: 120px;
  }
}
</style>
