<i18n>
{
  "en": {
    "body": "Nemo would like to add:"
  },
  "el": {
    "body": "εν κατακλείδι, η Nemo θα ήθελε να προσθέσει :"
  },
  "nl": {
    "body": "Nemo wil daar graag aan toevoegen:"
  }
}
</i18n>


<template>
  <h3>{{ $t('body') }}</h3>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 3rem;
  font-style: normal;
  text-align: center;
  width: 100%;
  background: $black;
  padding: 2rem 0;
}
</style>
