<template>
  <div id="app">
    <TopNavigation />
    <router-view/>
  </div>
</template>

<script>

import TopNavigation from './components/TopNavigation.vue'

export default {
  name: 'App',
  components: {
    TopNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Didact Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  padding:2px 10px;
}
</style>
