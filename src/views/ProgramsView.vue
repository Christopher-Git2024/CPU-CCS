<script setup>
import { programs } from '../data/programs'
import PageHeading from '../components/PageHeading.vue'
import ProgramCard from '../components/ProgramCard.vue'
import ContactBanner from '../components/ContactBanner.vue'
</script>

<template>
  <PageHeading
    eyebrow="Academic programs"
    title="Find the path that feels like you."
    description="Four distinct disciplines. A shared commitment to thoughtful, purposeful learning."
  />
  <section class="section container">
    <div class="program-grid program-grid-large">
      <ProgramCard
        v-for="(program, index) in programs"
        :key="program.id"
        :program="program"
        :index="index"
      />
    </div>
    <div class="notice">
      <strong>Planning your studies?</strong>
      <p>
        These pages summarize the college’s published information. For the current curriculum,
        admission requirements, and course availability,
        <RouterLink to="/contact">contact CCS</RouterLink>.
      </p>
    </div>
  </section>
  <ContactBanner />
</template>

<style scoped>
.program-grid-large {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}
@media (max-width: 680px) {
  .program-grid-large {
    grid-template-columns: 1fr;
  }
}
</style>
