<template>
  <div id="chord">
    <div id="chord-key">
      C
      <span id="chord-mode">
        maj
      </span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Chord',
  data () {
    return {

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
