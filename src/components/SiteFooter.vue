<script setup>
import { programs } from '../data/programs'
import { contact } from '../data/site'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-intro">
          <RouterLink to="/" class="brand footer-brand"
            ><img src="/images/ccs-logo.png" width="55" height="55" alt="CCS logo" /><span
              ><strong>College of<br />Computer Studies</strong></span
            ></RouterLink
          >
          <p>
            Different minds. Shared purpose.<br />A community built to learn, create, and connect.
          </p>
          <span class="footer-location"
            ><AppIcon name="pin" :size="16" /> Jaro, Iloilo City, Philippines</span
          >
        </div>
        <div>
          <h2>Explore</h2>
          <RouterLink to="/about">About the college</RouterLink
          ><RouterLink to="/faculty">Faculty & staff</RouterLink
          ><RouterLink to="/news">News & events</RouterLink
          ><RouterLink to="/sources">Sources & credits</RouterLink>
        </div>
        <div>
          <h2>Our programs</h2>
          <RouterLink
            v-for="program in programs"
            :key="program.id"
            :to="'/programs/' + program.id"
            >{{ program.shortName }}</RouterLink
          >
        </div>
        <div>
          <h2>Let’s connect</h2>
          <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
          <p>{{ contact.phone }}</p>
          <p>{{ contact.location }}</p>
          <RouterLink class="footer-contact" to="/contact"
            >Contact the college <AppIcon :size="16"
          /></RouterLink>
        </div>
      </div>
      <div class="footer-bottom">
        <span>CCS 3031 · Student website redesign · 2026</span
        ><span>Educational prototype. Not the official CPU website.</span
        ><a href="https://ccs.cpu.edu.ph/" target="_blank" rel="noopener">Official CCS website ↗</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--navy-dark);
  color: #d7e0e8;
  padding: 62px 0 0;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.85fr 1.1fr 1.1fr;
  gap: 45px;
  padding-bottom: 45px;
}
.footer-grid h2 {
  font-size: 0.75rem;
  font-weight: 650;
  color: #fff;
  margin-bottom: 21px;
  letter-spacing: 0;
}
.footer-grid > div > a:not(.brand) {
  display: flex;
  margin-bottom: 12px;
  font-size: 0.72rem;
  color: #aebfcc;
  line-height: 1.6;
}
.footer-grid > div > a:hover {
  color: var(--gold);
}
.footer-grid p {
  font-size: 0.72rem;
  color: #aebfcc;
  line-height: 1.8;
}
.footer-brand strong {
  color: #fff;
  font-size: 1rem;
}
.footer-intro p {
  margin-top: 20px;
}
.footer-location {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.64rem;
  color: #9caebe;
}
.footer-contact {
  gap: 8px;
}
.footer-bottom {
  border-top: 1px solid #ffffff16;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 0.58rem;
  line-height: 1.6;
  color: #9aacbb;
}
.footer-bottom > a {
  color: #cbd6df;
}
@media (max-width: 1150px) {
  .footer-grid {
    gap: 30px;
  }
}
@media (max-width: 950px) {
  .footer-grid {
    grid-template-columns: 1.2fr 1fr;
    gap: 35px 60px;
  }
  .footer-bottom {
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px 0;
    gap: 10px 25px;
  }
}
@media (max-width: 680px) {
  .site-footer {
    padding-top: 45px;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 35px 22px;
    padding-bottom: 35px;
  }
  .footer-intro {
    grid-column: 1/-1;
  }
  .footer-grid > div:last-child {
    grid-column: 1/-1;
  }
  .footer-grid h2 {
    font-size: 0.76rem;
  }
  .footer-grid > div > a:not(.brand),
  .footer-grid p {
    font-size: 0.76rem;
  }
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.59rem;
  }
}
</style>
