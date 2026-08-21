<script setup lang="ts">
import { living } from '~/content/living'
import { site } from '~/content/site'

usePageSeo({
  title: 'Living with MCADD',
  description: living.description,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: living.title,
    description: living.description,
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
  <TopicPage :topic="living" />
</template>
