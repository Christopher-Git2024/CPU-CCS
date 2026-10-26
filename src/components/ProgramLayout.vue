<script setup>
import { computed } from 'vue'

import { faculty, facultySource } from '../data/faculty'

import FacultyCard from './FacultyCard.vue'
import ContactBanner from './ContactBanner.vue'
import AppIcon from './AppIcon.vue'

// Both maps use program IDs so each program shows its corresponding society emblem and name.
const orgImages = {
  bsit: 'org-itso',
  bscs: 'org-css',
  bsdmia: 'org-midas',
  blis: 'org-lisso',
}
const orgNames = {
  bsit: 'IT student organization',
  bscs: 'Computer Science Society',
  bsdmia: 'Modern Interactive Digital Artists Society',
  blis: 'Library and Information Science Student Organization',
}

const { program } = defineProps({
  program: { type: Object, required: true },
})

// Use only published program associations; do not infer teaching assignments.
const teachers = computed(() => {
  const programTeachers = []
  for (const person of faculty) {
    if (person.programs.includes(program.id)) {
      programTeachers.push(person)
    }
  }
  return programTeachers
})
</script>

<template>
  <div class="program-page" :style="{ '--accent': program.color, '--tint': program.light }">
    <section class="program-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink><span>/</span
          ><RouterLink to="/programs">Programs</RouterLink><span>/</span
          ><span aria-current="page">{{ program.code }}</span>
        </nav>
        <div class="program-hero-grid">
          <div>
            <p class="eyebrow">{{ program.code }} / UNDERGRADUATE PROGRAM</p>
            <h1>{{ program.shortName }}</h1>
            <p class="program-full-name">{{ program.name }}</p>
            <p class="program-tagline">{{ program.tagline }}</p>
            <div class="hero-actions">
              <RouterLink to="/contact" class="button button-navy"
                >Ask about this program <AppIcon name="external" :size="18" /></RouterLink
              ><RouterLink to="/programs" class="text-link"
                >All programs <AppIcon :size="17"
              /></RouterLink>
            </div>
          </div>
          <div class="discipline-art" :class="program.id" aria-hidden="true">
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <span class="art-coordinate">EXPLORE / {{ program.code }}</span>
            <div class="art-icon">
              <AppIcon :name="program.icon" :size="100" />
            </div>
            <span class="art-label">{{ program.areas.join(' · ') }}</span>
          </div>
        </div>
      </div>
    </section>

    <nav class="section-nav" aria-label="Program sections">
      <div class="container">
        <RouterLink :to="{ hash: '#overview' }">Overview</RouterLink
        ><RouterLink :to="{ hash: '#objectives' }">Objectives</RouterLink
        ><RouterLink :to="{ hash: '#curriculum' }">Areas of study</RouterLink
        ><RouterLink :to="{ hash: '#careers' }">Career paths</RouterLink
        ><RouterLink :to="{ hash: '#faculty' }">Faculty</RouterLink>
      </div>
    </nav>

    <section id="overview" class="section container program-overview">
      <div>
        <p class="eyebrow">THE BIG PICTURE</p>
        <h2>{{ program.tagline }}</h2>
        <p class="large-copy">{{ program.overview }}</p>
        <div class="topic-chips">
          <span v-for="area in program.areas" :key="area">{{ area }}</span>
        </div>
      </div>

      <aside class="program-aside">
        <span class="eyebrow">AT A GLANCE</span>
        <dl>
          <dt>Award</dt>
          <dd>{{ program.name }}</dd>
          <dt>College</dt>
          <dd>College of Computer Studies</dd>
          <dt>University</dt>
          <dd>Central Philippine University</dd>
        </dl>
        <a :href="program.source" target="_blank" rel="noopener" class="text-link"
          >Official program information <AppIcon name="external" :size="16"
        /></a>
      </aside>
    </section>

    <section id="objectives" class="objectives-section">
      <div class="container">
        <p class="eyebrow">PURPOSEFUL LEARNING</p>
        <h2>What you’ll work toward.</h2>
        <div class="objective-grid">
          <article v-for="(objective, index) in program.objectives" :key="objective">
            <span>0{{ index + 1 }}</span>
            <h3>{{ objective }}</h3>
          </article>
        </div>
        <p class="source-note">
          Plain-language summaries of the college’s published objectives and outcomes.
        </p>
      </div>
    </section>

    <section id="curriculum" class="section container curriculum-grid">
      <div>
        <p class="eyebrow">AREAS OF STUDY</p>
        <h2>Build your<br /><em>foundation.</em></h2>
        <p>Explore selected curriculum topics. Open each area to see the highlights.</p>
        <p class="source-note">
          Topic summaries only. Confirm the current prospectus and semester sequence with the
          college.
        </p>
      </div>
      <div class="curriculum-accordions">
        <details v-for="(area, index) in program.curriculum" :key="area.title" :open="index === 0">
          <summary>
            <span
              ><small>0{{ index + 1 }}</small
              >{{ area.title }}</span
            ><AppIcon name="chevron" :size="19" />
          </summary>
          <ul>
            <li v-for="topic in area.topics" :key="topic">{{ topic }}</li>
          </ul>
        </details>
      </div>
    </section>

    <section id="careers" class="careers-section">
      <div class="container">
        <p class="eyebrow">WHERE IT CAN TAKE YOU</p>
        <h2>Imagine your <em>next chapter.</em></h2>
        <div class="career-list">
          <span v-for="career in program.careers" :key="career"
            ><AppIcon name="external" :size="19" />{{ career }}</span
          >
        </div>
        <p class="source-note">{{ program.careerNote }}</p>
      </div>
    </section>

    <section id="faculty" class="section container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">PEOPLE BEHIND THE PROGRAM</p>
          <h2>Learn with <em>our community.</em></h2>
        </div>
        <RouterLink to="/faculty" class="text-link"
          >View the directory <AppIcon :size="18"
        /></RouterLink>
      </div>
      <div class="faculty-grid">
        <FacultyCard v-for="teacher in teachers" :key="teacher.id" :person="teacher" />
      </div>
      <p class="source-note">
        Listed associations are from the
        <a :href="facultySource" target="_blank" rel="noopener">published CCS directory</a>. Current
        assignments and the complete teaching roster require college confirmation; specializations
        have not been inferred.
      </p>
      <div class="student-society">
        <img
          :src="'/images/' + orgImages[program.id] + '.webp'"
          :alt="orgNames[program.id] + ' emblem'"
          loading="lazy"
        />
        <div>
          <p class="eyebrow">A PLACE TO BELONG</p>
          <h3>{{ orgNames[program.id] }}</h3>
          <p>Discover the student community featured on the college’s program page.</p>
          <a :href="program.source" target="_blank" rel="noopener" class="text-link"
            >Explore the official page <AppIcon name="external" :size="16"
          /></a>
        </div>
      </div>
    </section>
    <ContactBanner />
  </div>
