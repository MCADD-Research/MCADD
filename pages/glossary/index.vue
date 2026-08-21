<script setup lang="ts">
import { glossary, type GlossaryTerm } from '~/content/glossary'

usePageSeo({
  title: 'Glossary',
  description:
    'Plain-language definitions of the terms used across the MCADD Compass guide, from ACADM to triheptanoin.',
})

const categories: { key: GlossaryTerm['category']; label: string }[] = [
  { key: 'basics', label: 'Basics' },
  { key: 'genetics', label: 'Genetics' },
  { key: 'biochemistry', label: 'Biochemistry' },
  { key: 'diagnosis', label: 'Diagnosis' },
  { key: 'management', label: 'Management' },
  { key: 'research', label: 'Research' },
]

const activeCategory = ref<GlossaryTerm['category'] | 'all'>('all')
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return glossary.filter((term) => {
    const matchesCategory = activeCategory.value === 'all' || term.category === activeCategory.value
    const matchesQuery =
      !q ||
      term.term.toLowerCase().includes(q) ||
      (term.abbreviation ?? '').toLowerCase().includes(q) ||
      term.definition.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  })
})
</script>

<template>
  <div class="container">
    <PageHero
      title="Glossary"
      description="Plain-language definitions of every technical term used on this site — from ACADM to triheptanoin."
    />

    <div class="glossary-controls">
      <div class="category-chips" role="group" aria-label="Filter by category">
        <button
          type="button"
          class="chip"
          :class="{ active: activeCategory === 'all' }"
          @click="activeCategory = 'all'"
        >
          All
        </button>
        <button
          v-for="c in categories"
          :key="c.key"
          type="button"
          class="chip"
          :class="{ active: activeCategory === c.key }"
          @click="activeCategory = c.key"
        >
          {{ c.label }}
        </button>
      </div>
      <label class="search">
        <span class="sr-only">Search terms</span>
        <input v-model="query" type="search" placeholder="Search terms…" />
      </label>
    </div>

    <p class="result-count">{{ filtered.length }} term{{ filtered.length === 1 ? '' : 's' }}</p>

    <dl v-if="filtered.length" class="glossary-list">
      <div v-for="term in filtered" :key="term.term" class="glossary-item card">
        <dt class="glossary-term">
          {{ term.term }}
          <span v-if="term.abbreviation" class="glossary-abbr">{{ term.abbreviation }}</span>
          <span class="glossary-cat">{{ categories.find((c) => c.key === term.category)?.label }}</span>
        </dt>
        <dd class="glossary-def">{{ term.definition }}</dd>
      </div>
    </dl>
    <p v-else class="empty">No terms match your search.</p>
  </div>
</template>

<style scoped>
.glossary-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.chip {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
}
.chip:hover {
  border-color: var(--brand-400);
  color: var(--text);
}
.chip.active {
  background: var(--brand-700);
  border-color: var(--brand-700);
  color: #fff;
}
.search input {
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--text);
  font-size: 0.95rem;
  min-width: 220px;
}
.search input:focus {
  outline: 3px solid var(--focus);
  outline-offset: 1px;
}
.result-count {
  color: var(--text-faint);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}
.glossary-list {
  margin: 0;
  display: grid;
  gap: 1rem;
}
.glossary-item {
  padding: 1.25rem 1.4rem;
}
.glossary-term {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.glossary-abbr {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-muted);
}
.glossary-cat {
  margin-left: auto;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 700;
  color: var(--text-faint);
}
.glossary-def {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
}
.empty {
  color: var(--text-muted);
  padding: 2rem 0;
}
</style>
