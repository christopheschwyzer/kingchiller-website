<template>
  <section id="storyTitle" class="section flex-center">
    <h1>
      <div v-scroll-reveal="{ origin: 'left', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 200, reset: true}">Cold</div>
      <div v-scroll-reveal="{ origin: 'right', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 300, reset: true }">Times</div>
    </h1>
    <canvas id="canvas"></canvas>
  </section>
</template>

<script>
import Parallax from '~/components/Parallax.vue'

export default {
  components: {
    Parallax
  },
  mounted() {
    var snow = require('~/assets/js/snow.js')
    snow()
  }
}
</script>

<style lang="scss">
#storyTitle {
  &.section {
    background-color: #1f2c40;
    background-image: linear-gradient(
      to bottom,
      rgb(56, 61, 63),
      rgb(31, 33, 34)
    );
    color: white;
  }

  h1 {
    color: transparent;
    font-size: 24vw;
    line-height: 0.9;
    text-transform: uppercase;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.712);
  }

  #canvas {
    position: absolute;
  }
}
</style>
