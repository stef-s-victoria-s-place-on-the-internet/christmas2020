<i18n>
{
  "en": {
    "b2": "Victoria graduated from an amateur bryologist to a birder with a bird feeder during the quarantine. She doesn’t really want to talk to about it, but she feels comfortable disclosing that seedeaters [birds with long and narrow finches] lay closer to her heart than other birds."
  },
  "el": {
    "b2": "Η Βικτώρια αποφοίτησε από ερασιτέχνη βρυολόγο σε παρατηρητή πουλιών κατά τη διάρκεια της καραντίνας. Εάν και δεν είναι ακόμα έτοιμη να μιλήσει με λεπτομέρειες για το ποσό φυτό είναι τελικά , αισθάνεται άνετα να αποκαλύψει ότι οι σποροφάγοι [πουλιά με μακριά και στενά ράμφη] είναι τα πιο αγαπημένα της."
  },
  "nl": {
    "b2": "Victoria is tijdens de quarantaine gepromoveerd van amateur-bryoloog tot vogelaar. Ze wil er niet echt over praten, maar ze voelt zich wel op haar gemak als ze onthult dat zaadeters [vogels met lange en smalle vinken] dichter bij haar hart liggen dan andere vormen van taxa."
  }
}
</i18n>

<template>
  <div class="container">
        <img
      class="tag left bottom"
      src="~/assets/images/christmas-2020/bird-2.png"
      alt=""
    />
    <img
      class="tag left"
      src="~/assets/images/christmas-2020/bird-3.png"
      alt=""
    />
        <img
      class="tag right"
      src="~/assets/images/christmas-2020/bird-1.png"
      alt=""
    />
    <div class="wrapper">
    <div :class="active">
      <p class="dropcap">{{ $t('b2') }}</p>
      <intersect @enter="setEnter()">
        <img src="~/assets/images/christmas-2020/birbing.jpeg" alt="" />
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
  margin: 20rem auto 10rem;

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
    &.bottom {
    top: unset;
    bottom: 0;
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
