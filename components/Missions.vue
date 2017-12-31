<template>
  <div id="missions">
    <h2>Missions</h2>
    <completion :completion=13 />
    <p>Missions: {{ levelProgress }}</p>
    <p>Current Mission: {{ levelProgress[levelProgress.length - 1] }}</p>
  </div>
</template>

<script>
import Completion from '~/Components/Completion.vue'

export default {
  components: {
    Completion
  },
  computed: {
    levelProgress() { return this.$store.state.levels }
  }
}
</script>

<style lang="scss">
#missions {
  h2 {
    margin-bottom: 0.5em;
  }
}
</style>
