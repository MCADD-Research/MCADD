<script setup lang="ts">
import {
  trials,
  otherTrials,
  emergingTherapies,
  recentResearch,
  registriesNote,
  researchLastVerified,
  type Trial,
  type TrialStatus,
} from '~/content/research'
import { site } from '~/content/site'

usePageSeo({
  title: 'Research & clinical trials',
  description:
    'Current and recent clinical trials, emerging therapies, and research areas for MCADD — clearly separated into established knowledge, ongoing research, and experimental work.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Research & clinical trials',
    description:
      'Clinical trials and research for medium-chain acyl-CoA dehydrogenase deficiency (MCADD).',
    about: {
      '@type': 'MedicalCondition',
      name: 'Medium-chain acyl-CoA dehydrogenase deficiency',
      alternateName: 'MCADD',
    },
    dateModified: site.contentLastVerified,
  },
})

const groupOrder: TrialStatus[] = ['RECRUITING', 'SUSPENDED', 'COMPLETED', 'WITHDRAWN', 'UNKNOWN']

const groupLabel: Record<TrialStatus, string> = {
  RECRUITING: 'Currently recruiting',
  SUSPENDED: 'Suspended',
  COMPLETED: 'Completed',
  WITHDRAWN: 'Withdrawn',
  UNKNOWN: 'Unknown status',
  ACTIVE_NOT_RECRUITING: 'Active, not recruiting',
}

const trialGroups = computed(() =>
  groupOrder
    .map((status) => ({ status, label: groupLabel[status], items: trials.filter((t) => t.status === status) }))
    .filter((g) => g.items.length > 0),
)

const recruitingCount = computed(() => trials.filter((t) => t.status === 'RECRUITING').length)
</script>

