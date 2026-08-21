import { ref } from 'vue'

const STORAGE_KEY = 'mcadd-theme'

export type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

function apply(value: Theme) {
  theme.value = value
  if (import.meta.client) {
    document.documentElement.setAttribute('data-theme', value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore storage errors */
    }
  }
}

/**
 * Shared theme state (module-level singleton). The theme ref defaults to 'light'
 * for SSR/hydration safety; components sync it from the `<html data-theme>` value
 * (set by an inline script before hydration) on mount.
 */
export function useTheme() {
  const sync = () => {
    if (import.meta.client) {
      const current = document.documentElement.getAttribute('data-theme')
      if (current === 'dark' || current === 'light') theme.value = current
    }
  }

  const toggle = () => {
    apply(theme.value === 'light' ? 'dark' : 'light')
  }

  return { theme, toggle, sync }
}
