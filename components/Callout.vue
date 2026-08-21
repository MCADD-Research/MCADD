<script setup lang="ts">
import type { CalloutVariant } from '~/content/types'

const props = defineProps<{
  variant: CalloutVariant
  title?: string
  text: string
}>()

const icon = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'i'
    case 'warning':
      return '!'
    case 'danger':
      return '⚠'
    case 'insufficient':
      return '?'
    default:
      return 'i'
  }
})

const label = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'Note'
    case 'warning':
      return 'Caution'
    case 'danger':
      return 'Important'
    case 'insufficient':
      return 'Insufficiently documented'
    default:
      return 'Note'
  }
})

const role = computed(() => (props.variant === 'danger' || props.variant === 'warning' ? 'alert' : undefined))
</script>

<template>
  <div class="callout" :class="`callout-${variant}`" :role="role">
    <span class="callout-icon" aria-hidden="true">{{ icon }}</span>
    <div class="callout-body">
      <strong class="callout-title">{{ title ?? label }}</strong>
      <p class="callout-text">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.callout {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}
.callout-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.05rem;
  border-radius: 999px;
  border: 1.5px solid currentColor;
  color: currentColor;
  font-weight: 800;
  font-size: 0.85rem;
  line-height: 1;
}
.callout-title {
  display: block;
  margin-bottom: 0.15rem;
  font-weight: 700;
}
.callout-text {
  margin: 0;
}
</style>
