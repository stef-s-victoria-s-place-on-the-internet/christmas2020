<template>
  <div>
    <Form :publication="artist.dir" :artist="artist" />
  </div>
</template>

<script>
import Form from '~/components/publications/S1/payment/form'
import { setMeta, publications } from '~/helpers'
const { karina } = publications

export default {
  components: {
    Form,
  },
  data() {
    return {
      ...karina,
      artist: karina,
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
    }
  },
}
</script>
