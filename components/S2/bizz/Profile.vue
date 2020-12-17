<template>
  <div class="profile">
    <img
      v-if="Boolean(picture)"
      :src="user.picture"
      referrerpolicy="no-referrer"
      alt="user profile"
    />
    <div v-if="Boolean(name)" class="name">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    name: {
      type: Boolean,
      default: false
    },
    picture: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>
.profile {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  align-items: center;
  gap: 1rem;
}
img {
  border-radius: 100%;
  padding: 0.2rem;
  border: 1px solid;
  width: 100%;
}
</style>
