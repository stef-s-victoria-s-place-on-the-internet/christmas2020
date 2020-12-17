<template>
  <div class="activeUsers">
    <div class="user" v-for="user in users" :key="user.name">
      <Profile :user="user" picture />
    </div>
  </div>
</template>

<script>
export default {
  props: ['users'],
}
</script>

<style lang="scss" scoped>
  .activeUsers {
    padding-bottom: 1rem;
  }
</style>
