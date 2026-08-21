export interface SourceTier {
  tier: string
  label: string
  examples: string
}

export const sourceTiers: SourceTier[] = [
  {
    tier: 'A',
    label: 'Authoritative',
    examples:
      'HAS, Orphanet, NIH, GeneReviews/NCBI Bookshelf, ACMG, metabolic disease societies, recognized guidelines, university hospitals, EURORDIS',
  },
  {
    tier: 'B',
    label: 'Scientific literature',
    examples: 'PubMed, peer-reviewed publications, systematic reviews, meta-analyses, clinical/cohort studies',
  },
  {
    tier: 'C',
    label: 'Trial registries',
    examples: 'ClinicalTrials.gov, EU CTIS, WHO ICTRP, national registries',
  },
  {
    tier: 'D',
    label: 'Other',
    examples: 'Used only when necessary, clearly labeled',
  },
]

export const forbiddenSources =
  'Reddit, forums, blogs, commercial websites, AI-generated medical content, unsourced social media.'

export const validationSteps: string[] = [
  'Source discovery — find the strongest available primary or authoritative source.',
  'Context verification — read enough to understand what was studied, which population, under which conditions.',
  'Independent corroboration — find an independent source when appropriate.',
  'Active falsification — explicitly search for contradictory guidelines, newer recommendations, systematic reviews, opposing studies.',
  'Critical synthesis — evaluate authority, date, methodology, population, sample size, consistency, clinical relevance, limitations.',
  'Final classification — VALIDATED / PARTIALLY_VALIDATED / CONFLICTING / INSUFFICIENT_EVIDENCE / REJECTED.',
]

export const traceabilityRequirements: string[] = [
  'Organization / author',
  'Title',
  'Journal or database',
  'Publication year',
  'PMID/DOI when applicable',
  'URL',
]

export const conflictResolutionSteps: string[] = [
  'Receive research reports from both researchers.',
  'Compare claims, sources, and evidence levels.',
  'If agreement → validate with the appropriate evidence level.',
  'If disagreement → spawn additional research focused on the specific conflict.',
  'If still unresolved → mark CONFLICTING and document both positions.',
  'If insufficient evidence → mark INSUFFICIENT_EVIDENCE.',
]

export const updateSteps: string[] = [
  'New research emerges → verify it.',
  'Update the relevant knowledge base file.',
  'Record the change in the changelog.',
  'Verify all cross-references still hold.',
  'For guideline changes, verify current status with the primary source.',
]

export const priorityOrder =
  'PATIENT SAFETY > SCIENTIFIC ACCURACY > TRACEABILITY > CURRENT INFORMATION > COMPLETENESS > COST EFFICIENCY > SPEED'

export const limitations: string[] = [
  'This system is NOT a physician or metabolic disease specialist.',
  'This system does NOT provide individualized medical advice.',
  'This system does NOT replace emergency services.',
  'Knowledge may be incomplete despite best efforts.',
  'Sources may change after the verification date.',
  'The system cannot access paywalled full texts without available abstracts.',
  'Web search results depend on indexing and may miss relevant sources.',
  'The system\u2019s knowledge is only as current as its last verification date.',
]

export interface SourceEntry {
  name: string
  url?: string
  tier: 'A' | 'B' | 'C' | 'D'
  accessed: boolean
  note: string
}

export const sourcesConsulted: SourceEntry[] = [
  {
    name: 'GeneReviews (NCBI Bookshelf)',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    tier: 'A',
    accessed: true,
    note: 'Chang IJ, Lam C, Vockley J. 2000 [updated 2024 Sep 26]. PMID: 20301597. Full bibliography extracted.',
  },
  {
    name: 'MedlinePlus Genetics — MCADD',
    url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
    tier: 'A',
    accessed: true,
    note: 'Full content retrieved. NIH/NLM source.',
  },
  {
    name: 'MedlinePlus Genetics — ACADM gene',
    url: 'https://medlineplus.gov/genetics/gene/acadm/',
    tier: 'A',
    accessed: true,
    note: 'Full content retrieved. NIH/NLM source.',
  },
  {
    name: 'Orphanet — MCADD',
    url: 'https://www.orpha.net/fr/disease/detail/42',
    tier: 'A',
    accessed: true,
    note: 'Full clinical summary retrieved via browser. Last updated February 2014. ORPHA:42.',
  },
  {
    name: 'CDC — Newborn screening',
    url: 'https://www.cdc.gov/newborn-screening/hcp/disorders/mcad.html',
    tier: 'A',
    accessed: false,
    note: '404 — page moved. Not accessed.',
  },
  {
    name: 'PubMed (direct)',
    tier: 'B',
    accessed: true,
    note: '7 key abstracts extracted via browser (Derks 2007, McGregor 2021, Touw 2012, Iafolla 1994, Anderson 2020, Bentler 2016, Lang 2009).',
  },
  {
    name: 'ClinicalTrials.gov API',
    url: 'https://clinicaltrials.gov/api/v2/studies',
    tier: 'C',
    accessed: true,
    note: 'Full access. 14 studies found, 9 MCADD-specific.',
  },
  {
    name: 'EU CTIS',
    url: 'https://euclinicaltrials.eu/ctis-public/search',
    tier: 'C',
    accessed: true,
    note: 'Searched via browser. 0 MCADD-specific trials. 1 related LC-FAOD trial (not MCADD).',
  },
  {
    name: 'WHO ICTRP',
    url: 'https://trialsearch.who.int/',
    tier: 'C',
    accessed: true,
    note: 'Searched via browser. 10 MCADD-specific trials, including 2 not on ClinicalTrials.gov (DRKS00032765, ISRCTN14321657).',
  },
]

