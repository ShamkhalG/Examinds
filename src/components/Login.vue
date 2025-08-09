<template>
  <!-- TODO Desktop version -->
  <div class="bg-login_bg bg-cover lg:bg-center flex flex-col relative
    items-center px-8 py-4 min-h-[610px]"
  >
    <!-- Welcome text -->
    <h1 class="text-white text-center font-geologicaMedium text-[1.7rem] mb-4">
      Добро пожаловать! <br />
      Пожалуйста, войдите в свой аккаунт
    </h1>

    <!-- Form -->
    <form @submit.prevent="login" class="w-full">
      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="text-sm text-white font-interMedium">
          Email
        </label>

        <input type="email" v-model="loginData.email" name="email"
          class="w-full mt-1 px-4 py-2 rounded-lg bg-[#222222] text-white 
          border border-minds focus:outline-none"
        />
      </div>

      <!-- Password -->
      <div class="mb-6">
        <label for="password" class="text-sm text-white font-interMedium">
          Пароль
        </label>
        <input type="password" v-model="loginData.password" name="password"
          class="w-full mt-1 px-4 py-2 rounded-lg bg-[#222222] text-white 
          border border-minds focus:outline-none" 
        />
      </div>

      <!-- Remember me checkbox -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center">
          <input type="checkbox" id="remember" v-model="loginData.rememberMe" name="remember"
            class="w-4 h-4 mr-2 rounded-sm peer appearance-none bg-white bg-center bg-cover
            checked:bg-login_check bg-no-repeat"
          />
          <label for="remember" class="text-white text-sm font-interMedium">
            Запомнить меня
          </label>
        </div>

        <!-- LONGTODO Forgot Password? -->
        <RouterLink to="" class="text-[#D9D9D9] text-[0.8rem] font-interMedium">
          Забыли пароль?
        </RouterLink>
      </div>

      <!-- Login button -->
      <button type="submit" class="w-full py-2 mb-4 bg-minds text-white 
        rounded-[3px] font-interMedium tracking-widest"
      >
        ВОЙТИ
      </button>
    </form>

    <!-- Register section -->
    <div class="flex flex-row justify-between w-full">
      <p class="text-white text-[0.8rem] font-interMedium">Новый пользователь?</p>
      <RouterLink to="/#registerForm" class="text-minds text-[0.8rem]
        underline font-interRegular"
      >
        Зарегистрироваться
      </RouterLink>
    </div>
    <h4 class="text-white font-geologicaBold absolute bottom-3">Exa<span class="text-minds">Minds</span></h4>
  </div>
</template>

<script>
import { showToast } from '@/utils/utils';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
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
        showToast("red", "Ошибка. Попробуйте позже!")
        // showToast("green", "Вход успешный!")
      }
    }
  }
}
</script>