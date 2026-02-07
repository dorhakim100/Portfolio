<template>
  <Section
    id="contact"
    variant="accent"
  >
    <div class="contact-container">
      <header
        class="contact-header text-center scroll-in-up"
        v-scroll-in
      >
        <h2 class="heading-2">{{ $t('contact.title') }}</h2>
        <p class="text-body contact-header-description">
          {{ $t('contact.description') }}
        </p>
      </header>

      <div class="contact-content">
        <div
          class="contact-info scroll-in-left"
          v-scroll-in
          data-scroll-delay="60"
        >
          <h3 class="heading-3 contact-section-title">
            {{ $t('contact.connect') }}
          </h3>
          <p class="text-body contact-info-description">
            {{ $t('contact.connectDescription') }}
          </p>
          <div class="contact-links">
            <a
              v-for="link in socialLinks"
              :key="link.name[locale]"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link"
            >
              <img
                :src="link.icon"
                alt=""
                class="contact-link-icon"
              />
              <span class="contact-link-text">{{ link.name[locale] }}</span>
            </a>
          </div>
        </div>

        <CustomCard
          class="contact-form-card scroll-in-right"
          v-scroll-in
          data-scroll-delay="120"
        >
          <h3 class="heading-3 contact-form-title text-primary">
            {{ $t('contact.sendMessage') }}
          </h3>
          <form
            class="contact-form"
            @submit.prevent="handleSubmit"
            ref="form"
          >
            <input
              v-model="formValues.name"
              type="text"
              name="name"
              :placeholder="$t('contact.namePlaceholder')"
              required
            />
            <input
              v-model="formValues.email"
              type="email"
              name="email"
              placeholder="youremail@example.com"
              required
            />
            <textarea
              v-model="formValues.message"
              name="message"
              :placeholder="$t('contact.messagePlaceholder')"
              required
            />
            <CustomButton
              variant="primary"
              size="lg"
              type="submit"
              :full-width="true"
              :loading="isLoading"
            >
              {{ $t('contact.submit') }}
            </CustomButton>
          </form>
        </CustomCard>
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
import emailjs from '@emailjs/browser'

const { locale } = useI18n()
const form = ref(null)
const formValues = ref({ name: '', email: '', message: '' })
const isLoading = ref(false)

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socialLinks = [
  {
    name: { en: 'Phone', he: 'טלפון' },
    icon: '/public/phone.svg',
    url: 'tel:+972542044022',
  },
  {
    name: { en: 'WhatsApp', he: 'וואטסאפ' },
    icon: '/public/whatsapp.svg',
    url: 'https://wa.me/972542044022',
  },
  {
    name: { en: 'GitHub', he: 'גיטהאב' },
    icon: '/public/github.svg',
    url: 'https://github.com/dorhakim100',
  },
  {
    name: { en: 'LinkedIn', he: 'לינקדאין' },
    icon: '/public/linkedin.svg',
    url: 'https://www.linkedin.com/in/dor-hakim/',
  },
]

const handleSubmit = async () => {
  isLoading.value = true
  try {
    await emailjs.sendForm(serviceId, templateId, form.value, publicKey)
    formValues.value = { name: '', email: '', message: '' }
  } catch (err) {
    console.error('Email sending failed:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.contact-container {
  padding: 1em;

  padding-top: $spacing-md;
}

.contact-header {
  margin-bottom: $spacing-2xl;
}

.contact-header-description {
  max-width: 600px;
  margin: $spacing-md auto 0;
}

.contact-section-title {
  margin-bottom: $spacing-lg;
}

.contact-info-description {
  margin-bottom: $spacing-xl;
}

.contact-form-title {
  margin-bottom: $spacing-lg;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-2xl;
  @include respond-to(md) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.contact-info {
  flex: 1;
}

.contact-form-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  max-width: 500px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.contact-link {
  max-width: 500px;
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

.contact-link-icon {
  width: 24px;
  height: 24px;
  border-radius: $radius-sm;
}

.contact-link-text {
  font-weight: $font-weight-medium;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
  input,
  textarea {
    padding: $spacing-sm $spacing-md;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: $radius-md;
    font-family: inherit;
    font-size: $font-size-base;
    transition: all $transition-fast;
    background: white;
    color: $text-primary;
    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    &::placeholder {
      color: $text-light;
    }
  }
  textarea {
    resize: vertical;
    min-height: 120px;
  }
}
</style>
