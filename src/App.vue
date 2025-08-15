<template>
  <div class="min-h-[100dvh] grid grid-rows-[auto,1fr]">
    <Navigation />
    <main class="min-h-0">
      <RouterView />
    </main>
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