<template>
<div id="about">
  <div class="wrapper" v-show="dialog">
    <div class="overlay" @click="dialog = false"></div>
    <section class="dialog" :class="{'active': dialog}">
      <div class="flip-container" :class="{'flip': flip}">
        <div class="flipper">
          <div class="front">
            <div>
              <h1>Donate time</h1>
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
            <h2>WTF?</h2>
            <p>This is an experiment. Be curious. No masterplan. I'm an artist, designer and web developer who works on story, artwork and website with the resources I got.</p>
            <p>For ideas, participation or work related inquiries <a href="mailto:kingchiller@gmail.com">contact me</a>.</p>
            <p>Chapter "Zero" is in development.</p>
            <a href="javascript:;" class="btn-close" @click="dialog = false">X</a>
            <a href="javascript:;" class="btn-back">&lt;</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <a class="btn-info" href="javascript:;" @click="dialog = !dialog" v-text="dialog ? 'X': '?'"></a>
</div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      flip: false
    }
  }
}
</script>

<style lang="scss">
@import 'About.scss'
</style>
