<template>
  <div class="dearborn">
    <div class="activeUsers">
      <div class="user" v-for="user in users" :key="user.name">
        {{ user.name }}
      </div>
    </div>
    <div class="editorWrapper">
      <EditorCollab :document="document" />
      <References />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    try {
      const defaultDocument = {
        title: params.title,
        prosemirror: {},
      }
      const document = await $axios.$post(`/dearborn/${params.title}`)


      return {
        document: document || defaultDocument,
      }
    } catch (err) {
      console.error(err);
    }
  },
  data() {
    return {
      users: this.$store.getters.getCollabUsers(this.$route.params.title)
    }
  },
  mounted() {
    this.users = this.$store.getters.getCollabUsers(this.$route.params.title)
    console.log('page users', this.users)
  }
}
</script>

<style lang="scss" scoped>
.dearborn {
  padding: 1rem;

  .editorWrapper {
    display: grid;
    grid-template-columns: minmax(40ch, 100ch) minmax(20ch, 40ch);
    gap: 1rem;
  }
}
</style>
