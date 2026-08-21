<script setup lang="ts">
import { understanding } from '~/content/understanding'
import { site } from '~/content/site'

usePageSeo({
  title: 'Understanding MCADD',
  description: understanding.description,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: understanding.title,
    description: understanding.description,
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
  <TopicPage :topic="understanding" />
</template>
