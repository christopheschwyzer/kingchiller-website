<template>
<div id="chapter-0" class="chapter">
  <div id="scene-1" class="scene">
    <section id="scene-1-1" class="section section--dark">
      <div :style="{opacity: titleOpacity}" class="intro flex-center boundaries">
        <div class="production" id="title"><span>A</span><strong>kingchiller</strong><span>productions</span></div>
        <div class="author">
          <strong>Created by</strong> bbeb1d4dba6e60fff230d8cd6f50ab7ff05192111de4d880792059670a6dcaf0
        </div>
        <div class="story">
          <strong>Story by</strong> 2d394e1464f1d124daa4c9f8deab4d1d43dc1783266271be04e81d26853fa4d0
        </div>

      </div>
      <component-hint/>
    </section>
    <section class="section section--white">
      <div class="intro flex-center boundaries">
        <div class="about">
          <div>
            Story is based on true events.
          </div>
          <div>
            The author names have been hashed to protect their anonymity.
          </div>
        </div>
      </div>
    </section>
    <section class="section section--dark flex-center">
      <div>working title</div>
      <h1><div>
        Minus
      </div>
      Time</h1>
    </section>
  </div>

  <section id="scene-2" class="section">
    <div class="boundaries">
      <h2>Chapter Zero°</h2>
      <div class="h2-sub">Moscow, 1989</div>
    </div>
    <parallax fixed>
      <img src="/images/1/airport.jpg" alt="Image">
    </parallax>

    <div class="boundaries">
      <div class="block">
        It was a surprisingly mild morning as <strong>Amir</strong> was bording the plane to Vladivostok - Russia's east coast - or what people called it Дальний Восток, the far east.
      </div>
    </div>

    <component-hint/>
  </section>

  <section class="section section--dark">
    <div class="intro">
      <h1>SLIDE 3</h1>
    </div>

    <component-hint/>
  </section>
</div>
</template>

<script>
import componentHint from '~/components/Hint.vue'
import { TweenMax, Power2, TimelineLite } from 'gsap'
import VisSenseFactory from 'vissense'
import { Howl } from 'howler'
import Parallax from 'vue-parallaxy'

export default {
  components: {
    componentHint,
    Parallax
  },
  data() {
    return {
      titleOpacity: 1
    }
  },
  methods: {
    handleAudio: function (file, elementId) {
      const VisSense = VisSenseFactory(window)
      var audio = new Howl({
        src: ['/sounds/1/' + file + '.mp3'],
        autoplay: true,
        loop: true
      })

      var self = this
      var el = document.getElementById(elementId)
      var visibility = VisSense(el, { fullyvisible: 0.2 })

      var visibilityMonitor = visibility.monitor({
        fullyvisible: function () {
          audio.play()
          audio.fade(0.0, 1.0, 1000)
        },
        hidden: function () {
          audio.fade(1.0, 0.0, 1000)
        }
      }).start()
    }
  },

  mounted() {
    this.handleAudio('transportation_aircraft_commercial_airbus_a340_interior_landed_taxi_001', 'scene-1')
    this.handleAudio('transportaton_aircraft_twin_prop_small_idle_001', 'scene-2')

    const VisSense = VisSenseFactory(window)
    var self = this
    var title = document.getElementById('scene-1-1')
    var visibility = VisSense(title, { fullyvisible: 1 })

    var visibilityMonitor = visibility.monitor({
      percentagechange: function (monitor, newValue, oldValue) {
        var difference = newValue - oldValue
        var opacity = Math.max(newValue, 0)
        self.titleOpacity = opacity
      }
    }).start()
  }
}
</script>

<style lang="scss">
@import 'chapter-0.scss'
</style>
