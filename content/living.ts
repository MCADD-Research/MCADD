import type { Topic } from './types'

export const living: Topic = {
  slug: 'living',
  title: 'Living with MCADD',
  shortTitle: 'Living',
  description:
    'Practical, day-to-day guidance: preventing fasting, eating well, exercising safely, managing illness, and having an emergency plan in place.',
  intro: [
    'The single most important part of managing MCADD is avoiding long periods without food, especially during illness.',
    'A normal, balanced diet is appropriate — MCADD does not generally require a special diet.',
    'Every person should have an individualized plan worked out with their metabolic team.',
  ],
  sections: [
    {
      slug: 'fasting-prevention',
      title: 'Preventing fasting',
      summary:
        'Avoiding long periods without food is the cornerstone of managing MCADD. During fasting, the body cannot switch properly to burning fat, which can lead to a dangerous metabolic crisis.',
      body: [
        {
          type: 'p',
          text: 'Fasting is the primary trigger for metabolic decompensation in MCADD. Preventing prolonged fasting is the cornerstone of daily management. The body of a person with MCADD cannot efficiently use fatty acids for energy during fasting, which leads to hypoketotic hypoglycemia and potentially life-threatening metabolic crisis.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. "Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency." GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
      ],
    },
    {
      slug: 'fasting-duration',
      title: 'How long is safe to fast?',
      summary:
        'Age-specific safe fasting limits are documented from the Derks 2007 study: 8 hours (6 months–1 year), 10 hours (second year of life), and 12 hours (after the second year). These apply to well children; fasting must be minimized during illness.',
      body: [
        {
          type: 'callout',
          variant: 'danger',
          title: 'High-risk topic',
          text: 'The recommendations in this section come from specific sources, each applying to a specific context (age, clinical situation, disease severity). Do not merge recommendations from different sources without verifying they apply to the same context.',
        },
        {
          type: 'p',
          text: 'A key reference for fasting duration is Derks et al. (2007), which examined fasting tolerance in 35 fasting tests in Dutch MCAD-deficient patients. Age-specific recommended maximum fasting limits are:',
        },
        {
          type: 'kv',
          items: [
            { k: '6 months – 1 year', v: '8 hours maximum' },
            { k: 'Second year of life', v: '10 hours maximum' },
            { k: 'After the second year', v: '12 hours maximum' },
          ],
        },
        {
          type: 'p',
          text: 'Important findings from Derks 2007:',
        },
        {
          type: 'ul',
          items: [
            'In 6 out of 35 fasting tests, symptoms were reported before hypoglycemia was observed — symptoms can precede biochemical hypoglycemia.',
            'There is considerable inter-individual variation and overlap between safe and unsafe durations.',
            'No conclusions can be drawn on fasting duration during intercurrent illness, especially with fever — the limits above apply to well children only.',
          ],
        },
        {
          type: 'p',
          text: 'Risk stratification by residual enzyme activity (Touw 2012):',
        },
        {
          type: 'ul',
          items: [
            'Residual activity <10%: same risk as the classical genotype — full fasting precautions apply.',
            'Residual activity >10% (variant genotypes): arguments exist for abandoning the general advice to avoid prolonged fasting.',
            'The effect of intercurrent illness on residual enzyme activity remains uncertain — fasting precautions should still be maintained during illness regardless of genotype.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Individualized limits',
          text: 'These limits apply to well children in controlled conditions. During intercurrent illness (especially with fever), fasting must be minimized regardless of age or genotype. Families should consult their metabolic team for individualized fasting limits.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: {
        level: 'C',
        note: 'Observational cohort data from single-center studies.',
      },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Derks TG, et al. "Safe and unsafe duration of fasting for children with MCAD deficiency." Eur J Pediatr. 2007;166:5-11.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16788829',
          pmid: '16788829',
        },
        {
          text: 'Touw CM, et al. "Risk stratification by residual enzyme activity after newborn screening for MCAD deficiency." Orphanet J Rare Dis. 2012;7:30.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/22630369',
          pmid: '22630369',
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
      slug: 'meals',
      title: 'Meals and macronutrients',
      summary:
        'A normal, balanced diet with regular meals is the aim. Carbohydrates are the safe energy source, fats are not generally restricted, and no special protein restriction is needed.',
      body: [
        { type: 'h3', text: 'Carbohydrates' },
        {
          type: 'p',
          text: 'Carbohydrates are the primary safe energy source for individuals with MCADD. Regular carbohydrate intake helps maintain blood glucose and prevents reliance on fatty acid oxidation.',
        },
        { type: 'h3', text: 'Fats' },
        {
          type: 'p',
          text: 'Dietary fat is not generally restricted in MCADD (unlike some other metabolic conditions). However, the specific type of fat may matter (see the MCT section below). GeneReviews does not recommend a strict low-fat diet for MCADD.',
        },
        { type: 'h3', text: 'Proteins' },
        {
          type: 'p',
          text: 'No specific protein restriction is recommended for MCADD. Normal dietary protein intake is appropriate.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'No special diet required',
          text: 'Orphanet states that no dietary restriction other than MCT avoidance is required. The general recommendation is a normal balanced diet with attention to regular meals and avoiding fasting (Orphanet, ORPHA:42; GeneReviews).',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
    {
      slug: 'hydration',
      title: 'Hydration',
      summary:
        'Staying well hydrated matters, especially during illness, because dehydration can worsen metabolic problems. Glucose-containing drinks are preferred when ill.',
      body: [
        {
          type: 'p',
          text: 'Adequate hydration is important, particularly during illness. Dehydration can worsen metabolic decompensation. Oral rehydration with glucose-containing solutions is preferred during illness when possible.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'B' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
    {
      slug: 'exercise',
      title: 'Physical activity and exercise',
      summary:
        'Moderate activity is usually fine. Long or intense exercise needs planning: carbohydrate before and during, no fasting beforehand, and watching for signs of running out of energy.',
      body: [
        {
          type: 'p',
          text: 'Moderate physical activity is generally well-tolerated in individuals with MCADD. However, prolonged or high-intensity exercise requires special attention:',
        },
        {
          type: 'ul',
          items: [
            'Carbohydrate supplementation before and during prolonged exercise.',
            'Avoiding fasting before exercise.',
            'Monitoring for signs of energy depletion.',
          ],
        },
        {
          type: 'p',
          text: 'Studies on exercise tolerance in MCADD:',
        },
        {
          type: 'ul',
          items: [
            'Huidekoper HH, et al. "Prolonged moderate-intensity exercise without and with L-carnitine supplementation in patients with MCAD deficiency." J Inherit Metab Dis. 2006;29:631-6.',
            'Lee PJ, et al. "L-carnitine and exercise tolerance in medium-chain acyl-coenzyme A dehydrogenase (MCAD) deficiency: a pilot study." J Inherit Metab Dis. 2005;28:141-52.',
          ],
        },
        {
          type: 'p',
          text: 'A clinical trial on high-intensity exercise: NCT06796530 — "High Intensity Exercise in Children With MCADD" — COMPLETED. (ClinicalTrials.gov)',
        },
      ],
      category: ['OBSERVATIONAL DATA', 'MEDICAL RECOMMENDATION'],
      evidence: { level: 'C' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Huidekoper HH, et al. J Inherit Metab Dis. 2006;29:631-6.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16972171',
          pmid: '16972171',
        },
        {
          text: 'Lee PJ, et al. J Inherit Metab Dis. 2005;28:141-52.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/15877203',
          pmid: '15877203',
        },
        {
          text: 'ClinicalTrials.gov: NCT06796530.',
          url: 'https://clinicaltrials.gov/study/NCT06796530',
        },
      ],
    },
    {
      slug: 'sleep',
      title: 'Sleep and overnight fasting',
      summary:
        'Avoiding long overnight fasts is important. The Derks 2007 fasting limits (8h for 6 months–1 year, 10h for the second year, 12h thereafter) apply to overnight sleep; a late evening snack may help prevent overnight low blood sugar.',
      body: [
        {
          type: 'p',
          text: 'Avoiding prolonged overnight fasting is important. The Derks 2007 fasting limits (8 hours for 6 months–1 year, 10 hours for the second year of life, 12 hours thereafter) apply to overnight sleep. A late evening snack may be recommended to prevent overnight hypoglycemia. Cornstarch supplementation may be used in some patients, but specific dosing should be determined by the metabolic team.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'C' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Derks TG, et al. Eur J Pediatr. 2007;166:5-11.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16788829',
          pmid: '16788829',
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
      slug: 'illness',
      title: 'Managing illness',
      summary:
        'Illness is a major trigger. The key is to keep energy coming in — frequent small carbohydrate snacks or drinks — watch for warning signs, and get medical help quickly if the person cannot eat.',
      body: [
        { type: 'h3', text: 'General principles' },
        {
          type: 'p',
          text: 'Intercurrent illness is a major trigger for metabolic decompensation. During illness, the body\u2019s metabolic demand increases while caloric intake often decreases. Management principles include:',
        },
        {
          type: 'ol',
          items: [
            'Maintain caloric intake — offer frequent small meals or snacks.',
            'Provide carbohydrates — glucose-containing fluids and foods.',
            'Monitor for warning signs (lethargy, vomiting, altered consciousness).',
            'Have an emergency plan ready.',
            'Seek medical attention promptly if oral intake is impossible.',
          ],
        },
        { type: 'h3', text: 'Fever' },
        {
          type: 'p',
          text: 'Fever increases metabolic demand. Adequate caloric and fluid intake must be maintained. Antipyretics may be used as directed by a physician.',
        },
        { type: 'h3', text: 'Gastroenteritis (vomiting / diarrhea)' },
        {
          type: 'p',
          text: 'Vomiting and diarrhea are particularly dangerous because they prevent caloric intake and cause dehydration. If oral intake cannot be maintained, intravenous glucose may be required. This is a potential emergency situation.',
        },
        { type: 'h3', text: 'When to seek medical attention' },
        {
          type: 'p',
          text: 'Immediate medical attention is needed if:',
        },
        {
          type: 'ul',
          items: [
            'Vomiting prevents adequate caloric intake.',
            'Signs of lethargy or altered consciousness.',
            'Inability to tolerate oral fluids.',
            'Hypoglycemia suspected.',
            'Severe illness of any kind.',
          ],
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'McGregor TL, et al. "Management principles for acute illness in patients with medium-chain acyl-coenzyme A dehydrogenase deficiency." Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'mct',
      title: 'MCTs (medium-chain triglycerides)',
      summary:
        'MCTs are fats metabolized through the same pathway that is deficient in MCADD. Orphanet (a Tier A authoritative source) recommends that MCTs should be avoided, alongside the primary aim of preventing fasting.',
      body: [
        { type: 'h3', text: 'What are MCTs?' },
        {
          type: 'p',
          text: 'Medium-chain triglycerides (MCTs) are fats composed of medium-chain fatty acids (C6-C12). MCTs are found in coconut oil, palm kernel oil, and some dietary supplements.',
        },
        { type: 'h3', text: 'Historical and current recommendations' },
        {
          type: 'p',
          text: 'Historically, there has been concern that MCTs may be dangerous for individuals with MCADD because they are metabolized through the same pathway that is deficient (medium-chain fatty acid \u03b2-oxidation).',
        },
        { type: 'h3', text: 'Orphanet recommendation on MCT' },
        {
          type: 'p',
          text: 'Orphanet (ORPHA:42), an authoritative Tier A source, explicitly states: "Les triglycérides à chaîne moyenne doivent aussi être évités" (medium-chain triglycerides should also be avoided). This recommendation comes from the Orphanet clinical summary for MCADD (last updated February 2014).',
        },
        {
          type: 'p',
          text: 'Other dietary considerations from Orphanet:',
        },
        {
          type: 'ul',
          items: [
            'Artificial sweeteners should be avoided.',
            'Low-dose carnitine in patients with low carnitine levels is controversial (no consensus).',
            'Symptomatic patients: simple carbohydrates administered orally (glucose tablets) or intravenously until glycemia is maintained above 5 mmol/L.',
            'No other dietary restriction is required beyond MCT avoidance and fasting prevention.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Context and limitations',
          text: 'The Orphanet recommendation dates from February 2014 and may reflect practices that have since evolved. It does not distinguish between MCT oil supplements and trace MCT in foods. Families should discuss MCT avoidance specifics with their metabolic team.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: {
        level: 'A',
        note: 'Authoritative source recommendation (Orphanet).',
      },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Orphanet. ORPHA:42 (Tier A; summary last updated February 2014).',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
    {
      slug: 'emergency-planning',
      title: 'Having an emergency plan',
      summary:
        'Everyone with MCADD should have an individualized emergency plan, emergency contact numbers, medical-alert identification, and a letter from their metabolic physician.',
      body: [
        {
          type: 'p',
          text: 'Families of individuals with MCADD should have:',
        },
        {
          type: 'ul',
          items: [
            'An individualized emergency plan developed with their metabolic team.',
            'Emergency contact numbers for their metabolic center.',
            'Medical alert identification (bracelet/necklace).',
            'A letter from their metabolic physician summarizing the condition and emergency protocol.',
            'Glucose-containing emergency supplies as recommended by their team.',
            'Knowledge of warning signs that require immediate medical attention.',
          ],
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
  ],
}
