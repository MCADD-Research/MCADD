<template>
  <div class="site">
    <a href="#main" class="skip-link">Skip to main content</a>
    <AppHeader />
    <DisclaimerBanner />
    <main id="main" class="site-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.site-main {
  flex: 1;
}
</style>
