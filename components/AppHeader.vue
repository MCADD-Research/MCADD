<script setup lang="ts">
import { primaryNav, secondaryNav, site } from '~/content/site'

const route = useRoute()
const menuOpen = ref(false)

const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}

const close = () => {
  menuOpen.value = false
}

watch(
  () => route.path,
  () => close(),
)
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="MCADD — home" @click="close">
        <span class="brand-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18M3 12h18" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span class="brand-text">
          <span class="brand-name">{{ site.name }}</span>
        </span>
      </NuxtLink>

      <nav class="nav" aria-label="Primary">
        <NuxtLink
          v-for="item in primaryNav"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ 'is-active': isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <ThemeToggle />
        <button
          type="button"
          class="menu-btn"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-icon" :class="{ open: menuOpen }" aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="menuOpen" class="mobile-menu">
        <nav class="mobile-nav" aria-label="Mobile">
          <NuxtLink
            v-for="item in primaryNav"
            :key="item.to"
            :to="item.to"
            class="mobile-link"
            :class="{ 'is-active': isActive(item.to) }"
            @click="close"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="mobile-divider" />
          <NuxtLink
            v-for="item in secondaryNav"
            :key="item.to"
            :to="item.to"
            class="mobile-link mobile-link-sub"
            @click="close"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 68px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text);
  text-decoration: none;
  flex-shrink: 0;
}
.brand:hover {
  text-decoration: none;
}
.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--brand-700);
  color: #fff;
  box-shadow: var(--shadow-sm);
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.brand-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}
.nav {
  display: flex;
  gap: 0.25rem;
  margin-left: auto;
}
.nav-link {
  padding: 0.45rem 0.75rem;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 550;
  white-space: nowrap;
}
.nav-link:hover {
  color: var(--text);
  background: var(--surface-subtle);
  text-decoration: none;
}
.nav-link.is-active {
  color: var(--brand-700);
  background: var(--brand-soft);
}
[data-theme='dark'] .nav-link.is-active {
  color: var(--brand-300);
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
}
.menu-btn:hover {
  background: var(--surface-subtle);
}
.menu-icon {
  display: block;
  width: 22px;
  height: 18px;
  position: relative;
}
.menu-icon span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.menu-icon span:nth-child(1) { top: 0; }
.menu-icon span:nth-child(2) { top: 8px; }
.menu-icon span:nth-child(3) { top: 16px; }
.menu-icon.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.menu-icon.open span:nth-child(2) { opacity: 0; }
.menu-icon.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

.mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--bg);
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0 1rem;
}
.mobile-link {
  padding: 0.8rem 1.5rem;
  color: var(--text);
  font-weight: 600;
  font-size: 1.05rem;
}
.mobile-link:hover {
  background: var(--surface-subtle);
  text-decoration: none;
}
.mobile-link.is-active {
  color: var(--brand-700);
}
[data-theme='dark'] .mobile-link.is-active {
  color: var(--brand-300);
}
.mobile-link-sub {
  font-weight: 500;
  font-size: 0.98rem;
  color: var(--text-muted);
}
.mobile-divider {
  height: 1px;
  background: var(--border);
  margin: 0.5rem 1.5rem;
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }
  .menu-btn {
    display: inline-block;
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
