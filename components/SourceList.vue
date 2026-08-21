<script setup lang="ts">
import type { SourceRef } from '~/content/types'

const props = defineProps<{
  sources: SourceRef[]
}>()

const open = ref(false)
</script>

<template>
  <div class="sources">
    <button
      type="button"
      class="sources-toggle"
      :aria-expanded="open"
      aria-controls="sources-list"
      @click="open = !open"
    >
      <span aria-hidden="true">{{ open ? '−' : '+' }}</span>
      {{ sources.length }} source{{ sources.length === 1 ? '' : 's' }}
    </button>
    <ol v-if="open" id="sources-list" class="sources-list">
      <li v-for="(src, i) in sources" :key="i">
        <span class="sources-index">{{ i + 1 }}.</span>
        <span>
          <span v-if="src.url">
            <a :href="src.url" target="_blank" rel="noopener noreferrer">{{ src.text }}</a>
          </span>
          <span v-else>{{ src.text }}</span>
          <a
            v-if="src.pmid"
            :href="`https://pubmed.ncbi.nlm.nih.gov/${src.pmid}/`"
            target="_blank"
            rel="noopener noreferrer"
            class="pmid"
          >
            PMID {{ src.pmid }}
          </a>
        </span>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.sources {
  margin-top: 0.75rem;
  font-size: 0.85rem;
}
.sources-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  padding: 0.25rem 0;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}
.sources-toggle:hover {
  color: var(--link);
}
.sources-list {
  margin: 0.5rem 0 0;
  padding: 0.75rem 0.9rem;
  background: var(--surface-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  list-style: none;
  display: grid;
  gap: 0.5rem;
}
.sources-list li {
  display: flex;
  gap: 0.5rem;
  color: var(--text-muted);
  line-height: 1.5;
}
.sources-index {
  color: var(--text-faint);
  flex-shrink: 0;
}
.pmid {
  display: inline-block;
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 0.78rem;
  white-space: nowrap;
}
</style>
