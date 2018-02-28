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
const OPTIONS_MODES = ['Major', 'Minor', 'Dominant', 'Suspended']
const OPTIONS_PERIODS = ['Whole', 'Half', 'Quarter', 'Eighth']

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

  },
  methods: {
    onModeSelect: function (option, event) {
      Vue.set(this.settings.modes, option, !this.settings.modes[option])
    },
    onPeriodSelect: function (option, event) {
      Vue.set(this.settings.periods, option, !this.settings.periods[option])
    },
    onChordSelect: function (option, event) {
      Vue.set(this.settings.chords, option, !this.settings.chords[option])
    },
    onKeySelect: function (option, event) {
      Vue.set(this.settings.keys, option, !this.settings.keys[option])
    },
    onStyleSelect: function (option, event) {
      Vue.set(this.settings.styles, option, !this.settings.styles[option])
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
}
[state="selected"] {
  background-color:white;
  color:black;
}
.clearfix {
  clear:both;
}
</style>
