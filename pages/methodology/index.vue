<script setup lang="ts">
import {
  sourceTiers,
  forbiddenSources,
  validationSteps,
  traceabilityRequirements,
  conflictResolutionSteps,
  updateSteps,
  priorityOrder,
  limitations,
  sourcesConsulted,
  conflicts,
  adversarialAudit,
} from '~/content/methodology'
import { evidenceLevels, claimCategories } from '~/content/evidenceLegend'
import { site } from '~/content/site'

usePageSeo({
  title: 'Methodology',
  description:
    'How the MCADD Compass content is researched, verified, and classified — evidence levels, source hierarchy, and limitations.',
})
</script>

<template>
  <div class="container">
    <PageHero
      title="How this content is made"
      description="MCADD Compass is built from a validated knowledge base. This page explains the evidence levels, source hierarchy, validation process, and the limitations you should know about."
    />

    <div class="method-grid">
      <aside class="method-side">
        <OnThisPage
          :items="[
            { slug: 'evidence-levels', title: 'Evidence levels' },
            { slug: 'claim-categories', title: 'Claim categories' },
            { slug: 'source-hierarchy', title: 'Source hierarchy' },
            { slug: 'validation', title: 'Validation protocol' },
            { slug: 'traceability', title: 'Traceability' },
            { slug: 'sources-consulted', title: 'Sources consulted' },
            { slug: 'conflicts', title: 'Conflicts identified' },
            { slug: 'limitations', title: 'Limitations' },
          ]"
        />
      </aside>

      <div class="method-main">
        <!-- Evidence levels -->
        <section id="evidence-levels" class="method-section">
          <h2>Evidence levels</h2>
          <p class="lead">Every claim on this site carries one of these five levels.</p>
          <ul class="level-list">
            <li v-for="e in evidenceLevels" :key="e.level" class="level-row">
              <span class="pill" :class="`ev-${e.level.toLowerCase()}`">● Level {{ e.level }}</span>
              <span>{{ e.definition }}</span>
            </li>
          </ul>
        </section>

        <!-- Claim categories -->
        <section id="claim-categories" class="method-section">
          <h2>Claim categories</h2>
          <p class="lead">Claims are also classified by what kind of statement they are.</p>
          <ul class="cat-list">
            <li v-for="c in claimCategories" :key="c.name" class="cat-row">
              <CategoryTag :category="c.name" />
              <span>{{ c.definition }}</span>
            </li>
          </ul>
        </section>

        <!-- Source hierarchy -->
        <section id="source-hierarchy" class="method-section">
          <h2>Source hierarchy</h2>
          <p class="lead">Sources are ranked into four tiers.</p>
          <div class="tier-table">
            <div v-for="t in sourceTiers" :key="t.tier" class="tier-row">
              <span class="pill" :class="`ev-${t.tier === 'A' ? 'a' : t.tier === 'B' ? 'b' : t.tier === 'C' ? 'c' : 'd'}`">
                Tier {{ t.tier }}
              </span>
              <div class="tier-body">
                <strong>{{ t.label }}</strong>
                <span>{{ t.examples }}</span>
              </div>
            </div>
          </div>
          <div class="callout callout-danger">
            <strong>Forbidden as evidence</strong>
            <p>{{ forbiddenSources }}</p>
          </div>
        </section>

        <!-- Validation -->
        <section id="validation" class="method-section">
          <h2>Validation protocol</h2>
          <p class="lead">Content is validated through a structured process.</p>
          <ol class="step-list">
            <li v-for="(step, i) in validationSteps" :key="i">{{ step }}</li>
          </ol>
        </section>

        <!-- Traceability -->
        <section id="traceability" class="method-section">
          <h2>Traceability</h2>
          <p class="lead">Every medical paragraph records:</p>
          <ul class="plain-list">
            <li v-for="item in traceabilityRequirements" :key="item">{{ item }}</li>
          </ul>
          <p>Identifiers (URLs, DOIs, PMIDs, dates, authors, trial IDs) are never fabricated.</p>

          <h3>Keeping information fresh</h3>
          <p>
            Time-sensitive claims record their publication date, last update, and last independent verification. This is
            especially important for clinical trials, treatments, guidelines, and nutritional recommendations. All content
            on this site was last verified on {{ site.contentLastVerified }}.
          </p>

          <h3>Resolving conflicts</h3>
          <ol class="step-list">
            <li v-for="(step, i) in conflictResolutionSteps" :key="i">{{ step }}</li>
          </ol>

          <h3>Updating the knowledge base</h3>
          <ol class="step-list">
            <li v-for="(step, i) in updateSteps" :key="i">{{ step }}</li>
          </ol>

          <div class="callout callout-info">
            <strong>Priority order</strong>
            <p>{{ priorityOrder }}</p>
          </div>
        </section>

        <!-- Sources consulted -->
        <section id="sources-consulted" class="method-section">
          <h2>Sources consulted</h2>
          <p class="lead">The sources used to build this knowledge base, and their access status.</p>
          <div class="source-table">
            <div v-for="src in sourcesConsulted" :key="src.name" class="source-row">
              <div class="source-head">
                <span class="source-status" :class="{ ok: src.accessed, blocked: !src.accessed }">
                  {{ src.accessed ? '✓' : '✗' }}
                </span>
                <span class="source-name">
                  <a v-if="src.url" :href="src.url" target="_blank" rel="noopener noreferrer">{{ src.name }}</a>
                  <span v-else>{{ src.name }}</span>
                </span>
                <span class="pill tier-pill">Tier {{ src.tier }}</span>
              </div>
              <p class="source-note">{{ src.note }}</p>
            </div>
          </div>
        </section>

        <!-- Conflicts -->
        <section id="conflicts" class="method-section">
          <h2>Conflicts identified</h2>
          <p class="lead">Open questions and areas where sources disagree or evidence is incomplete.</p>
          <div class="conflict-list">
            <article v-for="c in conflicts" :key="c.id" class="conflict card">
              <header class="conflict-head">
                <h3>{{ c.id }}. {{ c.title }}</h3>
                <span class="pill ev-c">{{ c.status }}</span>
              </header>
              <p class="conflict-desc">{{ c.description }}</p>
              <p class="conflict-res"><strong>Resolution:</strong> {{ c.resolution }}</p>
            </article>
          </div>
        </section>

        <!-- Adversarial audit -->
        <section id="audit" class="method-section">
          <h2>Independent review</h2>
          <div class="callout callout-warning">
            <strong>{{ adversarialAudit.status }}</strong>
            <p>{{ adversarialAudit.summary }}</p>
            <p>{{ adversarialAudit.keyLimitation }}</p>
          </div>
          <h3>Planned follow-up work</h3>
          <ul class="plain-list">
            <li v-for="item in adversarialAudit.futureWork" :key="item">{{ item }}</li>
          </ul>
        </section>

        <!-- Limitations -->
        <section id="limitations" class="method-section">
          <h2>Limitations</h2>
          <ul class="plain-list">
            <li v-for="item in limitations" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.method-grid {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 2rem;
  align-items: start;
}
.method-main {
  min-width: 0;
  max-width: 760px;
}
.method-section {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
}
.method-section:first-of-type {
  padding-top: 0;
}
.method-section h2 {
  margin-bottom: 0.4rem;
}
.lead {
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}
.method-section h3 {
  margin-top: 1.75rem;
}