export interface Conflict {
  id: number
  title: string
  status: string
  description: string
  resolution: string
}

export const conflicts: Conflict[] = [
  {
    id: 1,
    title: 'MCT restriction',
    status: 'RESOLVED',
    description:
      'Whether MCT should be restricted in MCADD was initially unverified. Orphanet (ORPHA:42, Tier A) explicitly states "Les triglycérides à chaîne moyenne doivent aussi être évités" (MCT should also be avoided).',
    resolution:
      'Resolved. Orphanet (Tier A) recommends avoiding MCT. Evidence level upgraded from X to A.',
  },
  {
    id: 2,
    title: 'Specific fasting duration limits',
    status: 'RESOLVED',
    description:
      'The Derks 2007 study (PMID: 16788829) provides age-specific fasting limits (8h for 6 months–1 year, 10h for the second year, 12h thereafter).',
    resolution:
      'Resolved. Limits documented at evidence level C (observational cohort). Important caveat: no conclusions for intercurrent illness with fever.',
  },
  {
    id: 3,
    title: 'Genotype / phenotype correlation',
    status: 'PARTIALLY RESOLVED',
    description:
      'Arnold et al. (2010, PMID: 20036593) found "lack of genotype-phenotype correlations" while Touw et al. (2012, PMID: 22630369) suggest residual enzyme activity may predict clinical severity. Anderson 2020 (PMID: 31836396) found p.Lys329Glu homozygotes had higher C8 and more hypoglycemic events.',
    resolution:
      'All three positions documented. Touw 2012 provides a nuanced view: residual enzyme activity <10% = classical risk; >10% may allow relaxed fasting advice. Evidence level C.',
  },
  {
    id: 4,
    title: 'NCT03761693 status',
    status: 'UNRESOLVED',
    description:
      'Trial NCT03761693 (Fasting Tolerance in MCADD Infants) shows status UNKNOWN on ClinicalTrials.gov (last update 2019-05-14), but WHO ICTRP last listed it as "Recruiting" (ICTRP record last refreshed 2020-12-12).',
    resolution:
      'Discrepancy documented. The ICTRP record is stale; current status treated as uncertain.',
  },
  {
    id: 5,
    title: 'Adult mortality rate',
    status: 'DOCUMENTED',
    description:
      'Lang 2009 reports 50% mortality in acutely presenting adults and 29% overall. This is higher than the ~25% historical pediatric mortality (Orphanet/Iafolla 1994).',
    resolution:
      'Both figures documented with context. Adult presentations may be more severe due to delayed diagnosis and different triggers (alcohol).',
  },
]

export const adversarialAudit = {
  status: 'Manual adversarial review completed (2026-08-21). Automated adversarial review not performed.',
  summary:
    'No critical safety issues found. The knowledge base consistently marks insufficient evidence, does not provide specific medical dosing, does not present experimental treatments as established, and includes source references for all medical claims.',
  keyLimitation:
    'Claims were verified against authoritative sources and PubMed abstracts, but not always against the primary-study full texts. No identifiers (PMIDs, DOIs, URLs) were fabricated.',
  futureWork: [
    'Access Derks 2007 and McGregor 2021 full texts to further verify fasting limits and emergency management protocols.',
    'Perform a full automated adversarial review.',
    'Monitor NCT03761693 and NCT01881984 for registry status changes.',
    'Verify MCT recommendation consistency against evolving practice beyond the 2014 Orphanet summary.',
  ],
}
