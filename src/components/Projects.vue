<template>
  <Section id="projects" variant="dark">
    <div class="projects">
      <div class="projects-header text-center fade-in">
        <h2 class="heading-2">{{ $t('projects.title') }}</h2>
        <p class="text-body projects-header-description">
          {{ $t('projects.description') }}
        </p>
      </div>

      <div class="projects-grid">
        <CustomCard
          v-for="(project, index) in projects"
          :key="project.id"
          class="projects-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <template #header>
            <div class="projects-card-image">
              <div class="projects-image-placeholder">
                {{ project.icon }}
              </div>
            </div>
          </template>

          <template #default>
            <h3 class="heading-3 projects-card-title">{{ project.title }}</h3>
            <p class="text-body projects-card-description">
              {{ project.description }}
            </p>
            <div class="projects-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="projects-tag"
              >
                {{ tag }}
              </span>
            </div>
          </template>

          <template #footer>
            <div class="projects-card-actions">
              <CustomButton variant="outline" size="sm" @click="openLink(project.demo)">
                {{ $t('common.liveDemo') }}
              </CustomButton>
              <CustomButton variant="ghost" size="sm" @click="openLink(project.github)">
                {{ $t('common.github') }}
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
import Section from './Section.vue'
import CustomCard from './CustomCard.vue'
import CustomButton from './CustomButton.vue'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with cart, checkout, and payment integration.',
    icon: '🛒',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team collaboration.',
    icon: '✅',
    tags: ['React', 'Firebase', 'TypeScript'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
    icon: '🌤️',
    tags: ['Vue.js', 'API', 'SCSS'],
    demo: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media performance and engagement metrics.',
    icon: '📊',
    tags: ['React', 'Python', 'Chart.js'],
    demo: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with smooth animations and great UX.',
    icon: '💼',
    tags: ['Vue.js', 'SCSS', 'Vite'],
    demo: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with rooms, file sharing, and emoji support.',
    icon: '💬',
    tags: ['Vue.js', 'Socket.io', 'Express'],
    demo: '#',
    github: '#'
  }
])

const openLink = (url) => {
  if (url && url !== '#') {
    window.open(url, '_blank')
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.projects {
  &-header {
    margin-bottom: $spacing-2xl;

    &-description {
      max-width: 600px;
      margin: $spacing-md auto 0;
    }
  }

  &-card-title {
    margin-bottom: $spacing-sm;
  }

  &-card-description {
    margin-bottom: $spacing-md;
  }

  &-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-lg;

    @include respond-to(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &-card {
    @include slide-up;
    animation-fill-mode: both;
  }

  &-card-image {
    width: 100%;
    height: 200px;
    margin-bottom: $spacing-md;
    border-radius: $radius-md;
    overflow: hidden;
  }

  &-image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
    margin-bottom: $spacing-md;
  }

  &-tag {
    padding: $spacing-xs $spacing-sm;
    background: rgba(99, 102, 236, 0.1);
    color: $primary-light;
    border-radius: $radius-sm;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
  }

  &-card-actions {
    display: flex;
    gap: $spacing-sm;
  }
}
</style>
