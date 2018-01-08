<template>
  <div id="plane">
    <intersection-sound src="/sounds/1/transportaton_aircraft_twin_prop_small_idle_001.mp3">
      <parallax>
        <div slot="background">
          <div class="plane-bg"></div>
          <div class="plane-fg"></div>

        </div>

        <div slot="foreground">

          <div class="location" v-scroll-reveal="{viewFactor: 1}">Moscow, 1989</div>
          <div class="text">
            <div class="box" v-scroll-reveal="{reset: true}">
              It was a surprisingly mild morning for December - zero degrees - as
              <strong>Alex</strong> was bording the plane to Vladivostok - Russia's east coast - or what people called it Дальний Восток, the far east.
            </div>
            <div class="box" v-scroll-reveal="{reset: true, delay: 1000}">
              <strong>Spoiler Alert</strong> - He never made it there.
            </div>
          </div>
          <scroll-hint/>
        </div>
      </parallax>
    </intersection-sound>
  </div>
</template>

<script>
import IntersectionSound from '~/components/IntersectionSound.vue'
import Parallax from '~/components/Parallax.vue'

export default {
  components: {
    IntersectionSound,
    Parallax
  }
}
</script>

<style lang="scss">
#plane {
  .location {
    color: white;
    font-weight: bold;
    font-size: 2em;
    left: 5vw;
    position: absolute;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.493);
    top: 5vh;
  }

  .text {
    bottom: 5vh;
    position: absolute;
    max-width: 50vw;
    right: 5vw;
  }

  .plane-fg,
  .plane-bg {
    background-size: cover;
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .plane-bg {
    background-image: url('/images/chapter-0/plane-bg.jpg');
  }

  .plane-fg {
    animation: background 0.3s steps(1) infinite;
  }
}

@keyframes background {
  0% {
    background-image: url('/images/chapter-0/plane-fg-0.png');
  }
  33% {
    background-image: url('/images/chapter-0/plane-fg-1.png');
  }
  66% {
    background-image: url('/images/chapter-0/plane-fg-2.png');
  }
}
</style>
