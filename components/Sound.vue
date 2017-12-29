<script>
import { Howl } from 'howler'

export default {
  name: 'sound',
  abstract: true,
  data() {
    return {
      audio: null
    }
  },
  props: {
    src: {
      type: String,
      required: true
    },
    state: {
      type: String | Number,
      required: false
    },
    volume: {
      type: Number,
      required: false,
      default: 0.5
    }
  },
  beforeMount() {
    this.audio = new Howl({
      src: [this.src],
      loop: true
    })
  },
  watch: {
    state: function (data) {
      if (this.state) {
        switch (data) {
          case 'play':
            this.audio.play()
            this.audio.fade(0.0, this.volume, 1000)
            break
          case 'pause':
            this.audio.pause()
            break
          case 'mute':
            this.audio.mute(true)
            break
          case 'unmute':
            this.audio.mute(false)
            break
        }
      }
    },
    volume: function (data) {
      this.audio.volume(data)
    }
  },
  render() {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
</script>
