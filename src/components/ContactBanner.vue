<script setup>
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section class="contact-banner container">
    <div>
      <p class="eyebrow">YOUR NEXT CHAPTER</p>
      <h2>Curious about your future at CCS?</h2>
      <p>Start a conversation. Find a program that speaks to you.</p>
    </div>
    <RouterLink class="button button-gold" to="/contact"
      >Let’s talk <AppIcon name="external" :size="19"
    /></RouterLink>
  </section>
</template>

<style scoped>
.contact-banner {
  margin-top: 0;
  margin-bottom: 80px;
  padding: 45px 55px;
  background: var(--navy);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.contact-banner::after {
  content: '';
  position: absolute;
  right: -70px;
  top: -130px;
  border: 1px solid #ffffff10;
  border-radius: 50%;
  width: 370px;
  height: 370px;
  pointer-events: none;
}
.contact-banner .eyebrow {
  color: #dbbf83;
  margin-bottom: 12px;
  font-size: 0.6rem;
}
.contact-banner h2 {
  font-size: 1.95rem;
}
.contact-banner p:not(.eyebrow) {
  font-size: 0.8rem;
  color: #bfccd8;
  margin: 12px 0 0;
}
.contact-banner .button {
  white-space: nowrap;
  position: relative;
  z-index: 1;
}
@media (max-width: 950px) {
  .contact-banner {
    padding: 35px;
    margin-bottom: 65px;
  }
  .contact-banner h2 {
    font-size: 1.6rem;
  }
}
@media (max-width: 680px) {
  .contact-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 25px;
    gap: 23px;
    margin-bottom: 45px;
  }
  .contact-banner h2 {
    font-size: 1.8rem;
  }
  .contact-banner p:not(.eyebrow) {
    font-size: 0.78rem;
  }
  .contact-banner .button {
    font-size: 0.78rem;
  }
}
</style>
