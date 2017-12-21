<template>
<div id="about">
  <div class="wrapper" :class="{'active': dialog}">
    <div class="overlay" @click="dialog = false"></div>
    <section class="dialog" :class="{'active': dialog}">
      <div class="flip-container" :class="{'flip': flip}">
        <div class="flipper">
          <div class="front">
            <div>
              <nuxt-link v-show="$route.name !== 'index'" class="ripple" to="/">Home</nuxt-link>
              <h3>Donate time</h3>
              <p>It's about time to start this interactive fairy tale. Every donation buy me time to develop this project.</p>
              <div class="field"><label for="btc">Bitcoin (BTC): </label> <input id="btc" type="text" value="157VC9bs8AQKoX6JaTf1rCR4rGCZWeNTHu"></input>
              </div>
              <div class="field"><label for="eth">Etherum or Cryptokitties🐱 (ETH): </label> <input id="eth" type="text" value="0x69ca6b9E9a7CD01a6d621EdB9827D61497f958d7"></input>
              </div>
              <div class="field"><label for="doge">Dogecoin🐕 (DOGE): </label> <input id="doge" type="text" value="D716jJYCB3ienHPMYzT7NfPWuNR4MS73bg"></input>
              </div>
              <div class="field">
                <small>If you still live in the old world: <a href="https://paypal.me/pools/c/803REFivDJ" target="_blank" rel="noopener">PayPal</a>.</small>
              </div>
              <div class="why">
                <a href="javascript:;" @click="flip = true">Learn more</a>
              </div>
            </div>
            <a href="javascript:;" class="btn-close" @click="dialog = false">X</a>
          </div>
          <div class="back" @click="flip = false">
            <p>This is an experiment. Be curious. No masterplan. For ideas, participation or work related inquiries <a href="mailto:kingchiller@gmail.com">contact me</a>.</p>
            <p><a href="https://twitter.com/stophecom" target="_blank" rel="noopener">@stophecom</a></p>
            <a href="javascript:;" class="btn-close ripple" @click="dialog = false">X</a>
            <a href="javascript:;" class="btn-back ripple">&lt;</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="js-button" class="vissense-controller">
    <a class="btn-info ripple" :class="{fixed: buttonFixed}" href="javascript:;" @click="dialog = !dialog" v-text="dialog ? 'X': '?'"></a>
  </div>

</div>
</template>

<script>
import VisSenseFactory from 'vissense'

export default {
  data() {
    return {
      dialog: false,
      flip: false,
      buttonFixed: false
    }
  },
  mounted: function () {
    const VisSense = VisSenseFactory(window)

    var self = this
    var button = document.getElementById('js-button')
    var visibility = VisSense(button, { fullyvisible: 1 })

    var visibilityMonitor = visibility.monitor({
      fullyvisible: function () {
        self.buttonFixed = false
      },
      hidden: function () {
        self.buttonFixed = true
      }
    }).start()
  },
  watch: {
    '$route': function () {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss">
@import 'About.scss'
</style>
