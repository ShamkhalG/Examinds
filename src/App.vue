<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'
import './assets/styles/global.css'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>