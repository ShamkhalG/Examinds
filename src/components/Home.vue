<template>
  <div class="home">
    <!-- TODO Rest of the home page -->
    <Navigation />
    <EMBlock />
    <EduInfo />
    <WhyUs />
    <Teachers />
    <ContactUs />
  </div>
</template>

<script>
import ContactUs from './home/ContactUs.vue';
import EduInfo from './home/EduInfo.vue';
import EMBlock from './home/EMBlock.vue';
import Navigation from './home/Navigation.vue';
import Teachers from './home/Teachers.vue';
import WhyUs from './home/WhyUs.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Navigation,
    EMBlock,
    EduInfo,
    WhyUs,
    Teachers,
    ContactUs
  }
}
</script>

<style>
/* Desktop styles */
@media (min-width: 767px) {
  .home {
    background-image: url('../assets/backgrounds/main_bg_pc.png');
  }
}

/* Mobile styles */
@media (max-width: 767px){ 
  .home {
    background-image: url('../assets/backgrounds/main_bg_mobile.png');
  }
}

.home {
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>