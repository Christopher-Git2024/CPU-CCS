<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
})
</script>

<template>
  <section class="page-heading">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <RouterLink to="/">Home</RouterLink><span>/</span
        ><span aria-current="page">{{ eyebrow }}</span>
      </nav>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="page-description">{{ description }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.page-heading {
  background: var(--cream);
  padding: 30px 0 62px;
  border-bottom: 1px solid #e4e7e6;
}
.page-heading h1 {
  max-width: 900px;
  font-size: clamp(2.6rem, 4.5vw, 3.9rem);
  margin-bottom: 20px;
}
.page-description {
  max-width: 650px;
  font-size: 1rem;
  color: var(--muted);
  margin-bottom: 0;
}
.page-heading .eyebrow {
  color: #98702e;
}
@media (max-width: 680px) {
  .page-heading {
    padding: 24px 0 40px;
  }
  .page-heading h1 {
    font-size: 2.55rem;
  }
  .page-description {
    font-size: 0.9rem;
  }
}
@media print {
  .page-heading {
    padding: 20px 0;
    background: #fff;
  }
}
</style>
