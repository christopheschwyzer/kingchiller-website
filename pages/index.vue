<template>
<section class="wallpaper">
  <div class="bg">
    <canvas id="canvas"></canvas>
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
