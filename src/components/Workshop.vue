<template>
  <div class="workshop">
    <Menu @settings="updateSettings"/>
    <div class="col">
      <Metronome @tick="onTick"/>
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
      menuSettings: Menu.data
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
    /* Menu.$on('settings', (settings) => {
      this.settings = settings
    })
     Metronome.$on('tick', (period) =>{
      if (period === 'whole') {
        let keys = []
        for (let i in this.settings.keys) {
          if (this.settings.keys) keys.push(i)
        }
        let key = keys[Math.floor(Math.random() * keys.length)]

        let modes = []
        for (let i in this.settings.modes) {
          if (this.settings.modes) modes.push(i)
        }
        let mode = modes[Math.floor(Math.random() * modes.length)]

        let chords = []
        for (let i in this.settings.chords) {
          if (this.settings.chords) chords.push(i)
        }
        let chord = chords[Math.floor(Math.random() * chords.length)]

        let newChord = CHORDS[key][mode][chord]
        this.bus.$emit('showChord', {
          chord: newChord
        })
      }
    })
     this.bus.$emit('showChord', {
      chord: {
        id: 'fmajinv1',
        name: 'F',
        subtitle: 'maj',
        desc: {title: 'F major', body: 'This is the F major chord that everyone uses, but it\'s actually the 1st inversion, as you can see in the Chromatic diagram.'},
        structure: {f3: {pitch: 'natural', finger: '3'}, a4: {pitch: 'natural', finger: '5'}, c3: {pitch: 'natural', finger: '1'}}
      }
    }) */
    // setTimeout(this.nextChord, 5000)
  },
  methods: {
    nextChord: function () {
      this.bus.$emit('showChord', {
        chord: {
          id: 'cmaj',
          name: ' C',
          subtitle: 'maj',
          desc: {title: 'The classic C Major', body: 'This is the most common, and basic, chord, the root triad in the C major scale.'},
          structure: {c3: {pitch: 'natural', finger: '1'}, e3: {pitch: 'natural', finger: '2'}, g3: {pitch: 'natural', finger: '3'}, a4: {pitch: 'sharp', finger: '5'}}
        }
      })
    },
    onTick: function (period) {
      console.log('PERIOD')
      if (period === 'whole') {
        let keys = []
        for (let i in this.settings.keys) {
          if (this.settings.keys[i]) keys.push(i)
        }
        let key = keys[Math.floor(Math.random() * keys.length)]

        let modes = []
        for (let i in this.settings.modes) {
          if (this.settings.modes[i]) modes.push(i)
        }
        let mode = modes[Math.floor(Math.random() * modes.length)]

        let chords = []
        for (let i in this.settings.chords) {
          if (this.settings.chords[i]) chords.push(i)
        }
        let chord = chords[Math.floor(Math.random() * chords.length)]

        console.log('key', key, ' mode', mode, ' chord', chord)

        let newChord = CHORDS[key][mode][chord].inversion0
        console.log('new chord:', newChord)
        this.bus.$emit('showChord', {
         chord: newChord
        })
      }
    },
    updateSettings: function (settings) {
      this.settings = settings
      console.log('Settings', this.settings)
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
