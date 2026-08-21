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
        'Safe fasting limits differ by age and by the individual, and they are worked out with the metabolic team. Exact age-specific numbers are not reproduced here because they must come from a reliable, individualized source.',
      body: [
        {
          type: 'callout',
          variant: 'danger',
          title: 'High-risk topic',
          text: 'The recommendations in this section come from specific sources, each applying to a specific context (age, clinical situation, disease severity). Do not merge recommendations from different sources without verifying they apply to the same context.',
        },
        {
          type: 'p',
          text: 'A key reference for fasting duration is:',
        },
        {
          type: 'ul',
          items: [
            'Derks TG, Van Spronsen FJ, Rake JP, Van Der Hilst CS, Span MM, Smit GP. "Safe and unsafe duration of fasting for children with MCAD deficiency." Eur J Pediatr. 2007;166:5-11.',
          ],
        },
        {
          type: 'p',
          text: 'This study provides age-specific fasting safety limits for children with MCADD. However, the specific values from this study require verification against the original publication, which could not be fully accessed in this research pass.',
        },
        {
          type: 'p',
          text: 'GeneReviews provides general guidance on avoiding fasting, particularly in infants and young children. The specific recommendations include:',
        },
        {
          type: 'ul',
          items: [
            'Infants: frequent feedings (every 3-4 hours typically).',
            'Toddlers: avoid fasting beyond a limited number of hours (specific limits in GeneReviews).',
            'Children: must not skip meals.',
            'During illness: urgent attention to maintain caloric intake.',
          ],
        },
        {
          type: 'callout',
          variant: 'insufficient',
          title: 'Insufficiently documented',
          text: 'The exact fasting duration limits for each age group could not be independently verified from the primary source (Derks 2007) in this research pass. The specific numeric values from different sources must not be merged. Families should consult their metabolic team for individualized fasting limits.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: {
        level: 'B',
        note: 'Recommendations exist from authoritative sources; specific numeric values require primary-source verification.',
      },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Derks TG, et al. "Safe and unsafe duration of fasting for children with MCAD deficiency." Eur J Pediatr. 2007;166:5-11.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16788829',
          pmid: '16788829',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
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
          variant: 'insufficient',
          title: 'Insufficiently documented',
          text: 'Specific macronutrient ratios for MCADD management have not been verified from primary sources in this research pass. The general guidance is that a normal balanced diet with attention to regular meals and avoiding fasting is appropriate.',
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
        'Avoiding long overnight fasts is important. For infants and young children this means night feeds; for older children and adults, a late evening snack may help prevent overnight low blood sugar.',
      body: [
        {
          type: 'p',
          text: 'Avoiding prolonged overnight fasting is important. Infants and young children should not sleep through the night without feeding beyond the safe fasting duration for their age. For older children and adults, a late evening snack or cornstarch supplementation may be recommended to prevent overnight hypoglycemia.',
        },
        {
          type: 'callout',
          variant: 'insufficient',
          title: 'Insufficiently documented',
          text: 'Specific overnight fasting limits and cornstarch dosing recommendations could not be verified from primary sources in this research pass.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'C' },
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
        'There is a common belief that MCTs are harmful in MCADD, but the evidence for a blanket rule is not well established. This is an area of genuine uncertainty, so advice should come from your metabolic team.',
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
        {
          type: 'p',
          text: 'However, the evidence base for blanket MCT restriction in MCADD is not well-established from the sources verified in this research pass. Some sources recommend caution with MCT intake; others suggest that small amounts may be tolerated.',
        },
        { type: 'h3', text: 'Is MCT "forbidden"?' },
        {
          type: 'callout',
          variant: 'insufficient',
          title: 'Insufficiently documented',
          text: 'No authoritative source verified in this research pass explicitly states "MCT is forbidden" for all MCADD patients in all contexts. The evidence for and against MCT restriction requires further investigation with primary-source verification.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do not overstate',
          text: 'Do not state "MCT is forbidden" unless an authoritative source explicitly supports that exact recommendation in the relevant context.',
        },
      ],
      category: ['OBSERVATIONAL DATA', 'INSUFFICIENTLY DOCUMENTED DATA'],
      evidence: {
        level: 'X',
        note: 'Insufficient evidence to make a blanket recommendation.',
      },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024]. (General reference — specific MCT guidance requires further verification.)',
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
