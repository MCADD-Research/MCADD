<script setup lang="ts">
const { theme, toggle, sync } = useTheme()

onMounted(sync)

const label = computed(() => (theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'))
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <svg
      v-if="theme === 'dark'"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3 6.7 6.7M17.3 17.3l1.4 1.4M18.7 5.3 17.3 6.7M6.7 17.3l-1.4 1.4" />
    </svg>
    <svg
      v-else
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
    <span class="theme-label">{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.7rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.theme-toggle:hover {
  background: var(--surface-subtle);
  color: var(--text);
  border-color: var(--border-strong);
}
@media (max-width: 640px) {
  .theme-label {
    display: none;
  }
}
</style>
