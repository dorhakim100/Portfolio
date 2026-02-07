<template>
  <div class="card flex justify-center">
    <ProgressSpinner
      :style="{ width: size, height: size }"
      strokeWidth="8"
      fill="transparent"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'

defineProps({
  size: {
    type: String,
    default: '50px',
    validator: (value) => ['px'].includes(value),
  },
})
</script>
