<script setup lang="ts">
import type { Section } from '~/content/types'

const props = defineProps<{
  section: Section
}>()

const anchor = computed(() => `#${props.section.slug}`)
</script>

<template>
  <article :id="section.slug" class="section-card card">
    <header class="section-head">
      <h2 class="section-title">
        <a :href="anchor" class="anchor-link" :aria-label="`Link to ${section.title}`">{{ section.title }}</a>
      </h2>
      <div v-if="section.summary" class="summary">
        <span class="summary-label">In short</span>
        <p>{{ section.summary }}</p>
      </div>
    </header>

    <div class="section-body">
      <BlockRenderer :blocks="section.body" />
    </div>

    <footer class="section-meta">
      <div class="meta-row">
        <div class="meta-group">
          <span class="meta-label">Claim type</span>
          <div class="tags">
            <CategoryTag v-for="cat in section.category" :key="cat" :category="cat" />
          </div>
        </div>
        <div class="meta-group">
          <span class="meta-label">Evidence</span>
          <EvidenceBadge :level="section.evidence.level" :note="section.evidence.note" />
        </div>
        <div class="meta-group">
          <span class="meta-label">Last verified</span>
          <time :datetime="section.lastVerified" class="verified">{{ section.lastVerified }}</time>
        </div>
      </div>
      <SourceList :sources="section.sources" />
    </footer>
  </article>
</template>

<style scoped>
.section-card {
  padding: clamp(1.25rem, 3vw, 2.25rem);
  margin-bottom: 1.5rem;
}
.section-head {
  margin-bottom: 1.25rem;
}
.section-title {
  margin-bottom: 0.75rem;
}
.anchor-link {
  color: var(--text);
}
.anchor-link:hover {
  color: var(--link);
  text-decoration: none;
}
.summary {
  background: var(--brand-soft);
  border-left: 4px solid var(--brand-500);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
}
.summary-label {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--brand-700);
  margin-bottom: 0.25rem;
}
[data-theme='dark'] .summary-label {
  color: var(--brand-300);
}
.summary p {
  margin: 0;
  font-size: 1rem;
  color: var(--text);
}
.section-body {
  margin-bottom: 0.5rem;
}
.section-meta {
  border-top: 1px solid var(--border);
  padding-top: 1rem;
  margin-top: 1.25rem;
}
.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
  align-items: flex-start;
}
.meta-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.meta-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--text-faint);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.verified {
  font-size: 0.9rem;
  font-variant-numeric: tabular-nums;
  color: var(--text-muted);
}
</style>
