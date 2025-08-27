<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full bg-[#222222] absolute top-0 left-0 z-50 flex justify-center">
    <div class="flex flex-row items-center h-16 pt-4 px-4 w-full lg:w-[80%]"
      :class="isAuthenticated ? 'justify-around' : 'justify-between'"
    >
      <!-- Главная -->
      <div v-if="!isAuthenticated" class="flex flex-col items-center">
        <RouterLink to="/" :class="['text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
          activeIndex === 0 ? 'text-minds' : 'text-white']" 
          @click="setActive(0)">
            Главная
        </RouterLink>
        
        <!-- Orange circle -->
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" 
          :class="{ 'opacity-0': activeIndex !== 0 }"></div>
      </div>

      <!-- О нас -->
      <div v-if="!isAuthenticated" class="flex flex-col items-center text-center lg:text-start">
        <RouterLink :to="{ path: '/', hash: '#whyUs'}" 
          :class="[
            'text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
            activeIndex === 1 ? 'text-minds' : 'text-white'
          ]" 
          @click="setActive(1)"
        >
          О <br class="lg:hidden" /> нас
        </RouterLink>

        <!-- Orange circle -->
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" 
          :class="{ 'opacity-0': activeIndex !== 1 }"></div>
      </div>

      <!-- Преподаватели -->
      <div v-if="!isAuthenticated" class="flex flex-col items-center">
        <RouterLink :to="{ path: '/', hash: '#teachers'}" 
          :class="[
            'text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
            activeIndex === 2 ? 'text-minds' : 'text-white'
          ]" 
          @click="setActive(2)"
        >
          Преподаватели
        </RouterLink>

        <!-- Orange circle -->
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" 
          :class="{ 'opacity-0': activeIndex !== 2 }"></div>
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

        <!-- Orange circle -->
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" 
          :class="{ 'opacity-0': activeIndex !== 3 }"></div>
      </div>

      <!-- Personal cabinet -->
      <div v-if="isAuthenticated" class="flex flex-col items-center">
        <RouterLink to="/profile" :class="[
            'text-[0.6rem] border-none cursor-pointer font-interRegular mb-2 lg:text-[1rem] lg:mb-0',
            activeIndex === 6 ? 'text-minds' : 'text-white'
          ]" 
          @click="setActive(6)"
        >
          Личный<br class="lg:hidden" /> кабинет
        </RouterLink>
        
        <!-- Orange circle -->
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out lg:hidden" 
          :class="{ 'opacity-0': activeIndex !== 6 }"></div>
      </div>

      <!-- Log out -->
      <div v-if="isAuthenticated" class="flex flex-col items-center">
        <RouterLink to="/" @click="logout" 
          class="flex flex-col items-center justify-center border-2 
          border-minds rounded-[10px] bg-[#d9d9d94c]
          text-minds cursor-pointer font-interSemiBold
          text-[0.768rem] w-[100px] h-[37px] mb-2 
          lg:text-[1rem] lg:w-[145px] lg:h-[48px] lg:mb-0"
        >
          ВЫЙТИ
        </RouterLink>
        <div class="w-3 h-3 rounded-full bg-minds transition-[left] duration-300 ease-in-out opacity-0"></div>
      </div>

      <!-- ВОЙТИ -->
      <div v-if="!isAuthenticated" class="flex flex-col items-center">
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

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Data
const auth = useAuthStore()
const route = useRoute()
const router = useRouter()

const activeIndex = ref(route.path === '/' ? 0 : -1)
const isAuthenticated = computed(() => auth.isAuthenticated)

// Methods
function routeToIndex(path) {
  if (path === '/') return 0
  if (path === '/exams') return 3
  if (path === '/profile') return 6
  
  return -1
}

function setActive(index) {
  activeIndex.value = index
}

function logout() {
  auth.logout()
  router.push('/login')
}

// Watcher
watch(() => route.path, (newPath) => {
  activeIndex.value = routeToIndex(newPath)
}, { immediate: true })
</script>