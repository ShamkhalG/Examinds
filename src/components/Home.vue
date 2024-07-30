<template>
  <div class="home">
    <Navigation />
    <!-- TODO Rest of the home page -->
  </div>
</template>

<script>
import Navigation from './home/Navigation.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style>
/* Desktop styles */
@media (min-width: 768px) {
  .home {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* Mobile styles */
@media (max-width: 767px){ 
  .home {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.home {
  background-image: url('../assets/backgrounds/main_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>