<template>
  <div class="relative">
    <Navigation />
    <RouterView />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>