<script setup>
import { programs } from '../data/programs'
import { news } from '../data/news'
import ProgramCard from '../components/ProgramCard.vue'
import NewsCard from '../components/NewsCard.vue'
import AppIcon from '../components/AppIcon.vue'
import ContactBanner from '../components/ContactBanner.vue'
</script>

<template>
  <section class="home-hero">
    <div class="hero-grid-pattern" aria-hidden="true"></div>
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow"><span class="gold-dash"></span> THINK BIG. BUILD WITH PURPOSE.</p>
        <h1>Your future.<br />Your ideas.<br /><em>Our community.</em></h1>
        <p>
          Discover where computing, creativity, and information come together. Find your place at
          CPU College of Computer Studies.
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-gold" to="/programs"
            >Explore our programs <AppIcon name="external" :size="19" /></RouterLink
          ><RouterLink class="hero-secondary" to="/about"
            >Get to know CCS <AppIcon :size="18"
          /></RouterLink>
        </div>
        <div class="hero-footnote">
          <span class="small-dot"></span> Learn with purpose. Create with possibility.
        </div>
      </div>
      <div class="hero-visual">
        <div class="photo-index"><span>THE PLACE WE CALL HOME</span><span>01 / CPU</span></div>
        <img
          class="hero-campus"
          src="/images/cpu-campus.webp"
          alt="Central Philippine University campus and open lawn at sunset"
          fetchpriority="high"
        />
        <div class="hero-photo-caption">
          <AppIcon name="pin" :size="16" /><span
            >Central Philippine University<br /><strong>Iloilo City, Philippines</strong></span
          >
        </div>
        <div class="hero-sticker">
          <AppIcon name="spark" :size="28" /><span
            >Different minds.<br /><strong>One shared purpose.</strong></span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="section container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">BUILT AROUND YOUR POTENTIAL</p>
        <h2>What will you <em>create?</em></h2>
      </div>
      <p>
        Whether you think in code, see in color, or connect through knowledge, there’s a place to
        begin.
      </p>
    </div>
    <div class="program-grid">
      <ProgramCard
        v-for="(program, programIndex) in programs"
        :key="program.id"
        :program="program"
        :index="programIndex"
      />
    </div>
  </section>
  <section class="college-story">
    <div class="container story-grid">
      <div class="story-photo">
        <img src="/images/campus-mtcl.webp" alt="MTCL" loading="lazy" /><span class="photo-label"
          >A CENTRALIAN COMMUNITY</span
        >
      </div>
      <div class="story-copy">
        <p class="eyebrow">MORE THAN A CLASSROOM</p>
        <h2>Rooted in purpose.<br /><em>Ready for possibility.</em></h2>
        <p>
          Our story began with Computer Science in 1995. Today, this redesign brings four fields of
          study together in one place, connected by a spirit of learning and service.
        </p>
        <div class="story-values">
          <span><AppIcon name="check" :size="18" /> Christian values</span
          ><span><AppIcon name="check" :size="18" /> Academic excellence</span
          ><span><AppIcon name="check" :size="18" /> Community connection</span>
        </div>
        <RouterLink class="text-link" to="/about"
          >Discover our story <AppIcon :size="19"
        /></RouterLink>
      </div>
    </div>
  </section>
  <section class="section container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">STORIES FROM OUR COMMUNITY</p>
        <h2>Inside <em>CCS.</em></h2>
      </div>
      <RouterLink to="/news" class="text-link"
        >Explore the news archive <AppIcon :size="19"
      /></RouterLink>
    </div>
    <p class="section-note">
      From the college’s published archive · Original publication dates preserved.
    </p>
    <div class="news-grid">
      <NewsCard v-for="article in news" :key="article.id" :article="article" />
    </div>
  </section>
  <ContactBanner />
</template>

