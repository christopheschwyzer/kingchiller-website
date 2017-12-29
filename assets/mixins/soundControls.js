export default {
  data() {
    return {
      soundState: null,
      soundVolume: 0.5
    }
  },
  methods: {
    fadeSound: function(data) {
      this.soundVolume = Math.min(data.visibleRatio, 0.5)
    },
    playSound: function() {
      this.soundState = 'play'
    },
    pauseSound: function() {
      this.soundState = 'pause'
    }
  }
}
