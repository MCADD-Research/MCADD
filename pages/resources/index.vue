<script setup lang="ts">
import { authoritativeSources, trialRegistries, specialistCareNote } from '~/content/resources'
import { site } from '~/content/site'

usePageSeo({
  title: 'Resources & sources',
  description:
    'Authoritative sources, clinical trial registries, and guidance for finding specialist metabolic care for MCADD.',
})
</script>

<template>
  <div class="container">
    <PageHero
      title="Resources & sources"
      description="The authoritative sources behind this site, the clinical trial registries to check, and how to find specialist metabolic care."
    />

    <section class="resource-section">
      <h2>Authoritative sources</h2>
      <p class="section-sub">The primary, authoritative sources used to build this knowledge base.</p>
      <div class="resource-grid">
        <a
          v-for="res in authoritativeSources"
          :key="res.name"
          :href="res.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card card"
          :class="{ 'resource-unavailable': !res.available }"
        >
          <div class="resource-head">
            <h3 class="resource-name">{{ res.name }}</h3>
            <span v-if="res.available !== false" class="pill ev-a">Verified</span>
            <span v-else class="pill ev-x">Not accessible</span>
          </div>
          <p class="resource-desc">{{ res.description }}</p>
          <p v-if="res.note" class="resource-note">{{ res.note }}</p>
        </a>
      </div>
    </section>

    <section class="resource-section">
      <h2>Clinical trial registries</h2>
      <p class="section-sub">Official registries where you can look up MCADD trials directly.</p>
      <div class="resource-grid">
        <a
          v-for="res in trialRegistries"
          :key="res.name"
          :href="res.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card card"
          :class="{ 'resource-unavailable': !res.available }"
        >
          <div class="resource-head">
            <h3 class="resource-name">{{ res.name }}</h3>
            <span v-if="res.available !== false" class="pill ev-a">Verified</span>
            <span v-else class="pill ev-x">Not searched</span>
          </div>
          <p class="resource-desc">{{ res.description }}</p>
          <p v-if="res.note" class="resource-note">{{ res.note }}</p>
        </a>
      </div>
    </section>

    <section class="resource-section">
      <h2>Finding specialist care</h2>
      <div class="care card">
        <p>{{ specialistCareNote }}</p>
      </div>
    </section>

    <section class="resource-section">
      <div class="callout callout-info">
        <strong>Traceability</strong>
        <p>
          Every medical statement on this site links to its sources and shows its evidence level. See the
          <NuxtLink to="/methodology">methodology</NuxtLink> page for the full list of sources consulted and the
          limitations of this knowledge base.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.resource-section {
  margin-top: clamp(2.5rem, 6vw, 4rem);
}
.resource-section h2 {
  margin-bottom: 0.4rem;
}
.section-sub {
  color: var(--text-muted);
  margin: 0 0 1.5rem;
  max-width: 60ch;
}
.resource-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.resource-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--text);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.resource-card:hover {
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-strong);
}
.resource-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}
.resource-name {
  margin: 0;
  font-size: 1.12rem;
}
.resource-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
  flex-grow: 1;
}
.resource-note {
  font-size: 0.85rem;
  color: var(--text-faint);
  margin: 0;
}
.resource-unavailable {
  opacity: 0.75;
}
.care {
  padding: 1.5rem;
  max-width: 760px;
}
.care p {
  margin: 0;
  color: var(--text-muted);
  font-size: 1.02rem;
}
.callout p {
  margin: 0;
}
@media (max-width: 800px) {
  .resource-grid {
    grid-template-columns: 1fr;
  }
}
</style>
