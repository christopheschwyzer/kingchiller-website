<template>
<div class="overlay" v-if="loading">
  <div class="spinner">
    <div class="spinner-box"></div>
    <div class="spinner-hill"></div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Spinner.scss'
</style>
