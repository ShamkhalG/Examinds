<template>
  <div class="flex flex-col items-center relative w-full h-[80%] md:mt-[0.5rem]">
    <!-- Above bulb -->
    <div class="flex flex-col items-center">
      <h1 class="text-white font-geologicaBold 
        text-[3.2rem] mb-[-0.5rem] md:text-[4rem] md:mb-[-1.2rem] md:mt-[1rem]">
        Exa<span class="text-minds">Minds</span></h1>
      <h4 class="text-white text-center font-interSemiBold
      text-[0.65rem] mb-0 md:text-[1.25rem] md:mb-[-0.4rem]">
        Лучшие революционные курсы с топовыми
        <br v-if="screenWidth < 768" />
        преподавателями и гибким графиком
      </h4>
      <p class="text-white text-center font-interRegular
      text-[0.6rem] mt-1 md:text-base md:mt-0">
        Меняем подход к образованию и
        <br v-if="screenWidth < 768" />
        вдохновляем любовь к учёбе у детей
      </p>
    </div>

    <!-- ///// Around the light bulb ///// -->
    <div class="w-full relative max-w-[398px] md:max-w-[975px] mt-1">
      <!-- Bulb image -->
      <div class="flex flex-col items-center justify-center">
        <img :src="bulbPath" class="mix-blend-color-dodge w-[70%] md:w-[51%]" />
      </div>

      <div v-for="(achievement, index) in achievements" :key=index :class="achievement.class">
        <h3 class="emBigTexts text-transparent text-center font-interBold mb-[-0.2rem]
        text-[1.4rem] md:text-[3.1rem]">
          {{ achievement.bigText }}
        </h3>
        <h5 class="text-white text-center font-interRegular mt-0
        text-[0.6rem] md:text-[1rem] md:leading-[1.2]" 
          v-html="achievement.smallText">
        </h5>
      </div>

      <!-- Registration button -->
      <button class="registerButton text-white tracking-[1.5px] font-interBold cursor-pointer z-2
      absolute left-[50%] ml-[-125px]
      top-[210px] text-[0.8rem] w-[250px] h-[60px] 
      md:top-[390px] md:ml-[-155px] md:text-[1rem] md:w-[310px] md:h-[75px] z-20" 
      @click="toRegister">
        РЕГИСТРАЦИЯ
      </button>
    </div>

    <!-- Dust image -->
    <div class="flex flex-col items-center justify-center">
      <img :src="dustPath" class="mix-blend-lighten mt-[-2.5rem] h-auto
      w-screen z-10 md:mt-[-4.5rem] md:w-full" />
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
        { // 6 лет
          class: "absolute top-[48px] left-[25px] md:top-[107px] md:left-[70px]",
          bigText: "6 лет",
          smallText: window.innerWidth < 767 ? "Готовим к экзамену" : "Профессионально <br /> готовим к экзаменам",
        },
        { // 20
          class: "absolute top-[48px] right-[30px] md:top-[110px] md:right-[85px]",
          bigText: "20",
          smallText: "Стобалльников",
        },
        { // 600+
          class: "absolute top-[105px] left-[55px] md:top-[260px] md:left-[190px]",
          bigText: "600+",
          smallText: "Выпускников",
        },
        { // 70+
          class: "absolute top-[105px] right-[58px] md:top-[253px] md:right-[110px]",
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