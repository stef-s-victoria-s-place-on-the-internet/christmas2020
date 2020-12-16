<template>
  <div class="dearborn">
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
        document: document || defaultDocument
      }
    } catch (err) {
      console.error(err);
    }
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
