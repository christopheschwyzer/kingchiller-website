<template>
  <section id="storyTitle" class="section flex-center">
    <h1>
      <div v-scroll-reveal="{ origin: 'left', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 200, reset: true}">Cold</div>
      <div v-scroll-reveal="{ origin: 'right', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 300, reset: true }">Times</div>
    </h1>
  </section>
</template>

<script>
import Parallax from '~/components/Parallax.vue'

export default {
  components: {
    Parallax
  }
}
</script>

<style lang="scss">
#storyTitle {
  &.section {
    background-color: #1f2c40;
    background-image: linear-gradient(
      to bottom,
      rgb(19, 35, 80),
      rgb(16, 5, 34)
    );
    color: white;
  }

  h1 {
    font-size: 16vw;
    line-height: 0.9;
    text-transform: uppercase;
  }
}
</style>
