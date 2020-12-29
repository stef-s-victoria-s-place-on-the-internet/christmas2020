<i18n>
{
  "en": {
    "body": "On some personal news :"
  },
  "el": {
    "body": "Στη σφαίρα των προσωπικών νέων:"
  },
  "nl": {
    "body": "Op wat persoonlijk nieuws:"
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
