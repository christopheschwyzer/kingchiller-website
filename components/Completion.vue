<template>
  <div class="progress">Progress: {{ completion }}%
    <progress :value="completion" max="100"></progress>
  </div>
</template>

<script>
export default {
  props: {
    completion: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.progress {
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1em;

  progress {
    vertical-align: middle;
    margin-left: 12px;
  }
}
</style>
