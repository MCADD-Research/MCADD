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
    url: 'https://www.orpha.net/en/disease/734',
    tier: 'A',
    accessed: false,
    note: 'Blocked by CAPTCHA/bot detection. Not accessed.',
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
    accessed: false,
    note: 'Direct access blocked (no content returned). References obtained via GeneReviews bibliography.',
  },
  {
    name: 'ClinicalTrials.gov API',
    url: 'https://clinicaltrials.gov/api/v2/studies',
    tier: 'C',
    accessed: true,
    note: 'Full access. 14 studies found, 7 MCADD-specific.',
  },
  {
    name: 'EU CTIS',
    url: 'https://euclinicaltrials.eu/',
    tier: 'C',
    accessed: false,
    note: 'Not searched — access limitation.',
  },
  {
    name: 'WHO ICTRP',
    url: 'https://www.who.int/clinical-trials-registry',
    tier: 'C',
    accessed: false,
    note: 'Not searched — access limitation.',
  },
  {
    name: 'DuckDuckGo (web search)',
    tier: 'D',
    accessed: false,
    note: 'Bot detection blocked all searches.',
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
    status: 'INSUFFICIENT EVIDENCE',
    description:
      'Whether MCT is "forbidden" in MCADD could not be verified. The sources accessed (GeneReviews, MedlinePlus) do not explicitly state "MCT is forbidden" in the retrieved content.',
    resolution:
      'Marked as INSUFFICIENTLY DOCUMENTED DATA. No blanket recommendation made. Further primary-source research needed.',
  },
  {
    id: 2,
    title: 'Specific fasting duration limits',
    status: 'INSUFFICIENT EVIDENCE',
    description:
      'The Derks 2007 study (PMID: 16788829) provides age-specific fasting limits, but the full text could not be accessed to verify specific numeric values.',
    resolution:
      'Marked as INSUFFICIENTLY DOCUMENTED DATA. No specific numeric fasting limits provided. Families directed to consult their metabolic team.',
  },
  {
    id: 3,
    title: 'Genotype / phenotype correlation',
    status: 'PARTIALLY RESOLVED',
    description:
      'Arnold et al. (2010, PMID: 20036593) found "lack of genotype-phenotype correlations" while Touw et al. (2012, PMID: 22630369) suggest residual enzyme activity may predict clinical severity.',
    resolution:
      'Both positions documented. The evidence level is marked as C (limited). Both studies cited with appropriate context.',
  },
  {
    id: 4,
    title: 'NCT03761693 status',
    status: 'UNRESOLVED',
    description:
      'Trial NCT03761693 (Fasting Tolerance in MCADD Infants) has status UNKNOWN on ClinicalTrials.gov, with last update 2019-05-14.',
    resolution: 'Documented as UNKNOWN. Warning added not to assume active or recruiting status.',
  },
]

export const adversarialAudit = {
  status: 'Manual review completed; automated adversarial review NOT performed',
  summary:
    'No critical safety issues found. The knowledge base consistently marks insufficient evidence, does not provide specific medical dosing, does not present experimental treatments as established, and includes source references for all medical claims.',
  keyLimitation:
    'The adversarial review was not able to verify claims against primary source full texts (PubMed/PMC access was blocked). Claims are verified against authoritative secondary sources but not always against the primary studies themselves.',
  futureWork: [
    'Access Derks 2007 full text to verify specific fasting duration limits.',
    'Access McGregor 2021 full text to verify emergency management protocols.',
    'Search Orphanet for MCADD clinical information.',
    'Search EU CTIS and WHO ICTRP for additional trials.',
    'Perform a full automated adversarial review when web access is available.',
    'Verify MCT recommendation evidence from primary sources.',
    'Access key PMC articles for full-text verification.',
  ],
}
