<script setup>
import { computed, ref } from 'vue'

import { news } from '../data/news'
import { filterNews } from '../data/filters'

import PageHeading from '../components/PageHeading.vue'
import NewsCard from '../components/NewsCard.vue'
import AppIcon from '../components/AppIcon.vue'

const searchText = ref('')
const selectedCategory = ref('All stories')

// Match article.category values; "All stories" is the shared filter's no-category sentinel.
const categories = ['All stories', 'Community', 'Achievements', 'Careers']

const results = computed(() => filterNews(news, searchText.value, selectedCategory.value))

function resetFilters() {
  searchText.value = ''
  selectedCategory.value = 'All stories'
}

function selectCategory(category) {
  selectedCategory.value = category
}
</script>
<template>
  <PageHeading
    eyebrow="News & events"
    title="Stories that connect our community."
    description="Milestones, partnerships, and achievements from the college’s published archive."
  />
  <section class="section container">
    <div class="filter-toolbar news-filters">
      <div class="filter-chips" role="group" aria-label="Filter stories by category">
        <button
          v-for="item in categories"
          :key="item"
          @click="selectCategory(item)"
          :class="{ selected: selectedCategory === item }"
          :aria-pressed="selectedCategory === item"
        >
          {{ item }}
        </button>
      </div>
      <label class="search-field"
        ><AppIcon name="search" :size="19" /><span class="sr-only">Search news stories</span>
        <input type="search" v-model="searchText" placeholder="Search stories…"
      /></label>
    </div>
    <p class="results-count" aria-live="polite">
      {{ results.length }} {{ results.length === 1 ? 'story' : 'stories' }} · Archive / 2021
    </p>
    <div v-if="results.length" class="news-grid">
      <NewsCard v-for="article in results" :key="article.id" :article="article" />
    </div>
    <div v-else class="empty-state">
      <AppIcon name="search" :size="36" />
      <h2>No stories found</h2>
      <p>Try a different search or view all categories.</p>
      <button class="button button-navy" @click="resetFilters">Clear filters</button>
    </div>
    <div class="event-note">
      <div class="event-symbol"><AppIcon name="clock" :size="30" /></div>
      <div>
        <h2>Looking for upcoming events?</h2>
        <p>
          No current event schedule has been verified for this prototype. Contact the college for
          the latest announcements.
        </p>
      </div>
      <RouterLink to="/contact" class="text-link">Contact CCS <AppIcon :size="18" /></RouterLink>
    </div>
  </section>
</template>

<style scoped>
.filter-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filter-chips button {
  background: var(--cream);
  padding: 11px 16px;
  border-radius: 4px;
  font-size: 0.74rem;
  border: 1px solid transparent;
  color: var(--navy);
}
.filter-chips button:hover {
  border-color: var(--navy);
}
.filter-chips button.selected {
  background: var(--navy);
  color: #fff;
}
.news-filters .search-field {
  width: 265px;
}
.event-note {
  display: flex;
  gap: 24px;
  align-items: center;
  background: var(--cream);
  padding: 32px;
  border-radius: 5px;
  margin-top: 60px;
}
.event-note h2 {
  font-size: 1.35rem;
  margin-bottom: 8px;
}
.event-note p {
  font-size: 0.81rem;
  max-width: 680px;
  color: var(--muted);
  margin: 0;
}
.event-symbol {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8e9df;
  color: #8b733e;
  border-radius: 50%;
  flex-shrink: 0;
}
.event-note > .text-link {
  margin-left: auto;
  white-space: nowrap;
}
@media (max-width: 950px) {
  .event-note {
    flex-wrap: wrap;
  }
  .event-note > .text-link {
    margin-left: 84px;
  }
  .news-filters {
    align-items: flex-start;
    flex-direction: column;
  }
  .news-filters .search-field {
    width: 100%;
  }
}
@media (max-width: 680px) {
  .filter-chips {
    gap: 6px;
  }
  .filter-chips button {
    font-size: 0.65rem;
    padding: 10px 12px;
  }
  .event-note {
    padding: 25px;
    gap: 18px;
    margin-top: 40px;
  }
  .event-note h2 {
    font-size: 1.2rem;
  }
  .event-note p {
    font-size: 0.77rem;
  }
  .event-symbol {
    width: 45px;
    height: 45px;
  }
  .event-symbol svg {
    width: 23px;
  }
  .event-note > .text-link {
    margin: 0;
    font-size: 0.78rem;
  }
}
</style>
