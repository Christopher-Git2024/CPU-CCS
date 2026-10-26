<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'

const route = useRoute()

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About CCS' },
  { to: '/programs', label: 'Programs' },
  { to: '/faculty', label: 'Our People' },
  { to: '/news', label: 'News & Events' },
]

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

// Match Home exactly; other navigation items stay active on their nested routes.
function isActivePage(path) {
  if (path === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(path)
}

watch(() => route.fullPath, closeMenu)
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="utility-bar">
    <div class="container utility-inner">
      <span
        >Central Philippine University <span class="utility-divider">/</span> Iloilo City,
        Philippines</span
      ><a href="https://cpu.edu.ph/" target="_blank" rel="noopener"
        >Visit CPU <AppIcon name="external" :size="13"
      /></a>
    </div>
  </div>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" aria-label="CPU College of Computer Studies home"
        ><img src="/images/ccs-logo.png" alt="CCS logo" width="52" height="52" /><span
          ><strong>College of<br />Computer Studies</strong
          ><small>CENTRAL PHILIPPINE UNIVERSITY</small></span
        ></RouterLink
      >
      <button
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        :aria-label="isMenuOpen ? 'Close navigation' : 'Open navigation'"
      >
        <AppIcon :name="isMenuOpen ? 'close' : 'menu'" />
      </button>
      <nav
        id="main-navigation"
        class="main-nav"
        :class="{ 'is-open': isMenuOpen }"
        aria-label="Main navigation"
      >
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          :class="{
            active: isActivePage(item.to),
          }"
          >{{ item.label }}</RouterLink
        >
        <RouterLink to="/contact" class="button button-navy nav-contact"
          >Get in touch <AppIcon name="external" :size="16"
        /></RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.skip-link {
  position: fixed;
  top: -80px;
  left: 20px;
  background: var(--gold);
  padding: 15px;
  z-index: 100;
}
.skip-link:focus {
  top: 10px;
}
.utility-bar {
  background: var(--navy-dark);
  color: #cbd6df;
  font-size: 0.64rem;
}
.utility-inner {
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.utility-inner a {
  display: flex;
  align-items: center;
  gap: 8px;
}
.utility-divider {
  margin: 0 13px;
  color: #7c8b9a;
}
.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid #e5e9eb;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 93px;
  gap: 24px;
}
.main-nav {
  display: flex;
  align-items: center;
  gap: 27px;
}
.main-nav > a {
  font-size: 0.77rem;
  font-weight: 600;
  white-space: nowrap;
  position: relative;
}
.main-nav > a:not(.button) {
  padding: 14px 0;
}
.main-nav > a.active:not(.button)::after {
  content: '';
  position: absolute;
  bottom: 4px;
  height: 2px;
  background: #b38a42;
  left: 0;
  right: 0;
}
.main-nav > a:hover {
  color: #9c742e;
}
.main-nav > a.button:hover {
  color: #fff;
}
.nav-contact {
  min-height: 43px;
  padding: 12px 16px;
  gap: 12px;
}
.menu-toggle {
  display: none;
  background: transparent;
  color: var(--navy);
  padding: 9px;
}
@media (max-width: 1150px) {
  .main-nav {
    gap: 19px;
  }
  .main-nav > a {
    font-size: 0.71rem;
  }
}
@media (max-width: 950px) {
  .header-inner {
    min-height: 82px;
  }
  .menu-toggle {
    display: block;
  }
  .main-nav {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: #fff;
    border-bottom: 1px solid var(--border);
    padding: 14px 32px 25px;
    box-shadow: 0 15px 25px #102b4610;
    align-items: stretch;
    gap: 4px;
  }
  .main-nav.is-open {
    display: flex;
    flex-direction: column;
  }
  .main-nav > a {
    font-size: 0.9rem;
    padding: 13px 0;
  }
  .main-nav > a.active:not(.button)::after {
    display: none;
  }
  .main-nav > a.active {
    color: #8d6623;
  }
  .nav-contact {
    margin-top: 10px;
    align-self: flex-start;
  }
}
@media (max-width: 680px) {
  .utility-inner {
    font-size: 0.54rem;
    height: 29px;
  }
  .utility-divider {
    margin: 0 6px;
  }
  .utility-inner > span {
    max-width: 80%;
  }
  .utility-inner a {
    font-size: 0.52rem;
    gap: 4px;
  }
  .header-inner {
    min-height: 78px;
  }
  .main-nav {
    padding: 12px 20px 22px;
  }
}
</style>
