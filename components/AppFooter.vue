<script setup lang="ts">
import { primaryNav, secondaryNav, site } from '~/content/site'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <p class="footer-name">{{ site.name }}</p>
          <p class="footer-note">
            An independent educational resource for people living with MCADD. All medical content is traced to published,
            cited sources.
          </p>
        </div>

        <nav class="footer-col" aria-label="Footer — topics">
          <p class="footer-heading">Topics</p>
          <NuxtLink v-for="item in primaryNav" :key="item.to" :to="item.to" class="footer-link">
            {{ item.label }}
          </NuxtLink>
        </nav>

        <nav class="footer-col" aria-label="Footer — about">
          <p class="footer-heading">About this site</p>
          <NuxtLink v-for="item in secondaryNav" :key="item.to" :to="item.to" class="footer-link">
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="footer-col">
          <p class="footer-heading">Content verified</p>
          <p class="footer-verified">
            <time :datetime="site.contentLastVerified">{{ site.contentLastVerified }}</time>
          </p>
          <p class="footer-note">Every claim shows an evidence level and its sources.</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-disclaimer">
          <strong>Disclaimer:</strong> this website provides general information only and is not medical advice. Always
          consult your own metabolic specialist. In an emergency, call your local emergency number.
        </p>
        <p class="footer-legal">
          © {{ new Date().getFullYear() }} {{ site.name }}. Content derived from a validated knowledge base of published
          medical sources; see the <NuxtLink to="/methodology">methodology</NuxtLink> page.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 4rem;
  border-top: 1px solid var(--border);
  background: var(--surface);
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;
  padding: 3rem 0 2rem;
}
.footer-brand {
  max-width: 34ch;
}
.footer-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
}
.footer-note {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0 0 0.5rem;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-heading {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--text-faint);
  margin: 0 0 0.4rem;
}
.footer-link {
  color: var(--text-muted);
  font-size: 0.95rem;
}
.footer-link:hover {
  color: var(--link);
}
.footer-verified {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 1.5rem 0 2.5rem;
}
.footer-disclaimer {
  font-size: 0.88rem;
  color: var(--text-muted);
  max-width: 70ch;
  margin: 0 0 1rem;
}
.footer-legal {
  font-size: 0.82rem;
  color: var(--text-faint);
  margin: 0;
}

@media (max-width: 820px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
