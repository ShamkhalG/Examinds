<template>
  <div class="flex flex-col items-center relative w-full h-[80%] lg:mt-[0.5rem]">
    <!-- Above bulb -->
    <div class="flex flex-col items-center">
      <h1 class="text-white font-geologicaBold 
        text-[3.2rem] mb-[-0.5rem] lg:text-[4rem] lg:mb-[-1.2rem] lg:mt-[1rem]">
        Exa<span class="text-minds">Minds</span></h1>
      <h4 class="text-white text-center font-interSemiBold
      text-[0.65rem] mb-0 lg:text-[1.25rem] lg:mb-[-0.4rem]">
        Лучшие революционные курсы с топовыми
        <br v-if="screenWidth < 768" />
        преподавателями и гибким графиком
      </h4>
      <p class="text-white text-center font-interRegular
      text-[0.6rem] mt-1 lg:text-base lg:mt-0">
        Меняем подход к образованию и
        <br v-if="screenWidth < 768" />
        вдохновляем любовь к учёбе у детей
      </p>
    </div>

    <!-- ///// Around the light bulb ///// -->
    <div class="w-full relative max-w-[398px] lg:max-w-[975px] mt-1">
      <!-- Bulb image -->
      <div class="flex flex-col items-center justify-center">
        <img :src="bulbPath" class="mix-blend-color-dodge w-[70%] lg:w-[51%]" />
      </div>

      <div v-for="(achievement, index) in achievements" :key=index :class="achievement.class">
        <h3 class="emBigTexts text-transparent text-center font-interBold mb-[-0.2rem]
        text-[1.4rem] lg:text-[3.1rem]">
          {{ achievement.bigText }}
        </h3>
        <h5 class="text-white text-center font-interRegular mt-0
        text-[0.6rem] lg:text-[1rem] lg:leading-[1.2]" 
          v-html="achievement.smallText">
        </h5>
      </div>

      <!-- Registration button -->
      <button class="registerButton text-white tracking-[1.5px] font-interBold cursor-pointer z-2
      absolute left-[50%] ml-[-125px]
      top-[210px] text-[0.8rem] w-[250px] h-[60px] 
      lg:top-[390px] lg:ml-[-155px] lg:text-[1rem] lg:w-[310px] lg:h-[75px] z-20" 
      @click="toRegister">
        РЕГИСТРАЦИЯ
      </button>
    </div>

    <!-- Dust image -->
    <div class="flex flex-col items-center justify-center">
      <img :src="dustPath" class="mix-blend-lighten mt-[-2.5rem] h-auto
      w-screen z-10 lg:mt-[-4.5rem] lg:w-full" />
    </div>
  </div>
</template>

<script setup>
import bulbMobile from "../../assets/images/bulb.png"
import bulbDesktop from "../../assets/images/bulb_pc.png"
import dustMobile from "../../assets/images/dust.png"
import dustDesktop from "../../assets/images/dust_pc.png"

import { useRouter } from "vue-router"

const router = useRouter()
const screenWidth = window.innerWidth
const bulbPath = screenWidth < 1024 ? bulbMobile : bulbDesktop
const dustPath = screenWidth < 1024 ? dustMobile : dustDesktop

const achievements = [
  { // 6 лет
    class: "absolute top-[48px] left-[25px] lg:top-[107px] lg:left-[70px]",
    bigText: "6 лет",
    smallText: screenWidth < 1024 ? "Готовим к экзамену" : "Профессионально <br /> готовим к экзаменам",
  },
  { // 20
    class: "absolute top-[48px] right-[30px] lg:top-[110px] lg:right-[85px]",
    bigText: "20",
    smallText: "Стобалльников",
  },
  { // 600+
    class: "absolute top-[105px] left-[55px] lg:top-[260px] lg:left-[190px]",
    bigText: "600+",
    smallText: "Выпускников",
  },
  { // 70+
    class: "absolute top-[105px] right-[58px] lg:top-[253px] lg:right-[110px]",
    bigText: "70+",
    smallText: screenWidth < 1024 ? "Средний балл" : "Средний балл учеников",
  }
]

function toRegister() {
  router.push({ path: '/', hash: '#registerForm' })
}
</script>

<style>
.emBigTexts {
  background: linear-gradient(
    to right, 
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%),
    #FFFFFF;
  -webkit-background-clip: text;
  background-clip: text;
}

.registerButton {
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
</style>