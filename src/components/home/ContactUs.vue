<template>
  <div class="flex flex-col items-center justify-center mt-[1rem] mb-[5rem] 
    lg:mt-auto lg:mb-auto"
  >
    <p class="text-white font-geologicaBold text-[2.1rem] mb-[0.7rem] 
    lg:text-[4.8rem] lg:mb-0 lg:mt-0">
      Свяжитесь с нами
    </p>

    <img class="w-[90%] lg:w-auto" v-if="screenWidth < 1024" src="../../assets/images/contact_us_image.png" />
    <div class="relative flex justify-center mt-[-1.2rem] mx-[0.5rem] w-[90%] min-h-[400px]
    lg:flex-col lg:items-center lg:mt-[-3.8rem] lg:mx-0 lg:w-auto lg:min-h-auto"
    >
      <img class="w-[91.5%]" v-if="screenWidth >= 1024" src="../../assets/images/contact_us_image_pc.png" />
      
      <div class="lg:absolute lg:top-[21.5rem] lg:w-[590px] lg:h-[360px]">
        <div class="relative flex justify-center">
          <!-- Notebook image -->
          <img class="w-[90%] lg:w-auto" :src="registerBg" />
  
          <form @submit.prevent="signUp" id="registerForm" 
            class="absolute w-[260px] mt-[2rem] lg:mt-[2rem] lg:w-[550px] lg:ml-[1rem]" 
          >
            <!-- Name/Surname -->
            <div class="mb-2 lg:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              lg:ml-[0.5rem] lg:mt-[0.4rem] lg:mb-[0.2rem] lg:text-[0.8rem]">
                Имя/Фамилия
              </p>
              <input type="text" v-model="registerData.name" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[25px] w-[98%] lg:px-2 lg:rounded-[8px] lg:border-2 lg:w-[96%]" />
            </div>
      
            <!-- Number -->
            <div class="mb-2 lg:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic  
              lg:mt-[0.4rem] lg:mb-[0.2rem] lg:text-[0.8rem]">
                Номер телефона
              </p>
              <input type="text" v-model="registerData.phonenumber" placeholder="Пример: +994501234567" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 lg:rounded-[8px] lg:border-2 lg:w-[96%]" />
            </div>
      
            <!-- Email -->
            <div class="mb-2 lg:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              lg:mt-[0.4rem] lg:mb-[0.2rem] lg:text-[0.8rem]">
                Электронная почта
              </p>
              <input type="text" v-model="registerData.email" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 lg:rounded-[8px] lg:border-2 lg:w-[96%]" />
            </div>
      
            <!-- Password -->
            <div class="mb-2 lg:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              lg:mt-[0.4rem] lg:mb-[0.2rem] lg:text-[0.8rem]">
                Пароль
              </p>
              <input type="text" v-model="registerData.password" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 lg:rounded-[8px] lg:border-2 lg:w-[96%]" />
            </div>
            
            <!-- Parent number -->
            <div>
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              lg:mt-[0.4rem] lg:mb-[0.2rem] lg:text-[0.8rem]">
                Номер телефона Родителя
              </p>
              <input type="text" v-model="registerData.parentnumber" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 lg:rounded-[8px] lg:border-2 lg:w-[96%]" /> 
            </div>
            
            <div class="mt-2 lg:mt-2 flex flex-col items-center justify-center">
              <button type="submit" 
                class="findOutPriceButton font-interBold text-white cursor-pointer
                w-[250px] h-[45px] text-[0.7rem] lg:text-[0.9rem] lg:w-[310px] lg:h-[72px]"
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { showToast } from '@/utils/utils.js';

import registerBgMobile from "../../assets/backgrounds/register_bg.png";
import registerBgDesktop from "../../assets/backgrounds/register_bg_pc.png";

