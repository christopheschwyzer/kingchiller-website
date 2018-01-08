<template>
  <div id="chapter-0">
    <intersection-sound src="/sounds/1/transportation_aircraft_commercial_airbus_a340_interior_landed_taxi_001.mp3">
      <production />
      <story-meta/>
      <walkway />
      <story-title />
      <stairs/>
    </intersection-sound>

    <chapter-title title="Chapter Zero°" />

    <plane />
    <coming-soon />
  </div>
</template>

<script>
import IntersectionSound from '~/components/IntersectionSound.vue'
import Production from '~/components/chapter-0/Production.vue'
import StoryMeta from '~/components/chapter-0/StoryMeta.vue'
import Walkway from '~/components/chapter-0/Walkway.vue'
import StoryTitle from '~/components/chapter-0/StoryTitle.vue'
import Stairs from '~/components/chapter-0/Stairs.vue'
import ChapterTitle from '~/components/chapter-0/ChapterTitle.vue'
import Plane from '~/components/chapter-0/Plane.vue'
import ComingSoon from '~/components/ComingSoon.vue'

export default {
  components: {
    IntersectionSound,
    Production,
    StoryMeta,
    Walkway,
    StoryTitle,
    Stairs,
    ChapterTitle,
    Plane,
    ComingSoon
  },
  mounted() {
    this.$store.commit('ADD_LEVEL', 0)
  }
}
</script>

<style lang="scss">
@import '~assets/styles/colors.scss';

#chapter-0 {
  .boundaries {
    padding: 5vw;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
