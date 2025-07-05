<template>
  <div class="flex flex-row items-center justify-between h-16 w-full mt-4 px-4 lg:w-4/5">
    <!-- Главная -->
    <div class="flex flex-col items-center">
      <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 md:text-xl md:mb-0',
        activeIndex === 0 ? 'text-[#F96F16]' : 'text-white']" 
        @click="setActive(0)">
          Главная
      </button>
      <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] 
      duration-300 ease-in-out md:hidden" 
      :class="{ 'opacity-0': activeIndex !== 0 }">
      </div>
    </div>

    <!-- О нас -->
    <div class="flex flex-col items-center">
      <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 md:text-xl md:mb-0',
        activeIndex === 1 ? 'text-[#F96F16]' : 'text-white']" 
        @click="setActive(1)">
          О <br class="md:hidden" /> нас
      </button>
      <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out md:hidden" :class="{ 'opacity-0': activeIndex !== 1 }"></div>
    </div>

    <!-- Преподаватели -->
    <div class="flex flex-col items-center">
      <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 md:text-xl md:mb-0',
        activeIndex === 2 ? 'text-[#F96F16]' : 'text-white']" 
        @click="setActive(2)">
          Преподаватели
      </button>
      <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out md:hidden" :class="{ 'opacity-0': activeIndex !== 2 }"></div>
    </div>
    
    <!-- Пробные экзамены -->
    <!-- TODO Functionality of "Evaluation" -->
    <div class="flex flex-col items-center">
      <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 md:text-xl md:mb-0',
        activeIndex === 3 ? 'text-[#F96F16]' : 'text-white']" 
        @click="setActive(3)">
          Пробные <br class="md:hidden" /> экзамены
      </button>
      <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out md:hidden" :class="{ 'opacity-0': activeIndex !== 3 }"></div>
    </div>

    <!-- ВОЙТИ -->
    <!-- FIXME Button border colour is a linear-gradient -->
    <div class="flex flex-col items-center">
      <button class="navsignin border-2 border-[#F96F16] rounded-[10px] bg-[#d9d9d94c]
        text-[#F96F16] cursor-pointer font-interSemiBold
        text-[0.768rem] w-[100px] h-[37px] mb-2 
        md:text-xl md:w-[180px] md:h-[60px] md:mb-0" 
        @click="showLoginToast">
          ВОЙТИ
      </button>
      <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out opacity-0"></div>
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
      screenWidth: window.innerWidth,
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
      const whyID = this.screenWidth < 1000 ? 'whyUs' : 'whyUsHeader'
      const element = document.getElementById(whyID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toEvaluation() {
      // TODO Link to the Evaluation page
      const whyID = this.screenWidth < 1000 ? 'whyUs' : 'whyUsHeader'
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