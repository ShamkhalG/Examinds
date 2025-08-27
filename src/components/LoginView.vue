<template>
  <div class="bg-login_bg bg-cover lg:bg-center flex flex-col flex-grow relative
    items-center lg:items-end lg:pr-[24rem] px-8 py-4 min-h-screen pt-20"
  >
    <img v-if="screenWidth > 1024" src="@/assets/images/login/login_bulb.png" 
      class="absolute w-[600px] left-[12rem]" />

    <!-- Welcome text -->
    <h1 class="text-white text-center lg:text-left font-geologicaMedium text-[1.7rem] 
      lg:text-[2rem] mb-4 lg:mt-[2.5rem] lg:z-10"
    >
      Добро пожаловать! <br />
      Пожалуйста, войдите в свой аккаунт
    </h1>

    <!-- Form -->
    <form @submit.prevent="login" class="w-full max-w-[400px] lg:z-10" id="loginForm">
      <!-- Email -->
      <div class="mb-4 lg:mb-6">
        <label for="email" class="text-sm lg:text-[1rem] text-white font-interMedium">
          Email
        </label>

        <input type="email" v-model="loginData.email" name="email"
          class="w-full mt-1 px-4 py-2 rounded-lg bg-[#222222] text-white 
          border border-minds focus:outline-none"
        />
      </div>

      <!-- Password -->
      <div class="mb-8">
        <label for="password" class="text-sm lg:text-[1rem] text-white font-interMedium">
          Пароль
        </label>
        <input type="password" v-model="loginData.password" name="password"
          class="w-full mt-1 px-4 py-2 rounded-lg bg-[#222222] text-white 
          border border-minds focus:outline-none" 
        />
      </div>

      <!-- Remember me checkbox -->
      <div class="flex justify-between items-center mb-6 lg:mb-8">
        <div class="flex items-center">
          <input type="checkbox" id="remember" v-model="loginData.rememberMe" name="remember"
            class="w-4 h-4 mr-2 rounded-sm appearance-none bg-white bg-center bg-cover
            checked:bg-login_check bg-no-repeat cursor-pointer"
          />
          <label for="remember" class="cursor-pointer text-white text-sm lg:text-[1rem] font-interMedium select-none">
            Запомнить меня
          </label>
        </div>

        <button @click.prevent="reinitializePassword" class="text-[#D9D9D9] text-[0.8rem] lg:text-[1rem] font-interMedium">
          Забыли пароль?
        </button>
      </div>

      <!-- Login button -->
      <button type="submit" class="w-full py-2 lg:py-4 mb-4 lg:mb-8 bg-minds text-white 
        rounded-[3px] font-interMedium tracking-widest"
      >
        ВОЙТИ
      </button>
    </form>

    <!-- Register section -->
    <div class="flex flex-row justify-between w-full max-w-[400px] lg:z-10">
      <p class="text-white text-[0.8rem] lg:text-[1rem] font-interMedium">
        Новый пользователь?
      </p>

      <RouterLink to="/#registerForm" class="text-minds text-[0.8rem]
        underline font-interRegular lg:text-[1rem]"
      >
        Зарегистрироваться
      </RouterLink>
    </div>
    
    <!-- Examinds logo -->
    <h4 class="text-white lg:text-[1.5rem] font-geologicaBold absolute bottom-3 lg:bottom-[2rem] lg:left-[2rem]">
      Exa<span class="text-minds">Minds</span>
    </h4>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from '@/utils/notifications'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// Data
const auth = useAuthStore()
const router = useRouter()

const screenWidth = window.innerWidth
// TODO Use "reactive" and remove ".value"
const loginData = ref({
  email: '',
  password: '',
  rememberMe: false
})

// Methods
// TODO Move this to utils
async function validateData() {
  // Required rule validation
  if (Object.values(loginData).some(value => value === '' || value === null)) {
    showToast("red", "Все поля должны быть заполнены!")
    return false
  }
  
  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.value.email)) {
    showToast("red", "Введённый мейл недействительный!")
    return false
  }

  return true
}

async function login() {
  const isValid = await validateData()
  if (isValid) {
    if (await auth.login(loginData)) {// Login successful
      showToast("green", "Вы успешно авторизовались!")
      router.push("/profile")
    } else { // Login failed
      showToast("red", "Произошла ошибка! Пожалуйста, попробуйте позже.")
    }
  }
}

async function reinitializePassword() {
  // Email required validation
  if (loginData.value.email === "") {
    showToast("red", "Введите ваш мейл!")
    return
  }
  
  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.value.email)) {
    showToast("red", "Введённый мейл недействительный!")
    return
  }

  // LONGTODO Sending API request for password reinitialization
  // if (await auth.login(loginData)) {// Login successful
  //   showToast("blue", "Инструкции по сбросу пароля отправлены на вашу почту.")
  // } else { // Login failed
  //   showToast("red", "Произошла ошибка! Пожалуйста, попробуйте позже.")
  // }
}
</script>