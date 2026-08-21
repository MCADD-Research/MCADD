export interface GlossaryTerm {
  term: string
  abbreviation?: string
  definition: string
  category: 'basics' | 'genetics' | 'biochemistry' | 'diagnosis' | 'management' | 'research'
}

export const glossary: GlossaryTerm[] = [
  {
    term: 'MCADD',
    abbreviation: 'Medium-chain acyl-CoA dehydrogenase deficiency',
    definition:
      'An inherited metabolic disorder that prevents the body from converting certain fats to energy, particularly during periods of fasting. It is caused by a deficiency of the MCAD enzyme.',
    category: 'basics',
  },
  {
    term: 'MCAD enzyme',
    abbreviation: 'Medium-chain acyl-CoA dehydrogenase',
    definition:
      'The enzyme that metabolizes medium-chain fatty acids (those with 4 to 12 carbon atoms). It is essential for fatty acid \u03b2-oxidation and works inside mitochondria.',
    category: 'biochemistry',
  },
  {
    term: 'ACADM gene',
    definition:
      'The gene that provides instructions for making the MCAD enzyme. It is located on chromosome 1 (1p31.1). Other names include ACAD1, ACADM_HUMAN, MCAD, MCADH.',
    category: 'genetics',
  },
  {
    term: 'Autosomal recessive',
    definition:
      'A pattern of inheritance in which both copies of a gene carry a change for a person to be affected. Parents each carry one copy and typically do not show symptoms.',
    category: 'genetics',
  },
  {
    term: 'K304E',
    abbreviation: 'c.985A>G',
    definition:
      'The most common disease-causing MCADD mutation, replacing lysine with glutamic acid at position 304 in the MCAD enzyme (current HGVS nomenclature: p.Lys329Glu / K329E). It is subject to a strong founder effect from northwestern Europe.',
    category: 'genetics',
  },
  {
    term: 'Fatty acid \u03b2-oxidation',
    definition:
      'The multistep process that breaks down fats and converts them to energy. MCAD catalyzes the first step in this cycle for medium-chain fatty acids.',
    category: 'biochemistry',
  },
  {
    term: 'Medium-chain fatty acids',
    definition:
      'Fatty acids with 4 to 12 carbon atoms, found in foods and body fat. They are the specific substrate of the MCAD enzyme.',
    category: 'biochemistry',
  },
  {
    term: 'Mitochondria',
    definition:
      'The energy-producing centers within cells, where the MCAD enzyme and fatty acid \u03b2-oxidation operate.',
    category: 'biochemistry',
  },
  {
    term: 'Acylcarnitines',
    definition:
      'Molecules formed when fatty acids that cannot be oxidized are attached to carnitine for transport out of mitochondria. Their levels in blood are used to screen for MCADD.',
    category: 'diagnosis',
  },
  {
    term: 'C8',
    abbreviation: 'Octanoylcarnitine',
    definition:
      'The hallmark accumulating acylcarnitine in MCADD and the primary biomarker used in newborn screening. It is the most sensitive and specific marker.',
    category: 'diagnosis',
  },
  {
    term: 'C6',
    abbreviation: 'Hexanoylcarnitine',
    definition: 'A secondary acylcarnitine marker that is also elevated in MCADD.',
    category: 'diagnosis',
  },
  {
    term: 'C10',
    abbreviation: 'Decanoylcarnitine',
    definition: 'A secondary acylcarnitine marker that is also elevated in MCADD.',
    category: 'diagnosis',
  },
  {
    term: 'C10:1',
    abbreviation: 'Decenoylcarnitine',
    definition: 'An acylcarnitine that is also elevated in some cases of MCADD.',
    category: 'diagnosis',
  },
  {
    term: 'Hypoglycemia',
    abbreviation: 'Low blood glucose',
    definition:
      'Low blood glucose. In MCADD it results from the inability to produce energy from fatty acid oxidation during fasting, together with depleted glycogen stores.',
    category: 'biochemistry',
  },
  {
    term: 'Hypoketotic hypoglycemia',
    definition:
      'Low blood glucose combined with inappropriately low ketone bodies — a characteristic feature of MCADD crises that distinguishes them from other causes of hypoglycemia.',
    category: 'biochemistry',
  },
  {
    term: 'Ketone bodies',
    definition:
      'Molecules the body makes from fat during fasting. In MCADD, ketone production is impaired, so ketones stay inappropriately low during a crisis.',
    category: 'biochemistry',
  },
  {
    term: 'Fasting',
    definition:
      'A period without food. Fasting is the most significant trigger for metabolic decompensation in MCADD.',
    category: 'management',
  },
  {
    term: 'Metabolic decompensation',
    definition:
      'A dangerous breakdown of metabolic control in which the body cannot make enough energy and partly processed fats build up, potentially damaging the liver and brain.',
    category: 'biochemistry',
  },
  {
    term: 'Newborn screening',
    definition:
      'Population screening performed shortly after birth. For MCADD it uses tandem mass spectrometry to analyze acylcarnitines from dried blood spots.',
    category: 'diagnosis',
  },
  {
    term: 'Tandem mass spectrometry',
    abbreviation: 'MS/MS',
    definition:
      'An analytical technique used in newborn screening to measure acylcarnitine species from a dried blood spot, allowing detection of multiple metabolic disorders at once.',
    category: 'diagnosis',
  },
  {
    term: 'Dried blood spot',
    abbreviation: 'Guthrie card',
    definition:
      'A blood sample collected on filter paper (typically from a heel prick) and used for newborn screening.',
    category: 'diagnosis',
  },
  {
    term: 'Glycogen',
    definition:
      'The body\u2019s stored form of glucose. Glycogen stores are depleted after several hours of fasting, after which fatty acid oxidation becomes a primary energy source.',
    category: 'biochemistry',
  },
  {
    term: 'MCTs',
    abbreviation: 'Medium-chain triglycerides',
    definition:
      'Fats composed of medium-chain fatty acids (C6\u2013C12), found in coconut oil, palm kernel oil, and some supplements. Orphanet (a Tier A source) recommends they should be avoided in MCADD.',
    category: 'management',
  },
  {
    term: 'Reye syndrome',
    definition:
      'A severe disorder that may develop in children during apparent recovery from viral infections (associated with aspirin use). MCADD is sometimes mistaken for Reye syndrome.',
    category: 'basics',
  },
  {
    term: 'Residual enzyme activity',
    definition:
      'The remaining MCAD enzyme activity a person has. Some observational studies suggest it may help predict clinical severity, but the genotype\u2013phenotype relationship is incomplete.',
    category: 'research',
  },
  {
    term: 'Chemical chaperone',
    definition:
      'An approach that aims to stabilize a misfolded enzyme protein so it functions better. It is the rationale behind the experimental phenylbutyrate trials for the K304E variant.',
    category: 'research',
  },
  {
    term: 'Sodium phenylbutyrate',
    abbreviation: 'ACER-001',
    definition:
      'An experimental drug being studied in Phase 2 trials as a potential treatment for MCADD. It is not an approved treatment.',
    category: 'research',
  },
  {
    term: 'Glycerol phenylbutyrate',
    abbreviation: 'Ravicti\u2122',
    definition:
      'An experimental drug studied as a chaperone therapy in a completed Phase 1 trial in MCADD patients with the K304E mutation. It is not an approved treatment.',
    category: 'research',
  },
  {
    term: 'Triheptanoin',
    definition:
      'An odd-chain triglyceride that was being investigated for preventing hypoglycemia in MCADD. Both trials were withdrawn before enrolling participants.',
    category: 'research',
  },
]
