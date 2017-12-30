<template>
  <div>
    <!-- Aha, a curious mind. Here you go: @stophecom -->
    <nuxt/>
    <about @about="preventScroll" />
    <ratio-alert/>
  </div>
</template>

<script>
import About from '~/components/About.vue'
import RatioAlert from '~/components/RatioAlert.vue'

export default {
  components: {
    About,
    RatioAlert
  },
  methods: {
    preventScroll: function (state) {
      document.body.classList.toggle('noScroll', state)
    }
  }
}
</script>
<style>
.noScroll {
  overflow: hidden;
}
</style>
