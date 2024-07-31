<template>
  <div class="nav">
    <button class="navregular" :class="{ active: activeIndex === 0 }" @click="setActive(0)">Главная</button>
    <button class="navregular" :class="{ active: activeIndex === 1 }" @click="setActive(1)">О нас</button>
    <button class="navregular" :class="{ active: activeIndex === 2 }" @click="setActive(2)">Преподаватели</button>
    <!-- LONGTODO Authentication -->
    <button class="navsignin">ВОЙТИ</button>
    <div class="circleOne" v-if="activeIndex === 0"></div>
    <div class="circleTwo" v-if="activeIndex === 1"></div>
    <div class="circleThree" v-if="activeIndex === 2"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  },
}
</script>

<style>
/* Changing the width of the navigation panel */
@media (min-width: 1100px) {
  .nav {
    margin-top: 1rem;
    width: 60%;
  }
}

@media (min-width: 767px) and (max-width: 1100px) {
  .nav {
    margin-top: 1rem;
    width: 80%;
  }
}

/* Desktop styles */
@media(min-width: 767px) {
  
  .navregular, .navsignin {
    font-size: 1.25rem;
  }
  
  .circleOne, .circleTwo, .circleThree {
    display: none;
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
    position: relative;
    margin-top: 1rem;
    width: 90%;
  }

  .navregular {
    font-size: 0.875rem;
    position: relative;
  }

  .circleOne, .circleTwo, .circleThree {
    position: absolute;
    bottom: -7px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #F96F16;
    transition: left 0.3s ease;
  }

  .circleOne {
    left: 27px;
  }

  .circleTwo {
    left: 108px;
  }

  .circleThree {
    left: 215px;
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
  height: 4rem;
}

.navregular {
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Inter-Regular';
}

.navregular:focus, .navregular.active {
  outline: none;
  color: #F96F16;
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