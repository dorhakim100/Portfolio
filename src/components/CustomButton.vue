<template>
  <button
    :class="[
      'custom-button',
      `custom-button--${variant}`,
      `custom-button--${size}`,
      { 'custom-button--full-width': fullWidth },
    ]"
    :type="type"
    @click="$emit('click', $event)"
  >
    <CustomSpinner
      v-if="loading && prefs.lang === 'en'"
      size="20px"
    />
    <slot></slot>
    <CustomSpinner
      v-if="loading && prefs.lang === 'he'"
      size="20px"
    />
  </button>
</template>

<script setup>
import CustomSpinner from './CustomSpinner.vue'
import { usePreferences } from '../composables/usePreferences'
const { prefs } = usePreferences()
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'outline', 'ghost'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.custom-button {
  display: inline-flex;
  gap: $spacing-xs;
  align-items: center;
  justify-content: center;
  font-weight: $font-weight-medium;
  border-radius: $radius-md;
  transition: all $transition-base;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  // Size variants
  &--sm {
    padding: $spacing-xs $spacing-md;
    font-size: $font-size-sm;
  }

  &--md {
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-base;
  }

  &--lg {
    padding: $spacing-md $spacing-xl;
    font-size: $font-size-lg;
  }

  // Variant styles
  &--primary {
    background: linear-gradient(135deg, $primary-color 0%, $primary-dark 100%);
    color: white;
    box-shadow: $shadow-md;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-lg;
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--secondary {
    background: linear-gradient(135deg, $secondary-color 0%, #db2777 100%);
    color: white;
    box-shadow: $shadow-md;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-lg;
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--outline {
    border: 2px solid $primary-color;
    color: $primary-color;
    background: transparent;

    &:hover {
      background: $primary-color;
      color: white;
      transform: translateY(-2px);
    }
  }

  &--ghost {
    color: $text-primary;
    background: transparent;

    &:hover {
      background: $bg-secondary;
      color: $primary-color;
    }
  }

  &--full-width {
    width: 100%;
  }

  // Ripple effect
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width $transition-base, height $transition-base;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }
}
</style>
