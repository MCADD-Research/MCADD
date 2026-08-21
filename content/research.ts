import type { Block, ClaimCategory, Evidence, SourceRef } from './types'

export type TrialStatus =
  | 'RECRUITING'
  | 'SUSPENDED'
  | 'COMPLETED'
  | 'WITHDRAWN'
  | 'UNKNOWN'
  | 'ACTIVE_NOT_RECRUITING'

export interface Trial {
  id: string
  name: string
  officialTitle?: string
  intervention: string
  phase: string
  population: string
  countries: string
  sites: string
  status: TrialStatus
  lastRegistryUpdate: string
  primaryEndpoints: string
  enrollment: string
  url: string
  note?: string
}

export interface Publication {
  text: string
  pmid?: string
  url?: string
}

export interface ResearchGroup {
  title: string
  publications: Publication[]
}

export interface EmergingTherapy {
  slug: string
  name: string
  classification: string
  statusLabel: string
  summary: string
  body: Block[]
  category: ClaimCategory[]
  evidence: Evidence
  sources: SourceRef[]
  lastVerified: string
}

export const researchLastVerified = '2026-08-21'

export const trials: Trial[] = [
  {
    id: 'NCT06623032',
    name: 'Metabolic Effects of Medium-Chain Fatty Acids in MCADD',
    officialTitle:
      'Metabolic Effects of Medium-Chain Fatty Acids in Patients With Medium-Chain Acyl-CoA Dehydrogenase Deficiency and Healthy Individuals',
    intervention: 'Medium-Chain Fatty Acid (MCFA); Long-Chain Fatty Acid (LCFA)',
    phase: 'N/A',
    population: 'MCADD patients and healthy individuals',
    countries: 'Denmark',
    sites: '1',
    status: 'RECRUITING',
    lastRegistryUpdate: '2026-08-14',
    primaryEndpoints: 'Ketone bodies',
    enrollment: '30',
    url: 'https://clinicaltrials.gov/study/NCT06623032',
  },
  {
    id: 'NCT06773026',
    name: 'Sodium Phenylbutyrate (ACER-001) for MCADD',
    officialTitle:
      'Study of Sodium Phenylbutyrate (ACER-001) for the Treatment of Pediatric and Adults Patients With Medium Chain Acyl-CoA Dehydrogenase Deficiency (MCADD)',
    intervention: 'Sodium phenylbutyrate',
    phase: 'Phase 2',
    population: 'Pediatric and adult MCADD patients',
    countries: 'United States',
    sites: '1',
    status: 'RECRUITING',
    lastRegistryUpdate: '2026-06-08',
    primaryEndpoints: 'Number of participants with treatment-related adverse events (CTCAE v5.0)',
    enrollment: '24',
    url: 'https://clinicaltrials.gov/study/NCT06773026',
  },
  {
    id: 'NCT06069375',
    name: 'Sodium Phenylbutyrate (ACER-001) for MCADD (K304E)',
    officialTitle:
      'Study of Sodium Phenylbutyrate (ACER-001) for the Treatment of Patients With Medium Chain Acyl-CoA Dehydrogenase Deficiency (MCADD)',
    intervention: 'Sodium phenylbutyrate',
    phase: 'Phase 2',
    population: 'Pediatric and adult MCADD patients with c.985A>G (K304E) mutation',
    countries: 'United States',
    sites: '1',
    status: 'SUSPENDED',
    lastRegistryUpdate: '2026-07-06',
    primaryEndpoints: 'Number of participants with treatment-related adverse events (CTCAE v5.0)',
    enrollment: '24',
    url: 'https://clinicaltrials.gov/study/NCT06069375',
  },
  {
    id: 'NCT01881984',
    name: 'Ravicti\u2122 for MCAD with K304E mutation',
    officialTitle: 'Use of Ravicti\u2122 in Patients With MCAD Deficiency With the 985A>G (K304E) Mutation',
    intervention: 'Ravicti (Glycerol phenylbutyrate)',
    phase: 'Phase 1',
    population: 'MCADD patients with K304E mutation',
    countries: 'United States',
    sites: '1',
    status: 'COMPLETED',
    lastRegistryUpdate: '2017-09-25',
    primaryEndpoints: 'Metabolic stress',
    enrollment: '4',
    url: 'https://clinicaltrials.gov/study/NCT01881984',
    note: 'Investigated glycerol phenylbutyrate (Ravicti\u2122) as a chemical chaperone to stabilize the MCAD enzyme in patients with the K304E mutation. Classified as HUMAN PHASE I.',
  },
  {
    id: 'NCT06796530',
    name: 'High Intensity Exercise in Children With MCADD',
    intervention: 'Exercise protocol',
    phase: 'N/A',
    population: 'Children with MCADD',
    countries: 'Not specified in registry summary',
    sites: 'Not specified',
    status: 'COMPLETED',
    lastRegistryUpdate: 'Not specified',
    primaryEndpoints: 'Not specified in registry summary',
    enrollment: 'Not specified',
    url: 'https://clinicaltrials.gov/study/NCT06796530',
  },
  {
    id: 'NCT06067802',
    name: 'Triheptanoin for Hypoglycemia Prevention in MCADD',
    officialTitle:
      'Study of Triheptanoin for the Prevention of Hypoglycemia in Patients With Medium Chain Acyl-CoA Dehydrogenase Deficiency (MCADD)',
    intervention: 'Triheptanoin',
    phase: 'Phase 2',
    population: 'MCADD patients',
    countries: 'United States',
    sites: '1',
    status: 'WITHDRAWN',
    lastRegistryUpdate: '2026-07-02',
    primaryEndpoints: 'Number of participants with treatment-related adverse events',
    enrollment: '0 (withdrawn before enrollment)',
    url: 'https://clinicaltrials.gov/study/NCT06067802',
  },
  {
    id: 'NCT07097311',
    name: 'Triheptanoin in MCADD',
    officialTitle:
      'Study to Evaluate the Use of Triheptanoin in Patients With Medium-Chain Acyl-CoA Dehydrogenase Deficiency (MCADD)',
    intervention: 'Triheptanoin',
    phase: 'Phase 2',
    population: 'MCADD patients',
    countries: 'United States',
    sites: '1',
    status: 'WITHDRAWN',
    lastRegistryUpdate: '2026-07-02',
    primaryEndpoints: 'Number of participants with treatment-related adverse events',
    enrollment: '0 (withdrawn before enrollment)',
    url: 'https://clinicaltrials.gov/study/NCT07097311',
  },
  {
    id: 'NCT03761693',
    name: 'Fasting Tolerance in MCADD Infants',
    officialTitle:
      'Fasting Tolerance in Patients With Medium-chain Acyl-CoA Dehydrogenase Deficiency (MCADD) in the First Six Months of Life: an Investigator-initiated Human Pilot-study',
    intervention: 'Fasting test',
    phase: 'N/A',
    population: 'MCADD infants in first 6 months of life',
    countries: 'Netherlands',
    sites: '1',
    status: 'UNKNOWN',
    lastRegistryUpdate: '2019-05-14',
    primaryEndpoints: 'Change in blood glucose, plasma free fatty acid concentrations, heart rate',
    enrollment: '20',
    url: 'https://clinicaltrials.gov/study/NCT03761693',
    note: 'Status UNKNOWN — this study has not been updated since 2019-05-14. Current status cannot be determined. Do not assume the study is active or recruiting.',
  },
]

