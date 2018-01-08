<template>
  <section>
    <h2>Credits</h2>
    <div @click="secretAchievement">
      <p>Sounds by
        <a href="https://www.zapsplat.com">Zapsplat</a>
      </p>
      <p>Wildlife pictures by Johnny Stalker</p>
    </div>
    <!-- <p>Music: http://www.purple-planet.com</p>
    <p>Music: https://www.bensound.com</p>
    <p>Music: Soviet March by Shane Ivers - https://www.silvermansound.com</p>
    <p>Music: Play The Game by Shane Ivers - https://www.silvermansound.com</p>
    <p>Music: HappyNES by Shane Ivers - https://www.silvermansound.com</p>
    <p>Music: Action and Adventure by Shane Ivers - https://www.silvermansound.com</p>
    <p>Music: Mystery Unsolved by Shane Ivers - https://www.silvermansound.com</p>
    <p>Music: Yearning by Shane Ivers - https://www.silvermansound.com</p>
    <p>Music: Against Time by Shane Ivers - https://www.silvermansound.com</p> -->
  </section>
</template>

<script>
export default {
  methods: {
    secretAchievement: function () {
      this.$store.commit('ADD_ACHIEVEMENT', 'credits')
    }
  }
}
</script>
