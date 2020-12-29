<i18n>
{
  "en": {
    "b5": "And 10-year old “Pending Nickname” Fiat Sedici, reliable transporter of dogs, humans & couches to near-by parks. As well as the disproportionally large Christmas tree that is currently taking over our living room. "
  },
  "el": {
    "b5": "Και το 10χρονο (χωρίς παρατσούκλι) Fiat Sedici, αξιόπιστο μεταφορέα σκύλων, ανθρώπων και καναπέδων σε κοντινά ή μακρινά πάρκα. Εποχιακά μεταφέρει και το δυσανάλογο μεγάλο χριστουγεννιάτικο δέντρο που καταλαμβάνει επί του παρόντος το σαλόνι μας. "
  },
  "nl": {
    "body": "En de 10 jaar oude \"Pending Nickname\" Fiat Sedici, betrouwbare transporteur van honden, mensen & banken naar nabijgelegen parken. Evenals de onevenredig grote kerstboom die op dit moment onze woonkamer overneemt."
  }
}
</i18n>

<template>
  <div class="container">
    <img
      class="tag left"
      src="~/assets/images/christmas-2020/car-with-tree.png"
      alt=""
    />
    <div class="wrapper">
      <div :class="active">
        <p class="dropcap">{{ $t('b5') }}</p>

        <intersect @enter="setEnter()">
          <img
            src="~/assets/images/christmas-2020/car.jpeg"
            alt=""
          />
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

#spacing {
  padding-bottom: 2rem;
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