</template>

<style scoped>
.program-hero {
  background: var(--tint);
  padding: 28px 0 65px;
}
.program-hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 70px;
  align-items: center;
}
.program-hero h1 {
  font-size: clamp(2.6rem, 4.7vw, 4.3rem);
  max-width: 750px;
}
.program-hero .eyebrow {
  color: var(--accent);
}
.program-full-name {
  font-size: 0.84rem;
  color: var(--accent);
  font-weight: 600;
  margin: 20px 0 15px;
}
.program-tagline {
  font-size: 1.1rem;
  color: #506272;
  max-width: 500px;
}
.discipline-art {
  position: relative;
  width: 100%;
  aspect-ratio: 1.15;
  max-height: 315px;
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
  overflow: hidden;
  background-image:
    linear-gradient(#ffffff12 1px, transparent 1px),
    linear-gradient(90deg, #ffffff12 1px, transparent 1px);
  background-size: 35px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.art-icon {
  border: 1px solid #ffffff60;
  background: #ffffff15;
  backdrop-filter: blur(2px);
  border-radius: 22%;
  padding: 25px;
  transform: rotate(-8deg);
}
.orbit {
  position: absolute;
  border: 1px solid #ffffff50;
  border-radius: 50%;
  width: 330px;
  height: 170px;
  transform: rotate(-35deg);
}
.orbit-two {
  transform: rotate(55deg);
}
.art-coordinate {
  position: absolute;
  left: 20px;
  top: 19px;
  font-size: 0.56rem;
  letter-spacing: 0.16em;
}
.art-label {
  position: absolute;
  bottom: 23px;
  text-align: center;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  max-width: 90%;
}
.bsdmia .art-icon {
  transform: rotate(12deg);
  border-radius: 50%;
}
.blis .art-icon {
  transform: rotate(0);
  border-radius: 6px;
}
.section-nav {
  background: #fff;
  border-bottom: 1px solid var(--border);
}
.section-nav > .container {
  display: flex;
  gap: 34px;
  overflow: auto;
  scrollbar-width: thin;
}
.section-nav a {
  padding: 23px 0;
  font-size: 0.78rem;
  font-weight: 650;
  white-space: nowrap;
}
.section-nav a:hover {
  color: var(--accent);
}
.program-overview {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 90px;
  align-items: start;
}
.program-overview h2 {
  font-size: 2.4rem;
  max-width: 600px;
  margin-bottom: 22px;
}
.large-copy {
  font-size: 1rem;
  color: var(--muted);
}
.topic-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 25px;
}
.topic-chips > span {
  font-size: 0.69rem;
  padding: 8px 12px;
  background: var(--tint);
  color: var(--accent);
  border-radius: 4px;
  font-weight: 600;
}
.program-aside {
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  padding: 28px;
  border-radius: 4px;
}
.program-aside dl {
  margin: 0;
}
.program-aside dt {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin: 18px 0 6px;
}
.program-aside dd {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
}
.program-aside .text-link {
  font-size: 0.72rem;
  margin-top: 25px;
  color: var(--accent);
}
.objectives-section {
  padding: 58px 0;
  background: var(--cream);
}
.objective-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 42px;
  margin-top: 35px;
}
.objective-grid article {
  display: flex;
  gap: 20px;
  align-items: start;
}
.objective-grid article > span {
  font-family: Georgia, serif;
  font-size: 2.1rem;
  color: var(--accent);
  opacity: 0.7;
  line-height: 1;
}
.objective-grid h3 {
  font-size: 1.02rem;
  line-height: 1.55;
  letter-spacing: -0.01em;
}
.curriculum-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 100px;
}
.curriculum-grid h2 {
  margin-bottom: 23px;
}
.curriculum-grid > div > p:not(.eyebrow) {
  font-size: 0.85rem;
  color: var(--muted);
}
.curriculum-accordions details {
  border-bottom: 1px solid var(--border);
}
.curriculum-accordions details:first-child {
  border-top: 1px solid var(--border);
}
.curriculum-accordions summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 24px 0;
  font-size: 0.96rem;
  font-weight: 650;
  gap: 12px;
}
.curriculum-accordions summary::-webkit-details-marker {
  display: none;
}
.curriculum-accordions summary small {
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--accent);
  margin-right: 21px;
}
.curriculum-accordions details[open] summary svg {
  transform: rotate(180deg);
}
.curriculum-accordions ul {
  margin: 0 0 24px 42px;
  font-size: 0.86rem;
  color: var(--muted);
  padding-left: 18px;
}
.curriculum-accordions li {
  padding-bottom: 8px;
}
.careers-section {
  padding: 64px 0;
  background: var(--tint);
}
.career-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.career-list > span {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffffba;
  border: 1px solid #ffffff;
  padding: 15px 20px;
  border-radius: 4px;
  font-size: 0.82rem;
}
.career-list svg {
  color: var(--accent);
}
.student-society {
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px;
  border: 1px solid var(--border);
  border-radius: 5px;
}
.student-society img {
  width: 95px;
  height: 95px;
  object-fit: contain;
}
.student-society .eyebrow {
  margin-bottom: 8px;
}
.student-society h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}
.student-society p {
  font-size: 0.8rem;
  color: var(--muted);
}
.student-society .text-link {
  font-size: 0.74rem;
}
@media (max-width: 1150px) {
  .program-hero-grid {
    gap: 45px;
  }
  .program-overview {
    gap: 50px;
  }
  .curriculum-grid {
    gap: 60px;
  }
}
@media (max-width: 950px) {
  .program-hero-grid {
    grid-template-columns: 1.35fr 1fr;
    gap: 25px;
  }
  .discipline-art .art-icon {
    padding: 20px;
  }
  .art-icon svg {
    width: 75px;
  }
  .program-overview {
    grid-template-columns: 1.3fr 1fr;
    gap: 35px;
  }
  .program-overview h2 {
    font-size: 2rem;
  }
  .program-aside {
    padding: 22px;
  }
  .curriculum-grid {
    gap: 40px;
  }
  .objective-grid {
    gap: 22px;
  }
  .objective-grid h3 {
    font-size: 0.9rem;
  }
  .objective-grid article {
    gap: 12px;
  }
  .program-full-name {
    font-size: 0.75rem;
  }
  .program-tagline {
    font-size: 0.95rem;
  }
}
@media (max-width: 680px) {
  .program-hero {
    padding: 24px 0 38px;
  }
  .program-hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .program-hero h1 {
    font-size: 2.65rem;
  }
  .program-full-name {
    font-size: 0.78rem;
  }
  .program-tagline {
    font-size: 1rem;
  }
  .discipline-art {
    aspect-ratio: 1.8;
    max-height: 240px;
  }
  .art-icon svg {
    width: 70px;
    height: 70px;
  }
  .art-label {
    font-size: 0.6rem;
    bottom: 16px;
  }
  .art-coordinate {
    font-size: 0.5rem;
  }
  .section-nav > .container {
    gap: 23px;
  }
  .section-nav a {
    padding: 19px 0;
    font-size: 0.7rem;
  }
  .program-overview {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .program-overview h2 {
    font-size: 2.1rem;
  }
  .large-copy {
    font-size: 0.9rem;
  }
  .program-aside {
    padding: 23px;
  }
  .objectives-section {
    padding: 43px 0;
  }
  .objective-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .objective-grid article {
    gap: 19px;
  }
  .objective-grid h3 {
    font-size: 0.97rem;
  }
  .objective-grid article > span {
    font-size: 1.9rem;
  }
  .curriculum-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .curriculum-accordions summary {
    font-size: 0.89rem;
    padding: 21px 0;
  }
  .curriculum-accordions summary small {
    margin-right: 14px;
  }
  .curriculum-accordions ul {
    margin-left: 30px;
    font-size: 0.8rem;
  }
  .careers-section {
    padding: 45px 0;
  }
  .career-list {
    gap: 9px;
    margin-top: 25px;
  }
  .career-list > span {
    font-size: 0.73rem;
    padding: 12px 15px;
  }
  .student-society {
    padding: 22px;
    gap: 20px;
    align-items: flex-start;
  }
  .student-society img {
    width: 65px;
    height: 65px;
  }
  .student-society h3 {
    font-size: 1.05rem;
  }
  .student-society p {
    font-size: 0.74rem;
  }
  .student-society .text-link {
    font-size: 0.68rem;
  }
}
@media (max-width: 360px) {
  .student-society {
    flex-direction: column;
  }
}
</style>
