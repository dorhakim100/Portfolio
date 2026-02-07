<template>
  <Section
    id="about"
    variant="default"
  >
    <div class="about-container">
      <img
        :src="pixelArt"
        alt="Pixel Art"
        class="about-header-image"
      />
      <header
        class="about-header text-center scroll-in-up opacity-animation"
        v-scroll-in
      >
        <h2 class="heading-2">{{ $t('about.title') }}</h2>
        <p class="text-body about-header-description">
          {{ $t('about.description') }}
        </p>
      </header>

      <div class="about-content">
        <div
          class="about-text scroll-in-left opacity-animation"
          v-scroll-in
          data-scroll-delay="60"
        >
          <h3 class="heading-3 about-section-title">
            {{ $t('about.journey') }}
          </h3>
          <p class="text-body about-paragraph">
            {{ $t('about.journeyText1') }}
          </p>
          <p class="text-body about-paragraph about-paragraph-last">
            {{ $t('about.journeyText2') }}
          </p>
          <CustomButton
            variant="primary"
            @click="scrollToSection('contact')"
          >
            {{ $t('about.connect') }}
          </CustomButton>
        </div>

        <div
          class="about-skills scroll-in-right opacity-animation"
          v-scroll-in
          data-scroll-delay="120"
        >
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
import pixelArt from '/pixel-art.jpeg'

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
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.about-container {
  padding: 1em;
  padding-top: calc(2em + $spacing-md);
  @media (max-width: $breakpoint-sm) {
    padding-top: calc(5em + $spacing-md);
  }
  // layout
  position: relative;

  .about-header-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 270px;

    object-fit: scale-down;

    filter: blur(2.5px);
    opacity: 1;
  }
}

.about-header {
  margin-bottom: $spacing-2xl;
  padding: $spacing-lg $spacing-md;
  border-radius: $radius-lg;
  position: relative;
  isolation: isolate;
  // Frosted overlay: image shows through but blurred for text readability
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.58) 45%,
    rgba(255, 255, 255, 0.52) 100%
  );
  backdrop-filter: blur(5px) saturate(1.1);
  -webkit-backdrop-filter: blur(10px) saturate(1.1);
  // Soft shadow that blends with the image
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 20px 0 rgba(0, 0, 0, 0.06), 0 4px 24px -4px rgba(0, 0, 0, 0.08);

  .dark-mode & {
    background: linear-gradient(
      180deg,
      rgba(17, 24, 39, 0.82) 0%,
      rgba(17, 24, 39, 0.68) 45%,
      rgba(17, 24, 39, 0.62) 100%
    );
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.06),
      inset 0 -1px 20px 0 rgba(0, 0, 0, 0.2),
      0 4px 24px -4px rgba(0, 0, 0, 0.25);
  }
}

.about-header-description {
  max-width: 600px;
  margin: $spacing-md auto 0;
  color: $text-primary;
  .dark-mode & {
    color: white;
  }
}

.about-section-title {
  margin-bottom: $spacing-md;
}

.about-paragraph {
  margin-bottom: $spacing-md;
}

.about-paragraph-last {
  margin-bottom: $spacing-lg;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-2xl;
  @include respond-to(md) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.about-text {
  flex: 1;
}

.about-skills {
  flex: 1;
}

.about-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: $spacing-md;
}

.about-skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-md;
  background: $bg-secondary;
  border-radius: $radius-lg;
  transition: all $transition-base;
  .dark-mode & {
    background: linear-gradient(135deg, #4facfe2f, #6ec0ff5b, #8fd2f438);
    box-shadow: 0 0 25px rgba(79, 172, 254, 0.075);
  }
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-md;
    background: white;
    .dark-mode & {
      background: linear-gradient(135deg, #4facfe38, #6ec0ff63, #8fd2f43f);
      box-shadow: 0 0 25px rgba(79, 172, 254, 0.14);
    }
  }
}

.about-skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: $spacing-xs;
}

.about-skill-image {
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

.about-skill-name {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $text-primary;
  text-align: center;
  .dark-mode & {
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>
