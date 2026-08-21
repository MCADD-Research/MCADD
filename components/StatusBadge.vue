<script setup lang="ts">
import type { TrialStatus } from '~/content/research'

const props = defineProps<{
  status: TrialStatus
}>()

const label = computed(() => {
  switch (props.status) {
    case 'RECRUITING':
      return 'Recruiting'
    case 'SUSPENDED':
      return 'Suspended'
    case 'COMPLETED':
      return 'Completed'
    case 'WITHDRAWN':
      return 'Withdrawn'
    case 'UNKNOWN':
      return 'Status unknown'
    case 'ACTIVE_NOT_RECRUITING':
      return 'Active, not recruiting'
    default:
      return props.status
  }
})

const cls = computed(() => `status-${props.status.toLowerCase().replace(/_/g, '-')}`)
</script>

<template>
  <span class="pill status-badge" :class="cls">{{ label }}</span>
</template>

<style scoped>
.status-recruiting { background: var(--status-recruiting-bg); color: var(--status-recruiting-fg); border-color: transparent; }
.status-completed { background: var(--status-completed-bg); color: var(--status-completed-fg); border-color: transparent; }
.status-suspended { background: var(--status-suspended-bg); color: var(--status-suspended-fg); border-color: transparent; }
.status-withdrawn { background: var(--status-withdrawn-bg); color: var(--status-withdrawn-fg); border-color: transparent; }
.status-unknown { background: var(--status-unknown-bg); color: var(--status-unknown-fg); border-color: transparent; }
.status-active-not-recruiting { background: var(--status-completed-bg); color: var(--status-completed-fg); border-color: transparent; }
</style>
