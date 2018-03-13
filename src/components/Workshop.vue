<template>
  <div class="workshop">
    <Menu />
    <div class="col">
      <!-- <Metronome /> -->
      <!-- <Chord /> -->
      <!-- <Notation :bus="bus"/> -->
    </div>
    <div class="col">
      <!-- <Keyboard :bus="bus"/> -->
      <div class="row">
        <Chromatic :bus="bus"/>
        <!-- <Description /> -->
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

export default {
  name: 'Workshop',
  data () {
    return {
      bus: new Vue(),
      menuSettings: Menu.data
    }
  },
  components: {
    // Notation,
    Chromatic
    // Metronome,
    // Menu,
    // Keyboard,
    // Chord,
    // Description
  },
  mounted () {
    this.bus.$emit('showChord', {
      chord: {
        id: 'cmaj',
        name: ' C',
        subtitle: 'maj',
        desc: {title: 'The classic C Major', body: 'This is the most common, and basic, chord, the root triad in the C major scale.'},
        structure: {c3: {pitch: 'natural', finger: '1'}, e3: {pitch: 'natural', finger: '3'}, g3: {pitch: 'natural', finger: '5'}, a4: {pitch: 'sharp'}}
      }
    }
    )
    console.log('Menu:', this.menuSettings().settings)
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
  /* float:left; */
}
.clearfix {
  /* clear:both; */
}
#chromatic, #description {
  /* float:left; */
}
</style>
