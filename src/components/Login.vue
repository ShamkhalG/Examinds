<template>
  <div class="bg-login_bg bg-cover lg:bg-center flex flex-col flex-grow relative
    items-center lg:items-end lg:pr-[24rem] px-8 py-4 h-[calc(100vh-64px)]"
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
    <form @submit.prevent="login" class="w-full max-w-[400px] lg:z-10">
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

<script>
import { showToast } from '@/utils/utils';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      screenWidth: window.innerWidth,
      loginData: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  methods: {
    async validateData() {
      // Required rule validation
      if (Object.values(this.loginData).some(value => value === '' || value === null)) {
        showToast("red", "Все поля должны быть заполнены!")
        return false
      }
      
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.loginData.email)) {
        showToast("red", "Введённый мейл недействительный!")
        return false
      }

      return true;
    },

    async login() {
      const isValid = await this.validateData();
      if (isValid) {
        // LONGTODO Sending API request for login

        // Login successful
        showToast("red", "Произошла ошибка! Пожалуйста, попробуйте позже.")
        // showToast("green", "Вход успешный!")
      }
    },

    async reinitializePassword() {
      if (this.loginData.email === "") {
        showToast("red", "Введите ваш мейл!")
        return
      }
      
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.loginData.email)) {
        showToast("red", "Введённый мейл недействительный!")
        return
      }

      // LONGTODO Sending API request for password reinitialization
      showToast("red", "Произошла ошибка! Пожалуйста, попробуйте позже.")
      // showToast("blue", "Инструкции по сбросу пароля отправлены на вашу почту.")
    }
  }
}
</script>