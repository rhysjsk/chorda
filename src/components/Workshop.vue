<template>
  <div class="workshop">
    <Menu @settings="updateSettings"/>
    <div class="col">
      <Metronome @tick="nextChord" :bus="bus"/>
      <Chord :bus="bus"/>
      <Notation :bus="bus"/>
    </div>
    <div class="col">
      <Keyboard :bus="bus"/>
      <div class="row">
        <Chromatic :bus="bus"/>
        <Description :bus="bus"/>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>

import Notation from './Notation.vue'
import Chromatic from './Chromatic.vue'
import Metronome from './Metronome.vue'
import Menu from './Menu.vue'
import Keyboard from './Keyboard.vue'
import Chord from './Chord.vue'
import Description from './Description.vue'
import Vue from 'vue'
import CHORDS from '../assets/chords.json'

export default {
  name: 'Workshop',
  data () {
    return {
      settings: {},
      bus: new Vue(),
      menuSettings: Menu.data,
      oldKey: '',
      oldChord: ['', '']
    }
  },
  components: {
    Notation,
    Chromatic,
    Metronome,
    Menu,
    Keyboard,
    Chord,
    Description
  },
  mounted () {
    // setTimeout(this.nextChord, 5000)
    this.nextChord('whole')
  },
  methods: {
    // nextChord: function () {
    //  this.bus.$emit('showChord', {chord: CHORDS['cs']['major']['tetrads']['7th']['inversion0']})
    // },
    nextChord: function (period) {
    // "c":{ "major": { "triads": {  "root": {  "inversion0": {
    //                 "tetrads": { "7th": {    "inversion0": {
    //                              "dom7th": { "inversion0": {
    //      "minor": { "triads": {  "root": {  "inversion0": {
    //                              "dim": {    "inversion0": {
    //                 "tetrads": { "7th": {    "inversion0": {
    //                              "flat5": {  "inversion0": {

      if (period === 'whole') {
        let chordSet = false
        do {
          let keys = []
          for (let i in this.settings.keys) {
            if (this.settings.keys[i]) keys.push(i)
          }
          let key = keys[Math.floor(Math.random() * keys.length)]

          let chords = []
          for (let i in this.settings.chords_triad) {
            if (this.settings.chords_triad[i]) chords.push(['triads', i])
          }
          // let chord_triad = chords_triad[Math.floor(Math.random() * chords_triad.length)]

          for (let i in this.settings.chords_tetrad) {
            if (this.settings.chords_tetrad[i]) chords.push(['tetrads', i])
          }
          let chord = chords[Math.floor(Math.random() * chords.length)]

          if (!((key === this.oldKey) && (chord[0] === this.oldChord[0]) && (chord[1] === this.oldChord[1])) &&
            (CHORDS[key] && CHORDS[key][chord[0]] && CHORDS[key][chord[0]][chord[1]])) {
            let newChord = CHORDS[key][chord[0]][chord[1]].inversion0
            this.oldKey = key
            this.oldChord = chord
            this.bus.$emit('showChord', {
              chord: newChord
            })
            chordSet = true
          }
        } while (!chordSet)
      }
    },
    updateSettings: function (settings) {
      this.settings = settings
      let bpm = 0
      for (let s in this.settings.speeds) {
        if (this.settings.speeds[s]) {
          bpm = parseInt(s)
        }
      }
      this.bus.$emit('updateBPM', bpm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.col {
  float:left;
}
.clearfix {
  clear:both;
}
#chromatic, #description {
  float:left;
}
</style>
