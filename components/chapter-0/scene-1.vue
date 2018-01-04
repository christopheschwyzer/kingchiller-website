<template>
  <div id="scene-1">

    <intersection-sound src="/sounds/1/transportation_aircraft_commercial_airbus_a340_interior_landed_taxi_001.mp3">
      <production />
      <story-meta/>
      <walkway />
      <story-title />
      <stairs/>
    </intersection-sound>
    <chapter-title title="Chapter Zero°" />
  </div>
</template>

<script>
import IntersectionSound from '~/components/IntersectionSound.vue'
import Production from '~/components/chapter-0/Production.vue'
import Walkway from '~/components/chapter-0/Walkway.vue'
import StoryMeta from '~/components/chapter-0/StoryMeta.vue'
import StoryTitle from '~/components/chapter-0/StoryTitle.vue'
import Stairs from '~/components/chapter-0/Stairs.vue'
import ChapterTitle from '~/components/chapter-0/ChapterTitle.vue'

export default {
  components: {
    IntersectionSound,
    Production,
    Walkway,
    StoryMeta,
    StoryTitle,
    Stairs,
    ChapterTitle
  }
}
</script>
