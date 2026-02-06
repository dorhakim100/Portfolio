<template>
  <Section
    id="about"
    variant="default"
  >
    <div class="about">
      <div class="about-header text-center fade-in">
        <h2 class="heading-2">{{ $t('about.title') }}</h2>
        <p class="text-body about-header-description">
          {{ $t('about.description') }}
        </p>
      </div>

      <div class="about-content">
        <div class="about-text slide-up">
          <h3 class="heading-3 about-section-title">
            {{ $t('about.journey') }}
          </h3>

          <p class="text-body about-paragraph">
            {{ $t('about.journeyText1') }}
          </p>
          <p class="text-body about-paragraph about-paragraph--last">
            {{ $t('about.journeyText2') }}
          </p>
          <CustomButton
            variant="primary"
            @click="scrollToSection('contact')"
          >
            {{ $t('about.connect') }}
          </CustomButton>
        </div>

        <div class="about-skills scale-in">
          <h3 class="heading-3 about-section-title">
            {{ $t('about.skills') }}
          </h3>
          <div class="about-skills-grid">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="about-skill-item"
            >
              <div class="about-skill-icon">
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  class="about-skill-image"
                />
              </div>
              <span class="about-skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { ref } from 'vue'
import Section from './Section.vue'
import CustomButton from './CustomButton.vue'

const skills = ref([
  {
    name: 'JavaScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Express',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
  },
  {
    name: 'Vue.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
  },
  {
    name: 'Redis',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
  },
])

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

.about {
  &-header {
    margin-bottom: $spacing-2xl;

    &-description {
      max-width: 600px;
      margin: $spacing-md auto 0;
    }
  }

  &-section-title {
    margin-bottom: $spacing-md;
  }

  &-paragraph {
    margin-bottom: $spacing-md;

    &--last {
      margin-bottom: $spacing-lg;
    }
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

  &-text {
    flex: 1;
  }

  &-skills {
    flex: 1;
  }

  &-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: $spacing-md;
  }

  &-skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-md;
    background: $bg-secondary;
    border-radius: $radius-lg;
    transition: all $transition-base;

    .dark-mode & {
      background: rgba(255, 255, 255, 0.05);
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-md;
      background: white;

      .dark-mode & {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  &-skill-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: $spacing-xs;
  }

  &-skill-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: transform $transition-base;

    .dark-mode & {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) brightness(1.1);
    }

    .about-skill-item:hover & {
      transform: scale(1.1);
    }
  }

  &-skill-name {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $text-primary;
    text-align: center;

    .dark-mode & {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}
</style>
