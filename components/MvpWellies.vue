<i18n>
{
  "en": {
    "body": "This season’s shoutout goes out to wellies! By far the best purchase of the season, they always have your toes’ back, independently of wether you are hiking a mudpath or just walking to work!"
  },
  "el": {
    "body": "Ο MVP της χρονιάς είναι ξεκάθαρα οι γαλότσες! Με διαφορά η καλύτερη αγορά της σεζόν, συμφωνούν ομόφωνα πόδια, κάλτσες και αστράγαλοι! πλέον δεν βγαινεις απο το σπίτι χωρίς ένα ζευγάρι, ανεξάρτητα από το αν κάνεις πεζοπορία μέσα στη λάσπη ή απλά περπατάς στη δουλειά. Και το 2021 οτι βρεξει ας κατεβασει!"
  },
  "nl": {
    "body": "De pluim van dit seizoen gaat uit naar de regenlaarzen! Verreweg de beste aankoop van het seizoen, ze houden altijd je tenen droog, ongeacht of je een modderpad wandelt of gewoon naar je werk loopt!"
  }
}
</i18n>

<template>
  <div class="container">
    <img
    id="troph"
      class="tag left"
      src="~/assets/images/christmas-2020/throphy.png"
      alt=""
    />
    <img
      class="tag right"
      src="~/assets/images/christmas-2020/mvp-title.png"
      alt=""
    />
    <div class="wrapper">
      <div :class="active">
        <p class="dropcap">{{ $t('body') }}</p>
        <intersect @enter="setEnter()">
          <div class="sidebyside">
            <img src="~/assets/images/christmas-2020/2020-66.jpg" alt="" />
            <img src="~/assets/images/christmas-2020/2020-35.jpg" alt="" />
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

#troph {
  transform: rotate(-30deg);
  margin-left: -40px;
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
