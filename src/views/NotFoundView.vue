<template>
  <section class="container empty-state not-found">
    <span class="eyebrow">404 / PAGE NOT FOUND</span>
    <h1>A little off the path?</h1>
    <p>The page you’re looking for isn’t here. Let’s get you back to the college.</p>
    <RouterLink to="/" class="button button-navy">Return home →</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  margin: 70px auto;
  padding: 80px 25px;
}
.not-found h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
@media (max-width: 680px) {
  .not-found {
    margin: 40px auto;
  }
  .not-found h1 {
    font-size: 2.4rem;
  }
}
</style>
