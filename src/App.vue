<template>
  <div id="app">
    <TopNavigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

import TopNavigation from './components/TopNavigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopNavigation,
    Footer
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
</style>
