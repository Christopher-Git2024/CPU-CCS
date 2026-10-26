<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <main id="main-content" tabindex="-1">
    <site-header />
    <router-view />
    <site-footer />
  </main>
</template>

<style scoped></style>
