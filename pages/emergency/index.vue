<script setup lang="ts">
import { emergency, emergencyAction } from '~/content/emergency'
import { site } from '~/content/site'

usePageSeo({
  title: 'Emergency situations',
  description: emergency.description,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: emergency.title,
    description: emergency.description,
    about: {
      '@type': 'MedicalCondition',
      name: 'Medium-chain acyl-CoA dehydrogenase deficiency',
      alternateName: 'MCADD',
    },
    dateModified: site.contentLastVerified,
  },
})
</script>

<template>
  <div class="container">
    <PageHero :title="emergency.title" :description="emergency.description" :intro="emergency.intro" />

    <section class="emergency-action" aria-labelledby="emergency-action-title">
      <h2 id="emergency-action-title" class="action-title">{{ emergencyAction.heading }}</h2>
      <p class="action-sub">{{ emergencyAction.subheading }}</p>
      <p class="action-body">{{ emergencyAction.body }}</p>
      <ul class="action-triggers">
        <li v-for="t in emergencyAction.triggers" :key="t">{{ t }}</li>
      </ul>
      <div class="action-bring">
        <p class="action-bring-label">Bring with you:</p>
        <ul>
          <li v-for="b in emergencyAction.bring" :key="b">{{ b }}</li>
        </ul>
      </div>
      <p class="action-note">{{ emergencyAction.note }}</p>
    </section>

    <div class="topic-grid">
      <aside class="topic-side">
        <OnThisPage :items="emergency.sections.map((s) => ({ slug: s.slug, title: s.title }))" />
      </aside>
      <div class="topic-main">
        <SectionCard v-for="section in emergency.sections" :key="section.slug" :section="section" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.emergency-action {
  background: var(--callout-danger-bg);
  border: 1px solid var(--callout-danger-border);
  border-left: 6px solid var(--callout-danger-fg);
  border-radius: var(--radius-lg);
  padding: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: 2rem;
  color: var(--callout-danger-fg);
}
.action-title {
  margin: 0 0 0.25rem;
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
}
.action-sub {
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: 0.02em;
}
.action-body {
  margin: 0 0 1rem;
  font-weight: 500;
}
.action-triggers {
  margin: 0 0 1.25rem;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.6rem;
}
.action-triggers li {
  background: var(--callout-danger-bg);
  border: 1px solid var(--callout-danger-border);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.8rem;
  font-weight: 650;
  font-size: 0.95rem;
}
.action-bring {
  border-top: 1px solid var(--callout-danger-border);
  padding-top: 1rem;
  margin-bottom: 1rem;
}
.action-bring-label {
  font-weight: 700;
  margin: 0 0 0.4rem;
}
.action-bring ul {
  margin: 0;
  padding-left: 1.3rem;
}
.action-bring li {
  margin-bottom: 0.25rem;
}
.action-note {
  margin: 0;
  font-weight: 700;
}
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
