<template>
<div>
  <!-- Aha, a curious mind. Here you go: @stophecom -->
  <nuxt/>
  <about/>
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
  }
}
</script>
<style>
@import 'default.scss'
</style>
