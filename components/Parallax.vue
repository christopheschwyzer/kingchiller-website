<template>
  <div class="parallax">
    <intersection-observer @change="fade" @visible="visible = true" @hidden="visible = false">
      <div class="viewport" :class="{dark: dark}">
        <div class="viewport-background" :class="{visible: visible}">
          <slot name="background"></slot>
          <div class="overlay" :style="{opacity: overlayOpacity}"></div>
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
    fadeout: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      overlayOpacity: 0
    }
  },
  methods: {
    fade: function (data) {
      if (!this.fadeout) {
        return
      }
      if (data.visibleRatio > 0.7) {
        this.overlayOpacity = Math.floor((data.visibleRatio - 0.7) * 1 / 0.3 * 100) / 100
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

      .overlay {
        background-color: $primary;
      }
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
    transition: 400ms;
    width: 100%;
    z-index: -1;

    .overlay {
      background-color: white;
      height: 100%;
      left: 0;
      // opacity: 1;
      pointer-events: none;
      position: absolute;
      top: 0;
      transition: 800ms 200ms;
      width: 100%;
    }

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