.level-list,
.cat-list,
.plain-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.8rem;
}
.level-row,
.cat-row {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  color: var(--text-muted);
}
.level-row .pill,
.cat-row .pill {
  flex-shrink: 0;
}
.plain-list li {
  position: relative;
  padding-left: 1.4rem;
  color: var(--text-muted);
}
.plain-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--brand-600);
}

.step-list {
  margin: 0;
  padding-left: 1.4rem;
  display: grid;
  gap: 0.6rem;
  color: var(--text-muted);
}
.step-list li {
  padding-left: 0.3rem;
}

.tier-table {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.tier-row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}
.tier-body {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.tier-body span {
  color: var(--text-muted);
  font-size: 0.95rem;
}
.tier-pill {
  background: var(--surface-subtle);
  color: var(--text-muted);
  border-color: var(--border);
}

.source-table {
  display: grid;
  gap: 0.75rem;
}
.source-row {
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}
.source-head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}
.source-status {
  display: inline-grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
}
.source-status.ok {
  background: var(--ev-a-bg);
  color: var(--ev-a-fg);
}
.source-status.blocked {
  background: var(--ev-x-bg);
  color: var(--ev-x-fg);
}
.source-name {
  font-weight: 650;
}
.source-note {
  margin: 0.6rem 0 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.conflict-list {
  display: grid;
  gap: 1rem;
}
.conflict {
  padding: 1.25rem 1.4rem;
}
.conflict-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.6rem;
}
.conflict-head h3 {
  margin: 0;
  font-size: 1.1rem;
}
.conflict-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
}
.conflict-res {
  font-size: 0.95rem;
  margin: 0;
}

.callout p {
  margin: 0;
}

@media (max-width: 860px) {
  .method-grid {
    grid-template-columns: 1fr;
  }
  .method-side {
    display: none;
  }
}
</style>
