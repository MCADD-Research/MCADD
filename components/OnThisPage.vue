<script setup lang="ts">
interface TocItem {
  slug: string
  title: string
}

defineProps<{
  items: TocItem[]
}>()
</script>

<template>
  <nav class="toc" aria-label="On this page">
    <p class="toc-heading">On this page</p>
    <ul class="toc-list">
      <li v-for="item in items" :key="item.slug">
        <a :href="`#${item.slug}`" class="toc-link">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  position: sticky;
  top: 100px;
  padding: 1rem 1rem 1rem 0;
}
.toc-heading {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--text-faint);
  margin: 0 0 0.6rem;
}
.toc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
  border-left: 1px solid var(--border);
}
.toc-link {
  display: block;
  padding: 0.15rem 0 0.15rem 1rem;
  margin-left: -1px;
  border-left: 2px solid transparent;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.35;
}
.toc-link:hover {
  color: var(--link);
  text-decoration: none;
  border-left-color: var(--brand-300);
}
</style>
