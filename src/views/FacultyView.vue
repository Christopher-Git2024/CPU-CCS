<script setup>
import { computed, ref } from 'vue'

import { faculty, facultySource } from '../data/faculty'
import { programs } from '../data/programs'
import { filterFaculty } from '../data/filters'

import FacultyCard from '../components/FacultyCard.vue'
import PageHeading from '../components/PageHeading.vue'
import AppIcon from '../components/AppIcon.vue'

const searchText = ref('')
const selectedProgram = ref('all')

const filteredPeople = computed(() =>
  filterFaculty(faculty, searchText.value, selectedProgram.value),
)

// Preserve cross-listed faculty in every matching program; the staff filter also includes leadership.
const facultyGroups = computed(() => {
  const definitions = [
    { id: 'leadership', name: 'College leadership' },
    { id: 'bsit', name: 'Information Technology' },
    { id: 'bscs', name: 'Computer Science' },
    { id: 'bsdmia', name: 'Digital Media & Interactive Arts' },
    { id: 'blis', name: 'Library & Information Science' },
    { id: 'staff', name: 'College staff' },
  ]
  const visibleGroups = []

  for (const definition of definitions) {
    let showGroup = selectedProgram.value === 'all' || selectedProgram.value === definition.id
    if (selectedProgram.value === 'staff' && definition.id === 'leadership') {
      showGroup = true
    }
    if (!showGroup) {
      continue
    }

    const matchingPeople = []
    for (const person of filteredPeople.value) {
      let belongsToGroup = person.programs.includes(definition.id)
      if (definition.id === 'leadership') {
        belongsToGroup = person.group === 'Leadership'
      }
      if (definition.id === 'staff') {
        belongsToGroup = person.group === 'Staff'
      }
      if (belongsToGroup) {
        matchingPeople.push(person)
      }
    }

    if (matchingPeople.length > 0) {
      visibleGroups.push({
        id: definition.id,
        name: definition.name,
        people: matchingPeople,
      })
    }
  }

  return visibleGroups
})

function resetFilters() {
  searchText.value = ''
  selectedProgram.value = 'all'
}
</script>
<template>
  <PageHeading
    eyebrow="Faculty & staff"
    title="The people who make it possible."
    description="Meet the educators, coordinators, and staff listed in the college’s published directory."
  />
  <section class="section container directory-section">
    <div class="filter-toolbar">
      <label class="search-field"
        ><AppIcon name="search" :size="20" /><span class="sr-only"
          >Search faculty by name or role</span
        >
        <input v-model="searchText" type="search" placeholder="Search by name or role…" /></label
      ><label class="select-field"
        ><span class="sr-only">Filter faculty by program</span>
        <select v-model="selectedProgram">
          <option value="all">All programs & staff</option>
          <option v-for="program in programs" :key="program.id" :value="program.id">
            {{ program.code }}
          </option>
          <option value="staff">Leadership & staff</option>
        </select></label
      >
    </div>
    <p class="results-count" aria-live="polite">
      {{ filteredPeople.length }}
      {{ filteredPeople.length === 1 ? 'person' : 'people' }} found
      <span v-if="selectedProgram === 'all'"
        >· Faculty may appear under more than one program.</span
      >
    </p>
    <div v-if="!filteredPeople.length" class="empty-state">
      <AppIcon name="search" :size="36" />
      <h2>No matching people</h2>
      <p>Try another name or choose a different program.</p>
      <button class="button button-navy" @click="resetFilters">Reset filters</button>
    </div>
    <section v-for="group in facultyGroups" :key="group.id" class="faculty-group">
      <h2>
        {{ group.name }} <span>{{ group.people.length }}</span>
      </h2>
      <div class="faculty-grid">
        <FacultyCard v-for="person in group.people" :key="person.id" :person="person" />
      </div>
    </section>
  </section>
</template>

<style scoped>
.directory-notice {
  margin: 0 0 34px;
}
.select-field {
  width: 245px;
  max-width: 100%;
}
.select-field select {
  font-size: 0.83rem;
  min-height: 48px;
}
.faculty-group {
  margin: 40px 0 60px;
}
.faculty-group h2 {
  font-size: 1.6rem;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 15px;
}
.faculty-group h2 span {
  font-size: 0.75rem;
  padding: 6px 10px;
  background: var(--cream);
  border-radius: 4px;
  color: var(--muted);
}
@media (max-width: 680px) {
  .search-field,
  .select-field {
    width: 100%;
  }
  .directory-notice {
    margin-top: 0;
  }
  .faculty-group {
    margin: 30px 0 40px;
  }
  .faculty-group h2 {
    font-size: 1.35rem;
    line-height: 1.4;
    gap: 12px;
  }
}
</style>
