<template>
  <div id="navigation">
    <div class="navigation-wrapper">
      <h4 class="title" :class="{'withLabels' : showInfo}">Menu</h4>
      <ul class="navigation-menu" :class="{'withLabels' : showInfo}">
        <li v-for="(item, index) in menu" :key="index" :class="[item.class, {'done': levelProgress.includes(item.level)}]">
          <nuxt-link class="ripple" :to="item.route" :title="item.label">
            <span class="square"></span>
          </nuxt-link>
          <span :class="{'active' : showInfo}" class="label" v-text="item.label"></span>
        </li>
      </ul>
      <a class="btn-info" :class="{'active' : showInfo}" href="javascript:;" @click="showInfo = !showInfo">
        <span v-text="showInfo ? 'I': 'i'"></span>
      </a>
      <a class="btn-secret" v-show="showInfo && !$store.state.achievements.includes('secretKey')" href="javascript:;" @click.once="secretAchievement">
        <span>🗝</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: false,
      menu: [
        {
          route: '/',
          label: 'Home',
          class: 'home'
        },
        {
          route: '/chapter-0',
          label: 'Zero°',
          class: '',
          level: 0
        },
        {
          route: '/chapter-1',
          label: 'One',
          class: 'tbd',
          level: 1
        },
        {
          route: '/chapter-2',
          label: 'Two',
          class: 'tbd',
          level: 2
        },
        {
          route: '/chapter-3',
          label: 'Three',
          class: 'tbd',
          level: 3
        },
        {
          route: '/chapter-4',
          label: 'Four',
          class: 'tbd',
          level: 4
        },
        {
          route: '/chapter-5',
          label: 'Endboss',
          class: 'tbd final',
          level: 5
        }
      ]
    }
  },
  methods: {
    secretAchievement: function () {
      this.$store.commit('ADD_ACHIEVEMENT', 'secretKey')
    }
  },
  computed: {
    levelProgress() {
      return this.$store.state.levels
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/colors.scss';
$size: 40px;

#navigation {
  padding-top: 40px;
  padding-left: 70px;
  padding-right: 70px;
  position: relative;

  .navigation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-info,
  .btn-secret {
    align-items: center;
    color: white;
    display: flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    bottom: 0;
    width: 30px;
  }

  .btn-info {
    background-color: rgba(255, 255, 255, 0.15);
    right: 0;

    span {
      transition: 200ms;
      transform: rotate(0deg);
    }

    &.active {
      span {
        transform: rotate(45deg);
      }
    }
  }

  .btn-secret {
    left: 0;
  }

  .title {
    text-transform: uppercase;
    opacity: 0;
    margin-top: 20px;
    margin-bottom: 50px;
    transition: 200ms;
    transform: translateY(-15px) scale(0.7);

    &.withLabels {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .navigation-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 12px 0;
    transition: 200ms;
    transform: translateX(0);

    &.withLabels {
      transform: translateX(-15px);
    }

    li {
      display: block;
      position: relative;

      .label {
        left: 100%;
        font-size: small;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 20%;
        transition: 200ms;
        transform: translateX(-20px) rotate(0deg);

        &.active {
          opacity: 1;
          transform: translateX(0) rotate(-18deg);
        }
      }

      a {
        align-items: center;
        color: currentColor;
        display: flex;
        height: $size;
        justify-content: center;
        text-decoration: none;
        width: $size;

        &.nuxt-link-exact-active {
          .square {
            &::after {
              left: -12px;
              content: '';
              border: 5px solid transparent;
              border-left-color: currentColor;
              opacity: 0.8;
              position: absolute;
            }
          }
        }
      }

      &.done {
        .square {
          background-color: currentColor;
        }
      }

      &.home {
        .square {
          background-color: currentColor;

          &::before {
            bottom: calc(100% + 3px);
            border: solid transparent;
            border-bottom-color: currentColor;
            border-width: 0 12px 8px;
            content: '';
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
          }
        }
      }

      &.tbd {
        opacity: 0.2;
        pointer-events: none;
      }

      &.final {
        .square {
          background-color: white;
          background-image: linear-gradient(
              45deg,
              black 25%,
              transparent 25%,
              transparent 75%,
              black 75%,
              black
            ),
            linear-gradient(
              45deg,
              black 25%,
              transparent 25%,
              transparent 75%,
              black 75%,
              black
            );
          background-size: 18px 18px;
          background-position: 0 0, 9px 9px;
        }
      }
    }

    .square {
      align-items: center;
      border: 3px solid currentColor;
      display: flex;
      height: $size * 0.6;
      justify-content: center;
      position: relative;
      width: $size * 0.6;
    }
  }
}
</style>
