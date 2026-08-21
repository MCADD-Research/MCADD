export interface ResourceLink {
  name: string
  description: string
  url?: string
  note?: string
  available?: boolean
}

export const authoritativeSources: ResourceLink[] = [
  {
    name: 'GeneReviews — Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
    description:
      'A peer-reviewed, expert-authored clinical summary of MCADD (Chang IJ, Lam C, Vockley J., updated 2024). The primary source for much of this site\u2019s clinical content.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    available: true,
  },
  {
    name: 'MedlinePlus Genetics — MCADD',
    description: 'An NIH/NLM plain-language overview of the condition.',
    url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
    available: true,
  },
  {
    name: 'MedlinePlus Genetics — ACADM gene',
    description: 'An NIH/NLM overview of the ACADM gene and its role.',
    url: 'https://medlineplus.gov/genetics/gene/acadm/',
    available: true,
  },
  {
    name: 'Orphanet — MCADD',
    description:
      'A European rare-disease reference (ORPHA:42). A Tier A authoritative source for prevalence, clinical description, and the MCT-avoidance recommendation.',
    url: 'https://www.orpha.net/fr/disease/detail/42',
    available: true,
  },
  {
    name: 'CDC — Newborn screening (MCAD)',
    description: 'US Centers for Disease Control and Prevention. Not accessible during the research pass used to build this site.',
    url: 'https://www.cdc.gov/newborn-screening/hcp/disorders/mcad.html',
    available: false,
    note: 'Page returned 404 at the time of verification.',
  },
]

export const trialRegistries: ResourceLink[] = [
  {
    name: 'ClinicalTrials.gov',
    description:
      'The US clinical trials registry. The source for all trial information on this site, verified via the public API.',
    url: 'https://clinicaltrials.gov/',
    available: true,
  },
  {
    name: 'EU Clinical Trials Information System (CTIS)',
    description: 'The European Union clinical trials registry. Searched during verification: 0 MCADD-specific trials were found.',
    url: 'https://euclinicaltrials.eu/ctis-public/search',
    available: true,
  },
  {
    name: 'WHO International Clinical Trials Registry Platform (ICTRP)',
    description:
      'The World Health Organization trials registry platform. Searched during verification: 10 MCADD-specific trials, including 2 not on ClinicalTrials.gov.',
    url: 'https://trialsearch.who.int/',
    available: true,
  },
]

export const specialistCareNote =
  'If you or a family member has MCADD, the most important resource is a specialist metabolic team at a university hospital or metabolic centre. Your metabolic physician provides the individualized fasting limits, dietary guidance, and emergency plan that this website deliberately does not supply. Ask your primary care provider or paediatrician for a referral to a metabolic specialist.'
