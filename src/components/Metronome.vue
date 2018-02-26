<template>
  <div id="metronome">
    <div id="button-play" class="button" :state="playState" v-on:click="togglePlayPause"></div>
    <div id="button-audio" class="button" :state="audioState" v-on:click="toggleAudio"></div>
    <div id="metronome-ticks">
      <div class="tick" :active="tickCount1"></div>
      <div class="tick" :active="tickCount2"></div>
      <div class="tick" :active="tickCount3"></div>
      <div class="tick" :active="tickCount4"></div>
      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
  name: 'Metronome',
  data () {
    return {
      BPM: 100,
      clock: null,
      playState: 'paused',
      audioState: 'on',
      tickCount: 0,
      tickSound: null
    }
  },
  computed: {
    tickCount1: function () { return this.tickCount >= 0 },
    tickCount2: function () { return this.tickCount >= 1 },
    tickCount3: function () { return this.tickCount >= 2 },
    tickCount4: function () { return this.tickCount >= 3 }
  },
  mounted () {
    this.tickSound = new Audio('../../static/tick.ogg')
  },
  watch: {
    playState: function (val) {
      clearInterval(this.clock)
      this.tickCount = 0
      if (val === 'playing') this.clock = setInterval(this.tick, Math.round((60 / this.BPM) * 1000))
    }
  },
  methods: {
    togglePlayPause: function (event) {
      this.playState = (this.playState === 'paused') ? 'playing' : 'paused'
    },
    toggleAudio: function (event) {
      this.audioState = (this.audioState === 'on') ? 'off' : 'on'
    },
    tick: function () {
      this.tickCount++
      if (this.tickCount >= 4) this.tickCount = 0
      if (this.audioState === 'on') this.tickSound.play()
    },
    setBPM: function (num) {
      this.BPM = num
    },
    getBPM: function () {
      return this.BPM
    }
  }
}
</script>
<style>
.button {
  min-height:25px;
  min-width:25px;
}
.clearfix {
  clear:both;
}
#button-play[state='paused'] {
  background-image:url('../../static/icon-play.svg');
}
#button-play[state='playing'] {
  background-image:url('../../static/icon-pause.svg');
}
#button-audio[state='off'] {
  background-image:url('../../static/icon-audio-off.svg');
}
#button-audio[state='on'] {
  background-image:url('../../static/icon-audio-on.svg');
}
#button-audio {
  width:35px;
}
#metronome-ticks {
  overflow:auto;
}
.tick {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: black;
  margin:5px;
  float:left;
  display:none;
}
.tick[active='true'] {
  display:block;
}
</style>
