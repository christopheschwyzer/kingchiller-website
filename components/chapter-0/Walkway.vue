<template>
  <div class="walkway">
    <intersection-observer @change="animate">
      <parallax>
        <div slot="background">
          <img :style="backgroundScale" src="images/chapter-0/airport-walkway-bg.jpg" alt="bg">
          <img src="images/chapter-0/airport-walkway-fg-1.png" alt="fg">
        </div>
        <div slot="foreground">

        </div>
      </parallax>
    </intersection-observer>
  </div>
</template>

<script>
import Parallax from '~/components/Parallax.vue'
import IntersectionObserver from '~/components/IntersectionObserver.vue'

export default {
  components: {
    Parallax,
    IntersectionObserver
  },
  data() {
    return {
      visibleRatio: 1
    }
  },
  methods: {
    animate: function (data) {
      if (data.visibilityProgress === 'increase') {
        this.visibleRatio = 1 + data.visibleRatio / 2
      }
    }
  },
  computed: {
    backgroundScale() {
      return {
        transform: 'scale(' + this.visibleRatio + ')'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/colors.scss';

.box {
  position: absolute;
  right: 12px;
}
</style>

