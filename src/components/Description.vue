<template>
  <div id="description">
    <div class="desc-title">{{desc.title}}</div>
    <div class="desc-body">
      {{desc.body}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Description',
  data () {
    return {
      desc: {title: '', body: ''}
    }
  },
  props: ['bus'],
  created () {
    // this.bus.$on('showChord', (args) => {
    //   this.showChord(args.chord)
    // })
  },
  methods: {
    showChord: function (chord) {
      this.desc = chord.desc
    }
  }
}
</script>
<style>
#description {
  width:300px;
}
.desc-title {
  font-size:28px;
}
</style>
