<script setup lang="ts">
import type { EvidenceLevel } from '~/content/types'
import { evidenceLevels } from '~/content/evidenceLegend'

const props = defineProps<{
  level: EvidenceLevel
  note?: string
}>()

const info = computed(() => evidenceLevels.find((e) => e.level === props.level))
</script>

<template>
  <span
    class="pill"
    :class="`ev-${level.toLowerCase()}`"
    :title="info?.definition"
    :aria-label="`Evidence level ${level}: ${info?.definition ?? ''}`"
  >
    <span aria-hidden="true">●</span>
    <span>Level {{ level }}</span>
    <span v-if="note" class="ev-note">{{ note }}</span>
  </span>
</template>

<style scoped>
.ev-note {
  font-weight: 450;
  opacity: 0.85;
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