export const otherTrials: { id: string; name: string; status: TrialStatus }[] = [
  { id: 'NCT05687474', name: 'Baby Detect: Genomic Newborn Screening', status: 'COMPLETED' },
  { id: 'NCT03655223', name: 'Early Check: Expanded Screening in Newborns', status: 'ACTIVE_NOT_RECRUITING' },
  { id: 'NCT05910151', name: 'Selective Screening of Children for Hereditary Metabolic Diseases', status: 'UNKNOWN' },
  { id: 'NCT02635269', name: 'Fat and Sugar Metabolism During Exercise in Patients With Metabolic Myopathy', status: 'UNKNOWN' },
  { id: 'NCT04602325', name: 'Systemic Biomarkers of Brain Injury From Hyperammonemia', status: 'RECRUITING' },
  { id: 'NCT02517307', name: 'Fatty Acid Oxidation Defects and Insulin Sensitivity', status: 'COMPLETED' },
]

export const emergingTherapies: EmergingTherapy[] = [
  {
    slug: 'sodium-phenylbutyrate',
    name: 'Sodium phenylbutyrate (ACER-001)',
    classification: 'HUMAN PHASE II',
    statusLabel: 'Experimental — not approved',
    summary:
      'A drug being tested in two Phase 2 trials. The idea is that it may act as a "chemical chaperone" to stabilise the misfolded MCAD enzyme, especially the common K304E variant. It is not an approved treatment.',
    body: [
      {
        type: 'p',
        text: 'Sodium phenylbutyrate is being investigated as a potential treatment for MCADD. The rationale includes evidence that phenylbutyrate may act as a chemical chaperone to stabilize misfolded MCAD enzyme, particularly for the common K304E variant.',
      },
      {
        type: 'p',
        text: 'Two Phase 2 trials are active: NCT06773026 (RECRUITING, pediatric and adult MCADD) and NCT06069375 (SUSPENDED, MCADD with K304E mutation).',
      },
      {
        type: 'callout',
        variant: 'danger',
        title: 'Experimental only',
        text: 'This is an experimental therapy. It is NOT an approved treatment for MCADD. Do not present it as an available treatment.',
      },
    ],
    category: ['EXPERIMENTAL DATA'],
    evidence: { level: 'D' },
    lastVerified: '2026-08-21',
    sources: [
      { text: 'ClinicalTrials.gov: NCT06773026.', url: 'https://clinicaltrials.gov/study/NCT06773026' },
      { text: 'ClinicalTrials.gov: NCT06069375.', url: 'https://clinicaltrials.gov/study/NCT06069375' },
      {
        text: 'Kormanik K, et al. "Evidence for involvement of medium chain acyl-CoA dehydrogenase in the metabolism of phenylbutyrate." Mol Genet Metab. 2012;107:684-9.',
        pmid: '23141465',
      },
    ],
  },
  {
    slug: 'glycerol-phenylbutyrate',
    name: 'Glycerol phenylbutyrate (Ravicti\u2122)',
    classification: 'HUMAN PHASE I (COMPLETED)',
    statusLabel: 'Experimental — not approved',
    summary:
      'A related drug tested as a chaperone therapy in a small, completed Phase 1 trial of 4 participants with the K304E mutation. Not an approved treatment.',
    body: [
      {
        type: 'p',
        text: 'Glycerol phenylbutyrate was investigated as a chaperone therapy for MCADD patients with the K304E mutation. The Phase 1 trial (NCT01881984) has been completed with 4 participants.',
      },
      {
        type: 'callout',
        variant: 'danger',
        title: 'Experimental only',
        text: 'This is an experimental therapy. It is NOT an approved treatment for MCADD.',
      },
    ],
    category: ['EXPERIMENTAL DATA'],
    evidence: { level: 'D' },
    lastVerified: '2026-08-21',
    sources: [{ text: 'ClinicalTrials.gov: NCT01881984.', url: 'https://clinicaltrials.gov/study/NCT01881984' }],
  },
  {
    slug: 'triheptanoin',
    name: 'Triheptanoin',
    classification: 'HUMAN PHASE II (WITHDRAWN)',
    statusLabel: 'Not available via trials',
    summary:
      'An odd-chain triglyceride that was being studied for preventing hypoglycemia, but both trials were withdrawn before enrolling anyone.',
    body: [
      {
        type: 'p',
        text: 'Triheptanoin (an odd-chain triglyceride) was being investigated for prevention of hypoglycemia in MCADD. Two trials (NCT06067802 and NCT07097311) were withdrawn before enrollment.',
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Withdrawn',
        text: 'Both triheptanoin trials for MCADD have been withdrawn. This therapy is not available for MCADD through clinical trials at this time.',
      },
    ],
    category: ['EXPERIMENTAL DATA'],
    evidence: { level: 'D' },
    lastVerified: '2026-08-21',
    sources: [
      { text: 'ClinicalTrials.gov: NCT06067802.', url: 'https://clinicaltrials.gov/study/NCT06067802' },
      { text: 'ClinicalTrials.gov: NCT07097311.', url: 'https://clinicaltrials.gov/study/NCT07097311' },
    ],
  },
  {
    slug: 'gene-therapy',
    name: 'Gene therapy',
    classification: 'INSUFFICIENTLY DOCUMENTED DATA',
    statusLabel: 'No trials identified',
    summary:
      'No gene therapy trials for MCADD were identified on ClinicalTrials.gov as of the last verification date.',
    body: [
      {
        type: 'callout',
        variant: 'insufficient',
        title: 'Insufficiently documented',
        text: 'No gene therapy trials for MCADD were identified on ClinicalTrials.gov as of 2026-08-21.',
      },
    ],
    category: ['INSUFFICIENTLY DOCUMENTED DATA'],
    evidence: { level: 'X' },
    lastVerified: '2026-08-21',
    sources: [{ text: 'ClinicalTrials.gov search (no results found for MCADD gene therapy).' }],
  },
]

