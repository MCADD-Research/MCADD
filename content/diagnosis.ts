import type { Topic } from './types'

export const diagnosis: Topic = {
  slug: 'diagnosis',
  title: 'Diagnosis & biomarkers',
  shortTitle: 'Diagnosis',
  description:
    'How MCADD is detected through newborn screening, how the diagnosis is confirmed, and what the blood markers — especially C8 — actually mean.',
  intro: [
    'Most people with MCADD are now identified at birth through newborn screening, before any symptoms appear.',
    'Screening measures acylcarnitines in a dried blood spot; a raised C8 (octanoylcarnitine) is the classic marker.',
    'A positive screen must always be confirmed with further testing — a single marker value is never enough on its own.',
  ],
  sections: [
    {
      slug: 'newborn-screening',
      title: 'Newborn screening',
      summary:
        'MCADD is detected through routine newborn screening using a method called tandem mass spectrometry, which measures acylcarnitines from a small dried blood sample taken shortly after birth.',
      body: [
        {
          type: 'p',
          text: 'Newborn screening for MCADD is performed worldwide using tandem mass spectrometry (MS/MS) to analyze acylcarnitines from dried blood spots. The technique allows simultaneous detection of multiple metabolic disorders.',
        },
        {
          type: 'p',
          text: 'Newborn screening for MCADD has been implemented in many countries, including the United States (expanded to all states), the Netherlands, Denmark, Germany, Austria, and others. The specific start dates vary by country and state. Orphanet notes that MCADD is included in newborn screening programs in many European countries, including the United Kingdom, Germany, the Netherlands, Portugal, and Spain.',
        },
      ],
      category: ['ESTABLISHED FACT'],
      evidence: { level: 'A' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. "Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency." GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Chace DH, et al. "The application of tandem mass spectrometry to neonatal screening for inherited disorders of intermediary metabolism." Annu Rev Genomics Hum Genet. 2002;3:17-45.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/12142359',
          pmid: '12142359',
        },
        {
          text: 'Lindner M, et al. "Newborn screening for disorders of fatty-acid oxidation: experience and recommendations from an expert meeting." J Inherit Metab Dis. 2010;33:521-6.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/20373143',
          pmid: '20373143',
        },
        {
          text: 'Jager EA, et al. "A nationwide retrospective observational study of population newborn screening for MCAD deficiency in the Netherlands." J Inherit Metab Dis. 2019;42:890-7.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/31012112',
          pmid: '31012112',
        },
        {
          text: 'Orphanet. "Medium-chain acyl-CoA dehydrogenase deficiency." ORPHA:42.',
          url: 'https://www.orpha.net/fr/disease/detail/42',
        },
      ],
    },
    {
      slug: 'dried-blood-spot',
      title: 'The dried blood spot (Guthrie) test',
      summary:
        'A few drops of blood from a heel prick are collected on filter paper. That dried spot is then analysed with tandem mass spectrometry to measure several markers at once.',
      body: [
        {
          type: 'p',
          text: 'Newborn screening uses dried blood spots collected on filter paper (Guthrie cards), typically from a heel prick. The dried blood spots are then analyzed using tandem mass spectrometry (MS/MS), which measures acylcarnitine species. The MS/MS method allows rapid, high-throughput analysis of multiple metabolic markers from a single blood spot.',
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
          text: 'Chace DH, et al. Ann Rev Genomics Hum Genet. 2002;3:17-45.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/12142359',
          pmid: '12142359',
        },
      ],
    },
    {
      slug: 'acylcarnitine-profile',
      title: 'The acylcarnitine profile',
      summary:
        'In MCADD, several acylcarnitines are raised. C8 is the most important, with C6, C10 and sometimes C10:1 also elevated. Ratios such as C8/C10 and C8/C2 help make the result more specific.',
      body: [
        {
          type: 'p',
          text: 'The acylcarnitine profile measured by MS/MS includes multiple species. In MCADD, the key markers are:',
        },
        {
          type: 'ul',
          items: [
            'C8 (octanoylcarnitine) — the primary and most specific marker',
            'C6 (hexanoylcarnitine) — secondary marker',
            'C10 (decanoylcarnitine) — secondary marker',
            'C10:1 (decenoylcarnitine) — also elevated in some cases',
          ],
        },
        {
          type: 'p',
          text: 'Ratios between these markers improve diagnostic specificity:',
        },
        {
          type: 'ul',
          items: ['C8/C10 ratio — elevated in MCADD', 'C8/C2 ratio — elevated in MCADD'],
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
          text: 'Matern D. "Acylcarnitines." In: Physician\u2019s Guide to the Diagnosis, Treatment, and Follow-Up of Inherited Metabolic Diseases. Springer; 2014:775-84. (Cited in GeneReviews)',
        },
        {
          text: 'Hsu HW, et al. Pediatrics. 2008;121(5):e1108-14.',
          pmid: '18450854',
        },
      ],
    },
    {
      slug: 'c8-marker',
      title: 'C8 (octanoylcarnitine): the primary marker',
      summary:
        'A raised C8 is the main sign that triggers further testing for MCADD. Exact cut-off values differ between screening programmes and are not standardised internationally.',
      body: [
        {
          type: 'p',
          text: 'C8 (octanoylcarnitine) is the most sensitive and specific marker for MCADD on newborn screening. Elevated C8 is the primary trigger for further diagnostic evaluation.',
        },
        {
          type: 'p',
          text: 'Specific cutoff values vary by screening program and are not standardized internationally. Each newborn screening program establishes its own cutoffs based on local population data and analytical methods.',
        },
        {
          type: 'p',
          text: 'Aggregate 99th centile values from North American newborn screening samples (Collaborative Laboratory Integrated Reports) are:',
        },
        {
          type: 'ul',
          items: [
            'C8: 2.46 nmol/mL',
            'C6: 2.44 nmol/mL',
            'C10: 2.38 nmol/mL',
            'C10:1: 2.44 nmol/mL',
            'C8/C2 ratio: 2.43',
            'C8/C10 ratio: 2.53',
          ],
        },
        {
          type: 'p',
          text: 'Note: 1 nmol/mL is equivalent to 1 µmol/L. Because of differences in sample analysis, aggregate C8 values may not be directly comparable to local program results; each program\u2019s own cutoffs should be used.',
        },
        {
          type: 'p',
          text: 'Genotype-stratified C8 values (observational data):',
        },
        {
          type: 'ul',
          items: [
            'In a retrospective cohort of 90 patients, individuals homozygous for c.985A>G (p.Lys329Glu) had higher NBS C8 (23.4 ± 19.6 vs 6.6 ± 3.0 µmol/L) than those with at least one other pathogenic variant (Anderson et al 2020).',
            'In a US cohort of 221 newborn-screened neonates, the average C8 on the first screen was 11.2 µmol/L (median 8.6, range 0.36–43.91); higher C8 correlated with symptomatic newborns, and C8 and genotype were significant predictors of neonatal symptoms (Bentler et al 2016).',
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
          text: 'Hsu HW, et al. Pediatrics. 2008;121:e1108-14.',
          pmid: '18450854',
        },
        {
          text: 'Maier EM, et al. "Validation of MCADD newborn screening." Clin Genet. 2009;76:179-87.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/19780764',
          pmid: '19780764',
        },
        {
          text: 'Anderson DR, et al. "Clinical and biochemical outcomes of patients with medium-chain acyl-CoA dehydrogenase deficiency." Mol Genet Metab. 2020;129:13-19.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/31836396',
          pmid: '31836396',
        },
        {
          text: 'Bentler K, et al. "221 newborn-screened neonates with medium-chain acyl-coenzyme A dehydrogenase deficiency: Findings from the Inborn Errors of Metabolism Collaborative." Mol Genet Metab. 2016;119:75-82.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/27477829',
          pmid: '27477829',
        },
      ],
    },
    {
      slug: 'confirmatory-testing',
      title: 'Confirming the diagnosis',
      summary:
        'A positive screen is confirmed with a plasma acylcarnitine profile, genetic testing of the ACADM gene, urine organic acids, and — in some centres — enzyme activity testing.',
      body: [
        {
          type: 'p',
          text: 'When newborn screening suggests MCADD, confirmatory testing is required. GeneReviews recommends:',
        },
        {
          type: 'ol',
          items: [
            'Plasma acylcarnitine profile — confirms the elevation pattern.',
            'Molecular genetic testing — ACADM gene sequencing to identify disease-causing variants.',
            'Urine organic acid analysis — may show elevated dicarboxylic acids (suberic, adipic, sebacic acids).',
            'Enzyme activity analysis — in fibroblasts or other tissues, can measure residual MCAD activity (performed in specialized laboratories).',
          ],
        },
        {
          type: 'p',
          text: 'Molecular testing typically includes sequencing of the ACADM coding region and may include deletion/duplication analysis.',
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
          text: 'Bouvier D, et al. "Development of a tandem mass spectrometry method for rapid measurement of medium- and very-long-chain acyl-CoA dehydrogenase activity in fibroblasts." JIMD Rep. 2017;35:71-8.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/27943070',
          pmid: '27943070',
        },
      ],
    },
    {
      slug: 'gene-sequencing',
      title: 'ACADM gene sequencing',
      summary:
        'Genetic testing is the main way to confirm MCADD. It looks for changes in the ACADM gene, with the K304E (c.985A>G) change being the most common.',
      body: [
        {
          type: 'p',
          text: 'ACADM molecular genetic testing is the primary method for confirming MCADD diagnosis. Testing identifies disease-causing variants in the ACADM gene. The K304E (c.985A>G) variant is the most common, particularly in northern European populations.',
        },
        {
          type: 'p',
          text: 'Targeted testing for common variants may be performed first, followed by full sequencing if needed. When available, deletion/duplication analysis can identify variants not detected by sequencing.',
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
          text: 'Gregersen N, et al. Hum Hered. 1993;43:342-50.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/7904584',
          pmid: '7904584',
        },
        {
          text: 'Andresen BS, et al. "MCAD mutations identified by MS/MS-based prospective screening of newborns." Am J Hum Genet. 2001;68:1408-18.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/11349232',
          pmid: '11349232',
        },
      ],
    },
    {
      slug: 'false-positives',
      title: 'False positives',
      summary:
        'Sometimes a screen flags MCADD when the baby does not actually have it. This can happen if the mother has undiagnosed MCADD, in other conditions that raise C8, in premature or low-birth-weight babies, or due to technical issues. Second-tier testing reduces these.',
      body: [
        {
          type: 'p',
          text: 'False positive newborn screening results for MCADD can occur due to:',
        },
        {
          type: 'ul',
          items: [
            'Maternal MCADD (if the mother has undiagnosed MCADD, her acylcarnitines can elevate the newborn\u2019s result).',
            'Heterozygous ACADM c.985A>G (p.Lys329Glu) carriers — term, appropriate-for-gestational-age infants heterozygous for the common pathogenic variant can have C8 levels above the 90th centile (Blois et al 2005).',
            'Other conditions causing elevated C8 (e.g., carnitine palmitoyltransferase I deficiency, medium-chain triglyceride supplementation).',
            'Prematurity or low birth weight.',
            'Technical/analytical issues.',
          ],
        },
        {
          type: 'p',
          text: 'False positives for elevated C8 are not common with MS/MS, but can be seen in term heterozygous carriers and premature infants. Second-tier testing (e.g., molecular testing, additional acylcarnitine ratios) helps reduce false positives.',
        },
      ],
      category: ['OBSERVATIONAL DATA'],
      evidence: { level: 'B' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Chang IJ, Lam C, Vockley J. GeneReviews. 2000 [updated 2024].',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
          pmid: '20301597',
        },
        {
          text: 'Blois B, Riddell C, Dooley K, Dyack S. "Newborns with C8-acylcarnitine level over the 90th centile have an increased frequency of the common MCAD 985A>G mutation." J Inherit Metab Dis. 2005.',
          pmid: '15902558',
        },
        {
          text: 'Leydiker KB, et al. "Maternal medium-chain acyl-CoA dehydrogenase deficiency identified by newborn screening." Mol Genet Metab. 2011;103:92-5.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/21354840',
          pmid: '21354840',
        },
        {
          text: 'Aksglaede L, et al. "Abnormal newborn screening in a healthy infant of a mother with undiagnosed MCADD." JIMD Rep. 2015;23:67-70.',
          pmid: '25763512',
        },
      ],
    },
    {
      slug: 'false-negatives',
      title: 'False negatives',
      summary:
        'Less commonly, a screen can miss MCADD — for example when the acylcarnitine profile looks normal at screening, or with rare genetic variants. A missed case can lead to delayed diagnosis.',
      body: [
        {
          type: 'p',
          text: 'False negative results are less common but can occur. Cases have been reported of:',
        },
        {
          type: 'ul',
          items: [
            'MCADD with severe neonatal onset and normal acylcarnitine profile at the time of screening.',
            'ACADM splice mutations missed by newborn screening.',
            'Rare genotypes not producing elevated C8 in the early newborn period.',
            'Low free carnitine levels — newborns with low free carnitine (e.g., infants born to a mother with previously undiagnosed MCAD deficiency, maternal carnitine transporter deficiency, or nutritional carnitine deficiency) can have lower elevations of C8/C6/C10 acylcarnitines, or even normal profiles, leading to false negatives (Leydiker et al 2011; Aksglaede et al 2015; Weiss et al 2023).',
          ],
        },
        {
          type: 'p',
          text: 'This is particularly concerning because false negatives can lead to delayed diagnosis and potentially life-threatening presentations.',
        },
      ],
      category: ['OBSERVATIONAL DATA'],
      evidence: { level: 'C' },
      lastVerified: '2026-08-21',
      sources: [
        {
          text: 'Fingerhut R, et al. "MCAD-deficiency with severe neonatal onset, fatal outcome and normal acylcarnitine profile." Int J Neonatal Screen. 2017;3:21. (Cited in GeneReviews)',
        },
        {
          text: 'Gr\u00fcnert SC, et al. "Medium-chain acyl-CoA dehydrogenase deficiency associated with a novel splice mutation in the ACADM gene missed by newborn screening." BMC Med Genet. 2015;16:56.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/26223887',
          pmid: '26223887',
        },
        {
          text: 'M\u00fctze U, et al. "Sudden neonatal death in individuals with medium-chain acyl-coenzyme A dehydrogenase deficiency: limit of newborn screening." Eur J Pediatr. 2022;181:2415-22.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/35294644',
          pmid: '35294644',
        },
        {
          text: 'Leydiker KB, et al. "Maternal medium-chain acyl-CoA dehydrogenase deficiency identified by newborn screening." Mol Genet Metab. 2011;103:92-5.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/21354840',
          pmid: '21354840',
        },
        {
          text: 'Aksglaede L, et al. "Abnormal newborn screening in a healthy infant of a mother with undiagnosed MCADD." JIMD Rep. 2015;23:67-70.',
          pmid: '25763512',
        },
        {
          text: 'Weiss et al. "Free carnitine concentrations and biochemical parameters in medium-chain acyl-CoA dehydrogenase deficiency." Clin Genet. 2023. (Cited in GeneReviews as Weiss et al 2023)',
        },
      ],
    },
    {
      slug: 'differential-diagnosis',
      title: 'What else could it be?',
      summary:
        'A few other conditions can look similar on tests or in symptoms, including other fatty-acid oxidation disorders, carnitine transporter defects, and Reye syndrome.',
      body: [
        {
          type: 'p',
          text: 'Conditions that can present with similar biochemical findings or clinical pictures include:',
        },
        {
          type: 'ul',
          items: [
            'Other fatty acid oxidation disorders (e.g., VLCAD deficiency, SCAD deficiency, glutaric acidemia type II).',
            'Carnitine transporter defects.',
            'Reye syndrome (differential for clinical presentation).',
            'Hypoglycemia from other metabolic causes (e.g., glycogen storage diseases).',
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
          text: 'Bzduch V, et al. "Metabolic cause of Reye-like syndrome." Bratisl Lek Listy. 2001;102:427-9.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/11763681',
          pmid: '11763681',
        },
      ],
    },
    {
      slug: 'interpretation',
      title: 'Reading the biomarkers',
      summary:
        'Biomarker results must always be read in clinical context. C8 varies with age, feeding and illness, and a value from a crisis can look different from a well value. A single number is never diagnostic on its own.',
      body: [
        {
          type: 'p',
          text: 'Biomarker interpretation must be done in clinical context. A single biomarker value should never be treated as independently diagnostic without proper clinical context.',
        },
        {
          type: 'p',
          text: 'Key considerations:',
        },
        {
          type: 'ul',
          items: [
            'C8 levels can vary with age, feeding status, and clinical condition.',
            'The acylcarnitine profile during an acute metabolic crisis may differ significantly from the well state.',
            'Residual enzyme activity varies by genotype and may influence biochemical phenotype.',
            'C8 level and genotype are significant predictors of neonatal symptoms in newborn-screened cohorts; individuals homozygous for the common c.985A>G (p.Lys329Glu) variant have the highest C8 values and are most likely to have neonatal symptoms (Bentler et al 2016; Anderson et al 2020).',
            'Some infants identified by newborn screening may have biochemical evidence of MCADD but never develop symptoms.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Remember',
          text: 'Never treat a single biomarker value as independently diagnostic without proper clinical context.',
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
          text: 'Touw CM, et al. "Risk stratification by residual enzyme activity." Orphanet J Rare Dis. 2012;7:30.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/22630369',
          pmid: '22630369',
        },
        {
          text: 'Maier EM, et al. "Population spectrum of ACADM genotypes correlated to biochemical phenotypes in newborn screening." Hum Mutat. 2005;25:443-52.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/15832312',
          pmid: '15832312',
        },
        {
          text: 'Bentler K, et al. "221 newborn-screened neonates with medium-chain acyl-coenzyme A dehydrogenase deficiency: Findings from the Inborn Errors of Metabolism Collaborative." Mol Genet Metab. 2016;119:75-82.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/27477829',
          pmid: '27477829',
        },
        {
          text: 'Anderson DR, et al. "Clinical and biochemical outcomes of patients with medium-chain acyl-CoA dehydrogenase deficiency." Mol Genet Metab. 2020;129:13-19.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/31836396',
          pmid: '31836396',
        },
      ],
    },
  ],
}
