import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import FacultyView from '../views/FacultyView.vue'
import ContactView from '../views/ContactView.vue'
import NewsView from '../views/NewsView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import SourcesView from '../views/SourcesView.vue'
import BSITView from '../views/BSITView.vue'
import BSCSView from '../views/BSCSView.vue'
import BSDMIAView from '../views/BSDMIAView.vue'
import BLISView from '../views/BLISView.vue'

export const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    component: AboutView,
    meta: { title: 'About CCS' },
  },
  {
    path: '/programs',
    component: ProgramsView,
    meta: { title: 'Academic Programs' },
  },
  {
    path: '/programs/bsit',
    component: BSITView,
    meta: { title: 'Information Technology' },
  },
  {
    path: '/programs/bscs',
    component: BSCSView,
    meta: { title: 'Computer Science' },
  },
  {
    path: '/programs/bsdmia',
    component: BSDMIAView,
    meta: { title: 'Digital Media & Interactive Arts' },
  },
  {
    path: '/programs/blis',
    component: BLISView,
    meta: { title: 'Library & Information Science' },
  },
  {
    path: '/faculty',
    component: FacultyView,
    meta: { title: 'Faculty & Staff' },
  },
  {
    path: '/contact',
    component: ContactView,
    meta: { title: 'Contact CCS' },
  },
  {
    path: '/news',
    component: NewsView,
    meta: { title: 'News & Events' },
  },
  {
    path: '/news/:id',
    component: NewsDetailView,
    meta: { title: 'College Story' },
  },
  {
    path: '/sources',
    component: SourcesView,
    meta: { title: 'Sources & Credits' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // Restore history positions and honor reduced-motion preferences for in-page links.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash)
      return {
        el: to.hash,
        top: 120,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      }
    return { top: 0 }
  },
})

router.afterEach(async (to, from) => {
  document.title = `${to.meta.title} | CPU College of Computer Studies`
  if (to.path !== from.path) {
    await nextTick()
    const mainContent = document.querySelector('#main-content')
    if (mainContent) {
      // Move keyboard focus after rendering without overriding scroll behavior.
      mainContent.focus({ preventScroll: true })
    }
  }
})
export default router
