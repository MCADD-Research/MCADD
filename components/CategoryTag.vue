<script setup lang="ts">
import type { ClaimCategory } from '~/content/types'
import { claimCategories } from '~/content/evidenceLegend'

const props = defineProps<{
  category: ClaimCategory
}>()

const info = computed(() => claimCategories.find((c) => c.name === props.category))

const toneClass = computed(() => {
  switch (info.value?.tone) {
    case 'fact':
      return 'tag-fact'
    case 'recommendation':
      return 'tag-recommendation'
    case 'observational':
      return 'tag-observational'
    case 'opinion':
      return 'tag-opinion'
    case 'hypothesis':
      return 'tag-hypothesis'
    case 'experimental':
      return 'tag-experimental'
    case 'insufficient':
      return 'tag-insufficient'
    default:
      return 'tag-fact'
  }
})
</script>

<template>
  <span class="pill" :class="toneClass" :title="info?.definition">
    {{ category }}
  </span>
</template>
