export type EvidenceLevel = 'A' | 'B' | 'C' | 'D' | 'X'

export type ClaimCategory =
  | 'ESTABLISHED FACT'
  | 'MEDICAL RECOMMENDATION'
  | 'OBSERVATIONAL DATA'
  | 'EXPERT OPINION'
  | 'SCIENTIFIC HYPOTHESIS'
  | 'EXPERIMENTAL DATA'
  | 'INSUFFICIENTLY DOCUMENTED DATA'

export interface Evidence {
  level: EvidenceLevel
  note?: string
}

export interface SourceRef {
  /** Human-readable citation with the source, title, journal, year. */
  text: string
  url?: string
  pmid?: string
}

export type CalloutVariant = 'info' | 'warning' | 'danger' | 'insufficient'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'callout'; variant: CalloutVariant; title?: string; text: string }
  | { type: 'kv'; items: { k: string; v: string }[] }

export interface Section {
  /** URL-safe anchor id. */
  slug: string
  title: string
  /** Plain-language, accessible summary that sits at the top of the section. */
  summary: string
  /** Deeper, structured content. */
  body: Block[]
  /** One or more claim categories (may be combined in the KB). */
  category: ClaimCategory[]
  evidence: Evidence
  sources: SourceRef[]
  lastVerified: string
}

export interface Topic {
  slug: string
  title: string
  shortTitle: string
  /** One-line description used in navigation and cards. */
  description: string
  /** A few plain-language "you should know" bullets for the intro. */
  intro: string[]
  sections: Section[]
}
