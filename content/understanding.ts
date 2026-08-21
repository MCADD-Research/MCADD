import type { Topic } from './types'

export const understanding: Topic = {
  slug: 'understanding',
  title: 'Understanding MCADD',
  shortTitle: 'Understand',
  description:
    'What MCADD is, how the MCAD enzyme works, the genetics behind it, and what happens in the body during fasting — from the simple explanation to the biochemistry.',
  intro: [
    'MCADD is an inherited condition that affects how the body turns certain fats into energy, especially when you go without food.',
    'It is caused by a change in a single gene (ACADM) that reduces the activity of an enzyme called MCAD.',
    'With the right routine — chiefly avoiding long periods without food — most people with MCADD live healthy, normal lives.',
  ],
  sections: [
    {
      slug: 'what-is-mcadd',
      title: 'What is MCADD?',
      summary:
        'MCADD is an inherited metabolic disorder that makes it hard for the body to turn certain fats into energy — especially during periods of fasting. It is caused by a shortage of an enzyme called MCAD.',
      body: [
        {
          type: 'p',
          text: 'Medium-chain acyl-CoA dehydrogenase deficiency (MCADD) is an inherited metabolic disorder that prevents the body from converting certain fats to energy, particularly during periods of fasting.',
        },
        {
          type: 'p',
          text: 'The condition is caused by deficiency of the medium-chain acyl-CoA dehydrogenase (MCAD) enzyme, which is essential for fatty acid β-oxidation.',
        },
        {
          type: 'p',
          text: 'MCADD is the most common inherited fatty-acid β-oxidation disorder (GeneReviews, 2024). Orphanet (ORPHA:42), an authoritative rare-disease reference, defines it as an inherited disorder of mitochondrial fatty-acid oxidation of medium-chain fatty acids, characterized by rapidly progressive metabolic crises that often present with hypoketotic hypoglycemia, lethargy, vomiting, seizures, and coma — potentially fatal without urgent medical intervention.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. "Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency." GeneReviews®. 2000 Apr 20 [updated 2024 Sep 26].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Orphanet. "Déficit en acyl-CoA déshydrogénase des acides gras à chaîne moyenne." ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
      ],
    },
    {
      slug: 'acadm-gene',
      title: 'The ACADM gene',
      summary:
        'MCADD is caused by changes in the ACADM gene, found on chromosome 1. The most common change is a specific spelling variation known as K304E (or c.985A>G), especially common in people of northwestern European ancestry.',
      body: [
        {
          type: 'p',
          text: 'The ACADM gene provides instructions for making the MCAD enzyme. It is located on chromosome 1 (1p31.1). More than 80 mutations have been identified in the ACADM gene that cause MCADD.',
        },
        {
          type: 'p',
          text: 'The most common mutation replaces the amino acid lysine with glutamic acid at position 304 in the enzyme (written as Lys304Glu or K304E). This mutation, also known as c.985A>G, is subject to a strong founder effect from northwestern Europe.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Nomenclature note',
          text: 'Current HGVS nomenclature designates this same substitution as p.Lys329Glu (K329E), numbered from the first residue of the pro-protein. "p.Lys304Glu (K304E)" is the older (mature-protein) designation of the identical c.985A>G variant (GeneReviews, 2024; Orphanet).',
        },
        {
          type: 'p',
          text: 'Additional findings:',
        },
        {
          type: 'ul',
          items: [
            'The common c.985A>G (p.Lys329Glu / K329E) mutation accounted for about 80% of cases before the implementation of newborn screening; many patients are now identified with other ACADM mutations (Orphanet, ORPHA:42).',
            'This variant accounts for between 56% and 91% of MCAD deficiency-causing alleles across studied populations (GeneReviews).',
            'A distinct founder variant, the ACADM c.449_452delCTGA deletion, is more prevalent in Asian (Taiwanese, Japanese, and Korean) populations (GeneReviews, 2024).',
          ],
        },
        {
          type: 'p',
          text: 'Other names for this gene: ACAD1, ACADM_HUMAN, MCAD, MCADH.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "ACADM gene."',
          url: 'https://medlineplus.gov/genetics/gene/acadm/',
        },
        {
          text: 'Gregersen N, et al. "Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency: the prevalent mutation G985 (K304E) is subject to a strong founder effect from northwestern Europe." Hum Hered. 1993;43:342-50.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/7904584',
          pmid: '7904584',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
      ],
    },
    {
      slug: 'inheritance',
      title: 'How MCADD is inherited',
      summary:
        'MCADD is recessive: a person is affected when both copies of the ACADM gene carry a change. Parents are usually carriers who do not have symptoms themselves.',
      body: [
        {
          type: 'p',
          text: 'MCADD is inherited in an autosomal recessive pattern. Both copies of the gene in each cell have mutations. Parents of an affected individual each carry one copy of the mutated gene but typically do not show signs or symptoms of the condition.',
        },
        {
          type: 'p',
          text: 'Orphanet (ORPHA:42) independently confirms autosomal recessive transmission, and GeneReviews notes that heterozygotes (carriers) are asymptomatic. The carrier frequency for the common c.985A>G (p.Lys329Glu) variant is between 1:40 and 1:100 in those of northern European ancestry (GeneReviews, 2024).',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency — Inheritance."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
      ],
    },
    {
      slug: 'mcad-enzyme',
      title: 'What the MCAD enzyme does',
      summary:
        'The MCAD enzyme works inside mitochondria, the "power plants" of our cells. It helps break down medium-chain fats — those with 4 to 12 carbon atoms — into energy.',
      body: [
        {
          type: 'p',
          text: 'The MCAD enzyme functions within mitochondria (the energy-producing centers in cells). It is required to metabolize medium-chain fatty acids — those with 4 to 12 carbon atoms. These fatty acids are found in foods and body fat and are produced when larger fatty acids are metabolized.',
        },
        {
          type: 'p',
          text: 'Fatty acids are a major source of energy for the heart and muscles. During fasting, fatty acids are also an important energy source for the liver and other tissues.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "ACADM gene — Normal Function."',
          url: 'https://medlineplus.gov/genetics/gene/acadm/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
    {
      slug: 'beta-oxidation',
      title: 'Fatty-acid β-oxidation',
      summary:
        'β-oxidation is the step-by-step process that breaks down fats for energy. The MCAD enzyme performs one of the first and most important steps in this chain. When it does not work, fats cannot be fully processed.',
      body: [
        {
          type: 'p',
          text: 'Fatty acid β-oxidation is the multistep process that breaks down (metabolizes) fats and converts them to energy. MCAD catalyzes the first step in the β-oxidation spiral for medium-chain fatty acids, using flavin adenine dinucleotide (FAD) as a cofactor. The enzyme catalyzes the dehydrogenation of medium-chain acyl-CoA esters, producing trans-2-enoyl-CoA, which then continues through the β-oxidation cycle.',
        },
        {
          type: 'p',
          text: 'When MCAD is deficient, medium-chain fatty acids cannot be properly oxidized, leading to an energy deficit and accumulation of toxic intermediaries.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "ACADM gene — Normal Function."',
          url: 'https://medlineplus.gov/genetics/gene/acadm/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Amaral AU, Wajner M. "Recent advances in the pathophysiology of fatty acid oxidation defects." Front Genet. 2020;11:598976.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33329744',
          pmid: '33329744',
        },
      ],
    },
    {
      slug: 'fasting',
      title: 'Energy during fasting',
      summary:
        'After a few hours without food, the body switches from burning sugar stores to burning fat. In MCADD this switch does not work properly, so energy runs low and partly processed fats can build up.',
      body: [
        {
          type: 'p',
          text: 'During periods without food (fasting), the body relies on fatty acid oxidation for energy production, especially for the heart, muscles, liver, and other tissues. Glucose stores (glycogen) are depleted after several hours of fasting, after which fatty acid oxidation becomes a primary energy source.',
        },
        {
          type: 'p',
          text: 'In MCADD, this metabolic switch is impaired: the body cannot efficiently metabolize medium-chain fatty acids during fasting, leading to an energy deficit. This results in hypoglycemia (low blood glucose) and the accumulation of partially metabolized fatty acids, which can damage the liver and brain.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "ACADM gene — Normal Function."',
          url: 'https://medlineplus.gov/genetics/gene/acadm/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
    {
      slug: 'ketogenesis',
      title: 'Ketogenesis (why ketones stay low)',
      summary:
        'People with MCADD tend to have unusually low ketone bodies during a crisis — a distinctive feature called "hypoketotic" hypoglycemia. Ketones are not completely absent, however, and a few people even show "paradoxical" ketosis.',
      body: [
        {
          type: 'p',
          text: 'Because fatty-acid β-oxidation fuels hepatic ketogenesis (the production of ketone bodies, a major energy source for peripheral tissues once glycogen stores are depleted), MCAD deficiency impairs ketone body production. This produces the characteristic "hypoketotic" hypoglycemia of MCADD — low blood glucose accompanied by inappropriately low ketone bodies.',
        },
        {
          type: 'p',
          text: 'Importantly, the ketosis in MCADD is "hypoketotic" rather than "nonketotic": ketone bodies can still be produced during acute metabolic decompensation via long-chain fatty acid oxidation, which uses different enzymes (GeneReviews, 2024). This explains two Orphanet-documented clinical observations:',
        },
        {
          type: 'ul',
          items: [
            'Some patients develop a progressive metabolic crisis despite normal ketosis and normal glycemia.',
            'A minority develop crises with marked "paradoxical" ketosis.',
          ],
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
      ],
    },
    {
      slug: 'acylcarnitines-c8',
      title: 'Acylcarnitines and the C8 marker',
      summary:
        'When fats cannot be fully broken down, they are shuttled out of cells as "acylcarnitines." In MCADD, one of these — octanoylcarnitine, called C8 — builds up. It is the key marker picked up by newborn screening.',
      body: [
        {
          type: 'p',
          text: 'In MCADD, medium-chain acyl-CoA esters that cannot be oxidized are converted to acylcarnitines for transport out of mitochondria. Octanoylcarnitine (C8) is the hallmark accumulating acylcarnitine in MCADD. C8 accumulation is the primary biomarker used in newborn screening.',
        },
        {
          type: 'p',
          text: 'Other elevated acylcarnitines include C6 (hexanoylcarnitine) and C10 (decanoylcarnitine), though C8 is the most specific and sensitive marker.',
        },
        {
          type: 'p',
          text: 'Additional biomarker details (GeneReviews, 2024; Orphanet, ORPHA:42):',
        },
        {
          type: 'ul',
          items: [
            'C8 elevation is typically accompanied by lesser elevations of C6, C10, and C10:1 acylcarnitines.',
            'Elevated C8/C2 and C8/C10 ratios are diagnostically useful secondary markers; Orphanet specifically highlights the elevated C8/C10 ratio.',
            'Genotype influences C8 level: individuals homozygous for c.985A>G (p.Lys329Glu) have the highest C8 values — a mean NBS C8 of 23.4 vs 6.6 µmol/L in compound heterozygotes (Anderson et al 2020).',
          ],
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'B' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Matern D. "Acylcarnitines." In: Blau N, Duran M, Gibson KM, Dionisi-Vici C, eds. Physician\u2019s Guide to the Diagnosis, Treatment, and Follow-Up of Inherited Metabolic Diseases. Springer; 2014:775-84. (Cited in GeneReviews)',
        },
        {
          text: 'Hsu HW, et al. "Spectrum of medium-chain acyl-CoA dehydrogenase deficiency detected by newborn screening." Pediatrics. 2008;121(5):e1108-14.',
          pmid: '18450854',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Anderson DR, et al. "Clinical and biochemical outcomes of patients with medium-chain acyl-CoA dehydrogenase deficiency." Mol Genet Metab. 2020;129:13-9.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/31836396',
          pmid: '31836396',
        },
      ],
    },
    {
      slug: 'pathophysiology',
      title: 'What goes wrong: metabolic decompensation',
      summary:
        'When someone with MCADD is stressed — by fasting or illness — the body cannot make enough energy from fat and cannot produce enough ketones. Low energy plus the build-up of partly processed fats can harm the liver and brain.',
      body: [
        {
          type: 'p',
          text: 'With a deficiency of functional MCAD enzyme, medium-chain fatty acids are not metabolized properly. The consequences include:',
        },
        {
          type: 'ol',
          items: [
            'Energy deficit: fats are not converted to energy, leading to lethargy and hypoglycemia.',
            'Accumulation of toxic metabolites: medium-chain fatty acids or partially metabolized fatty acids may build up in tissues and damage the liver and brain.',
            'Hypoketotic hypoglycemia: blood glucose is low AND ketone bodies are inappropriately low (because fatty acid oxidation is impaired, ketogenesis cannot compensate).',
            'Organ damage: the abnormal buildup causes further signs and symptoms including seizures, liver problems, brain damage, coma, and potentially sudden death.',
          ],
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "ACADM gene — Health Conditions."',
          url: 'https://medlineplus.gov/genetics/gene/acadm/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Amaral AU, Wajner M. "Recent advances in the pathophysiology of fatty acid oxidation defects." Front Genet. 2020;11:598976.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33329744',
          pmid: '33329744',
        },
      ],
    },
    {
      slug: 'triggers',
      title: 'What triggers problems',
      summary:
        'Problems are usually triggered by something that raises energy needs or cuts food intake: going without food, illness or infection, prolonged exercise, surgery, or vomiting and diarrhoea.',
      body: [
        {
          type: 'p',
          text: 'Problems related to MCADD can be triggered by:',
        },
        {
          type: 'ol',
          items: [
            'Fasting — the most significant trigger; during fasting the body relies on fatty acid oxidation for energy.',
            'Illness/infection — particularly viral infections; increased metabolic demand and reduced caloric intake.',
            'Prolonged exercise — increases energy demand.',
            'Surgery — fasting before/after surgery and metabolic stress.',
            'Vomiting/diarrhea — reduces caloric intake and causes dehydration.',
            'Alcohol — particularly acute alcohol intoxication (binge drinking), which often elicits metabolic decompensation (GeneReviews, 2024; Lang 2009; Orphanet).',
          ],
        },
        {
          type: 'p',
          text: 'The disorder is sometimes mistaken for Reye syndrome, a severe disorder that may develop in children during apparent recovery from viral infections (associated with aspirin use).',
        },
        {
          type: 'p',
          text: 'Orphanet (ORPHA:42) lists infection, fasting, and surgery as the typical precipitants of hypoketotic hypoglycemia, lethargy, and vomiting.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency — Description."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Iafolla AK, et al. "Medium-chain acyl-coenzyme A dehydrogenase deficiency: clinical course in 120 affected children." J Pediatr. 1994;124:409-15.',
          pmid: '8120710',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Lang TF. "Adult presentations of medium-chain acyl-CoA dehydrogenase deficiency (MCADD)." J Inherit Metab Dis. 2009;32:675-83.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/19821147',
          pmid: '19821147',
        },
      ],
    },
    {
      slug: 'prevalence',
      title: 'How common is MCADD?',
      summary:
        'MCADD affects roughly 1 in 14,000 to 1 in 17,000 newborns worldwide. It is more common in people of northern European ancestry, and rates vary considerably by region and population.',
      body: [
        {
          type: 'p',
          text: 'In the United States, the estimated incidence of MCADD is about 1 in 17,000 newborns. The condition is more common in people of northern European ancestry than in other ethnic groups.',
        },
        {
          type: 'p',
          text: 'Additional prevalence data from newer sources:',
        },
        {
          type: 'ul',
          items: [
            'Worldwide birth prevalence: 1/14,600 (Orphanet, ORPHA:42).',
            'Caucasian birth prevalence: 1/4,900 to 1/27,000, higher in individuals of Northern European descent (Orphanet, ORPHA:42).',
            'Point prevalence: 1–9 per 100,000 (Orphanet, ORPHA:42).',
            'United States: 1/17,759 newborns (GeneReviews); one study reports Utah at 1/9,266 — more frequent than the US average (Anderson 2020).',
            'Overall: 5.3 per 100,000 births (range 4.1–6.7) across a variety of populations (GeneReviews).',
            'Carrier frequency of c.985A>G (p.Lys329Glu): 1:40 to 1:100 in those of northern European ancestry (GeneReviews).',
          ],
        },
        {
          type: 'p',
          text: 'Regional variation is wide (GeneReviews): Europe ranges from 1:4,900 (northern Germany) to 1:24,900 (Austria); Asia from 1:18,000 (Saudi Arabia) to 1:263,500 (Taiwan); Australia 1:19,000 (New South Wales); and North America 1:13,000–1:23,400 across regions.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency — Frequency."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
        {
          text: 'Grosse SD, et al. "The epidemiology of medium chain acyl-CoA dehydrogenase deficiency: an update." Genet Med. 2006;8(4):205-12.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16617240',
          pmid: '16617240',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Anderson DR, et al. "Clinical and biochemical outcomes of patients with medium-chain acyl-CoA dehydrogenase deficiency." Mol Genet Metab. 2020;129:13-9.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/31836396',
          pmid: '31836396',
        },
      ],
    },
    {
      slug: 'genotype-phenotype',
      title: 'Genes vs. symptoms: an incomplete picture',
      summary:
        'The relationship between a person\u2019s exact gene changes and how severe their MCADD is, is not straightforward. Two people with the same gene change can have very different experiences.',
      body: [
        {
          type: 'p',
          text: 'The K304E (c.985A>G) mutation is the most common disease-causing variant, particularly in populations of northwestern European descent. More than 80 ACADM mutations have been identified.',
        },
        {
          type: 'p',
          text: 'However, genotype-phenotype correlations are complex:',
        },
        {
          type: 'ul',
          items: [
            'Residual enzyme activity is a better predictor than genotype alone. In a Dutch NBS cohort (Touw 2012), subjects with variant ACADM genotypes and residual MCAD enzyme activity <10% should be considered to have the same risk as classical genotypes; there are arguments for abandoning general fasting-avoidance advice in those with >10% residual activity.',
            'c.985A>G (p.Lys329Glu) homozygotes have the highest C8 NBS values and are most likely to have neonatal symptoms. In Anderson 2020, homozygotes had higher NBS C8, higher transaminases, and more hypoglycemic events than compound heterozygotes — though the event difference was not statistically significant.',
            'c.199T>C (p.Tyr67His) has ~6% allele frequency in MCAD-deficient newborns and is associated with some residual enzyme activity; homozygotes are probably not at risk for disease.',
            'c.600-18G>A: individuals compound heterozygous for this and c.985A>G have a mild phenotype and may be missed by NBS.',
            'Despite these correlations, a clear genotype-phenotype correlation does not exist, and environmental factors (diet, stress, intercurrent illness) are critical in determining the natural history (GeneReviews).',
          ],
        },
      ],
      category: ['OBSERVATIONAL DATA'],
      evidence: {
        level: 'C',
        note: 'Limited evidence; genotype-phenotype correlation is incomplete.',
      },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Touw CM, et al. "Risk stratification by residual enzyme activity after newborn screening for medium-chain acyl-CoA dehydrogenase deficiency." Orphanet J Rare Dis. 2012;7:30.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/22630369',
          pmid: '22630369',
        },
        {
          text: 'Arnold GL, et al. "Lack of genotype-phenotype correlations and outcome in MCAD deficiency diagnosed by newborn screening in New York State." Mol Genet Metab. 2010;99:263-8.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/20036593',
          pmid: '20036593',
        },
        {
          text: 'Gregersen N, et al. Hum Hered. 1993;43:342-50.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/7904584',
          pmid: '7904584',
        },
        {
          text: 'Waddell L, et al. "Medium-chain acyl-CoA dehydrogenase deficiency: genotype-biochemical phenotype correlations." Mol Genet Metab. 2006;87(1):32-9.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16291504',
          pmid: '16291504',
        },
        {
          text: 'Anderson DR, et al. "Clinical and biochemical outcomes of patients with medium-chain acyl-CoA dehydrogenase deficiency." Mol Genet Metab. 2020;129:13-9.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/31836396',
          pmid: '31836396',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
      ],
    },
    {
      slug: 'clinical-presentation',
      title: 'Signs and symptoms',
      summary:
        'Symptoms usually appear in infancy or early childhood — typically between 3 and 24 months of age — and can include vomiting, lethargy, low blood sugar, seizures, breathing problems, liver problems, and in severe cases coma or sudden death. Many affected people remain symptom-free throughout life.',
      body: [
        {
          type: 'p',
          text: 'Signs and symptoms of MCADD typically appear during infancy or early childhood and can include:',
        },
        {
          type: 'ul',
          items: [
            'Vomiting',
            'Lethargy (lack of energy)',
            'Hypoglycemia (low blood glucose)',
            'Seizures',
            'Breathing difficulties',
            'Liver problems',
            'Brain damage',
            'Coma',
            'Sudden death',
          ],
        },
        {
          type: 'p',
          text: 'In rare cases, symptoms are not recognized early in life and the condition is not diagnosed until adulthood.',
        },
        {
          type: 'p',
          text: 'Additional clinical details from newer sources:',
        },
        {
          type: 'ul',
          items: [
            'Age of onset (Orphanet): MCADD typically manifests 3 to 24 months after birth in previously healthy infants; neonatal and adult forms also occur. Many affected individuals remain asymptomatic throughout life.',
            'During crises patients may exhibit lethargy, vomiting, respiratory arrest, seizures, hepatomegaly, and rapid progression to cardiac arrest without emergency treatment (Orphanet).',
            'Pre-diagnosis mortality: historically, about 25% of undiagnosed patients died during their first metabolic crisis (Orphanet); GeneReviews cites 18%–25% for the same historical figure (Iafolla 1994).',
            'Iafolla 1994: in a cohort of 120 referred patients, 23 (19%) died before diagnosis; among survivors, unexpected morbidity included developmental and behavioral disability, chronic muscle weakness, failure to thrive, and cerebral palsy.',
            'Adult presentation (Lang 2009): a review of 14 cases identified in adulthood found mortality of 50% in acutely presenting adults and 29% in total, typically precipitated by fasting or alcohol.',
            'Neurologic and muscular sequelae (GeneReviews): uncontrolled decompensation can lead to loss of developmental milestones, aphasia, ADHD, and chronic myopathy.',
            'MCADD is a known cause of sudden infant death syndrome (SIDS); newborn screening has reduced neonatal mortality to 0.6%–2.4% in screened populations (GeneReviews).',
            'Growth (Anderson 2020): children with MCADD had normal growth; no irreversible complications were observed after diagnosis in any patient.',
          ],
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency — Description."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Iafolla AK, et al. J Pediatr. 1994;124:409-15.',
          pmid: '8120710',
        },
        {
          text: 'Lang TF. "Adult presentations of medium-chain acyl-CoA dehydrogenase deficiency (MCADD)." J Inherit Metab Dis. 2009;32:675-83.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/19821147',
          pmid: '19821147',
        },
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Anderson DR, et al. Mol Genet Metab. 2020;129:13-9.',
          pmid: '31836396',
        },
      ],
    },
    {
      slug: 'prognosis',
      title: 'Prognosis',
      summary:
        'With diagnosis, fasting avoidance, and proper management during illness, the outlook for MCADD is favorable. Newborn screening greatly reduces morbidity and mortality.',
      body: [
        {
          type: 'p',
          text: 'Prognosis is favorable in diagnosed patients who avoid fasting and are managed appropriately during intercurrent illness or metabolic crisis (Orphanet, ORPHA:42).',
        },
        {
          type: 'p',
          text: 'Newborn screening provides the opportunity to reduce morbidity and post-neonatal mortality in all patients with MCADD, regardless of genotype (Anderson 2020). No irreversible complications were observed after diagnosis in any patient in that 90-patient cohort. Individuals identified and treated presymptomatically are protected from metabolic decompensations and relevant sequelae (GeneReviews).',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Anderson DR, et al. Mol Genet Metab. 2020;129:13-9.',
          pmid: '31836396',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
  ],
}
