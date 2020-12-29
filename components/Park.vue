<i18n>
{
  "en": {
    "body": "Backerhage as the Favorite Park of the Year. Home to excellent mudpools, a beautiful beech tree (loved by Stef and Dr. ten Cate whose honor placed it there) as well as excellent moss hills and spacious parking. All members of the household agree that ot is a joy to visit 2 to 4 times every week!"
  },
  "el": {
    "body": "Το πάρκο Backerhage ως το αγαπημένο πάρκο της χρονιάς! Το πάρκο που βρίσκεται στα περίχωρα της Χάγης, φιλοξενεί εξαιρετική λάσπη, ένα όμορφο δέντρο οξιάς (που το αγαπάει ο Στέφ και ο Δρ. Ten Cate, στη τιμή του οποίου το φυτέψανε), καθώς και εξαιρετικούς λόφους με βρύα και άνετο πάρκινγκ. Όλα τα μέλη του νοικοκυριού συμφωνούν ότι είναι ότι πρέπει για 2 έως 4 φορές την εβδομάδα!"
  },
  "nl": {
    "body": "Backerhage als het favoriete park van het jaar. Thuisbasis van uitstekende modderpoelen, een prachtige beuk (geliefd bij Stef en Dr. ten Cate wiens eer het daar heeft geplaatst) evenals uitstekende mosheuvels en ruime parkeergelegenheid. Alle leden van het huishouden zijn het erover eens dat het een plezier is om 2 tot 4 keer per week een bezoek te brengen!"
  }
}
</i18n>

<template>
  <div class="container">
    <img
      class="tag right"
      src="~/assets/images/christmas-2020/favorite-park-title.png"
      alt=""
    />
    <div class="wrapper">
      <div :class="active">
        <img
          id="spacing"
          src="~/assets/images/christmas-2020/2020-62.jpg"
          alt=""
        />
        <intersect @enter="setEnter()">
        <p class="dropcap">{{ $t('body') }}</p>
        </intersect>
          <div class="sidebyside">
            <img src="~/assets/images/christmas-2020/2020-65.jpg" alt="" />
            <img src="~/assets/images/christmas-2020/2020-63.jpg" alt="" />
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
