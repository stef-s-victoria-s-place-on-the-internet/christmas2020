<template>
  <div class="dearborn">
    <button>
      <NuxtLink :to="url">create new document</NuxtLink>
    </button>
  </div>
</template>

<script>
import slugify from 'slugify'
import Editor from '~/components/Dearborn/Editor'

const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const uuid = new Intl.DateTimeFormat('en-US', options).format(new Date())
const slug = slugify(uuid, {
  replacement: '-',
  lower: true,
})
const url = `/dearborn/${slug}`

export default {
  data() {
    return {
      url,
    }
  },
  components: {
    Editor,
  },
}
</script>

<style lang="scss" scoped>
.dearborn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  @include subheader;
  padding: 0.75rem 1rem;
  background: $black;
  color: $white;
  justify-self: flex-end;
  appearance: none;
  border: none;
  border-radius: 0.375rem;
  opacity: 1;
  transition: opacity 0.15s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  &.active {
    opacity: 0.6;
  }

  & + button {
    margin-left: 0.2rem;
  }
}
</style>
