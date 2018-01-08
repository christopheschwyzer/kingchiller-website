<template>
  <div id="comingSoon">
    <section class="section">
      <div class="section end-of-story" :class="{'section--fixed': sectionFixed}">
        <div class="header-font">End of Story</div>
      </div>
    </section>

    <intersection-observer @change="handleIntersection4">
      <div class="section">
        <section class="section section--light section--fixed section--front" :style="{transform: 'translateX(' + visibilityProgress +'%)'}">
          <div class="header-font">Want to know how…</div>
        </section>
      </div>
    </intersection-observer>

    <div class="section">
      <section class="section section--dark" :class="{'section--fixed': showNext}">
        <div class="header-font">…the story unfolds?</div>
      </section>
    </div>

    <section class="section">
      <donate />
    </section>
  </div>
</template>

<script>
import IntersectionObserver from '~/components/IntersectionObserver.vue'
import Donate from '~/components/Donate.vue'

export default {
  components: {
    IntersectionObserver,
    Donate
  },
  data() {
    return {
      sectionFixed: false,
      visibilityProgress: 100,
      showNext: false
    }
  },
  methods: {
    handleIntersection4: function (intersection) {
      this.sectionFixed = intersection.isIntersecting
      let reveal = (intersection.scrollDirection === 'down' && intersection.visibilityProgress === 'increase') || (intersection.scrollDirection === 'up' && intersection.visibilityProgress === 'decrease')
      this.visibilityProgress = reveal ? 100 - intersection.visibleRatio * 100 : -1 * (100 - intersection.visibleRatio * 100)
      this.showNext = !reveal && intersection.isIntersecting
    }
  }
}
</script>

<style lang="scss">
#comingSoon {
  .header-font {
    font-size: 16vw;
    line-height: 0.9;
    text-transform: uppercase;
  }

  .end-of-story {
    background-image: repeating-linear-gradient(
      45deg,
      white,
      white 20px,
      crimson 20px,
      crimson 40px
    );

    .header-font {
      color: #2faef9;
      text-align: center;
      text-shadow: 10px 7px crimson;
    }
  }
}
</style>
