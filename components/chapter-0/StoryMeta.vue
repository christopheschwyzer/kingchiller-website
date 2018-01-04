<template>
  <parallax :revealRatio="0.99">
    <div slot="background" id="storyMeta">
      <div class="anonymity">
        <small>The authors' names have been hashed to protect their anonymity.</small>
      </div>
      <div class="author">
        <strong>Created by</strong> bbeb1d4dba6e60fff230d8cd6f50ab7ff05192111de4d880792059670a6dcaf0
      </div>
      <div class="author">
        <strong>Story by</strong> 2d394e1464f1d124daa4c9f8deab4d1d43dc1783266271be04e81d26853fa4d0
      </div>

    </div>
  </parallax>
</template>

<script>
import Parallax from '~/components/Parallax.vue'

export default {
  components: {
    Parallax
  }
}
</script>

<style lang="scss">
#storyMeta {
  .author {
    margin-bottom: 1.5em;

    strong {
      display: block;
      font-size: 1.4em;
    }
  }

  .anonymity {
    margin-bottom: 2em;
    font-size: 1.2em;
    font-style: italic;
    opacity: 0.7;
  }
}
</style>
