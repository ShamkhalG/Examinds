<template>
  <div class="home">
    <Navigation />
    <EMBlock />
    <div class="subHome">
      <EduInfo />
      <WhyUs />
      <Teachers />
      <Bacheliers />
      <DiscoveryWeek />
      <ContactUs />
    </div>
  </div>
</template>

<script>
import Navigation from './home/Navigation.vue';
import EMBlock from './home/EMBlock.vue';
import EduInfo from './home/EduInfo.vue';
import WhyUs from './home/WhyUs.vue';
import Teachers from './home/Teachers.vue';
import Bacheliers from './home/Bacheliers.vue';
import DiscoveryWeek from './home/DiscoveryWeek.vue';
import ContactUs from './home/ContactUs.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Navigation,
    EMBlock,
    EduInfo,
    WhyUs,
    Teachers,
    Bacheliers,
    DiscoveryWeek,
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

  .subHome {
    background-image: url('../assets/backgrounds/subhome_bg.png');
    margin-top: -3.5rem;
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

.subHome {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>