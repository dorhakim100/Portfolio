<template>
  <section :id="id" :class="['section', `section--${variant}`]">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'dark', 'accent'].includes(value)
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.section {
  padding: $spacing-2xl 0;

  @include respond-to(md) {
    padding: $spacing-3xl 0;
  }

  &--dark {
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

  &--accent {
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
}
</style>
