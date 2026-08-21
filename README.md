# MCADD

An evidence-based public website about **medium-chain acyl-CoA dehydrogenase deficiency (MCADD)** — built with [Nuxt 3](https://nuxt.com) and deployed as a static site to GitHub Pages.

> An evidence-based guide to MCADD — from the basics to the biochemistry: ACADM, MCAD, fatty-acid β-oxidation, C8, genetics, pathophysiology, and emerging therapies.

## Content source

All medical content is transcribed from a validated knowledge base (see `content/`):

- `00_methodology.md` — research protocol, source hierarchy, evidence levels
- `01_understanding_the_disease.md` — pathophysiology, genetics, biochemistry
- `02_diagnosis_and_biomarkers.md` — newborn screening, C8, confirmatory testing
- `03_daily_management.md` — fasting prevention, nutrition, exercise, illness
- `04_clinical_trials_and_research.md` — trials and emerging therapies
- `05_emergency_situations.md` — warning signs and emergency action
- `06_sources_and_conflicts.md` — sources, access status, open conflicts
- `07_changelog.md` — statistics, limitations, audit status

No medical claims, citations, trials, or treatments are invented. Source attribution and evidence levels are preserved exactly.

## Principles

- **Fully traceable** — every medical statement shows its sources (with PMIDs where available) and a "last verified" date.
- **Evidence-labelled** — every claim carries an evidence level (`A`–`X`) and a claim type (established fact, medical recommendation, observational data, expert opinion, scientific hypothesis, experimental data, insufficiently documented data).
- **Uncertainty is surfaced** — where evidence is thin (e.g. MCT restriction, specific fasting limits), the site says so instead of guessing.
- **Research is first-class** — clinical trials are grouped by status, and experimental therapies are never presented as established treatments.

## Information architecture

| Route | Purpose |
|-------|---------|
| `/` | Home, 30-second explainer, topic overview, evidence legend |
| `/understanding` | What MCADD is, genetics, biochemistry, pathophysiology, triggers |
| `/diagnosis` | Newborn screening, biomarkers (C8), confirmatory testing |
| `/living` | Fasting prevention, nutrition, exercise, illness, emergency planning |
| `/emergency` | Warning signs and what to do in a crisis |
| `/research` | Clinical trials, emerging therapies, recent publications |
| `/methodology` | How content is verified, source hierarchy, conflicts, limitations |
| `/resources` | Authoritative sources, trial registries, finding specialist care |
| `/glossary` | Plain-language definitions of every technical term |

## Tech stack

- **Nuxt 3** (TypeScript) with static site generation (`nuxt generate`)
- `@nuxtjs/sitemap` for `sitemap.xml`
- Self-hosted variable fonts (Inter + Fraunces via Fontsource) — no external font requests
- Light/dark theme with no flash-of-wrong-theme (inline pre-hydration script)
- JSON-LD structured data (`WebSite`, `MedicalWebPage`, `MedicalCondition`)

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run generate     # static build into .output/public
npm run typecheck    # run vue-tsc
```

## Deployment

Deployment to GitHub Pages runs automatically via `.github/workflows/deploy.yml` on every push to `main` (and manually via the Actions tab).

The workflow auto-detects the base URL:

- **User/org site** (`<owner>.github.io`) → base path `/`
- **Project site** (`<owner>.github.io/<repo>`) → base path `/<repo>/`

To override, set the `NUXT_APP_BASE_URL` and `NUXT_SITE_URL` environment variables (or repository variables).

### Notes for a custom domain

1. Update `site.siteUrl` in `content/site.ts` (used for canonical URLs).
2. Add a `CNAME` file under `public/` with your domain.
3. Set the custom domain in the repository's Pages settings.

## Medical disclaimer

This website provides general information only and is **not medical advice**. It does not replace the care of a physician or a specialist metabolic team. In an emergency, call your local emergency number (911 / 112 / 999).

See `content/site.ts` for the full disclaimer text.

## Project structure

```
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── assets/css/main.css            # design tokens & base styles
├── components/                    # UI components (badges, cards, callouts…)
├── composables/                   # useTheme, usePageSeo, useJsonLd
├── content/                       # transcribed knowledge base (TypeScript data)
├── layouts/default.vue            # header + disclaimer + footer
├── pages/                         # routes
└── public/                        # favicon, robots.txt
```
