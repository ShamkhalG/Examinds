<template>
  <div class="nav">
    <!-- FIXME No circle is seen in PC version -->
    <div class="navButtons">
      <button class="navregular" :class="{ active: activeIndex === 0 }" @click="setActive(0)">Главная</button>
      <div class="circleOne" :class="{ noOpacity: activeIndex !== 0 }"></div>
    </div>

    <div class="navButtons">
      <button class="navregular" :class="{ active: activeIndex === 1 }" @click="setActive(1)">О нас</button>
      <div class="circleTwo" :class="{ noOpacity: activeIndex !== 1 }"></div>
    </div>

    <div class="navButtons">
      <button class="navregular" :class="{ active: activeIndex === 2 }" @click="setActive(2)">Преподаватели</button>
      <div class="circleThree" :class="{ noOpacity: activeIndex !== 2 }"></div>
    </div>
    
    <!-- TODO Style and functionality of "" -->
    <div class="navButtons">
      <button class="navregular" :class="{ active: activeIndex === 3 }" @click="setActive(3)">Пробные экзамены</button>
      <div class="circleFour" :class="{ noOpacity: activeIndex !== 3 }"></div>
    </div>

    <div class="navButtons">
      <button class="navsignin" @click="showLoginToast">ВОЙТИ</button>
      <div class="circleFive noOpacity"></div>
    </div>
  </div>
</template>

<script>
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

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
      if (index === 1)
        this.toWhyUs()
      if (index === 2)
        this.toTeachers()
      if (index === 3)
        this.toEvaluation()
    },
    toTeachers() {
      const element = document.getElementById('teachers');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toWhyUs() {
      const whyID = window.innerWidth < 1000 ? 'whyUs' : 'whyUsHeader'
      const element = document.getElementById(whyID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toEvaluation() {
      // TODO Link to the Evaluation page
      const whyID = window.innerWidth < 1000 ? 'whyUs' : 'whyUsHeader'
      const element = document.getElementById(whyID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    showLoginToast() {
      Toastify({
        text: "Вход в аккаунт на данный момент невозможен!",
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "red",
          fontFamily: 'Inter-Regular',
          borderRadius: 
          '6px'
        },
        stopOnFocus: true,
      }).showToast();
    }
  },
}
</script>

<style>
/* Changing the width of the navigation panel */
@media(min-width: 1100px) {
  .nav {
    margin-top: 1rem;
    width: 60%;
  }
}

@media(min-width: 767px) and (max-width: 1100px) {
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
  
  .circleOne, .circleTwo, .circleThree, .circleFour {
    display: none;
  }

  .navsignin {
    width: 180px;
    height: 60px;
  }
}

/* Mobile styles */
@media (max-width: 767px){ 
  .nav {
    position: relative;
    margin-top: 1rem;
    width: 95%;
  }

  .navregular {
    min-width: 50px;
    font-size: 0.82rem;
    position: relative;
    margin-bottom: 1rem;
  }

  .circleOne, .circleTwo, .circleThree, .circleFour, .circleFive {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #F96F16;
    transition: left 0.3s ease;
  }

  .noOpacity {
    opacity: 0;
  }
  
  .navsignin {
    font-size: 0.768rem;
    width: 100px;
    height: 37px;
    margin-bottom: 1rem;
  }
}

/* ----- Common styles ----- */
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.navButtons {
  display: flex;
  flex-direction: column;
  align-items: center;
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