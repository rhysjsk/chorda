<template>
  <div id="menu">
    <div id="options-styles" class="menu-row">
    	<div v-for="option in OPTIONS_STYLES" v-on="onStyleSelect(option)" :active="settings.styles[option]">{{option}}
    	</div>
    </div>
  </div>
</template>
<script>

const OPTIONS_STYLES = {
  beginner:{
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
  	modes: ['major', 'minor', 'dominant']
  	periods: ['whole', 'half', 'quarter']
  },
  jazz: {
  	keys: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  	chords: ['triads', 'tetrads'],
  	modes: ['major', 'minor', 'dominant', 'suspended']
  	periods: ['whole', 'half', 'quarter', 'eighth']
  }

const OPTIONS_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const OPTIONS_CHORDS = ['Triads', 'Tetrads']
const OPTIONS_MODES = ['Major', 'Minor', 'Dominant', 'Suspended']
const OPTIONS_PERIODS = ['Whole', 'Half', 'Quarter', 'Eighth']

export default {
  name: 'Menu',
  data () {
    return {
      settings:{
      	styles:{},
      	keys:{},
      	chords:{},
      	modes:{},
      	periods:{}
      }
    }
  },
  mounted () {
  }
}
</script>
<style>
.button {
	background-color:#9cc8cb;
	font-size:20px;
	color:rgba(0,0,0,0.5);
	padding:5px 10px;
	margin:2px 2px 0 0;
	float:left;
}
.button:hover {
	background-color:#bcdadc;
}
[selected="selected"] {
	background-color:white;
	color:black;
}
</style>
