<template>
  <div class="workshop">
    <Menu @settings="updateSettings" data-intro="Chord Options"/>
    <div class="col">
      <b-card>
        <div slot="header">
          Metronome
          <b-button-close />
        </div>
        <Metronome @tick="nextChord" :bus="bus" data-intro="Metronone"/>
      </b-card>
      <b-card>
        <div slot="header">
          Chord Name
          <b-button-close />
        </div>
        <Chord :bus="bus" data-intro="Chord Name"/>
      </b-card>
      <b-card>
        <div slot="header">
          Music Notation
          <b-button-close />
        </div>
        <Notation :bus="bus" data-intro="Music Notation"/>
      </b-card>
    </div>
    <div class="col">
      <b-card>
        <div slot="header">
          Keyboard & Fingering
          <b-button-close />
        </div>
        <Keyboard :bus="bus" data-intro="Keyboard"/>
      </b-card>
      <div class="row">
        <b-card>
          <div slot="header">
            Chromatic Scale
            <b-button-close />
          </div>
          <Chromatic :bus="bus" data-intro="Chromatic Scale"/>
        </b-card>
        <b-card>
          <div slot="header">
            Description
            <b-button-close />
          </div>
          <Description :bus="bus" data-intro="Description"/>
        </b-card>
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

import introJs from 'intro.js'

require('intro.js/introjs.css')

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
    introJs().start()
    introJs().addHints()
  },
  methods: {
    nextChord: function (period) {
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
            if (this.settings.chords_tetrad[i]) chords.push(['tetrads', i.replace(/ /g, '')])
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
.workshop {
  padding:2px 10px;
}
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
