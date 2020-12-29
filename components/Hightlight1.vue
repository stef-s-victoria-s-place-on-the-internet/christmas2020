<i18n>
{
  "en": {
    "li1": "BBC 2 Monday Quiz Nights",
    "li2": "This killer lasagna recipe (click here)",
    "li3": "Nemo recent interest in actually fetching",
    "li4": "Tea Hat collaboration across time with Joke Kors. Credits as follows:",
    "li4-1": "quilt design & like practically all the quilting: Joke Kors",
    "li4-2": "teahat design & amateur sewing: Victoria Douka-Doukopoulou",
    "li4-3": "producer & art director & assistant quilter: Stef Kors",
    "li5": "This homemade picture of a lighting strike ",
    "li6": "Getting a Nintendo Switch the day before the 2nd lockdown was announced.",
    "li7": "Transporting an actual TV from Greece to The Netherlands with no scratches ",
    "li8": "Another year of keeping the ferns alive"
  },
  "el": {
    "body": "A few days late  & few days early, we are sending this little card your way to wish you the warmest wishes we could come up with! May your hot chocolate never go cold on you and tight satisfying hugs from friends and loved soon be on their way!",
    "closing": "We hope 2021 treats us all better, because 2020 didn’t play nice at all."
  },
  "nl": {
    "body": "A few days late  & few days early, we are sending this little card your way to wish you the warmest wishes we could come up with! May your hot chocolate never go cold on you and tight satisfying hugs from friends and loved soon be on their way!",
    "closing": "We hope 2021 treats us all better, because 2020 didn’t play nice at all."
  }
}
</i18n>

<template>
  <div class="container">
    <div class="wrapper">
      <div :class="active">
        <div class="list">
          <div>
            {{ $t('li1') }}
          </div>
          <div>
            <a
              href="https://www.jamieoliver.com/recipes/pasta-recipes/jamie-s-classic-family-lasagne/"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $t('li2') }}
            </a>
          </div>
          <div>{{ $t('li3') }}</div>
          <div>
            {{ $t('li4') }}
            <span class="credits">
              {{ $t('li4-1') }} <br />
              {{ $t('li4-2') }} <br />
              {{ $t('li4-3') }}
            </span>
            <img src="~/assets/images/christmas-2020/2020-16-2.jpg" alt="" />
          </div>
          <div>
            {{ $t('li5') }}
            <img src="~/assets/images/christmas-2020/2020-1.jpg" alt="" />
          </div>

          <div>{{ $t('li6') }}
            <img src="~/assets/images/christmas-2020/IMG_7110.JPG" alt="" />

          </div>
          <div>
            <a
              href="https://www.jamieoliver.com/recipes/pasta-recipes/jamie-s-classic-family-lasagne/"
              target="_blank"
              rel="noopener noreferrer"
              >{{ $t('li7') }}
            </a>
          </div>
          <div>
            {{ $t('li8') }}
            <img src="~/assets/images/christmas-2020/2020-7.jpg" alt="" />
          </div>
        </div>
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

.credits {
  font-size: 1.2rem;
  display: block;
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
        margin-top: 10rem;

        &:first-of-type {
        }
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
