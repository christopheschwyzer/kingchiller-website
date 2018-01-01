<template>
  <section id="achievements">
    <h2>Achievements</h2>
    <completion :completion=completion />
    <div class="badges">
      <div class="badge" v-for="(item, key) in achievements" :key="key" :class="{'earned' : achievementsEarned.includes(key)}">
        <span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import Completion from '~/Components/Completion.vue'
export default {
  components: {
    Completion
  },
  data() {
    return {
      achievements: {
        curious: {
          label: 'Curious Mind'
        },
        secretKey: {
          label: 'Secret Key'
        },
        credits: {
          label: 'Pay your Dues'
        },
        tbd1: {
          label: '…'
        },
        tbd2: {
          label: '…'
        },
        tbd3: {
          label: '…'
        },
        tbd4: {
          label: '…'
        },
        tbd5: {
          label: '…'
        },
        tbd6: {
          label: '…'
        },
        tbd7: {
          label: '…'
        }
      }
    }
  },
  computed: {
    achievementsEarned() { return this.$store.state.achievements },
    completion() {
      return this.achievementsEarned.length / Object.keys(this.achievements).length * 100
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/colors.scss';

#achievements {
  h2 {
    margin-bottom: 0.5em;
  }

  .badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, 84px);
    max-width: 420px;
  }

  .badge {
    align-items: center;
    background-color: $primary;
    background-clip: content-box;
    border: 3px solid $primary;
    border-radius: 50%;
    color: white;
    display: flex;
    font-size: 0.8em;
    flex: 0 0 auto;
    justify-content: center;
    height: 80px;
    margin: 5px;
    opacity: 0.3;
    padding: 5px;
    text-align: center;
    width: 80px;

    &.earned {
      opacity: 1;
    }

    span {
      margin-top: 3px;
      padding: 5px;
      display: block;
    }
  }
}
</style>

