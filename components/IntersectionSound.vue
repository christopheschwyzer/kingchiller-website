<template>
  <intersection-observer @change="fadeSound" @visible="playSound" @hidden="pauseSound">
    <div>
      <sound v-if="src" :src="src" :state="soundState" :volume="soundVolume" />
      <slot></slot>
    </div>
  </intersection-observer>
</template>

<script>
import Sound from '~/components/Sound.vue'
import soundControls from '~/assets/mixins/soundControls.js'
import IntersectionObserver from '~/components/IntersectionObserver.vue'

export default {
  components: {
    Sound,
    IntersectionObserver
  },
  mixins: [
    soundControls
  ],
  props: {
    src: {
      type: String,
      required: false
    }
  }
}
</script>
