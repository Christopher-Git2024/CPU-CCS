<script setup>
import PageHeading from '../components/PageHeading.vue'
import ContactBanner from '../components/ContactBanner.vue'
import AppIcon from '../components/AppIcon.vue'

// Historical milestones are presented chronologically and summarized from the published CCS history.
const timeline = [
  {
    year: '1995',
    title: 'A beginning in Computer Science',
    text: 'The BSCS program began under the College of Commerce.',
  },
  {
    year: '2003',
    title: 'A college of our own',
    text: 'The College of Computer Studies opened in AY 2003–2004, based in the Mary Thomas Building.',
  },
  {
    year: '2014',
    title: 'A new creative direction',
    text: 'Digital Media and Interactive Arts joined the college’s academic story.',
  },
  {
    year: '2018',
    title: 'Connecting information and people',
    text: 'Library and Information Science moved to the College of Computer Studies.',
  },
]
</script>
<template>
  <PageHeading
    eyebrow="About the college"
    title="Different minds. One shared purpose."
    description="Get to know the community behind computing, creativity, and information at Central Philippine University."
  />
  <section class="section container about-intro">
    <div>
      <p class="eyebrow">OUR FOUNDATION</p>
      <h2>Learning that reaches<br /><em>beyond technology.</em></h2>
      <p>
        CCS brings together technical learning, creative expression, and information service. Its
        published direction connects professional preparation with Christian principles and lifelong
        growth.
      </p>
      <p>Based in Jaro, Iloilo City, the college forms part of Central Philippine University.</p>
      <RouterLink to="/programs" class="text-link"
        >Discover the programs <AppIcon :size="18"
      /></RouterLink>
    </div>
    <figure>
      <img src="/images/campus-mt.webp" alt="Mary Thomas Building on CPU" loading="lazy" />
      <figcaption>Mary Thomas Building · Central Philippine University</figcaption>
    </figure>
  </section>
  <section class="principles-section">
    <div class="container principles-grid">
      <article>
        <span class="principle-number">01 / VISION</span>
        <h2>Excellence with<br />a human purpose.</h2>
        <p>
          The college envisions excellence in IT education that responds to the whole person and to
          society.
        </p>
      </article>
      <article>
        <span class="principle-number">02 / MISSION</span>
        <h2>Preparation for<br />a lifetime of learning.</h2>
        <p>
          Its mission connects Christian principles with computer studies, preparing learners for
          further education and careers in software, computing systems, and information management.
        </p>
      </article>
      <article>
        <span class="principle-number">03 / QUALITY</span>
        <h2>Grow through<br />continuous improvement.</h2>
        <p>
          The published quality policy emphasizes Christian values, professionalism, academic
          excellence, and improving services for the university community.
        </p>
      </article>
    </div>
    <p class="container source-note light-note">
      Summarized from the college’s
      <a href="https://ccs.cpu.edu.ph/vision-and-mission/" target="_blank" rel="noopener"
        >published vision, mission, and quality policy ↗</a
      >.
    </p>
  </section>
  <section class="section container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">HOW WE GOT HERE</p>
        <h2>A story of <em>growth.</em></h2>
      </div>
      <a class="text-link" href="https://ccs.cpu.edu.ph/history/" target="_blank" rel="noopener"
        >Read the college history <AppIcon name="external" :size="18"
      /></a>
    </div>
    <div class="timeline">
      <article v-for="event in timeline" :key="event.year">
        <span class="timeline-year">{{ event.year }}</span>
        <h3>{{ event.title }}</h3>
        <p>{{ event.text }}</p>
      </article>
    </div>
  </section>
  <section class="container about-objectives">
    <div>
      <p class="eyebrow">OUR SHARED DIRECTION</p>
      <h2>Knowledge. Character. Contribution.</h2>
    </div>
    <ul class="check-list">
      <li>Develop professional knowledge and leadership.</li>
      <li>Collaborate with integrity and communicate effectively.</li>
      <li>Contribute through research and community engagement.</li>
      <li>Keep learning as technology and society evolve.</li>
    </ul>
    <p class="source-note">
      Objectives summarized from
      <a href="https://ccs.cpu.edu.ph/academic-programs/" target="_blank" rel="noopener"
        >the college’s academic information</a
      >.
    </p>
  </section>
  <ContactBanner />
</template>

<style scoped>
.about-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 75px;
  align-items: center;
}
.about-intro h2 {
  margin-bottom: 24px;
}
.about-intro p:not(.eyebrow) {
  font-size: 0.9rem;
  color: var(--muted);
}
.about-intro figure img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 5px;
}
.about-intro .text-link {
  margin-top: 10px;
}
.principles-section {
  background: var(--navy);
  color: #fff;
  padding: 70px 0 38px;
}
.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 55px;
}
.principle-number {
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  color: var(--gold);
}
.principles-grid h2 {
  font-size: 1.65rem;
  line-height: 1.3;
  margin: 22px 0 19px;
}
.principles-grid p {
  font-size: 0.84rem;
  color: #c5d1dc;
}
.light-note {
  color: #b3c2cf;
  padding-top: 18px;
}
.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
.timeline article {
  border-top: 2px solid #d6c397;
  padding-top: 25px;
}
.timeline-year {
  font-family: Georgia, serif;
  font-size: 2.7rem;
  color: #94713b;
}
.timeline h3 {
  font-size: 1.05rem;
  margin: 18px 0 12px;
  line-height: 1.4;
}
.timeline p {
  font-size: 0.8rem;
  color: var(--muted);
}
.about-objectives {
  padding: 42px;
  background: var(--cream);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 70px;
}
.about-objectives h2 {
  font-size: 2rem;
}
.about-objectives > .source-note {
  grid-column: 1/-1;
  margin: 0;
}
@media (max-width: 950px) {
  .about-intro {
    gap: 40px;
  }
  .about-intro figure img {
    height: 330px;
  }
  .principles-grid {
    gap: 30px;
  }
  .principles-grid h2 {
    font-size: 1.4rem;
  }
  .timeline {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
}
@media (max-width: 680px) {
  .about-intro {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .about-intro figure img {
    height: 260px;
  }
  .principles-section {
    padding: 45px 0 30px;
  }
  .principles-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .principles-grid article {
    border-bottom: 1px solid #ffffff20;
    padding-bottom: 15px;
  }
  .principles-grid h2 {
    font-size: 1.7rem;
    margin: 18px 0 16px;
  }
  .principles-grid p {
    font-size: 0.85rem;
  }
  .principles-grid h2 br {
    display: none;
  }
  .light-note {
    padding-top: 10px;
  }
  .timeline {
    gap: 26px;
  }
  .timeline-year {
    font-size: 2.2rem;
  }
  .timeline h3 {
    font-size: 0.95rem;
  }
  .timeline p {
    font-size: 0.76rem;
  }
  .about-objectives {
    grid-template-columns: 1fr;
    padding: 25px;
    gap: 22px;
    margin-bottom: 45px;
  }
  .about-objectives h2 {
    font-size: 1.8rem;
  }
}
</style>
