<script>
import Vue from 'vue'
const warn = (msg) => {
  if (!Vue.config.silent) {
    console.warn(msg)
  }
}

global.HTMLElement = typeof HTMLElement === 'undefined' ? () => {} : HTMLElement

export default {
  name: 'intersection-observer',
  abstract: true,
  props: {
    threshold: {
      type: Array,
      required: false,
      default: () => new Array(101).fill(0).map((zero, index) => {
        return index * 0.01
      })
    },
    root: {
      type: HTMLElement,
      required: false,
      default: () => null
    },
    rootMargin: {
      type: String,
      required: false,
      default: () => '0px 0px 0px 0px'
    }
  },
  beforeMount() {
    let intersectionRatio

    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      const currentRatio = intersectionRatio
      const newRatio = entry.intersectionRatio
      const boundingClientRect = entry.boundingClientRect
      const scrollingDown = currentRatio !== undefined && ((newRatio < currentRatio &&
        boundingClientRect.bottom < boundingClientRect.height) || (newRatio > currentRatio && boundingClientRect.bottom > boundingClientRect.height))

      intersectionRatio = newRatio

      let summary = {
        isIntersecting: entry.isIntersecting,
        visibleRatio: Math.floor(entry.intersectionRatio * 100),
        visibilityProgress: newRatio < currentRatio ? 'decrease' : 'increase',
        verticalScroll: scrollingDown ? 'down' : 'up'
      }

      if (entry.isIntersecting || newRatio <= 0) {
        console.log(summary)
        this.$emit('intersection', summary)
      }
    }, {
      threshold: this.threshold,
      root: this.root,
      rootMargin: this.rootMargin
    })
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$slots.default && this.$slots.default.length > 1) {
        warn('[VueIntersect] You may only wrap one element in a <intersect> component.')
      } else if (!this.$slots.default || this.$slots.default.length < 1) {
        warn('[VueIntersect] You must have one child inside a <intersect> component.')
        return
      }

      this.observer.observe(this.$slots.default[0].elm)
    })
  },
  destroyed() {
    this.observer.disconnect()
  },
  render() {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
</script>
