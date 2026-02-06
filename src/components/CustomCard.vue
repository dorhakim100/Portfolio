<template>
  <div
    :class="['custom-card', { 'custom-card--hover': hover, 'custom-card--elevated': elevated }]"
    @click="$emit('click', $event)"
  >
    <div v-if="$slots.header" class="custom-card-header">
      <slot name="header"></slot>
    </div>
    <div class="custom-card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="custom-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: true
  },
  elevated: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.custom-card {
  background: $bg-primary;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  transition: all $transition-base;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &--hover {
    @include hover-lift;
  }

  &--elevated {
    box-shadow: $shadow-lg;
  }

  &-header {
    margin-bottom: $spacing-md;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  &-body {
    // Content area
  }

  &-footer {
    margin-top: $spacing-md;
    padding-top: $spacing-md;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
}
</style>
