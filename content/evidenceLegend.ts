import type { EvidenceLevel, ClaimCategory } from './types'

export interface EvidenceLevelInfo {
  level: EvidenceLevel
  label: string
  definition: string
  /** Semantic tone used for colour-coding. */
  tone: 'strong' | 'good' | 'limited' | 'experimental' | 'insufficient'
}

export const evidenceLevels: EvidenceLevelInfo[] = [
  {
    level: 'A',
    label: 'Level A',
    definition:
      'Official consensus or recommendation from an authoritative guideline or institution.',
    tone: 'strong',
  },
  {
    level: 'B',
    label: 'Level B',
    definition:
      'Strong scientific evidence — multiple consistent scientific sources.',
    tone: 'good',
  },
  {
    level: 'C',
    label: 'Level C',
    definition:
      'Limited evidence — small studies, observational, indirect, or significant limitations.',
    tone: 'limited',
  },
  {
    level: 'D',
    label: 'Level D',
    definition: 'Experimental or hypothesis — preclinical, mechanistic, animal, in-vitro.',
    tone: 'experimental',
  },
  {
    level: 'X',
    label: 'Level X',
    definition:
      'Insufficient evidence — not suitable for patient-facing recommendations.',
    tone: 'insufficient',
  },
]

export interface CategoryInfo {
  name: ClaimCategory
  definition: string
  tone: 'fact' | 'recommendation' | 'observational' | 'opinion' | 'hypothesis' | 'experimental' | 'insufficient'
}

export const claimCategories: CategoryInfo[] = [
  { name: 'ESTABLISHED FACT', definition: 'Well-documented, broadly accepted.', tone: 'fact' },
  {
    name: 'MEDICAL RECOMMENDATION',
    definition: 'From an authoritative guideline or institution.',
    tone: 'recommendation',
  },
  {
    name: 'OBSERVATIONAL DATA',
    definition: 'From observational studies.',
    tone: 'observational',
  },
  {
    name: 'EXPERT OPINION',
    definition: 'From expert consensus without strong evidence.',
    tone: 'opinion',
  },
  {
    name: 'SCIENTIFIC HYPOTHESIS',
    definition: 'Proposed but not established.',
    tone: 'hypothesis',
  },
  {
    name: 'EXPERIMENTAL DATA',
    definition: 'Preclinical or early experimental.',
    tone: 'experimental',
  },
  {
    name: 'INSUFFICIENTLY DOCUMENTED DATA',
    definition: 'Evidence insufficient to support the claim.',
    tone: 'insufficient',
  },
]

export function evidenceTone(level: EvidenceLevel): EvidenceLevelInfo['tone'] {
  const found = evidenceLevels.find((e) => e.level === level)
  return found?.tone ?? 'insufficient'
}