export default {
  name: "ContactUs",
  data() {
    return {
      screenWidth: window.innerWidth,
      registerData: {
        name: '',
        phonenumber: '',
        email: '',
        password: '',
        parentnumber: ''
      }
    }
  },
  computed: {
    registerBg() {
      return this.screenWidth < 1024 ? registerBgMobile : registerBgDesktop;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    async validateData() {
      // Required rule validation
      if (Object.values(this.registerData).some(value => !value)) {
        showToast("red", "Все поля должны быть заполнены!")
        return false
      }

      // Name validation
      const [name, surname] = this.registerData.name.trim().split(' ');
      if (!this.registerData.name.includes(' ')) {
        showToast("red", "Имя / Фамилия должно содержать имя и фамилию, разделенные пробелом!");
        return false;
      } else if (!name || name.length < 2) {
        showToast("red", "Имя должно содержать как минимум 2 буквы!");
        return false;
      } else if (!surname || surname.length < 2) {
        showToast("red", "Фамилия должна содержать как минимум 2 буквы!");
        return false;
      }

      // Number verification
      if (this.registerData.phonenumber[0] !== '+') {
        showToast("red", "Номер должен начатся с '+'!")
        return false;
      } else if (this.registerData.phonenumber.length !== 13 || !/^\+\d{12}$/.test(this.registerData.phonenumber)) {
        showToast("red", "Номер должен состоять из 13 символов: + и 12 цифр")
        return false;
      }
      
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registerData.email)) {
        showToast("red", "Введённый мейл недействительный!")
        return false
      }

      // Password verification
      const commonPasswords = ["123456", "password", "qwerty", "111111"];
      if (this.registerData.password.length < 10) { // Length check
        showToast("red", "Пароль должен состоять как минимум из 10 символов!")
        return false
      } else if (!/[A-Z]/.test(this.registerData.password)) { // Uppercase letter check
        showToast("red", "Пароль должен содержать хотя бы одну заглавную букву (A-Z)!");
        return false;
      } else if (!/[a-z]/.test(this.registerData.password)) { // Lowercase letter check
        showToast("red", "Пароль должен содержать хотя бы одну строчную букву (a-z)!");
        return false;
      } else if (!/[0-9]/.test(this.registerData.password)) { // Number check
        showToast("red", "Пароль должен содержать хотя бы одну цифру (0-9)!");
        return false;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.registerData.password)) { // Special character check
        showToast("red", "Пароль должен содержать хотя бы один специальный символ (например, !@#$%^&*)!");
        return false;
      } else if (/(\d)\1{2}/.test(this.registerData.password)) { // 3 consecutive numbers check
        showToast("red", "Пароль не должен содержать три одинаковых подряд идущих цифры!")
        return false
      } else if (commonPasswords.includes(this.registerData.password)) { // Common passwords check
        showToast("red", "Пароль слишком простой, выберите более сложный!");
        return false;
      }

      // Parent number verification
      if (this.registerData.parentnumber[0] !== '+') {
        showToast("red", "Номер родителя должен начатся с '+'!")
        return false;
      } else if (this.registerData.parentnumber.length !== 13 || !/^\+\d{12}$/.test(this.registerData.parentnumber)) {
        showToast("red", "Номер родителя должен состоять из 13 символов: + и 12 цифр")
        return false;
      } else if (this.registerData.parentnumber === this.registerData.phonenumber) {
        showToast("red", "Номер родителя не должен быть одинаковым с вашим номером!")
        return false;
      }

      return true;
    },

    async signUp() {
      const isValid = await this.validateData();
      if (isValid) {
        const baseURL = "https://bold-aurelea-examinds-0e0bfd9d.koyeb.app/";
        const url = baseURL + "auth/signup";
        axios.post(url, this.registerData)
          .then(() => {
            showToast("green", "Регистрация успешна! С вами в скором времени свяжутся.");
          })
          .catch(error => {
            console.error('Error: ', error.message);
            showToast("red", "Произошла ошибка! Пожалуйста, повторите ещё раз.");
          });
      }
    },
  },
}
</script>

<style>
.findOutPriceButton {
  letter-spacing: 1.5px;
  background: 
  linear-gradient(
    to right, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  ),
  linear-gradient(
    to right, 
    rgba(255, 236, 224, 0) 0%,
    rgba(255, 236, 224, 0.4) 47%,
    rgba(255, 236, 224, 0) 100%
  ),
  #037328;
  border-radius: 10px / 50px;
  border: none;
  box-shadow: 0px 4px 0px #046b26,
              inset 0px 2.18px 11.06px rgba(255, 255, 255, 0.25); 
}

.findOutPriceButton:active {
  box-shadow: 0px 0px 0px #046b26;
  transform: translateY(2px);
}
</style>