<template>
  <div class="nav">
    <button class="navregular">Главная</button>
    <button class="navregular">О нас</button>
    <button class="navregular">Преподаватели</button>
    <button class="navsignin">ВОЙТИ</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation"
}
</script>

<style>
/* Changing the width of the navigation panel */
@media (min-width: 1100px) {
  .nav {
    width: 60%;
  }
}

@media (min-width: 767px) and (max-width: 1100px) {
  .nav {
    width: 80%;
  }
}

/* Desktop styles */
@media(min-width: 767px) {
  .navregular, .navsignin {
    font-size: 1.25rem;
  }

  .navsignin {
    padding-left: 3.375rem;
    padding-right: 3.375rem;
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
  }
}

/* TODO Mobile styles */
@media (max-width: 767px){ 
  .nav {
    width: 100%;
  }

  .navregular {
    font-size: 0.875rem;
  }
  
  .navsignin {
    font-size: 0.768rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.688rem;
    padding-bottom: 0.688rem;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  height: 4rem;
}

.navregular {
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Inter-Regular';
}

.navsignin {
  background-color: rgb(217, 217, 217, 0.3);
  border: solid 2px;
  border-radius: 10px;
  border-color: linear-gradient(to right, rgba(255, 255, 255, 0.55), #F96F16);
  color: #F96F16;
  cursor: pointer;
  font-family: 'Inter-SemiBold';
}
</style>