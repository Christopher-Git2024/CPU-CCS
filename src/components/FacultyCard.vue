<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  person: { type: Object, required: true },
})

const imageFailed = ref(false)

// Use up to two initials, skipping short name parts such as common suffixes.
const initials = computed(() => {
  const nameParts = props.person.name.split(' ')
  let value = ''
  for (const part of nameParts) {
    if (part.length > 2 && value.length < 2) {
      value += part[0]
    }
  }
  return value
})

function showInitials() {
  imageFailed.value = true
}
</script>

<template>
  <article class="faculty-card">
    <div class="faculty-photo">
      <img
        v-if="!imageFailed"
        :src="'/images/faculty-' + props.person.id + '.webp'"
        :alt="props.person.name"
        loading="lazy"
        @error="showInitials"
      />
      <span v-else class="avatar-fallback" aria-label="Photograph unavailable">{{ initials }}</span>
    </div>
    <div class="faculty-info">
      <span class="eyebrow">{{ props.person.group }}</span>
      <h3>{{ props.person.name }}</h3>
      <p v-if="props.person.qualification" class="qualification">
        {{ props.person.qualification }}
      </p>
      <p class="faculty-role">{{ props.person.role }}</p>
    </div>
  </article>
</template>
