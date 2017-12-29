<template>
<div class="hint">
  <div class="hint-scroll" :class="angle">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    angle: {
      type: String,
      default: 'horizontal'
    },
    kind: {
      type: String,
      default: 'scroll'
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import 'ScrollHint.scss'
</style>
