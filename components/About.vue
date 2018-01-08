<template>
  <div id="about" :class="dialogState" @keyup.esc="dialog = !dialog">
    <div class="overlay"></div>
    <div class="dialog">
      <div class="dialog-wrapper">
        <div class="content">
          <navigation class="menu" />
          <div class="body">
            <!-- <missions /> -->
            <achievements />
            <donate />
            <credits />
          </div>
        </div>
      </div>
      <a class="btn-toggle ripple" :class="{'btn-toggle--dark' : dialog}" href="javascript:;" @click.once="unlockCurious" @click="[dialog = !dialog]" v-text="dialog ? 'X': '?'"></a>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Missions from '~/components/Missions.vue'
import Achievements from '~/components/Achievements.vue'
import Credits from '~/components/Credits.vue'
import Donate from '~/components/Donate.vue'

export default {
  components: {
    Navigation,
    Missions,
    Achievements,
    Donate,
    Credits
  },
  data() {
    return {
      dialog: null,
      skipAnimation: false,
      secretKey: false
    }
  },
  watch: {
    '$route': function () {
      this.dialog = false
      this.skipAnimation = true
    },
    dialog: function (state) {
      this.$emit('about', state)
    }
  },
  methods: {
    unlockCurious: function () {
      this.$store.commit('ADD_ACHIEVEMENT', 'curious')
    }
  },
  computed: {
    dialogState() {
      if (this.dialog !== null) {
        var classList = {
          'expanded': this.dialog,
          'collapsed': !this.dialog && !this.skipAnimation
        }
        this.skipAnimation = false
        return classList
      }
    }
  }
}
</script>

<style lang="scss">
@import 'About.scss';
</style>
