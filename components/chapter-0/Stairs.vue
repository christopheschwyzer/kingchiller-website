<template>
  <parallax id="stairs">
    <div slot="background">
      <img class="bg" src="images/chapter-0/airport-stairs.jpg" alt="bg">
    </div>
    <div slot="foreground">
      <div class="featuring">
        <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, reset:true, viewOffset: { top: 100, bottom: 100} }">
          Inspired by true events.
        </div>
      </div>
    </div>
  </parallax>
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
#stairs {
  .viewport-background {
    background-color: black;
  }

  .bg {
    width: 50%;
    left: auto;
    right: 0;
    object-position: left;
  }

  .featuring {
    bottom: 40vh;
    color: white;
    font-weight: bold;
    font-size: 3vw;
    left: 10vw;
    line-height: 1.1;
    position: absolute;
  }
}
</style>
