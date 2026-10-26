<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  program: { type: Object, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <RouterLink
    :to="'/programs/' + program.id"
    class="program-card"
    :style="{ '--accent': program.color, '--tint': program.light }"
    ><div class="program-card-top">
      <span class="program-icon"><AppIcon :name="program.icon" :size="29" /></span
      ><span class="card-number">0{{ index + 1 }}</span>
    </div>
    <span class="program-code">{{ program.code }}</span>
    <h3>{{ program.shortName }}</h3>
    <p>{{ program.intro }}</p>
    <div class="card-bottom"><span>Explore program</span><AppIcon name="external" :size="22" /></div
  ></RouterLink>
</template>
