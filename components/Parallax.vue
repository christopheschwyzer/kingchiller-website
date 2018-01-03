<template>
  <div class="parallax">
    <intersection-observer @change="fade" @visible="visible = true" @hidden="visible = false">
      <div class="viewport" :class="{dark: dark}">
        <div class="viewport-background" :class="{visible: visible}">
          <div class="fade" :style="{opacity: opacity}">
            <slot name="background"></slot>
          </div>
        </div>
        <div class="viewport-foreground">
          <slot name="foreground"></slot>
        </div>
      </div>
    </intersection-observer>
  </div>
</template>
<script>
import IntersectionObserver from '~/components/IntersectionObserver.vue'

export default {
  components: {
    IntersectionObserver
  },
  props: {
    dark: {
      type: Boolean,
      default: true
    },
    revealRatio: {
      type: Number,
      default: 0.8
    }
  },
  data() {
    return {
      visible: false,
      opacity: 1
    }
  },
  methods: {
    fade: function (data) {
      if (data.visibleRatio < this.revealRatio && data.visibilityProgress === 'increase') {
        this.opacity = data.visibleRatio / this.revealRatio
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/colors.scss';

.parallax {
  .viewport {
    min-height: 100vh;
    position: relative;

    &.dark .viewport-background {
      background-color: $primary;
      color: $darkPrimary;
    }
  }

  .viewport-background {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;

    &.visible {
      opacity: 1;
    }

    img {
      display: block;
      height: 100%;
      left: 0;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .viewport-foreground {
    min-height: 100vh;
  }
}
</style>
