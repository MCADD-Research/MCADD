<script setup lang="ts">
import { diagnosis } from '~/content/diagnosis'
import { site } from '~/content/site'

usePageSeo({
  title: 'Diagnosis & biomarkers',
  description: diagnosis.description,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: diagnosis.title,
    description: diagnosis.description,
    about: {
      '@type': 'MedicalCondition',
      name: 'Medium-chain acyl-CoA dehydrogenase deficiency',
      alternateName: 'MCADD',
    },
    dateModified: site.contentLastVerified,
  },
})
</script>

<template>
  <TopicPage :topic="diagnosis" />
</template>