export const recentResearch: ResearchGroup[] = [
  {
    title: 'Clinical outcomes',
    publications: [
      {
        text: 'Anderson DR, et al. "Clinical and biochemical outcomes of patients with MCADD." Mol Genet Metab. 2020;129:13-9.',
        pmid: '31836396',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31836396',
      },
      {
        text: 'Bentler K, et al. "221 newborn-screened neonates with MCADD: findings from the Inborn Errors of Metabolism Collaborative." Mol Genet Metab. 2016;119:75-82.',
        pmid: '27477829',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27477829',
      },
    ],
  },
  {
    title: 'Newborn screening',
    publications: [
      {
        text: 'Jager EA, et al. "Nationwide retrospective observational study of population newborn screening for MCAD deficiency in the Netherlands." J Inherit Metab Dis. 2019;42:890-7.',
        pmid: '31012112',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31012112',
      },
      {
        text: 'M\u00fctze U, et al. "Sudden neonatal death in individuals with MCADD: limit of newborn screening." Eur J Pediatr. 2022;181:2415-22.',
        pmid: '35294644',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35294644',
      },
    ],
  },
  {
    title: 'Genotype / phenotype',
    publications: [
      {
        text: 'Touw CM, et al. "Risk stratification by residual enzyme activity." Orphanet J Rare Dis. 2012;7:30.',
        pmid: '22630369',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22630369',
      },
      {
        text: 'Gramer G, et al. "MCADD: evaluation of genotype-phenotype correlation in patients detected by newborn screening." JIMD Rep. 2015;23:101-12.',
        pmid: '25940036',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25940036',
      },
    ],
  },
  {
    title: 'Pathophysiology',
    publications: [
      {
        text: 'Amaral AU, Wajner M. "Recent advances in the pathophysiology of fatty acid oxidation defects." Front Genet. 2020;11:598976.',
        pmid: '33329744',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33329744',
      },
    ],
  },
  {
    title: 'Emergency management',
    publications: [
      {
        text: 'McGregor TL, et al. "Management principles for acute illness in patients with MCADD." Pediatrics. 2021;147:e2020040303.',
        pmid: '33372121',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
      },
    ],
  },
  {
    title: 'Carnitine',
    publications: [
      {
        text: 'Jager EA, et al. "Plasma carnitine concentrations in MCADD: lessons from an observational cohort study." J Inherit Metab Dis. 2022;45:1118-29.',
        pmid: '35778950',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35778950',
      },
    ],
  },
]

export const registriesNote =
  'EU CTIS and WHO ICTRP could not be searched in this research pass due to access limitations (CAPTCHA/bot detection). These registries should be searched in a future update to ensure completeness.'
