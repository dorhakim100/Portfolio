<template>
  <Section
    id="projects"
    variant="dark"
  >
    <div class="projects-container">
      <header class="projects-header text-center fade-in">
        <h2 class="heading-2">{{ $t('projects.title') }}</h2>
        <p class="text-body projects-header-description">
          {{ $t('projects.description') }}
        </p>
      </header>

      <div class="projects-grid">
        <CustomCard
          v-for="(project, index) in projects"
          :key="project.id"
          class="projects-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <template #header>
            <div class="projects-card-image">
              <img
                :src="project.img"
                alt=""
              />
            </div>
          </template>
          <template #default>
            <h3 class="heading-3 projects-card-title text-primary">
              {{ project.title[locale] }}
            </h3>
            <p class="text-body projects-card-description text-secondary">
              {{ project.description[locale] }}
            </p>
            <div class="projects-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="projects-tag"
                >{{ tag }}</span
              >
            </div>
          </template>
          <template #footer>
            <div class="projects-card-actions">
              <CustomButton
                variant="outline"
                size="sm"
                @click="openLink(project.frontend)"
              >
                {{ $t('common.frontend') }}
              </CustomButton>
              <CustomButton
                variant="outline"
                size="sm"
                @click="openLink(project.backend)"
              >
                {{ $t('common.backend') }}
              </CustomButton>
              <CustomButton
                v-if="project.link"
                variant="ghost"
                size="sm"
                @click="openLink(project.link)"
              >
                {{ $t('common.link') }}
              </CustomButton>
            </div>
          </template>
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

const { locale } = useI18n()

const projects = ref([
  {
    id: 2,
    title: {
      en: 'Sport Club E-Commerce and CRM',
      he: 'מערכת ניהול עסק וחנות אינטרנטית למועדון ספורט',
    },
    description: {
      en: 'An e-commerce and CRM platform developed for a sport club to manage their internal workflow, classes schedule, leads and E-commerce sales. The platform resulted in over 300% increase in customer engagement compared to the previous system.',
      he: 'מערכת ניהול עסק וחנות אינטרנטית למועדון ספורט. המערכת אחראית לניהול תהליכי עבודה פנימיים, מערכת שעות, לידים ומכירות אינטרנטיות. המערכת הובילה לעלייה של יותר מ300% בלידים הנכנסים לעומת המערכת הקודמת.',
    },
    img: '/public/sportclub.webp',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    frontend: 'https://github.com/dorhakim100/Sport-Club-Front',
    backend: 'https://github.com/dorhakim100/SportClub-BackEnd',
    link: 'https://www.moadonsport.com',
  },
  {
    id: 1,
    title: { en: 'MyTracker', he: 'MyTracker' },
    description: {
      en: 'A multi client platform developed for a trainer to manage his trainees, their workouts and calories intake. The platform consists of two client sides sharing the same backend, trainer web dashboard, and mobile app.',
      he: 'מערכת שפותחה עבור מאמן לניהול המתאמנים שלו. למערכת שני צדדי לקוח שמחוברים לאותו צד שרת. אפליקציה למתאמנים ודאשבורד למאמן. ניהול אימונים, ספירת קלוריות, מעקב אחרי משקלי עבודה ומשקל גוף.',
    },
    img: '/public/mytracker.png',
    tags: ['React', 'Typescript', 'Node.js', 'MongoDB'],
    frontend: 'https://github.com/dorhakim100/MyTracker-Front',
    backend: 'https://github.com/dorhakim100/MyTracker-Back',
  },
  {
    id: 3,
    title: { en: 'CamJam', he: 'CamJam' },
    description: {
      en: 'A web based platform, to have live video calls and chat rooms. Built with React, TypeScript, WebRTC and Socket.io.',
      he: `פרויקט אישי לשיחות וידאו וחדרי צ'אט בזמן אמת. בנוי ב-React, TypeScript, WebRTC ו-Socket.io.`,
    },
    img: '/public/camjam.png',
    tags: [
      'React',
      'TypeScript',
      'WebRTC',
      'Socket.io',
      'Node.js',
      'PostgreSQL',
    ],
    frontend: 'https://github.com/dorhakim100/CamJam-Front',
    backend: 'https://github.com/dorhakim100/CamJam-Back',
  },
])

const openLink = (url) => {
  if (url && url !== '#') window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.projects-container {
  padding: 1em;
  padding-top: $spacing-md;
}

.projects-header {
  margin-bottom: $spacing-2xl;
}

.projects-header-description {
  max-width: 600px;
  margin: $spacing-md auto 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: $spacing-lg;
  @media (max-width: $breakpoint-sm) {
    display: block;
  }
}

.projects-card {
  @include slide-up;
  animation-fill-mode: both;
  display: grid;
  align-items: start;
  @media (max-width: $breakpoint-sm) {
    margin-bottom: $spacing-md;
  }
}

.projects-card-image {
  width: 100%;
  height: 200px;
  margin-bottom: $spacing-md;
  border-radius: $radius-md;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $radius-lg;
  img {
    // width: 100%;

    max-height: 200px;
    object-fit: scale-down;
    border-radius: $radius-md;
  }
}

.projects-card-title {
  margin-bottom: $spacing-sm;
}

.projects-card-description {
  margin-bottom: $spacing-md;
}

.projects-tags {
  align-self: end;
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-xs;
  margin-bottom: $spacing-md;
}

.projects-tag {
  padding: $spacing-xs $spacing-sm;
  background: rgba(99, 102, 236, 0.1);
  color: $primary-light;
  border-radius: $radius-sm;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
}

.projects-card-actions {
  display: flex;
  gap: $spacing-sm;
}
</style>
