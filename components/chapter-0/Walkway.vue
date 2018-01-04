<template>
  <div id="walkway">
    <intersection-observer @change="animate">
      <parallax>
        <div slot="background">
          <img :style="backgroundScale" src="images/chapter-0/airport-walkway-bg.jpg" alt="bg">
          <img src="images/chapter-0/airport-walkway-fg-1.png" alt="fg">
        </div>
        <div slot="foreground">
          <div class="starring">
            <div class="starring-title">Starring</div>
            <div class="starring-name">Walter E. Gox</div>
          </div>
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
      if ((data.visibilityProgress === 'increase' && data.scrollDirection === 'down') || (data.visibilityProgress === 'decrease' && data.scrollDirection === 'up')) {
        this.visibleRatio = 1 + data.visibleRatio / 3
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

#walkway {
  .box {
    position: absolute;
    right: 12px;
  }

  .starring {
    bottom: 30vh;
    color: white;
    font-size: 5vw;
    font-weight: bold;
    line-height: 1.1;
    position: absolute;
    right: 10vw;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3), 2px 2px rgba(0, 0, 0, 1);

    .starring-title {
      font-size: 5vw;
      text-transform: uppercase;
    }

    .starring-name {
      font-size: 8vw;
    }
  }
}
</style>

