<template>
  <div id="scene-1" class="scene">

    <intersection-sound src="/sounds/1/transportation_aircraft_commercial_airbus_a340_interior_landed_taxi_001.mp3">
      <section class="section section--dark">
        <div :style="{opacity: titleOpacity}" class="intro flex-center boundaries">
          <div class="production" v-scroll-reveal="{ origin: 'top', scale: 1, reset:true}">
            <span>A</span>
            <strong>kingchiller</strong>
            <span>production</span>
          </div>
          <div class="author" v-scroll-reveal="{ origin: 'top', scale: 1, delay: 200, reset:true}">
            <strong>Created by</strong> bbeb1d4dba6e60fff230d8cd6f50ab7ff05192111de4d880792059670a6dcaf0
          </div>
          <div class="story" v-scroll-reveal="{ origin: 'top', scale: 1, delay: 400, reset:true}">
            <strong>Story by</strong> 2d394e1464f1d124daa4c9f8deab4d1d43dc1783266271be04e81d26853fa4d0
          </div>
        </div>
        <scroll-hint v-scroll-reveal="{ origin: 'top', distance:'50px', delay: 2000, scale: 1, reset:true}" />
      </section>

      <section class="section section--light">
        <div class="intro flex-center boundaries">
          <div class="about">
            <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, reset:true, viewOffset: { top: 100, bottom: 100} }">
              Story is based on true events.
            </div>
            <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, reset:true, viewOffset: { top: 100, bottom: 100} }">
              <small>The authors' names have been hashed to protect their anonymity.</small>
            </div>
          </div>
        </div>
      </section>
    </intersection-sound>

    <section id="scene-1-3" class="section section--dark flex-center">
      <div>working title</div>
      <h1>
        <div v-scroll-reveal="{ origin: 'left', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 200, reset: true}">Minor</div>
        <div v-scroll-reveal="{ origin: 'right', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 300, reset: true }">Time</div>
      </h1>
    </section>
  </div>
</template>

<script>
import IntersectionSound from '~/components/IntersectionSound.vue'
import ScrollHint from '~/components/ScrollHint.vue'

export default {
  components: {
    ScrollHint,
    IntersectionSound
  },
  data() {
    return {
      titleOpacity: 1
    }
  }
}
</script>
