<i18n>
{
  "en": {
    "header": "2020",
    "goals": "Goals",
    "change": "Not much has changed",
    "cluster": "What a clusterfuck!"
  },
  "el": {
    "header": "2020",
    "goals": "στόχοι",
    "change": "περίπου τα ίδια",
    "cluster": "τι στο διάολο!"
  },
  "nl": {
    "header": "2020",
    "goals": "Goede Voornemens",
    "change": "Er is niet veel veranderd",
    "cluster": "Wat een bende!"
  }
}
</i18n>

<template>
  <div class="wrapper">
    <div :class="active">
      <img src="~/assets/images/christmas-2020/2020-red.png" alt="" />
      <intersect @enter="setEnter()">
        <vue-typed-js
          :strings="[$t('goals'), $t('change'), $t('cluster')]"
          :loop="true"
          :typeSpeed="100"
          :backSpeed="60"
        >
          <h2>
            <span></span>
            <span class="typing"></span>
          </h2>
        </vue-typed-js>
      </intersect>
    </div>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'

export default {
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
h2 {
  font-size: 3rem;
  text-align: center;
  width: 100%;
  background: $black;
  padding-top: 1rem;
}

.typing {
  min-height: 1rem;
  display: inline-block;
}
.wrapper {
  max-width: 60ch;
  margin: 10rem auto;
  position: relative;

  /* background: $black; */
  display: block;
  padding: 2rem;
  /* border: 1px solid; */

  .dropcap:first-letter {
    float: left;
    font-size: 8rem;
    line-height: 0.65;
    margin: 0.1em 0.1em 0.2em 0;
  }

  .closing {
    margin-top: 2rem;
  }
}

.geeks {
  padding: 2rem;
  width: 100%;
  text-align: center;
}

.geeks::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 0;
  background: transparent;
  /* border: 1px solid transparent; */
}
/*
.geeks.active::before {
  animation: animate 1.5s linear forwards;
} */

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

/* .geeks.active::after {
  animation: animates 1.5s linear forwards;
} */

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
