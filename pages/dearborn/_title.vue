<template>
  <div class="dearborn">
    <EditorCollab :document="document" />
  </div>
</template>

<script>
import EditorCollab from '~/components/Dearborn/EditorCollab'

export default {
  components: {
    EditorCollab,
  },
  async asyncData({$axios, params}) {
    try {
      const defaultDocument = {
        title: params.title,
        prosemirror: {},
      }
      const document = await $axios.$post(`/dearborn/${params.title}`)


      return {
        document: document || defaultDocument
      }
    } catch (err) {
      console.error(err);
    }
  }
}
</script>

<style lang="scss">

</style>
