<template>
  <div class="hello">
    <Menu />
    <Notation />
    <Chromatic />
    <Metronome />
    <Keyboard />
  </div>
</template>

<script>

import Notation from './Notation.vue'
import Chromatic from './Chromatic.vue'
import Metronome from './Metronome.vue'
import Menu from './Menu.vue'
import Keyboard from './Keyboard.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Notation,
    Chromatic,
    Metronome,
    Menu,
    Keyboard
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
</style>
