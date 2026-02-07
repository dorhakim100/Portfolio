<template>
  <section
    :id="id"
    :class="['section', `section-${variant}`]"
  >
    <div class="container section-container">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: '' },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'dark', 'accent'].includes(v),
  },
})
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.section {
  padding: 1em 0;
  @include respond-to(md) {
    padding: $spacing-3xl 0;
  }
}

.section-container {
  // container handles width/padding
}

.section-dark {
  background-color: $bg-dark;
  color: white;
  :deep(.heading-1),
  :deep(.heading-2),
  :deep(.heading-3) {
    color: white;
  }
  :deep(.text-body),
  :deep(.text-small) {
    color: rgba(255, 255, 255, 0.8);
  }
}

.section-accent {
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
  color: white;
  :deep(.heading-1),
  :deep(.heading-2),
  :deep(.heading-3) {
    color: white;
  }
  :deep(.text-body),
  :deep(.text-small) {
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>
