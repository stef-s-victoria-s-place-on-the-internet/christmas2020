<i18n>
{
  "en": {
    "body": "This year our household welcomed 2 new additions:"
  },
  "el": {
    "body": "Φέτος, το νοικοκυριό μας υποδέχτηκε :"
  },
  "nl": {
    "body": "Dit jaar werd ons huishouden verwelkomd:"
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
