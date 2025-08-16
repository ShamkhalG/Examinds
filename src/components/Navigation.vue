<template>
  <div class="w-full bg-[#222222] absolute top-0 left-0 z-50 flex justify-center">
    <div class="flex flex-row items-center justify-between h-16 pt-4 px-4 w-full lg:w-[80%]">
      <!-- Главная -->
      <div class="flex flex-col items-center">
        <RouterLink to="/" :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
          activeIndex === 0 ? 'text-[#F96F16]' : 'text-white']" 
          @click="setActive(0)">
            Главная
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] 
        duration-300 ease-in-out lg:hidden" 
        :class="{ 'opacity-0': activeIndex !== 0 }">
        </div>
      </div>

      <!-- О нас -->
      <div class="flex flex-col items-center">
        <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
          activeIndex === 1 ? 'text-[#F96F16]' : 'text-white']" 
          @click="setActive(1)">
            О <br class="lg:hidden" /> нас
        </button>
        <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out lg:hidden" :class="{ 'opacity-0': activeIndex !== 1 }"></div>
      </div>

      <!-- Преподаватели -->
      <div class="flex flex-col items-center">
        <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
          activeIndex === 2 ? 'text-[#F96F16]' : 'text-white']" 
          @click="setActive(2)">
            Преподаватели
        </button>
        <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out lg:hidden" :class="{ 'opacity-0': activeIndex !== 2 }"></div>
      </div>
      
      <!-- Пробные экзамены -->
      <div class="flex flex-col items-center">
        <button :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
          activeIndex === 3 ? 'text-[#F96F16]' : 'text-white']" 
          @click="setActive(3)">
            Пробные <br class="lg:hidden" /> экзамены
        </button>
        <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out lg:hidden" :class="{ 'opacity-0': activeIndex !== 3 }"></div>
      </div>

      <!-- ВОЙТИ -->
      <!-- FIXME Button border colour is a linear-gradient -->
      <div class="flex flex-col items-center">
        <RouterLink to="/login" @click="setActive(4)" class="flex flex-col items-center justify-center border-2 border-[#F96F16] rounded-[10px] bg-[#d9d9d94c]
          text-[#F96F16] cursor-pointer font-interSemiBold
          text-[0.768rem] w-[100px] h-[37px] mb-2 
          lg:text-[1rem] lg:w-[145px] lg:h-[48px] lg:mb-0"
        >
          ВОЙТИ
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-[#F96F16] transition-[left] duration-300 ease-in-out opacity-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  data() {
    return {
      screenWidth: window.innerWidth,
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
  },
  setup() {
    const route = useRoute()
    let activeIndex = ref(route.path === '/' ? 0 : -1)

    watch(() => route.path, (newPath) => {
      activeIndex.value = newPath === '/' ? 0 : -1
    })

    return { activeIndex }
  }
}
</script>