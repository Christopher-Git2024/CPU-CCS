<script setup>
import { programs } from '../data/programs'
import { news } from '../data/news'
import imageCredits from '../data/imageCredits.js'
import PageHeading from '../components/PageHeading.vue'

// Consolidate institutional, program, and news references for the page's source list.
const sources = [
  { title: 'College history', url: 'https://ccs.cpu.edu.ph/history/' },
  {
    title: 'Vision, mission & quality policy',
    url: 'https://ccs.cpu.edu.ph/vision-and-mission/',
  },
  {
    title: 'Academic program objectives',
    url: 'https://ccs.cpu.edu.ph/academic-programs/',
  },
  {
    title: 'Faculty & staff directory',
    url: 'https://ccs.cpu.edu.ph/faculty-and-staff/',
  },
  {
    title: 'College contact details',
    url: 'https://ccs.cpu.edu.ph/contact-us/',
  },
  { title: 'CPU campus tour', url: 'https://cpu.edu.ph/about-us/campus-tour/' },
]

for (const program of programs) {
  sources.push({ title: program.name, url: program.source })
}
for (const article of news) {
  sources.push({ title: article.originalTitle, url: article.source })
}
</script>
<template>
  <PageHeading
    eyebrow="Sources & credits"
    title="Built with care. Grounded in sources."
    description="The information and visual references behind this educational website redesign."
  />
  <section class="section container sources-content">
    <div class="notice">
      <strong>About this project</strong>
      <p>
        This is a redesign prototype, not an official university publication. Designed and developed
        by Amancio, Ang, and Lim.
      </p>
    </div>
    <h2>College information</h2>
    <p>
      Accessed October 19, 2026. Text has been summarized for readability. Published pages may
      contain older information; current curricula, appointments, and contact details should be
      confirmed with CCS.
    </p>
    <ol class="source-list">
      <li v-for="source in sources" :key="source.url">
        <a :href="source.url" target="_blank" rel="noopener">{{ source.title }} ↗</a
        ><span>Central Philippine University / College of Computer Studies</span>
      </li>
    </ol>
    <h2>Content notes</h2>
    <ul class="check-list">
      <li>News items retain their original 2021 publication dates.</li>
      <li>Program topics summarize published material, not a current official prospectus.</li>
      <li>
        Faculty groups use only explicitly published associations. Coordinator listings do not
        establish current teaching assignments.
      </li>
      <li>
        Some career examples are editorial interpretations of program competencies and are labeled
        accordingly.
      </li>
      <li>
        Vision and mission content is paraphrased; the official wording is available at the source.
      </li>
    </ul>
    <h2>Images & identity</h2>
    <p>
      College and university photographs, portraits, society emblems, and logos are credited to CPU
      / CCS. They are included as reference material for this educational redesign; no transfer of
      ownership or broader reuse permission is claimed.
    </p>
    <details class="image-credits">
      <summary>View individual image sources ({{ imageCredits.length }})</summary>
      <ul>
        <li v-for="image in imageCredits" :key="image.file">
          <a :href="image.source" target="_blank" rel="noopener">{{ image.label }} ↗</a>
        </li>
      </ul>
    </details>
    <h2>Project references</h2>
    <p>
      CCS 3031 Final Project Guidelines; CCS 3031 Final Website Redesign Grading Rubric; and the
      Canvas assignment screenshot supplied by the student.
    </p>
  </section>
</template>

<style scoped>
.sources-content {
  max-width: 900px;
}
.sources-content > .notice {
  margin-top: 0;
}
.sources-content h2 {
  font-size: 1.65rem;
  margin: 42px 0 20px;
}
.sources-content > p {
  font-size: 0.9rem;
  color: var(--muted);
}
.source-list {
  padding-left: 20px;
}
.source-list li {
  padding: 12px 0;
  font-size: 0.85rem;
  border-bottom: 1px solid var(--border);
}
.source-list a {
  font-weight: 600;
}
.source-list a:hover {
  text-decoration: underline;
}
.source-list span {
  font-size: 0.71rem;
  color: var(--muted);
  display: block;
  margin-top: 3px;
}
.image-credits {
  padding: 20px;
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 0.83rem;
}
.image-credits summary {
  cursor: pointer;
  font-weight: 600;
}
.image-credits li {
  padding: 5px 0;
}
.image-credits a:hover {
  text-decoration: underline;
}
@media (max-width: 680px) {
  .sources-content h2 {
    font-size: 1.5rem;
  }
  .sources-content > p {
    font-size: 0.84rem;
  }
  .source-list li {
    font-size: 0.79rem;
  }
  .source-list span {
    font-size: 0.66rem;
  }
}
</style>
