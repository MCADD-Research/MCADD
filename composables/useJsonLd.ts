import type { ComputedRef } from 'vue'

/**
 * Injects a JSON-LD structured data block into the page head.
 * Accepts an object or a getter returning an object/array of objects.
 */
export function useJsonLd(
  data:
    | Record<string, unknown>
    | Record<string, unknown>[]
    | ComputedRef<Record<string, unknown> | Record<string, unknown>[]>,
) {
  const json = computed(() => JSON.stringify(unref(data)))

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: () => json.value,
      },
    ],
  })
}
