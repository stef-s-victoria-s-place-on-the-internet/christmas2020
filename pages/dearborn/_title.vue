<template>
  <div class="dearborn">
    <aside>
      <NuxtLink
        class="list-item"
        v-for="document in documents"
        :key="document._id"
        :to="`/dearborn/${document.title}`"
      >
        {{ document.title }}
      </NuxtLink>
    </aside>
    <div class="content">
      <ActiveUsers :users="users" />
      <div class="editorWrapper">
        <EditorCollab :document="document" />
        <References />
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'

export default {
  async asyncData({ $axios, params }) {
    try {
      const defaultDocument = {
        title: params.title,
        prosemirror: {},
      }

      const documents = await $axios.$get(`/dearborn/all`)
      const document = _.find(documents, (item) => {
        return item.title === params.title
      })

      return {
        documents,
        document: document || defaultDocument,
      }
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      users: this.$store.getters.getCollabUsers(this.$route.params.title),
    }
  },
  mounted() {
    this.users = this.$store.getters.getCollabUsers(this.$route.params.title)
  },
}
</script>

<style lang="scss" scoped>
.dearborn {
  display: grid;
  grid-template-columns: minmax(10ch, 15ch) 1fr;
  gap: 1rem;
  padding: 1rem;

  aside {
    display: flex;
    flex-direction: column;

    .nuxt-link-active,
    .list-item:hover {
      color: $primary;
    }

    .list-item {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      & + .list-item {
        margin-top: 1rem;
      }
    }
  }

  .editorWrapper {
    display: grid;
    grid-template-columns: minmax(40ch, 100ch) minmax(20ch, 40ch);
    gap: 1rem;
  }
}
</style>
