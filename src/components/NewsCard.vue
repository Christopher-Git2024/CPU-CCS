<script setup>
import { formatDate } from '../data/news'

import AppIcon from './AppIcon.vue'

defineProps({
  article: { type: Object, required: true },
})
</script>

<template>
  <article class="news-card">
    <RouterLink :to="'/news/' + article.id" class="news-image-link" :aria-label="article.title"
      ><img :src="article.image" :alt="article.imageAlt" loading="lazy" /><span class="image-tag">{{
        article.category
      }}</span></RouterLink
    >
    <div class="news-card-content">
      <p class="news-date">
        <time :datetime="article.date">{{ formatDate(article.date) }}</time
        ><span>Archive</span>
      </p>
      <h3>
        <RouterLink :to="'/news/' + article.id">{{ article.title }}</RouterLink>
      </h3>
      <p>{{ article.excerpt }}</p>
      <RouterLink :to="'/news/' + article.id" class="text-link"
        >Read story <AppIcon :size="18"
      /></RouterLink>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  min-width: 0;
}
.news-image-link {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 4px;
  background: #e8eeef;
}
.news-image-link img {
  width: 100%;
  aspect-ratio: 1.75;
  object-fit: cover;
  transition: transform 0.35s;
}
.news-image-link:hover img {
  transform: scale(1.04);
}
.image-tag {
  position: absolute;
  left: 14px;
  bottom: 14px;
  background: #fff;
  color: var(--navy);
  padding: 7px 11px;
  border-radius: 2px;
  font-size: 0.6rem;
  font-weight: 650;
  box-shadow: 0 1px 8px #0001;
}
.news-card-content {
  padding-top: 19px;
}
.news-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #71808c;
  font-size: 0.63rem;
  margin-bottom: 13px;
}
.news-date > span {
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8b6a2f;
}
.news-card h3 {
  font-size: 1.25rem;
  line-height: 1.35;
  letter-spacing: -0.025em;
  margin-bottom: 13px;
}
.news-card h3 a:hover {
  color: #996e2b;
}
.news-card-content > p:not(.news-date) {
  font-size: 0.79rem;
  color: var(--muted);
}
.news-card .text-link {
  font-size: 0.74rem;
  margin-top: 5px;
}
@media (max-width: 950px) {
  .news-card h3 {
    font-size: 1.05rem;
  }
  .news-card-content > p:not(.news-date) {
    font-size: 0.75rem;
  }
}
@media (max-width: 680px) {
  .news-image-link img {
    aspect-ratio: 1.8;
  }
  .news-card h3 {
    font-size: 1.3rem;
  }
  .news-card-content > p:not(.news-date) {
    font-size: 0.86rem;
  }
  .news-card-content {
    padding-top: 16px;
  }
  .news-date {
    font-size: 0.67rem;
  }
  .news-card .text-link {
    font-size: 0.78rem;
  }
}
</style>
