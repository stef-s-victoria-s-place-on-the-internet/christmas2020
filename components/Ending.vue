<template>
  <div class="container">
    <div id="borkWrapper">
      <img
        src="~/assets/images/christmas-2020/bork-bubble.png"
        id="bork"
        alt=""
      />
      <img src="~/assets/images/christmas-2020/bork2.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'

export default {
  name: 'MvpWellies',
  components: { Intersect },
  data() {
    return {
      active: 'geeks',
    }
  },
  methods: {
    setEnter() {
      this.active = 'active geeks'
    },
    setLeave() {
      this.active = 'geeks'
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 10rem auto;
  margin-top: 300px;

  max-width: 100ch;
  position: relative;
}
$tagWidth: 300;
$pos: $tagWidth / 2 + 0px;
.tag {
  position: absolute;
  top: -$pos;
  width: $tagWidth + 0px;
  z-index: 10;

  &.left {
    left: -$pos;
  }
  &.right {
    right: -$pos;
  }
}
#borkWrapper {
  position: relative;
  max-width: 500px;
  margin: auto;

  #bork {
    position: absolute;
    top: -300px;
    right: -130px;
    transform: rotate(20deg);
  }
}

.wrapper {
  /* max-width: 60ch;
  margin: 10rem auto; */
  position: relative;
  z-index: 20;
  display: block;
  padding: 2rem;
  /* border: 1px solid; */

  .dropcap:first-letter {
    float: left;
    font-size: 6rem;
    line-height: 0.65;
    margin: 0.1em 0.2em 0.1em 0;
  }

  .closing {
    margin-top: 2rem;
  }

  .sidebyside {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;
  }

  img {
    /* width: 100%; */
    margin-top: 2rem;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    div {
      list-style: none;
      margin: 0;

      &:nth-of-type(odd) {
        padding-right: 2rem;
        text-align: right;
      }

      &:nth-of-type(even) {
        padding-left: 2rem;
        text-align: left;
      }
    }
  }
}

.geeks {
  padding: 2rem;
  width: 100%;
}

.geeks::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 0;
  background: transparent;
  border: 1px solid transparent;
}

.geeks.active::before {
  animation: animate 1.5s linear forwards;
}

@keyframes animate {
  0% {
    width: 0;
    height: 0;
    border-top-color: white;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  50% {
    width: 100%;
    height: 0;
    border-top-color: white;
    border-right-color: white;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  100% {
    width: 100%;
    height: 100%;
    border-top-color: white;
    border-right-color: white;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
}

.geeks::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 0;
  background: transparent;
  border: 1px solid transparent;
}

.geeks.active::after {
  animation: animates 1.5s linear forwards;
}

@keyframes animates {
  0% {
    width: 0;
    height: 0;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: white;
  }

  50% {
    width: 0;
    height: 100%;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: white;
    border-left-color: white;
  }

  100% {
    width: 100%;
    height: 100%;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: white;
    border-left-color: white;
  }
}
</style>
