<template>
  <div id="chapter-0" class="chapter">

    <scene1 />

    <intersection-sound src="/sounds/1/transportaton_aircraft_twin_prop_small_idle_001.mp3">
      <section id="scene-2" class="section">
        <div class="section section--fixed">
          <img src="/images/chapter-1/airport.jpg" alt="Image">
        </div>
        <div class="boundaries">
          <h2 v-scroll-reveal="{viewFactor: 1, delay: 200}">Chapter Zero°</h2>
          <div v-scroll-reveal="{viewFactor: 1}" class="h2-sub">Moscow, 1989</div>
        </div>
        <div class="boundaries">
          <div class="block" v-scroll-reveal="{reset: true}">
            It was a surprisingly mild morning as
            <strong>Amir</strong> was bording the plane to Vladivostok - Russia's east coast - or what people called it Дальний Восток, the far east.
          </div>
        </div>

        <scroll-hint/>
      </section>
    </intersection-sound>

    <section id="scene-3" class="section">
      <div class="section section--dark" :class="{'section--fixed': sectionFixed}">
        <div class="flex-center">
          <h1>STOP</h1>
        </div>
        <scroll-hint/>
      </div>
    </section>

    <intersection-observer @change="handleIntersection4">
      <div class="section">
        <section class="section section--light section--fixed section--front" :style="{transform: 'translateX(' + visibilityProgress +'%)'}">
          <h1>COMING FROM RIGHT</h1>
        </section>
      </div>
    </intersection-observer>

    <div class="section">
      <section class="section section--dark" :class="{'section--fixed': showNext}">
        <h1>NEW</h1>
      </section>
    </div>

    <section class="section">
      placeholder new
    </section>
  </div>
</template>

<script>
import scene1 from '~/components/chapter-0/scene-1.vue'
import ScrollHint from '~/components/ScrollHint.vue'

import IntersectionSound from '~/components/IntersectionSound.vue'
import IntersectionObserver from '~/components/IntersectionObserver.vue'

export default {
  components: {
    scene1,
    IntersectionSound,
    ScrollHint,
    IntersectionObserver
  },
  data() {
    return {
      sectionFixed: false,
      visibilityProgress: 100,
      showNext: false
    }
  },
  methods: {
    handleIntersection4: function (intersection) {
      this.sectionFixed = intersection.isIntersecting
      let reveal = (intersection.scrollDirection === 'down' && intersection.visibilityProgress === 'increase') || (intersection.scrollDirection === 'up' && intersection.visibilityProgress === 'decrease')
      this.visibilityProgress = reveal ? 100 - intersection.visibleRatio * 100 : -1 * (100 - intersection.visibleRatio * 100)
      this.showNext = !reveal && intersection.isIntersecting
    }
  },
  mounted() {
    this.$store.commit('ADD_LEVEL', 0)
  }
}
</script>

<style lang="scss">
@import 'chapter-0.scss';
</style>
