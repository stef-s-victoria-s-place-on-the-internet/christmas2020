<template>
  <div>
    <Success :publication="artist.dir" :artist="artist" :customer="customer" />
  </div>
</template>

<script>
import Success from '~/components/publications/S1/payment/success'
import { setMeta, publications } from '~/helpers'
const { karina } = publications

export default {
  components: {
    Success,
  },
  async asyncData({ $axios, error, query }) {
    try {
      const customer = await $axios.$post('/shop/catalog/order-information', {
        id: query.id,
      })

      return {
        customer,
      }
    } catch (err) {
      console.log(err)
    }
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
