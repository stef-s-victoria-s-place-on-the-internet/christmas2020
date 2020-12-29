<template>
  <div class="body">
      <Block1 />
    <main class="home-wrapper">
      <Whishes />
      <Garland />
      <MvpWellies />
      <Goals2020 />
      <SubHeader />
      <Stef />
      <Victoria />
      <SubHeaderHouse />
      <Nemo />
      <Fiat />
      <SubHeaderForth />
      <Park />
      <GarlandRed />
      <SubHeaderMisc />
      <Hightlight1 />
      <SubHeaderBork />
      <Ending />
    </main>
    <Fin />
  </div>
</template>

<script>
export default {
  data() {
    return {
      child: {},
    }
  },
}
</script>

<style lang="scss" scoped>
.body {
  background: url('~assets/images/christmas-2020/background-small.png') repeat;
  background-size: 300px;
  background-color: $black;
  padding: 0 2rem;
  padding-bottom: 300px;
}

.home-wrapper {
  background: url('~assets/images/christmas-2020/lines copy.png') repeat-y
    center;
}

.starlight {
  font-family: 'Starlight', serif;
  font-weight: normal;
  font-size: 10em;
  line-height: 0.6em;
}

.merienda {
  font-family: 'Merienda', cursive;
  font-size: 3.8em;
  line-height: 0.7em;
  font-weight: 300;
}

.parisienne {
  font-family: 'Parisienne', cursive;
  font-size: 69px;
}


</style>
