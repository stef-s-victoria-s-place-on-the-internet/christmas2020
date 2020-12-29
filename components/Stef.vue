<i18n>
{
  "en": {
    "b1": "Stef has officially settled on his favorite tree, the beech tree. Although admittedly a tough decision, Stef’s really appreciates how leafy their leafs look, making the European beech tree #1 in Stef’s heart."
  },
  "el": {
    "b1": "Ο Στέφ αποφάσισε επίσημα πως το αγαπημένο του δέντρο είναι η οξιά. Αν και είναι ομολογουμένως μια δύσκολη απόφαση, ο Στέφ δεν μπόρεσε να παραβλέψει πως πιο φύλλο απ το φύλλο της οξιάς δεν έχει! άρα πως γίνεται κάποιο άλλο δέντρο να είναι το πιο αγαπημένο του ;!"
  },
  "nl": {
    "body": "Stef heeft zich officieel gevestigd op zijn favoriete boom, de beuk. Hoewel het een moeilijke beslissing is, waardeert Stef het echt hoe bladrijk hun bladeren eruit zien, waardoor de Europese beuk nummer 1 in Stef's hart is."
  }
}
</i18n>

<template>
  <div class="container">
    <img
      id="garland-tree"
      class="tag left"
      src="~/assets/images/christmas-2020/garland-gi.png"
      alt=""
    />
    <img
      id="garland-tree"
      class="tag right"
      src="~/assets/images/christmas-2020/garland-gi.png"
      alt=""
    />
    <div class="wrapper">
      <div :class="active">
        <p class="dropcap">{{ $t('b1') }}</p>
        <intersect @enter="setEnter()">
          <div class="sidebyside">
            <img src="~/assets/images/christmas-2020/2020-34.jpg" alt="" />
            <img src="~/assets/images/christmas-2020/2020-65.jpg" alt="" />
          </div>
        </intersect>
      </div>
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

  max-width: 60ch;
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

#garland-tree {
  margin: 8rem 0 0 0;
  transform: rotate(-45deg);
}

.wrapper {
  /* max-width: 60ch;
  margin: 10rem auto; */
  position: relative;
  z-index: 20;
  background: $black;
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
