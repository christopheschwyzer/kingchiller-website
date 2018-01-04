<template>
  <section class="section section--light bg-snow">
    <div class="chapter-title flex-center boundaries">
      <div v-scroll-reveal="{ origin: 'bottom', scale: 1, viewFactor: 1, reset:true, viewOffset: { top: 100, bottom: 100} }">
        {{ title }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.bg-snow {
  background-image: url('/images/chapter-0/snow-texture-seamless-white-extra-light-winter-frosty-ground-cold-super-huge-even-image-256x256.jpg');
}
.chapter-title {
  font-size: 11vw;
  font-weight: bold;
  text-shadow: 2px 2px 8px black;
  color: transparent;
}
</style>
