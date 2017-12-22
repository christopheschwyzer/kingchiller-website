<template>
<div id="chapter-0" class="chapter">
  <div id="scene-1" class="scene">
    <section id="scene-1-1" class="section section--dark">
      <div :style="{opacity: titleOpacity}" class="intro flex-center boundaries">
        <div class="production" v-scroll-reveal="{ origin: 'top', scale: 1, reset:true}"><span>A</span><strong>kingchiller</strong><span>production</span></div>
        <div class="author" v-scroll-reveal="{ origin: 'top', scale: 1, delay: 200, reset:true}">
          <strong>Created by</strong> bbeb1d4dba6e60fff230d8cd6f50ab7ff05192111de4d880792059670a6dcaf0
        </div>
        <div class="story" v-scroll-reveal="{ origin: 'top', scale: 1, delay: 400, reset:true}">
          <strong>Story by</strong> 2d394e1464f1d124daa4c9f8deab4d1d43dc1783266271be04e81d26853fa4d0
        </div>
      </div>
      <component-hint v-scroll-reveal="{ origin: 'top', distance:'50px', delay: 2000, scale: 1, reset:true}" />
    </section>

    <section id="scene-1-2" class="section section--light">
      <div class="intro flex-center boundaries">
        <div class="about">
          <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, delay: 400, reset:true, viewOffset: { top: 100, bottom: 100} }">
            Story is based on true events.
          </div>
          <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, delay: 600, reset:true, viewOffset: { top: 100, bottom: 100} }">
            <small>The authors' names have been hashed to protect their anonymity.</small>
          </div>
        </div>
      </div>
    </section>

    <section id="scene-1-3" class="section section--dark flex-center">
      <div>working title</div>
      <h1><div v-scroll-reveal="{ origin: 'left', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 200, reset: true}">Minor</div>
      <div v-scroll-reveal="{ origin: 'right', distance: '100px', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', scale: 1, viewFactor: 1, duration: 600, delay: 300, reset: true }">Time</div>
      </h1>
    </section>
  </div>

  <section id="scene-2" class="section">
    <div class="section section--fixed">
      <img src="/images/1/airport.jpg" alt="Image">
    </div>
    <div class="boundaries">
      <h2 v-scroll-reveal="{viewFactor: 1, delay: 200}">Chapter Zero°</h2>
      <div v-scroll-reveal="{viewFactor: 1}" class="h2-sub">Moscow, 1989</div>
    </div>
    <div class="boundaries">
      <div class="block" v-scroll-reveal="{reset: true}">
        It was a surprisingly mild morning as <strong>Amir</strong> was bording the plane to Vladivostok - Russia's east coast - or what people called it Дальний Восток, the far east.
      </div>
    </div>

    <component-hint/>
  </section>

  <section id="scene-3" class="section">
    <div class="section section--dark" :class="{'section--fixed': sectionFixed}">
      <div class="flex-center">
        <h1>STOP</h1>
      </div>
      <component-hint/>
    </div>
  </section>

  <intersection-observer @intersection="handleIntersection4">
    <div class="section">
      <section class="section section--light section--fixed section--front" :style="{transform: 'translateX(' + visibilityProgress +'%)'}">
        <h1>COMING FROM RIGHT</h1>
      </section>
    </div>
  </intersection-observer>

  <div class="section">
    <section class="section section--dark" :class="{'section--fixed': showNext}">
      <h1>NEW</h1>
    </section>
  </div>

  <intersection-observer>
    <section class="section">
      <div class="section section--light">
        <h1>SUPER NEW STUFF</h1>
      </div>
    </section>
  </intersection-observer>

  <section class="section">
    placeholder new
  </section>
</div>
</template>

<script>
import componentHint from '~/components/Hint.vue'
import VisSenseFactory from 'vissense'
import { Howl } from 'howler'
import IntersectionObserver from '~/components/IntersectionObserver.vue'

export default {
  components: {
    componentHint,
    IntersectionObserver
  },
  data() {
    return {
      titleOpacity: 1,
      audio: [
        { elementId: 'scene-1', src: 'transportation_aircraft_commercial_airbus_a340_interior_landed_taxi_001' },
        { elementId: 'scene-2', src: 'transportaton_aircraft_twin_prop_small_idle_001' }
      ],
      sectionFixed: false,
      visibilityProgress: 100,
      showNext: false
    }
  },
  methods: {
    handleIntersection4: function (intersection) {
      this.sectionFixed = intersection.isIntersecting
      let reveal = (intersection.verticalScroll === 'down' && intersection.visibilityProgress === 'increase') || (intersection.verticalScroll === 'up' && intersection.visibilityProgress === 'decrease')
      this.visibilityProgress = reveal ? 100 - intersection.visibleRatio : -1 * (100 - intersection.visibleRatio)
      this.showNext = !reveal && intersection.isIntersecting
    },
    handleAudio: function (elementId, file) {
      const VisSense = VisSenseFactory(window)
      var audio = new Howl({
        src: ['/sounds/1/' + file + '.mp3'],
        loop: true
      })

      var el = document.getElementById(elementId)
      var visibility = VisSense(el, { hidden: 0.1 })

      var visibilityMonitor = visibility.monitor({
        hidden: function () {
          audio.pause()
        },
        visible: function () {
          audio.play()
          audio.fade(0.0, 0.5, 1000)
        },
        percentagechange: function (monitor, newValue, oldValue) {
          var volume = Math.min(newValue, 0.5)
          audio.volume(volume)
        }
      }).start()
    }
  },

  mounted() {
    var self = this
    this.audio.forEach(function (element) {
      self.handleAudio(element.elementId, element.src)
    })
  }
}
</script>

<style lang="scss">
@import 'chapter-0.scss'
</style>
