<template>
<section class="wallpaper">

  <div class="bg">
    <canvas id="canvas"></canvas>
  </div>
  <main class="main">
    <h1>test</h1>
  </main>
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
