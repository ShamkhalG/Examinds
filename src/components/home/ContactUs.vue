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
              <input type="text" v-model="registerData.fullName" 
                class="border border-[#D9D9D9] rounded-[4px] 
                text-[1rem] h-[25px] w-[98%] lg:px-2 lg:rounded-[8px] lg:border-2 lg:w-[96%]" />
            </div>
      
            <!-- Number -->
            <div class="mb-2 lg:mb-auto">
              <p class="ml-1 my-[0.2rem] text-[0.8rem] font-interRegular italic  
              lg:mt-[0.4rem] lg:mb-[0.2rem] lg:text-[0.8rem]">
                Номер телефона
              </p>
              <input type="text" v-model="registerData.phoneNumber" placeholder="Пример: +994505593259" 
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
              <input type="text" v-model="registerData.parentNumber" placeholder="Пример: +994519289282"
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

<script setup>
import { reactive } from 'vue'
import { showToast } from '@/utils/notifications.js'
import { useAuthStore } from '@/stores/auth'
import { validateData } from '@/utils/validation'

import registerBgMobile from "../../assets/backgrounds/register_bg.png"
import registerBgDesktop from "../../assets/backgrounds/register_bg_pc.png"

// Data
const auth = useAuthStore()
const screenWidth = window.innerWidth
const registerBg = screenWidth < 1024 ? registerBgMobile : registerBgDesktop
const registerData = reactive({
  fullName: '',
  phoneNumber: '',
  email: '',
  password: '',
  parentNumber: ''
})

// Methods
async function signUp() {
  const isValid = await validateData(registerData, ['fullName', 'email', 
  'password', 'phoneNumber', 'parentNumber'])
  
  if (isValid) {
    if (await auth.login(registerData)) {// Signup successful
      showToast("green", "Вы успешно зарегистрировались на наш сайт!")
    } else { // Signup failed
      showToast("red", "Произошла ошибка! Пожалуйста, попробуйте позже.")
    }
  }
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