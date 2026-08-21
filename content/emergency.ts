import type { Topic } from './types'

export const emergencyAction = {
  title: 'In an emergency',
  heading: 'Call your local emergency number',
  subheading: '911 · 112 · 999 (depending on your country)',
  body: 'If you or someone with MCADD is experiencing any of the following, call emergency services or go to the nearest emergency department immediately:',
  triggers: [
    'Persistent vomiting',
    'Unusual drowsiness or confusion',
    'Loss of consciousness',
    'Seizures',
    'Inability to eat or drink',
  ],
  bring: ['The individualized emergency plan', 'Medical alert information', 'Contact information for the metabolic team'],
  note: 'Never attempt to manage a potential metabolic crisis at home without medical help.',
} as const

export const emergency: Topic = {
  slug: 'emergency',
  title: 'Emergency situations',
  shortTitle: 'Emergency',
  description:
    'Recognising the warning signs of a metabolic crisis and knowing exactly what to do — including when to call emergency services immediately.',
  intro: [
    'This page covers potentially life-threatening situations. Always prioritise the person\u2019s individualized emergency plan when one is available.',
    'If you are unsure, act quickly: a metabolic crisis is a medical emergency.',
    'This site never provides glucose doses, IV concentrations or hospital protocols — those come only from your metabolic team.',
  ],
  sections: [
    {
      slug: 'warning-signs',
      title: 'Warning signs of a metabolic crisis',
      summary:
        'Drowsiness, vomiting, low blood sugar, confusion, seizures, breathing trouble, or liver problems are warning signs that need immediate medical attention.',
      body: [
        {
          type: 'p',
          text: 'Warning signs that may indicate impending or actual metabolic decompensation in MCADD include:',
        },
        {
          type: 'ul',
          items: [
            'Lethargy or unusual drowsiness — may indicate energy deficit or hypoglycemia.',
            'Vomiting — particularly when persistent or accompanied by other signs.',
            'Hypoglycemia — low blood glucose; may manifest as shakiness, sweating, irritability, confusion.',
            'Altered consciousness — confusion, disorientation.',
            'Seizures — may result from severe hypoglycemia.',
            'Breathing difficulties — may indicate serious metabolic compromise.',
            'Liver dysfunction — hepatomegaly, elevated liver enzymes, jaundice.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Act immediately',
          text: 'These signs require immediate medical attention. Do not attempt to manage these at home without consulting a physician or emergency services.',
        },
      ],
      category: ['ESTABLISHED FACT', 'MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. "Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency." GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency — Description."',
          url: 'https://medlineplus.gov/genetics/condition/medium-chain-acyl-coa-dehydrogenase-deficiency/',
        },
        {
          text: 'Iafolla AK, et al. "Medium-chain acyl-coenzyme A dehydrogenase deficiency: clinical course in 120 affected children." J Pediatr. 1994;124:409-15.',
          pmid: '8120710',
        },
        {
          text: 'McGregor TL, et al. "Management principles for acute illness in patients with MCADD." Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'vomiting',
      title: 'Vomiting',
      summary:
        'Vomiting is dangerous because it stops food intake, causes dehydration, and may itself be a sign of a crisis. If it does not settle, get emergency help.',
      body: [
        {
          type: 'p',
          text: 'Vomiting is dangerous in MCADD because:',
        },
        {
          type: 'ol',
          items: [
            'It prevents caloric intake, leading to fasting.',
            'It causes dehydration.',
            'It may be a sign of metabolic decompensation itself.',
          ],
        },
        {
          type: 'p',
          text: 'When vomiting occurs:',
        },
        {
          type: 'ul',
          items: [
            'Attempt to provide glucose-containing fluids if possible.',
            'If vomiting persists and oral intake cannot be maintained, seek emergency medical attention.',
            'Do NOT assume vomiting will resolve on its own in a child with MCADD.',
          ],
        },
        {
          type: 'p',
          text: 'McGregor TL, et al. (2021) provides management principles for acute illness in MCADD, emphasizing the need for prompt medical evaluation when oral intake is compromised.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
      ],
    },
    {
      slug: 'diarrhea',
      title: 'Diarrhea',
      summary:
        'Diarrhea reduces food absorption and causes dehydration. Keep up glucose-containing fluids; seek help if it is severe or persistent.',
      body: [
        {
          type: 'p',
          text: 'Diarrhea poses similar risks to vomiting:',
        },
        {
          type: 'ul',
          items: [
            'Reduces caloric absorption.',
            'Causes dehydration.',
            'May indicate intercurrent illness triggering decompensation.',
          ],
        },
        {
          type: 'p',
          text: 'Management: maintain hydration with glucose-containing oral rehydration solutions. If diarrhea is severe or persistent, seek medical attention.',
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
        {
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'fever',
      title: 'Fever',
      summary:
        'Fever raises the body\u2019s energy needs at a time when appetite often drops — a dangerous combination. Keep energy and fluids up, and get help if intake fails.',
      body: [
        {
          type: 'p',
          text: 'Fever increases metabolic demand, which increases the body\u2019s need for energy. In MCADD, this increased demand combined with reduced appetite (common during illness) creates a dangerous situation.',
        },
        {
          type: 'p',
          text: 'Management principles:',
        },
        {
          type: 'ul',
          items: [
            'Maintain caloric intake.',
            'Provide adequate hydration.',
            'Use antipyretics as directed by a physician.',
            'Monitor for signs of decompensation.',
            'If oral intake is compromised, seek medical attention.',
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
    {
      slug: 'cannot-eat',
      title: 'When the person cannot eat',
      summary:
        'If someone with MCADD cannot eat, the risk rises quickly. Get urgent medical help — do not wait to see whether they improve.',
      body: [
        {
          type: 'p',
          text: 'When a person with MCADD cannot eat (due to illness, vomiting, or other causes), the risk of metabolic decompensation increases rapidly. The maximum safe period without intake depends on:',
        },
        {
          type: 'ul',
          items: [
            'Age (infants are most vulnerable).',
            'Clinical condition.',
            'Individual metabolic tolerance.',
            'Recent caloric status.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Do not delay',
          text: 'When oral intake is impossible, urgent medical assessment is required. Do NOT delay seeking medical care while waiting to see if the person improves.',
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
    {
      slug: 'infection',
      title: 'Infection',
      summary:
        'Any infection can trigger a crisis because it raises energy demand, reduces appetite, and pushes the body into a fat-burning state.',
      body: [
        {
          type: 'p',
          text: 'Infection is a major trigger for metabolic decompensation because:',
        },
        {
          type: 'ul',
          items: [
            'Increased metabolic demand (fever, immune response).',
            'Decreased appetite.',
            'Vomiting/diarrhea may accompany infection.',
            'Catabolic state promotes fatty acid oxidation.',
          ],
        },
        {
          type: 'p',
          text: 'All infections (viral, bacterial) can trigger decompensation. Management requires attention to both the infection itself and metabolic support.',
        },
      ],
      category: ['ESTABLISHED FACT', 'MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "Medium-chain acyl-CoA dehydrogenase deficiency."',
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
      ],
    },
    {
      slug: 'dehydration',
      title: 'Dehydration',
      summary:
        'Dehydration makes a crisis worse. Signs include low urine output, dry mouth, sunken eyes in babies, drowsiness and a fast heart rate.',
      body: [
        {
          type: 'p',
          text: 'Dehydration worsens metabolic decompensation and can impair the body\u2019s ability to maintain glucose homeostasis. Signs of dehydration include:',
        },
        {
          type: 'ul',
          items: [
            'Decreased urine output.',
            'Dry mucous membranes.',
            'Sunken eyes (in infants).',
            'Lethargy.',
            'Tachycardia.',
          ],
        },
        {
          type: 'p',
          text: 'Dehydration in the context of MCADD requires prompt medical attention.',
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
        {
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'consciousness',
      title: 'Drowsiness, confusion, or loss of consciousness',
      summary:
        'These are emergencies that can signal severe low blood sugar or metabolic brain involvement. Get immediate emergency help.',
      body: [
        {
          type: 'p',
          text: 'These are medical emergencies that may indicate:',
        },
        {
          type: 'ul',
          items: [
            'Severe hypoglycemia.',
            'Metabolic encephalopathy.',
            'Impending or actual metabolic decompensation.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Emergency',
          text: 'Immediate emergency medical assessment is required. Do not attempt to manage these symptoms at home.',
        },
      ],
      category: ['MEDICAL RECOMMENDATION'],
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
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'hypoglycemia',
      title: 'Hypoglycemia (low blood sugar)',
      summary:
        'Low blood sugar is the hallmark of a crisis. In MCADD it is characteristically "hypoketotic" — blood sugar is low while ketones are also inappropriately low.',
      body: [
        {
          type: 'p',
          text: 'Hypoglycemia (low blood glucose) is a hallmark of metabolic decompensation in MCADD. It results from:',
        },
        {
          type: 'ul',
          items: [
            'Inability to produce energy from fatty acid oxidation during fasting.',
            'Inadequate ketogenesis (hypoketotic hypoglycemia).',
            'Depleted glycogen stores.',
          ],
        },
        {
          type: 'p',
          text: 'Hypoglycemia in MCADD is characteristically hypoketotic — blood glucose is low AND ketone bodies are inappropriately low, distinguishing it from hypoglycemia in other conditions where ketones may be elevated.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Treatment is individualized',
          text: 'Management requires medical assessment and treatment as per the individual\u2019s emergency plan. Specific glucose doses and IV protocols must come from the patient\u2019s metabolic team — do not invent dosing.',
        },
      ],
      category: ['ESTABLISHED FACT', 'MEDICAL RECOMMENDATION'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'MedlinePlus Genetics (NIH/NLM). "ACADM gene."',
          url: 'https://medlineplus.gov/genetics/gene/acadm/',
        },
        {
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'protocol-principles',
      title: 'Emergency protocol principles',
      summary:
        'Follow your individualized plan, keep energy coming in, and get medical help when intake fails. Specific doses and IV protocols always come from the metabolic team.',
      body: [
        {
          type: 'p',
          text: 'Authoritative sources recommend that individuals with MCADD have an individualized emergency plan developed with their metabolic team. General principles from available sources include:',
        },
        {
          type: 'ol',
          items: [
            'Prioritize the patient\u2019s individualized emergency plan when available.',
            'Maintain caloric intake — glucose-containing fluids/foods.',
            'Seek medical attention when oral intake is compromised.',
            'Do not fast during illness.',
            'Emergency identification — medical alert bracelet/necklace.',
          ],
        },
        {
          type: 'callout',
          variant: 'insufficient',
          title: 'Insufficiently documented',
          text: 'Specific emergency protocols (glucose doses, IV concentrations, infusion rates, medication doses) are intentionally NOT provided here. These must come from the patient\u2019s individualized plan created by their metabolic physician.',
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
          text: 'McGregor TL, et al. "Management principles for acute illness in patients with MCADD." Pediatrics. 2021;147:e2020040303.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
    {
      slug: 'glucose-glucagon',
      title: 'Glucose and glucagon',
      summary:
        'The exact role of glucagon and specific glucose protocols could not be verified from primary sources. These details must come from your metabolic team.',
      body: [
        {
          type: 'callout',
          variant: 'insufficient',
          title: 'Insufficiently documented',
          text: 'The specific role of glucagon in MCADD emergency management and specific glucose administration protocols could not be fully verified from primary sources in this research pass. These details must come from the patient\u2019s metabolic team.',
        },
        {
          type: 'p',
          text: 'This site does not: invent glucose doses, IV concentrations, infusion rates, medication doses, or hospital protocols.',
        },
      ],
      category: ['INSUFFICIENTLY DOCUMENTED DATA'],
      evidence: { level: 'X' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'McGregor TL, et al. Pediatrics. 2021;147:e2020040303. (General reference — specific protocols require individualized plan)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/33372121',
          pmid: '33372121',
        },
      ],
    },
  ],
}
