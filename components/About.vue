<template>
  <div id="about" :class="dialogState" @keyup.esc="dialog = !dialog">
    <div class="overlay"></div>
    <div class="dialog">
      <div class="dialog-wrapper">
        <nuxt-link v-show="$route.name !== 'index'" class="ripple" to="/">Home</nuxt-link>
        <donate />
      </div>
      <a class="btn-toggle ripple" href="javascript:;" @click="dialog = !dialog" v-text="dialog ? 'X': '?'"></a>
    </div>
  </div>
</template>

<script>
import Donate from '~/components/Donate.vue'

export default {
  components: {
    Donate
  },
  data() {
    return {
      dialog: null
    }
  },
  watch: {
    '$route': function () {
      this.dialog = false
    },
    dialog: function (state) {
      this.$emit('about', state)
    }
  },
  computed: {
    dialogState() {
      if (this.dialog !== null) {
        return {
          'expanded': this.dialog,
          'collapsed': !this.dialog
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'About.scss';
</style>
