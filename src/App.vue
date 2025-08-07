<template>
  <Navigation />
  <RouterView />
</template>

<script>
import Navigation from './components/home/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>