<template>
  <div id="chord">
    <div id="chord-key">
      {{chord.name}}
      <span id="chord-mode">
        {{chord.subtitle}}
      </span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Chord',
  data () {
    return {
      chord: {name: '', subtitle: ''}
    }
  },
  props: ['bus'],
  created () {
    this.bus.$on('showChord', (args) => {
      this.showChord(args.chord)
    })
  },
  methods: {
    showChord: function (chord) {
      this.chord = chord
      // Vue.set(this, 'chord', chord)
    }
  }
}

</script>
<style>
#chord {
  width:300px;
  text-align:center;
}
#chord-key {
  font-size:120px;
  color:black;
}
#chord-mode {
  font-size:40px;
  position:relative;
  left:-20px;
}
.clearfix {
  clear:both;
}
</style>
