<template>
  <!-- FIXME Remove some buttons for authenticated users -->
  <div class="w-full bg-[#222222] absolute top-0 left-0 z-50 flex justify-center">
    <div class="flex flex-row items-center justify-between h-16 pt-4 px-4 w-full lg:w-[80%]">
      <!-- Главная -->
      <div class="flex flex-col items-center">
        <RouterLink to="/" :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
          activeIndex === 0 ? 'text-minds' : 'text-white']" 
          @click="setActive(0)">
            Главная
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] 
        duration-300 ease-in-out lg:hidden" 
        :class="{ 'opacity-0': activeIndex !== 0 }">
        </div>
      </div>

      <!-- О нас -->
      <div class="flex flex-col items-center">
        <RouterLink :to="{ path: '/', hash: '#whyUs'}" 
          :class="[
            'text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
            activeIndex === 1 ? 'text-minds' : 'text-white'
          ]" 
          @click="setActive(1)"
        >
          О <br class="lg:hidden" /> нас
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" :class="{ 'opacity-0': activeIndex !== 1 }"></div>
      </div>

      <!-- Преподаватели -->
      <div class="flex flex-col items-center">
        <RouterLink :to="{ path: '/', hash: '#teachers'}" 
          :class="[
            'text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
            activeIndex === 2 ? 'text-minds' : 'text-white'
          ]" 
          @click="setActive(2)"
        >
          Преподаватели
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" :class="{ 'opacity-0': activeIndex !== 2 }"></div>
      </div>
      
      <!-- Пробные экзамены -->
      <div class="flex flex-col items-center">
        <RouterLink to="/exams" :class="[
            'text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
            activeIndex === 3 ? 'text-minds' : 'text-white'
          ]" 
          @click="setActive(3)"
        >
          Пробные <br class="lg:hidden" /> экзамены
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" :class="{ 'opacity-0': activeIndex !== 3 }"></div>
      </div>

      <!-- ВОЙТИ -->
      <div class="flex flex-col items-center">
        <RouterLink to="/login" @click="setActive(4)" 
          class="flex flex-col items-center justify-center border-2 
          border-minds rounded-[10px] bg-[#d9d9d94c]
          text-minds cursor-pointer font-interSemiBold
          text-[0.768rem] w-[100px] h-[37px] mb-2 
          lg:text-[1rem] lg:w-[145px] lg:h-[48px] lg:mb-0"
        >
          ВОЙТИ
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out opacity-0"></div>
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
    },
  },
  setup() {
    const route = useRoute()
    let activeIndex = ref(route.path === '/' ? 0 : -1)

    const routeToIndex = (path) => {
      if (path === '/') return 0
      if (path === '/exams') return 3
      
      return -1
    }

    watch(() => route.path, (newPath) => {
      activeIndex.value = routeToIndex(newPath)
    }, { immediate: true })

    return { activeIndex }
  }
}
</script>