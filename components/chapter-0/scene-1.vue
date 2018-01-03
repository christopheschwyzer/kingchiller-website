<template>
  <div id="scene-1">

    <intersection-sound src="/sounds/1/transportation_aircraft_commercial_airbus_a340_interior_landed_taxi_001.mp3">
      <section class="section section--dark">
        <div :style="{opacity: titleOpacity}" class="intro flex-center boundaries">
          <div class="production" v-scroll-reveal="{ origin: 'top', scale: 1, reset:true}">
            <span>A</span>
            <strong>kingchiller</strong>
            <span>production</span>
          </div>
        </div>
        <scroll-hint v-scroll-reveal="{ origin: 'top', distance:'50px', delay: 2000, scale: 1, reset:true}" />
      </section>

      <parallax>
        <div slot="background" class="author">
          <div>
            <strong>Created by</strong> bbeb1d4dba6e60fff230d8cd6f50ab7ff05192111de4d880792059670a6dcaf0
          </div>
          <div>
            <strong>Story by</strong> 2d394e1464f1d124daa4c9f8deab4d1d43dc1783266271be04e81d26853fa4d0
          </div>
        </div>
      </parallax>

      <walkway />

      <section class="section section--light section-story">
        <div class="intro flex-center boundaries">
          <div class="about">
            <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, reset:true, viewOffset: { top: 100, bottom: 100} }">
              Inspired by true events.
            </div>
            <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, reset:true, viewOffset: { top: 100, bottom: 100} }">
              <small>The authors' names have been hashed to protect their anonymity.</small>
            </div>
          </div>
        </div>
      </section>
    </intersection-sound>

    <section class="section section--dark flex-center">
      <div>working title</div>
      <h1>
        <div v-scroll-reveal="{ origin: 'left', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 200, reset: true}">Cold</div>
        <div v-scroll-reveal="{ origin: 'right', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 300, reset: true }">Times</div>
      </h1>
    </section>
  </div>
</template>

<script>
import IntersectionSound from '~/components/IntersectionSound.vue'
import ScrollHint from '~/components/ScrollHint.vue'
import Parallax from '~/components/Parallax.vue'
import Walkway from '~/components/chapter-0/Walkway.vue'

export default {
  components: {
    ScrollHint,
    IntersectionSound,
    Parallax,
    Walkway
  },
  data() {
    return {
      titleOpacity: 1
    }
  }
}
</script>

<style lang="scss">
#scene-1 {
  .section-story {
    background-image: url('/images/chapter-0/snow-texture-seamless-white-extra-light-winter-frosty-ground-cold-super-huge-even-image-256x256.jpg');
  }

  .production {
    font-size: 3em;
    margin-bottom: 1em;
    line-height: 1;

    span {
      margin-right: 10px;
    }

    strong {
      font-size: 1.5em;
    }
  }

  .author {
    > div {
      margin-bottom: 1.5em;
    }

    strong {
      display: block;
      font-size: 1.4em;
    }
  }
}
</style>
