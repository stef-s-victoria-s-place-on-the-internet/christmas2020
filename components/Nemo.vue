<i18n>
{
  "en": {
    "b4": "Nemo (Land Shark, Dutch Muddog) then nine-weeks now nine-months old Portuguese Waterdog, an occasionally ball fetcher with a soft spot for morning cuddles. Nemo has been been leading us in an exploration of the finest mud pools offered by The Hague and surrounding areas. And beta-testing all imaginable sleeping positions."
  },
  "el": {
    "b4": " Τη Nemo ( πότε ηπειρωτικός καρχαρίας πότε ολλανδέζικο λασποσκυλο) τότε εννέα εβδομάδων, τώρα, εννέα μηνών, Πορτογαλεζικο Νεροσκυλο, που περιστασιακά επιστρέφει τη μπάλα που παρακάλεσε να της ρίξεις. Η Nemo ηγειται την εξερεύνηση των καλύτερων λασπολάκων της Χάγη και γύρω περιοχών, καθώς και της πρωτοποριακές στάσεις ύπνου."
  },
  "nl": {
    "b4": "Nemo (Landhaai, Haagse Modder Hond) dan negen weken nu negen maanden oude Portugese Waterdog, die af en toe een ball apporteert. Nemo heeft ons geleid in een verkenning van de mooiste modderpoelen die Den Haag en omstreken te bieden heeft. En beta-testen van alle denkbare slaapposities."
  }
}
</i18n>

<template>
  <div class="wrapper">
    <div :class="active">
      <p class="dropcap">{{ $t('b4') }}</p>
      <intersect @enter="setEnter()">
        <div class="sidebyside">
          <img src="~/assets/images/christmas-2020/nemo1.jpeg" alt="" />
          <img src="~/assets/images/christmas-2020/2020-17.jpg" alt="" />
          <img src="~/assets/images/christmas-2020/2020-47.jpg" alt="" />
          <img src="~/assets/images/christmas-2020/2020-5.jpg" alt="" />
          <img src="~/assets/images/christmas-2020/2020-18.jpg" alt="" />
          <img src="~/assets/images/christmas-2020/2020-41.jpg" alt="" />
          <img src="~/assets/images/christmas-2020/nemo2.jpeg" alt="" />
          <img src="~/assets/images/christmas-2020/nemo3.jpeg" alt="" />
          <img src="~/assets/images/christmas-2020/2020-boop.gif" alt="" />
          <img src="~/assets/images/christmas-2020/2020-sleeping-snout.gif" alt="" />
        </div>
      </intersect>
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
.wrapper {
  max-width: 60ch;
  margin: 10rem auto;
  position: relative;

  background: $black;
  display: block;
  padding: 2rem;
  /* border: 1px solid; */

  p {
    margin-top: 2rem;
  }

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
    width: 100%;
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
