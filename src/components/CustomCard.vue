<template>
  <div
    :class="[
      'custom-card',
      { 'custom-card-hover': hover, 'custom-card-elevated': elevated },
      { 'dark-mode': prefs.isDarkMode },
    ]"
    @click="$emit('click', $event)"
  >
    <div
      v-if="$slots.header"
      class="custom-card-header"
    >
      <slot name="header" />
    </div>
    <div class="custom-card-body">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="custom-card-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { usePreferences } from '../composables/usePreferences'

const { prefs } = usePreferences()

defineProps({
  hover: { type: Boolean, default: true },
  elevated: { type: Boolean, default: false },
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
  display: grid;
  grid-template-columns: 1fr;
}

.custom-card-hover {
  // @include hover-lift;
}

.custom-card-elevated {
  box-shadow: $shadow-lg;
}

.custom-card-header {
  margin-bottom: $spacing-md;
  padding-bottom: $spacing-md;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.custom-card-body {
  color: $text-primary;
}

.custom-card-footer {
  margin-top: $spacing-md;
  padding-top: $spacing-md;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  align-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