<template>
  <div class="container">
    <PageHero
      title="Research & clinical trials"
      description="The latest MCADD research, emerging therapies, and clinical trials — separated clearly into established knowledge, ongoing research, and experimental work."
      :intro="[
        `Clinical trial data verified directly from ClinicalTrials.gov on ${researchLastVerified}.`,
        `${recruitingCount} MCADD-specific trial${recruitingCount === 1 ? ' is' : 's are'} currently recruiting.`,
        'Experimental therapies are clearly labelled and are never presented as established treatments.',
      ]"
    />

    <!-- Reading research -->
    <section class="reading-research" aria-labelledby="reading-research-title">
      <h2 id="reading-research-title" class="sr-only">How to read research</h2>
      <div class="reading-grid">
        <div class="reading-item reading-established">
          <span class="reading-pill pill ev-a">Established</span>
          <p>Proven, guideline-backed knowledge — shown on this site with evidence levels A and B.</p>
        </div>
        <div class="reading-item reading-ongoing">
          <span class="reading-pill pill ev-b">Ongoing</span>
          <p>Clinical trials still in progress. Promising, but not yet proven or approved.</p>
        </div>
        <div class="reading-item reading-experimental">
          <span class="reading-pill pill ev-d">Experimental</span>
          <p>Preclinical or early-phase work (evidence D or X). Never presented as an available treatment.</p>
        </div>
      </div>
    </section>

    <!-- Clinical trials -->
    <section class="block-section" aria-labelledby="trials-title">
      <div class="section-head">
        <h2 id="trials-title">MCADD-specific clinical trials</h2>
        <p class="section-sub">
          All trials sourced from the ClinicalTrials.gov registry and independently verified on
          {{ researchLastVerified }}.
        </p>
      </div>

      <div v-for="group in trialGroups" :key="group.status" class="trial-group">
        <h3 class="trial-group-heading">
          {{ group.label }}
          <span class="trial-group-count">{{ group.items.length }}</span>
        </h3>
        <div class="trial-grid">
          <TrialCard v-for="trial in group.items" :key="trial.id" :trial="trial" />
        </div>
      </div>
    </section>

    <!-- Emerging therapies -->
    <section class="block-section" aria-labelledby="therapies-title">
      <div class="section-head">
        <h2 id="therapies-title">Emerging therapies</h2>
        <p class="section-sub">
          Experimental approaches under investigation. None of these is an approved treatment for MCADD.
        </p>
      </div>
      <div class="therapy-grid">
        <article v-for="therapy in emergingTherapies" :key="therapy.slug" class="therapy-card card">
          <header class="therapy-head">
            <h3 class="therapy-name">{{ therapy.name }}</h3>
            <div class="therapy-badges">
              <span class="pill ev-d">{{ therapy.classification }}</span>
              <span class="pill ev-x">{{ therapy.statusLabel }}</span>
            </div>
          </header>
          <p class="therapy-summary">{{ therapy.summary }}</p>
          <BlockRenderer :blocks="therapy.body" />
          <footer class="therapy-meta">
            <SourceList :sources="therapy.sources" />
            <time :datetime="therapy.lastVerified" class="therapy-verified">Verified {{ therapy.lastVerified }}</time>
          </footer>
        </article>
      </div>
    </section>

    <!-- Recent research -->
    <section class="block-section" aria-labelledby="recent-title">
      <div class="section-head">
        <h2 id="recent-title">Recent research areas</h2>
        <p class="section-sub">
          Key recent publications identified from the GeneReviews bibliography. Links open PubMed.
        </p>
      </div>
      <div class="recent-grid">
        <div v-for="group in recentResearch" :key="group.title" class="recent-group card">
          <h3 class="recent-group-title">{{ group.title }}</h3>
          <ul class="recent-list">
            <li v-for="pub in group.publications" :key="pub.text">
              <a v-if="pub.url" :href="pub.url" target="_blank" rel="noopener noreferrer">{{ pub.text }}</a>
              <span v-else>{{ pub.text }}</span>
              <span v-if="pub.pmid" class="recent-pmid">PMID {{ pub.pmid }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Other trials + registry note -->
    <section class="block-section" aria-labelledby="other-title">
      <div class="two-col">
        <div>
          <h2 id="other-title" class="h3-like">Other relevant trials</h2>
          <p class="section-sub">Trials identified in the ClinicalTrials.gov search that are not MCADD-specific.</p>
          <ul class="other-list">
            <li v-for="t in otherTrials" :key="t.id">
              <span class="other-id">{{ t.id }}</span>
              <span class="other-name">{{ t.name }}</span>
              <StatusBadge :status="t.status" />
            </li>
          </ul>
        </div>
        <aside class="registry-note callout callout-insufficient">
          <strong>Registries not yet searched</strong>
          <p>{{ registriesNote }}</p>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.block-section {
  margin-top: clamp(2.5rem, 6vw, 4rem);
}
.section-head {
  max-width: 64ch;
  margin-bottom: 1.5rem;
}
.section-head h2 {
  margin-bottom: 0.4rem;
}
.section-sub {
  color: var(--text-muted);
  margin: 0;
}
.h3-like {
  margin-bottom: 0.4rem;
}

.reading-research {
  margin-top: 0.5rem;
}
.reading-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.reading-item {
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
}
.reading-item p {
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.trial-group {
  margin-bottom: 2.25rem;
}
.trial-group-heading {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.trial-group-count {
  display: inline-grid;
  place-items: center;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.4rem;
  border-radius: 999px;
  background: var(--surface-subtle);
  border: 1px solid var(--border);
  font-size: 0.8rem;
  font-family: var(--font-sans);
  font-weight: 700;
  color: var(--text-muted);
}
.trial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
  gap: 1.25rem;
}

.therapy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.therapy-card {
  padding: 1.5rem;
}
.therapy-head {
  margin-bottom: 1rem;
}
.therapy-name {
  margin: 0 0 0.6rem;
}
.therapy-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.therapy-summary {
  color: var(--text-muted);
  font-size: 0.97rem;
}
.therapy-meta {
  border-top: 1px solid var(--border);
  margin-top: 1rem;
  padding-top: 0.75rem;
}
.therapy-verified {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-faint);
}

.recent-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.recent-group {
  padding: 1.25rem 1.4rem;
}
.recent-group-title {
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
}
.recent-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}
.recent-list li {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-muted);
}
.recent-pmid {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.78rem;
  font-weight: 650;
  color: var(--text-faint);
  white-space: nowrap;
}

.two-col {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: start;
}
.other-list {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.6rem;
}
.other-list li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  font-size: 0.92rem;
}
.other-id {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--text-muted);
}
.other-name {
  color: var(--text);
  flex: 1;
  min-width: 200px;
}
.registry-note p {
  margin: 0;
}

@media (max-width: 900px) {
  .reading-grid,
  .therapy-grid,
  .recent-grid {
    grid-template-columns: 1fr;
  }
  .two-col {
    grid-template-columns: 1fr;
  }
}
</style>
