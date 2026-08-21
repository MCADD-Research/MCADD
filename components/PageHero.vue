<script setup lang="ts">
defineProps<{
  title: string
  description: string
  eyebrow?: string
  intro?: string[]
}>()
</script>

<template>
  <div class="page-hero">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <ul v-if="intro && intro.length" class="intro">
      <li v-for="(item, i) in intro" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.page-hero {
  max-width: 760px;
  margin-bottom: clamp(1.5rem, 4vw, 2.75rem);
}
.eyebrow {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: var(--brand-700);
  margin: 0 0 0.75rem;
}
[data-theme='dark'] .eyebrow {
  color: var(--brand-300);
}
.title {
  margin-bottom: 0.5rem;
}
.description {
  font-size: 1.2rem;
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 58ch;
  margin-bottom: 1.25rem;
}
.intro {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.6rem;
}
.intro li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--text-muted);
  font-size: 1rem;
}
.intro li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 999px;
  background: var(--brand-300);
}
</style>
