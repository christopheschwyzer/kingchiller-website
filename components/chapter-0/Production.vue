<template>
  <section id="production" class="section section--dark">
    <div class="flex-center boundaries">
      <div class="intro" v-scroll-reveal="{ origin: 'top', scale: 1, reset:true}">
        <span>A</span>
        <strong>kingchiller</strong>
        <span>production</span>
      </div>
    </div>
    <scroll-hint v-scroll-reveal="{ origin: 'top', distance:'50px', delay: 800, scale: 1, reset:true}" />
  </section>
</template>

<script>
import ScrollHint from '~/components/ScrollHint.vue'

export default {
  components: {
    ScrollHint
  }
}
</script>

<style lang="scss">
#production {
  .intro {
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
}
</style>
