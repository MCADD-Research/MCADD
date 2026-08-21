<script setup lang="ts">
import type { Trial } from '~/content/research'

const props = defineProps<{
  trial: Trial
}>()

interface StatusMeta {
  label: string
  cls: string
}

const statusMeta = computed<StatusMeta>(() => {
  switch (props.trial.status) {
    case 'RECRUITING':
      return { label: 'Recruiting', cls: 'status-recruiting' }
    case 'ACTIVE_NOT_RECRUITING':
      return { label: 'Active, not recruiting', cls: 'status-active' }
    case 'COMPLETED':
      return { label: 'Completed', cls: 'status-completed' }
    case 'SUSPENDED':
      return { label: 'Suspended', cls: 'status-suspended' }
    case 'WITHDRAWN':
      return { label: 'Withdrawn', cls: 'status-withdrawn' }
    case 'UNKNOWN':
      return { label: 'Status unknown', cls: 'status-unknown' }
    default:
      return { label: props.trial.status as string, cls: 'status-unknown' }
  }
})

const hasNote = computed(() => Boolean(props.trial.note))
</script>

<template>
  <article class="trial-card card">
    <header class="trial-head">
      <span class="status-badge" :class="statusMeta.cls">{{ statusMeta.label }}</span>
      <h3 class="trial-name">{{ trial.name }}</h3>
      <a :href="trial.url" target="_blank" rel="noopener noreferrer" class="trial-id">
        {{ trial.id }} ↗
      </a>
    </header>

    <p v-if="trial.officialTitle" class="trial-official">{{ trial.officialTitle }}</p>

    <dl class="trial-meta">
      <div v-if="trial.intervention" class="trial-meta-item">
        <dt>Intervention</dt>
        <dd>{{ trial.intervention }}</dd>
      </div>
      <div v-if="trial.phase" class="trial-meta-item">
        <dt>Phase</dt>
        <dd>{{ trial.phase }}</dd>
      </div>
      <div v-if="trial.population" class="trial-meta-item">
        <dt>Population</dt>
        <dd>{{ trial.population }}</dd>
      </div>
      <div v-if="trial.countries" class="trial-meta-item">
        <dt>Countries</dt>
        <dd>{{ trial.countries }}</dd>
      </div>
      <div v-if="trial.sites" class="trial-meta-item">
        <dt>Sites</dt>
        <dd>{{ trial.sites }}</dd>
      </div>
      <div v-if="trial.enrollment" class="trial-meta-item">
        <dt>Enrollment</dt>
        <dd>{{ trial.enrollment }}</dd>
      </div>
      <div v-if="trial.primaryEndpoints" class="trial-meta-item trial-meta-wide">
        <dt>Primary endpoints</dt>
        <dd>{{ trial.primaryEndpoints }}</dd>
      </div>
    </dl>

    <p class="trial-updated">
      Registry updated:
      <time :datetime="trial.lastRegistryUpdate">{{ trial.lastRegistryUpdate }}</time>
    </p>

    <p v-if="hasNote" class="trial-note">{{ trial.note }}</p>
  </article>
</template>

<style scoped>
.trial-card {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.trial-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.6rem 0.9rem;
}
.trial-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
}
.trial-id {
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}
.trial-official {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
.trial-meta {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem 1rem;
  border-top: 1px solid var(--border);
  padding-top: 0.85rem;
}
.trial-meta-item dt {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--text-faint);
  margin-bottom: 0.15rem;
}
.trial-meta-item dd {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.45;
}
.trial-meta-wide {
  grid-column: 1 / -1;
}
.trial-updated {
  margin: 0;
  font-size: 0.78rem;
  color: var(--text-faint);
  font-variant-numeric: tabular-nums;
}
.trial-note {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-muted);
  background: var(--surface-subtle);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  border: 1px solid transparent;
  white-space: nowrap;
}
.status-recruiting {
  background: var(--status-recruiting-bg);
  color: var(--status-recruiting-fg);
  border-color: var(--status-recruiting-fg);
}
.status-completed {
  background: var(--status-completed-bg);
  color: var(--status-completed-fg);
  border-color: var(--status-completed-fg);
}
.status-active {
  background: var(--status-completed-bg);
  color: var(--status-completed-fg);
  border-color: var(--status-completed-fg);
}
.status-suspended {
  background: var(--status-suspended-bg);
  color: var(--status-suspended-fg);
  border-color: var(--status-suspended-fg);
}
.status-withdrawn {
  background: var(--status-withdrawn-bg);
  color: var(--status-withdrawn-fg);
  border-color: var(--status-withdrawn-fg);
}
.status-unknown {
  background: var(--status-unknown-bg);
  color: var(--status-unknown-fg);
  border-color: var(--status-unknown-fg);
}
</style>
