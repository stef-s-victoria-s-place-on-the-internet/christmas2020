<template>
  <div class="wrapper">
      <LanguageSwitcher />
    <img
      src="~/assets/images/christmas-2020/seasonsgreetings+hny-title.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 80ch;
  margin: auto;
}
.newyear {
}

.greetings {
}

.greetings,
.newyear {
  margin: auto;
  padding: 1rem;
  border: 1px solid;
  position: relative;
  background-color: $black;
  img {
    margin: auto;
  }
}

img {
  width: 100%;
}

h1 {
  text-align: center;
  display: block;
  width: 100%;
  font-family: 'Merriweather';
  font-size: 3rem;
}
</style>
