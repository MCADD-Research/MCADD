<script setup lang="ts">
import type { Topic } from '~/content/types'

defineProps<{
  topic: Topic
}>()
</script>

<template>
  <div class="container">
    <PageHero :title="topic.title" :description="topic.description" :intro="topic.intro" />
    <div class="topic-grid">
      <aside class="topic-side">
        <OnThisPage :items="topic.sections.map((s) => ({ slug: s.slug, title: s.title }))" />
      </aside>
      <div class="topic-main">
        <SectionCard v-for="section in topic.sections" :key="section.slug" :section="section" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic-grid {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 2rem;
  align-items: start;
}
.topic-main {
  min-width: 0;
}
@media (max-width: 860px) {
  .topic-side {
    display: none;
  }
}
</style>
