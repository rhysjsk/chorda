<template>
  <div id="menu">
    <div id="options-styles" class="menu-row">
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
    <div id="options-chords" class="menu-row">
      <div class="menu-title">
        Chords
      </div>
      <div v-for="(option, key) in settings.chords" v-on:click="onChordSelect(key)" :state="settings.chords[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="options-modes" class="menu-row">
      <div class="menu-title">
        Modes
      </div>
      <div v-for="(option, key) in settings.modes" v-on:click="onModeSelect(key)" :state="settings.modes[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="options-periods" class="menu-row">
      <div class="menu-title">
        Periods
      </div>
      <div v-for="(option, key) in settings.periods" v-on:click="onPeriodSelect(key)" :state="settings.periods[key]?'selected':'unselected'" v-bind:key="key" class="button">{{capitaliseText(key)}}
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
    chords: ['triads'],
    modes: ['major'],
    periods: ['whole']
  },
  blues: {
    keys: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
    chords: ['triads', 'tetrads'],
    modes: ['minor', 'suspended'],
    periods: ['whole', 'half']
  },
  rock: {
    keys: ['c', 'd', 'e', 'g'],
    chords: ['triads'],
    modes: ['major', 'minor', 'dominant'],
    periods: ['whole', 'half', 'quarter']
  },
  jazz: {
    keys: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
    chords: ['triads', 'tetrads'],
    modes: ['major', 'minor', 'dominant', 'suspended'],
    periods: ['whole', 'half', 'quarter', 'eighth']
  }
}

const OPTIONS_KEYS = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
const OPTIONS_CHORDS = ['triads', 'tetrads']
const OPTIONS_MODES = ['major', 'minor', 'dominant', 'suspended']
const OPTIONS_PERIODS = ['whole', 'half', 'quarter', 'eighth']

var originalSettings = {}
originalSettings.keys = {}
for (let i = 0; i < OPTIONS_KEYS.length; i++) {
  originalSettings.keys[OPTIONS_KEYS[i]] = false
}
originalSettings.styles = {}
for (let i in OPTIONS_STYLES) {
  originalSettings.styles[i] = false
}
originalSettings.chords = {}
for (let i = 0; i < OPTIONS_CHORDS.length; i++) {
  originalSettings.chords[OPTIONS_CHORDS[i]] = false
}
originalSettings.modes = {}
for (let i = 0; i < OPTIONS_MODES.length; i++) {
  originalSettings.modes[OPTIONS_MODES[i]] = false
}
originalSettings.periods = {}
for (let i = 0; i < OPTIONS_PERIODS.length; i++) {
  originalSettings.periods[OPTIONS_PERIODS[i]] = false
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
  },
  methods: {
    onModeSelect: function (option, event) {
      Vue.set(this.settings.modes, option, !this.settings.modes[option])
      this.$emit('settings', this.settings)
    },
    onPeriodSelect: function (option, event) {
      Vue.set(this.settings.periods, option, !this.settings.periods[option])
      this.$emit('settings', this.settings)
    },
    onChordSelect: function (option, event) {
      Vue.set(this.settings.chords, option, !this.settings.chords[option])
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
      for (let i in this.settings.chords) {
        this.settings.chords[i] = false
      }
      for (let i = 0; i < selectedStyle.chords.length; i++) {
        this.settings.chords[selectedStyle.chords[i]] = true
      }
      for (let i in this.settings.modes) {
        this.settings.modes[i] = false
      }
      for (let i = 0; i < selectedStyle.modes.length; i++) {
        this.settings.modes[selectedStyle.modes[i]] = true
      }
      for (let i in this.settings.periods) {
        this.settings.periods[i] = false
      }
      for (let i = 0; i < selectedStyle.periods.length; i++) {
        this.settings.periods[selectedStyle.periods[i]] = true
      }
      this.$emit('settings', this.settings)
    },
    capitaliseText: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
<style>
#menu {
  background-color: #1c6c70;
  padding: 10px;
}
.menu-title {
  color:white;
  float:left;
  width:80px;
  text-align:right;
  margin-right:10px;
  padding:5px 0;
  font-size:20px;
}
.menu-divider {
  width:98%;
  height:1px;
  background-color: rgba(255,255,255,0.3);
  margin:7px auto 5px;
}
.button {
  background-color:#9cc8cb;
  font-size:20px;
  color:rgba(0,0,0,0.5);
  padding:5px 10px;
  margin:2px 2px 0 0;
  float:left;
  cursor:pointer;
  text-align:center;
}
.button:hover {
  background-color:#bcdadc;
  color:black;
}
[state="selected"].button:hover {
  background-color:#ddf5f7;
}
#options-styles [state="selected"]:hover {
  background-color:white;
}
[state="selected"] {
  background-color:white;
  color:black;
}
.clearfix {
  clear:both;
}
</style>
