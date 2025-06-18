<template>
  <div class = "eval_home">

  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Evaluation',
  components: {
    
  }
}
</script>

<style>
/* Desktop styles */
@media (min-width: 767px) {
  .eval_home {
    background-image: url('../assets/backgrounds/main_bg_pc.png');
  }
}

/* Mobile styles */
@media (max-width: 767px){ 
  .eval_home {
    background-image: url('../assets/backgrounds/main_bg_mobile.png');
  }

  /* .subHome {
    background-image: url('../assets/backgrounds/subhome_bg.png');
    margin-top: -3.5rem;
  } */
}

/* Common styles */
.eval_home {
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* .subHome {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
} */
</style>