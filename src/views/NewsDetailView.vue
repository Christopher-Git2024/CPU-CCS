<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { news, formatDate } from '../data/news'

import AppIcon from '../components/AppIcon.vue'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()

// Resolve the URL ID against the archive; null selects the not-found view.
const article = computed(() => news.find((item) => item.id === route.params.id) ?? null)
</script>
<template>
  <article v-if="article" class="article-page container">
    <RouterLink to="/news" class="text-link back-link">← Back to news & events</RouterLink>
    <div class="article-heading">
      <p class="eyebrow">{{ article.category }} / FROM THE ARCHIVE</p>
      <h1>{{ article.title }}</h1>
      <p>
        <time :datetime="article.date">{{ formatDate(article.date) }}</time> · CPU College of
        Computer Studies
      </p>
    </div>
    <figure class="article-image">
      <img :src="article.image" :alt="article.imageAlt" />
      <figcaption>Original college announcement image · {{ formatDate(article.date) }}</figcaption>
    </figure>
    <div class="article-body">
      <p class="article-lede">{{ article.excerpt }}</p>
      <p v-for="paragraph in article.paragraphs" :key="paragraph">
        {{ paragraph }}
      </p>
      <aside class="notice">
        <strong>Archived college announcement</strong>
        <p>
          Summarized from “{{ article.originalTitle }}.” This article preserves its original date
          and is not a current announcement.
        </p>
        <a :href="article.source" target="_blank" rel="noopener" class="text-link"
          >Read the original announcement <AppIcon name="external" :size="17"
        /></a>
      </aside>
    </div>
  </article>
  <NotFoundView v-else />
</template>

<style scoped>
.article-page {
  padding-top: 35px;
  padding-bottom: 85px;
}
.back-link {
  font-size: 0.75rem;
}
.article-heading {
  max-width: 850px;
  margin: 55px auto 35px;
}
.article-heading h1 {
  font-size: clamp(2.4rem, 4.7vw, 3.9rem);
  margin-bottom: 25px;
}
.article-heading > p:last-child {
  font-size: 0.76rem;
  color: var(--muted);
}
.article-image {
  max-width: 850px;
  margin: 0 auto;
}
.article-image img {
  width: 100%;
  max-height: 650px;
  object-fit: contain;
  background: var(--cream);
  border-radius: 4px;
}
.article-body {
  max-width: 730px;
  margin: 40px auto 0;
}
.article-body > p {
  color: #526476;
  font-size: 0.95rem;
}
.article-body .article-lede {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--navy);
}
@media (max-width: 680px) {
  .article-page {
    padding-top: 25px;
    padding-bottom: 55px;
  }
  .article-heading {
    margin-top: 35px;
  }
  .article-heading h1 {
    font-size: 2.45rem;
  }
  .article-heading > p:last-child {
    font-size: 0.67rem;
  }
  .article-body {
    margin-top: 27px;
  }
  .article-body > p {
    font-size: 0.86rem;
  }
  .article-body .article-lede {
    font-size: 1.03rem;
  }
}
</style>
