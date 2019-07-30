<template>
  <div id="menu">
    <div id="options-styles" class="menu-row presets">
      <div class="menu-title">
        Presets
      </div>
      <div v-for="(option, key) in settings.styles" v-on:click="onStyleSelect(key)" v-bind:key="key" :state="settings.styles[key]?'selected':'unselected'" class="button">
        {{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="menu-divider"></div>
    <div id="options-keys" class="menu-row">
      <div class="menu-title">
        Keys
      </div>
      <div v-for="(option, key) in settings.keys" v-on:click="onKeySelect(key)" :state="settings.keys[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="options-chords-triad" class="menu-row">
      <div class="menu-title">
        Chords 5
      </div>
      <div v-for="(option, key) in settings.chords_triad" v-on:click="onTriadChordSelect(key)" :state="settings.chords_triad[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="options-chords-tetrad" class="menu-row">
      <div class="menu-title">
        Chords 7
      </div>
      <div v-for="(option, key) in settings.chords_tetrad" v-on:click="onTetradChordSelect(key)" :state="settings.chords_tetrad[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="options-periods" class="menu-row">
      <div class="menu-title">
        BPM
      </div>
      <div v-for="(option, key) in settings.speeds" v-on:click="onSpeedSelect(key)" :state="settings.speeds[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'

const OPTIONS_STYLES = {
  beginner: {
    keys: ['c', 'd', 'e'],
    chords_triad: ['major'],
    chords_tetrad: []
  },
  blues: {
    keys: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
    chords_triad: ['major', 'minor', 'diminished'],
    chords_tetrad: ['minor 7th']
  },
  rock: {
    keys: ['c', 'd', 'e', 'g'],
    chords_triad: ['major', 'minor'],
    chords_tetrad: ['major 7th', 'minor 7th']
  },
  jazz: {
    keys: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
    chords_triad: ['major', 'minor', 'diminished'],
    chords_tetrad: ['major 7th', 'minor 7th', 'dominant', 'flat 5']
  }
}

const OPTIONS_KEYS = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
const OPTIONS_CHORDS_TRIAD = ['major', 'minor', 'diminished']
const OPTIONS_CHORDS_TETRAD = ['dominant', 'major 7th', 'minor 7th', 'flat 5']
const OPTIONS_SPEEDS = ['180', '120', '90', '60', '30']

var originalSettings = {}
originalSettings.keys = {}
for (let i = 0; i < OPTIONS_KEYS.length; i++) {
  originalSettings.keys[OPTIONS_KEYS[i]] = false
}
originalSettings.styles = {}
for (let i in OPTIONS_STYLES) {
  originalSettings.styles[i] = false
}
originalSettings.chords_triad = {}
for (let i = 0; i < OPTIONS_CHORDS_TRIAD.length; i++) {
  originalSettings.chords_triad[OPTIONS_CHORDS_TRIAD[i]] = false
}
originalSettings.chords_tetrad = {}
for (let i = 0; i < OPTIONS_CHORDS_TETRAD.length; i++) {
  originalSettings.chords_tetrad[OPTIONS_CHORDS_TETRAD[i]] = false
}
originalSettings.speeds = {}
for (let i = 0; i < OPTIONS_SPEEDS.length; i++) {
  originalSettings.speeds[OPTIONS_SPEEDS[i]] = false
}

export default {
  name: 'Menu',
  data () {
    return {
      settings: originalSettings
    }
  },
  mounted () {
    this.onStyleSelect('beginner')
    this.onSpeedSelect(30)
  },
  methods: {
    onTriadChordSelect: function (option, event) {
      Vue.set(this.settings.chords_triad, option, !this.settings.chords_triad[option])
      this.$emit('settings', this.settings)
    },
    onSpeedSelect: function (option, event) {
      for (let k in this.settings.speeds) {
        this.settings.speeds[k] = false
      }
      Vue.set(this.settings.speeds, option, true)
      this.$emit('settings', this.settings)
    },
    onTetradChordSelect: function (option, event) {
      Vue.set(this.settings.chords_tetrad, option, !this.settings.chords_tetrad[option])
      this.$emit('settings', this.settings)
    },
    onKeySelect: function (option, event) {
      Vue.set(this.settings.keys, option, !this.settings.keys[option])
      this.$emit('settings', this.settings)
    },
    onStyleSelect: function (option, event) {
      for (let k in this.settings.styles) {
        this.settings.styles[k] = false
      }
      Vue.set(this.settings.styles, option, true)
      let selectedStyle = OPTIONS_STYLES[option]
      for (let i in this.settings.keys) {
        this.settings.keys[i] = false
      }
      for (let i = 0; i < selectedStyle.keys.length; i++) {
        this.settings.keys[selectedStyle.keys[i]] = true
      }
      for (let i in this.settings.chords_triad) {
        this.settings.chords_triad[i] = false
      }
      for (let i = 0; i < selectedStyle.chords_triad.length; i++) {
        this.settings.chords_triad[selectedStyle.chords_triad[i]] = true
      }
      for (let i in this.settings.chords_tetrad) {
        this.settings.chords_tetrad[i] = false
      }
      for (let i = 0; i < selectedStyle.chords_tetrad.length; i++) {
        this.settings.chords_tetrad[selectedStyle.chords_tetrad[i]] = true
      }
      this.$emit('settings', this.settings)
    },
    capitaliseText: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
<style lang="scss" scoped>
   @import 'menu.scss'
</style>
