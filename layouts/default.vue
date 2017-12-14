<template>
<div>
  <!-- Aha, a curious mind. Here you go: @stophecom -->
  <nuxt/>
  <about/>
</div>
</template>

<script>
import About from '~/components/About.vue'

export default {
  components: {
    About
  }
}
</script>
<style>
@import 'default.scss'
</style>
