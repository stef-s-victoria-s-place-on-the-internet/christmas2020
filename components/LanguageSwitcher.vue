<template>
  <div>
    <div class="wrapper">
<nuxt-link class="link" :to="switchLocalePath('el')">Ελληνικά</nuxt-link> //
     <nuxt-link class="link" :to="switchLocalePath('en')">English</nuxt-link> //
      <nuxt-link class="link" :to="switchLocalePath('nl')">Nederlands</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
  padding-top: 5rem;
  font-size: 1rem;
}
.link {
  margin: auto;
}
</style>
