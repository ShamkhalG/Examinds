<!-- FIXME This block fully and the button must be seen from the beginning -->
<template>
  <div class="flex flex-col items-center relative w-full h-[80%] md:mt-[0.5rem]">
    <!-- Above bulb -->
    <div class="flex flex-col items-center">
      <h1 class="text-white font-geologicaBold 
        text-[3.7rem] md:text-[4.8rem] mb-0 md:mb-[-0.5rem] mt-[2rem] md:mt-[1rem]">
        Exa<span class="text-minds">Minds</span></h1>
      <h4 class="text-white text-center font-interBold
      text-[0.8rem] md:text-[1.2rem] mt-0 mb-0">
        Лучшие революционные курсы с топовыми
        <br v-if="screenWidth < 768" />
        преподавателями и гибким графиком
      </h4>
      <p class="text-white text-center font-interRegular
      text-[0.7rem] md:text-base mt-[0.5rem] md:mt-0">
        Меняем подход к образованию и
        <br v-if="screenWidth < 768" />
        вдохновляем любовь к учёбе у детей
      </p>
    </div>

    <!-- Around the light bulb -->
    <div class="w-full relative max-w-[398px] md:max-w-[975px]">
      <!-- Bulb image -->
      <div class="flex flex-col items-center justify-center">
        <img :src="bulbPath" class="mix-blend-color-dodge" />
      </div>


      <div v-for="(achievement, index) in achievements" :key=index :class="achievement.class">
        <h3 class="emBigTexts text-transparent text-[1.7rem] text-center font-interBold mb-0
        text-[1.7rem] md:text-[3.6rem]">
          {{ achievement.bigText }}
        </h3>
        <h5 class="text-white text-[0.7rem] text-center font-interRegular mt-0
        text-[0.7rem] md:text-[1.1rem]">
          {{ achievement.smallText }}
        </h5>
      </div>

      <!-- Registration button -->
      <button class="registerButton text-white tracking-[1.5px] font-interBold cursor-pointer z-2
      absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 
      top-[290px] text-[0.8rem] w-[250px] h-[60px] 
      md:top-[520px] md:text-[1rem] md:w-[379px] md:h-[80px]" 
      @click="toRegister">
        РЕГИСТРАЦИЯ
      </button>
    </div>

    <!-- Dust image -->
    <div class="flex flex-col items-center justify-center">
      <img :src="dustPath" class="mix-blend-lighten z-1
      mt-[-3rem] md:mt-[-4.5rem] w-screen md:w-full h-auto" />
    </div>
  </div>
</template>

<script>
import bulbMobile from "../../assets/images/bulb.png";
import bulbDesktop from "../../assets/images/bulb_pc.png";
import dustMobile from "../../assets/images/dust.png";
import dustDesktop from "../../assets/images/dust_pc.png";

export default {
  name: "EMBlock",
  data() {
    return {
      screenWidth: window.innerWidth,
      bulbPath: window.innerWidth < 767 ? bulbMobile : bulbDesktop,
      dustPath: window.innerWidth < 767 ? dustMobile : dustDesktop,
      achievements: [
        {
          class: "absolute w-[120px] md:w-[200px] top-[30px] md:top-[80px] left-[5px] md:left-[20px]",
          bigText: "6 лет",
          smallText: window.innerWidth < 767 ? "Готовим к экзамену" : "Профессионально готовим к экзаменам",
        },
        {
          class: "absolute top-[30px] md:top-[80px] right-[10px] md:right-[20px]",
          bigText: "20",
          smallText: "Стобалльников",
        },
        {
          class: "absolute top-[90px] md:top-[280px] left-[40px] md:left-[120px]",
          bigText: "600+",
          smallText: "Выпускников",
        },
        {
          class: "absolute top-[90px] md:top-[280px] right-[40px] md:right-[85px] w-[80px] md:w-auto",
          bigText: "70+",
          smallText: window.innerWidth < 767 ? "Средний балл" : "Средний балл учеников",
        }
      ]
    }
  },
  methods: {
    toRegister() {
      const element = document.getElementById('registerForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
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

.registerButton:active {
  box-shadow: 0px 0px 0px #046b26;
  transform: translate(-50%, -48%);
}
</style>