<template>
<section id="index" class="section section--dark">
  <div class="bg">
    <canvas id="canvas"></canvas>
    <!-- <div class="info">
      <nuxt-link class="btn ripple btn--dark btn-large" to="chapter-0">Chapter Zero°</nuxt-link>
      <div class="info-volume">
        Turn the volume on!
      </div>
    </div> -->
  </div>
</section>
</template>

<script>
export default {
  mounted() {
    require('~/assets/js/snow.js')
  }
}
</script>

<style lang="scss">
@import 'index.scss'
</style>
