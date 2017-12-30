<template>
  <section id="index" class="section section--dark">
    <div class="bg">
      <canvas id="canvas"></canvas>
      <div class="info">
        <nuxt-link class="btn ripple btn--dark btn-large" @click.native="goFullscreen" to="chapter-0">Chapter Zero°</nuxt-link>
        <div class="info-volume">
          Turn the volume on!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import screenfull from 'screenfull'
import is from 'is_js'

export default {
  mounted() {
    var snow = require('~/assets/js/snow.js')
    snow()
  },
  methods: {
    goFullscreen: function () {
      if (screenfull.enabled && is.not.desktop()) {
        screenfull.request()
        screen.orientation.lock('landscape')
          .catch(function () {
            console.warn('"screen.orientation.lock" not supported')
          })
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