<style scoped>
.home-hero {
  position: relative;
  background: var(--navy-dark);
  color: #fff;
  overflow: hidden;
}
.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(#ffffff03 1px, transparent 1px),
    linear-gradient(90deg, #ffffff03 1px, transparent 1px);
  background-size: 45px 45px;
  mask-image: linear-gradient(to right, transparent, #000);
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  min-height: 580px;
  padding-top: 56px;
  padding-bottom: 64px;
}
.hero-copy {
  position: relative;
  z-index: 1;
}
.hero-copy > .eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #d8c391;
  font-size: 0.64rem;
  margin-bottom: 26px;
}
.gold-dash {
  height: 1px;
  width: 26px;
  background: var(--gold);
}
.hero-copy h1 {
  font-size: clamp(3.2rem, 5.3vw, 4.85rem);
  line-height: 1.04;
  letter-spacing: -0.045em;
  font-weight: 550;
  margin-bottom: 26px;
}
.hero-copy h1 em {
  color: var(--gold);
  font-size: 0.96em;
}
.hero-copy > p:not(.eyebrow) {
  max-width: 410px;
  color: #c4cfd9;
  font-size: 0.9rem;
  line-height: 1.8;
}
.hero-secondary {
  font-size: 0.79rem;
  display: flex;
  align-items: center;
  gap: 13px;
  color: #ecf1f4;
}
.hero-footnote {
  font-size: 0.65rem;
  color: #9fb1c2;
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.small-dot {
  width: 5px;
  height: 5px;
  background: var(--gold);
  border-radius: 50%;
}
.hero-visual {
  position: relative;
  height: 410px;
  min-width: 0;
  margin-top: 9px;
}
.photo-index {
  display: flex;
  justify-content: space-between;
  font-size: 0.53rem;
  letter-spacing: 0.12em;
  color: #a6b5c3;
  margin-bottom: 13px;
}

.hero-campus {
  width: 100%;
  height: 345px;
  object-fit: cover;
  object-position: 53% center;
  border-radius: 100px 6px 6px 6px;
  filter: saturate(0.8);
}

.hero-photo-caption {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.6rem;
  line-height: 1.65;
  color: #a5b8c8;
  margin-top: 14px;
}

.hero-photo-caption strong {
  color: #d0d9e1;
  font-weight: 400;
}

.hero-sticker {
  position: absolute;
  bottom: 45px;
  right: -20px;
  display: flex;
  gap: 15px;
  align-items: center;
  background: var(--gold);
  color: var(--navy-dark);
  padding: 21px 25px;
  transform: rotate(-4deg);
  box-shadow: 0 9px 25px #0002;
  font-size: 0.74rem;
  line-height: 1.5;
}

.hero-sticker strong {
  font-weight: 750;
}

.pathway-strip {
  background: #f5f4ee;
  border-bottom: 1px solid #e3e4dc;
}

.pathway-inner {
  min-height: 75px;
  display: flex;
  align-items: center;
  gap: 35px;
}

.strip-label {
  font-size: 0.57rem;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: #73806d;
  margin-right: 8px;
}

.pathway-inner > a {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 13px 0;
}

.pathway-inner > a > svg:last-child {
  color: #849095;
  margin-left: 6px;
}

.pathway-inner > a:hover {
  color: #9a6f23;
}

.strip-note {
  font-family: Georgia, serif;
  color: #697668;
  font-style: italic;
  font-size: 0.8rem;
  margin-left: auto;
}

.college-story {
  background: var(--cream);
  padding: 72px 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.story-photo {
  position: relative;
}

.story-photo > img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
}

.photo-label {
  position: absolute;
  left: 20px;
  bottom: 20px;
  background: var(--navy);
  color: #fff;
  font-size: 0.56rem;
  letter-spacing: 0.12em;
  padding: 13px 17px;
}

.story-copy > h2 {
  font-size: 2.45rem;
  margin-bottom: 23px;
}

.story-copy > p:not(.eyebrow) {
  font-size: 0.86rem;
  color: var(--muted);
}

.story-values {
  display: grid;
  gap: 11px;
  margin: 24px 0 29px;
}

.story-values > span {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  font-weight: 550;
}

.story-values svg {
  color: #8b6d2a;
}

.section-note {
  font-size: 0.74rem;
  color: var(--muted);
  margin-top: -19px;
  margin-bottom: 28px;
}
@media (min-width: 1500px) {
  .hero-inner {
    min-height: 630px;
  }
  .hero-copy h1 {
    font-size: 5rem;
  }

  .hero-visual {
    height: 450px;
  }

  .hero-campus {
    height: 380px;
  }
}
@media (max-width: 1150px) {
  .hero-inner {
    gap: 36px;
    min-height: 550px;
  }

  .hero-visual {
    height: 360px;
  }

  .hero-campus {
    height: 300px;
  }

  .hero-sticker {
    right: -10px;
    bottom: 42px;
    padding: 17px;
    font-size: 0.66rem;
  }

  .hero-copy h1 {
    font-size: 4rem;
  }

  .hero-copy .eyebrow {
    font-size: 0.55rem;
  }

  .hero-secondary {
    font-size: 0.7rem;
  }
  .pathway-inner {
    gap: 24px;
  }
  .strip-note {
    font-size: 0.7rem;
  }
  .story-grid {
    gap: 50px;
  }
  .story-copy > h2 {
    font-size: 2.15rem;
  }
}
@media (max-width: 950px) {
  .hero-inner {
    min-height: 540px;
    gap: 25px;
  }
  .hero-copy h1 {
    font-size: 3.4rem;
  }
  .hero-copy > p:not(.eyebrow) {
    font-size: 0.8rem;
  }
  .hero-visual {
    height: 335px;
  }
  .hero-campus {
    height: 280px;
    border-top-left-radius: 75px;
  }
  .hero-sticker {
    right: -5px;
    padding: 15px;
    gap: 9px;
  }
  .hero-sticker > svg {
    width: 22px;
  }
  .hero-footnote {
    margin-top: 27px;
  }
  .hero-copy > .eyebrow {
    font-size: 0.5rem;
    letter-spacing: 0.12em;
  }
  .strip-note {
    display: none;
  }
  .pathway-inner {
    justify-content: space-between;
    gap: 14px;
  }
  .story-grid {
    gap: 36px;
  }
  .story-copy > h2 {
    font-size: 2rem;
  }
  .story-photo > img {
    height: 370px;
  }
}
@media (max-width: 680px) {
  .hero-inner {
    grid-template-columns: 1fr;
    padding-top: 40px;
    padding-bottom: 35px;
    gap: 30px;
  }
  .hero-copy > .eyebrow {
    font-size: 0.55rem;
    margin-bottom: 23px;
  }
  .hero-copy h1 {
    font-size: clamp(3.1rem, 10.6vw, 4.4rem);
    margin-bottom: 23px;
  }
  .hero-copy > p:not(.eyebrow) {
    font-size: 0.87rem;
    max-width: 440px;
  }
  .hero-secondary {
    font-size: 0.74rem;
  }
  .hero-footnote {
    font-size: 0.58rem;
    margin-top: 26px;
  }
  .hero-visual {
    height: auto;
    min-height: 260px;
    margin-top: 8px;
    margin-bottom: 12px;
  }
  .photo-index {
    font-size: 0.48rem;
  }
  .hero-campus {
    height: 215px;
    object-position: center;
    border-radius: 55px 5px 5px 5px;
  }
  .hero-photo-caption {
    font-size: 0.57rem;
    margin-top: 12px;
  }
  .hero-sticker {
    bottom: 50px;
    right: 8px;
    padding: 13px 16px;
    font-size: 0.63rem;
  }
  .pathway-inner {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0;
    padding: 12px 0;
    min-height: 65px;
  }
  .strip-label {
    width: 100%;
    font-size: 0.5rem;
    margin: 0 0 3px;
  }
  .pathway-inner > a {
    font-size: 0.64rem;
    gap: 6px;
  }
  .pathway-inner > a > svg:first-child {
    width: 15px;
  }
  .pathway-inner > a > svg:last-child {
    display: none;
  }
  .college-story {
    padding: 45px 0;
  }
  .story-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .story-photo > img {
    height: 260px;
  }
  .story-copy > h2 {
    font-size: 2.1rem;
  }
  .story-copy > p:not(.eyebrow) {
    font-size: 0.85rem;
  }
  .story-values {
    gap: 10px;
    margin: 20px 0 24px;
  }
  .section-note {
    font-size: 0.69rem;
    margin-top: -10px;
  }
}
@media (max-width: 360px) {
  .hero-copy h1 {
    font-size: 2.9rem;
  }
}
@media print {
  .hero-copy {
    color: #000;
  }
  .home-hero {
    background: #fff;
  }
  .hero-copy p {
    color: #333;
  }
  .hero-copy h1 em {
    color: #333;
  }
}
</style>
