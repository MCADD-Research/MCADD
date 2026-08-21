<script setup lang="ts">
import { disclaimer } from '~/content/site'
</script>

<template>
  <aside class="disclaimer-banner" aria-label="Medical disclaimer">
    <div class="container disclaimer-inner">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <p class="disclaimer-text">
        <strong>{{ disclaimer.heading }}.</strong>
        {{ disclaimer.body[0] }}
        <NuxtLink to="/methodology">Learn how this content is verified</NuxtLink>.
      </p>
    </div>
  </aside>
</template>

<style scoped>
.disclaimer-banner {
  background: var(--callout-warning-bg);
  border-bottom: 1px solid var(--callout-warning-border);
  color: var(--callout-warning-fg);
}
.disclaimer-inner {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
}
.disclaimer-inner svg {
  flex-shrink: 0;
  margin-top: 0.15rem;
}
.disclaimer-text {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
}
.disclaimer-text a {
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
}
</style>
