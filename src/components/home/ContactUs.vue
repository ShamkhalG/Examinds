<template>
  <div class="flex flex-col items-center justify-center mt-[1rem] mb-[5rem] 
    md:mt-auto md:mb-auto"
  >
    <p class="contactUsHeader text-white font-geologicaBold text-[2.1rem] mb-[0.7rem] 
    md:text-[4.8rem] md:mb-0 md:mt-0">
      Свяжитесь с нами
    </p>

    <img class="w-[90%] md:w-auto" v-if="screenWidth < 767" src="../../assets/images/contact_us_image.png" />
    <div class="relative flex justify-center mt-[-1.2rem] mx-[0.5rem] w-[90%] min-h-[400px]
    md:flex-col md:items-center md:mt-[-3.8rem] md:mx-0 md:w-auto md:min-h-auto"
    >
      <img class="w-[91.5%]" v-if="screenWidth >= 767" src="../../assets/images/contact_us_image_pc.png" />
      
      <div class="md:absolute md:top-[21.5rem] md:w-[590px] md:h-[360px]">
        <div class="relative flex justify-center">
          <!-- Notebook image -->
          <img class="w-[90%] md:w-auto" :src="registerBg" />
  
          <form @submit.prevent="signUp" id="registerForm" 
            class="absolute w-[260px] mt-[2rem] md:mt-[2rem] md:w-[550px] md:ml-[1rem]" 
          >
            <!-- Name/Surname -->
            <div class="mb-2 md:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              md:ml-[0.5rem] md:mt-[0.4rem] md:mb-[0.2rem] md:text-[0.8rem]">
                Имя/Фамилия
              </p>
              <input type="text" v-model="registerData.name" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[25px] w-[98%] md:px-2 md:rounded-[8px] md:border-2 md:w-[96%]" />
            </div>
      
            <!-- Number -->
            <div class="mb-2 md:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic  
              md:mt-[0.4rem] md:mb-[0.2rem] md:text-[0.8rem]">
                Номер телефона
              </p>
              <input type="text" v-model="registerData.phonenumber" placeholder="Пример: +994501234567" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 md:rounded-[8px] md:border-2 md:w-[96%]" />
            </div>
      
            <!-- Email -->
            <div class="mb-2 md:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              md:mt-[0.4rem] md:mb-[0.2rem] md:text-[0.8rem]">
                Электронная почта
              </p>
              <input type="text" v-model="registerData.email" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 md:rounded-[8px] md:border-2 md:w-[96%]" />
            </div>
      
            <!-- Password -->
            <div class="mb-2 md:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              md:mt-[0.4rem] md:mb-[0.2rem] md:text-[0.8rem]">
                Пароль
              </p>
              <input type="text" v-model="registerData.password" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 md:rounded-[8px] md:border-2 md:w-[96%]" />
            </div>
            
            <!-- Parent number -->
            <div>
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic
              md:mt-[0.4rem] md:mb-[0.2rem] md:text-[0.8rem]">
                Номер телефона Родителя
              </p>
              <input type="text" v-model="registerData.parentnumber" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[30px] w-[98%] px-2 md:rounded-[8px] md:border-2 md:w-[96%]" /> 
            </div>
            
            <div class="mt-2 md:mt-2 flex flex-col items-center justify-center">
              <button type="submit" 
                class="findOutPriceButton font-interBold text-white cursor-pointer
                w-[200px] h-[45px] text-[0.7rem] md:text-[0.9rem] md:w-[310px] md:h-[72px]"
              >
                УЗНАТЬ ЦЕНУ
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
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

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
      return this.screenWidth < 767 ? registerBgMobile : registerBgDesktop;
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
    
    showToast(toastType, toastMessage) {
      Toastify({
        text: toastMessage,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: toastType === 0 ? "green" : "red",
          fontFamily: 'Inter-Regular',
          borderRadius: '6px'
        },
        stopOnFocus: true,
      }).showToast();
    },
    
    async validateData() {
      // Required rule validation
      if (Object.values(this.registerData).some(value => !value)) {
        this.showToast(1, "Все поля должны быть заполнены!")
        return false
      }

      // Name validation
      const [name, surname] = this.registerData.name.trim().split(' ');
      if (!this.registerData.name.includes(' ')) {
        this.showToast(1, "Имя / Фамилия должно содержать имя и фамилию, разделенные пробелом!");
        return false;
      } else if (!name || name.length < 2) {
        this.showToast(1, "Имя должно содержать как минимум 2 буквы!");
        return false;
      } else if (!surname || surname.length < 2) {
        this.showToast(1, "Фамилия должна содержать как минимум 2 буквы!");
        return false;
      }

      // Number verification
      if (this.registerData.phonenumber[0] !== '+') {
        this.showToast(1, "Номер должен начатся с '+'!")
        return false;
      } else if (this.registerData.phonenumber.length !== 13 || !/^\+\d{12}$/.test(this.registerData.phonenumber)) {
        this.showToast(1, "Номер должен состоять из 13 символов: + и 12 цифр")
        return false;
      }
      
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registerData.email)) {
        this.showToast(1, "Введённый мейл недействительный!")
        return false
      }

      // Password verification
      const commonPasswords = ["123456", "password", "qwerty", "111111"];
      if (this.registerData.password.length < 10) { // Length check
        this.showToast(1, "Пароль должен состоять как минимум из 10 символов!")
        return false
      } else if (!/[A-Z]/.test(this.registerData.password)) { // Uppercase letter check
        this.showToast(1, "Пароль должен содержать хотя бы одну заглавную букву (A-Z)!");
        return false;
      } else if (!/[a-z]/.test(this.registerData.password)) { // Lowercase letter check
        this.showToast(1, "Пароль должен содержать хотя бы одну строчную букву (a-z)!");
        return false;
      } else if (!/[0-9]/.test(this.registerData.password)) { // Number check
        this.showToast(1, "Пароль должен содержать хотя бы одну цифру (0-9)!");
        return false;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.registerData.password)) { // Special character check
        this.showToast(1, "Пароль должен содержать хотя бы один специальный символ (например, !@#$%^&*)!");
        return false;
      } else if (/(\d)\1{2}/.test(this.registerData.password)) { // 3 consecutive numbers check
        this.showToast(1, "Пароль не должен содержать три одинаковых подряд идущих цифры!")
        return false
      } else if (commonPasswords.includes(this.registerData.password)) { // Common passwords check
        this.showToast(1, "Пароль слишком простой, выберите более сложный!");
        return false;
      }

      // Parent number verification
      if (this.registerData.parentnumber[0] !== '+') {
        this.showToast(1, "Номер родителя должен начатся с '+'!")
        return false;
      } else if (this.registerData.parentnumber.length !== 13 || !/^\+\d{12}$/.test(this.registerData.parentnumber)) {
        this.showToast(1, "Номер родителя должен состоять из 13 символов: + и 12 цифр")
        return false;
      } else if (this.registerData.parentnumber === this.registerData.phonenumber) {
        this.showToast(1, "Номер родителя не должен быть одинаковым с вашим номером!")
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
            this.showToast(0, "С вами в скором времени свяжутся.");
          })
          .catch(error => {
            console.error('Error: ', error.message);
            this.showToast(1, "Произошла ошибка! Пожалуйста, повторите ещё раз.");
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