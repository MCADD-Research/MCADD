import { site } from '~/content/site'

interface SeoOptions {
  title?: string
  description?: string
  /** Optional JSON-LD object(s) to inject. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function usePageSeo(options: SeoOptions = {}) {
  const route = useRoute()

  const title = options.title ? `${options.title} · ${site.name}` : site.name
  const description = options.description || site.description
  const url = `${site.siteUrl}${route.path}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    twitterCard: 'summary_large_image',
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  if (options.jsonLd) {
    useJsonLd(options.jsonLd)
  }
}
