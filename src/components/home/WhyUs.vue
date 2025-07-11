<template>
  <div class="relative lg:w-[98%] lg:min-h-[810px] lg:max-w-[1060px] lg:mt-[-7rem] pb-20 flex flex-col items-center justify-center" id="whyUs">
    <img class="w-[90%] lg:w-auto" src="../../assets/images/why_us/book_lamp_paper.png" 
    v-if="screenWidth < 1024" />
    <h3 class="whyUsHeader text-white font-geologicaBold text-center text-[1.9rem] 
      absolute top-[13rem] left-[50%] ml-[-95px] lg:text-[4.2rem] lg:ml-[-215px] lg:w-[430px]
      lg:bottom-auto lg:top-[0rem] lg:z-30" 
      id="whyUsHeader"
    >
      Почему мы?
    </h3>

    <!-- Reasons -->
    <div v-for="(reason, index) in reasons" :key="index" 
      :style="{ backgroundImage: `url(${reason.bg_img})` }" 
      class="flex items-center justify-center bg-no-repeat bg-center bg-contain" 
      :class="{
        'w-[320px] min-h-[170px] mb-8': screenWidth < 1024 && index !== 4,
        'w-[320px] min-h-[210px] pt-4': screenWidth < 1024 && index === 4, // 05 params
        'absolute w-[459px] h-[200px]': screenWidth >= 1024 && index !== 4,
        'absolute w-[850px] h-[200px]': screenWidth >= 1024 && index === 4,
        [reason.pos]: screenWidth >= 1024 // Absolute positioning, for PC
      }
    ">
      <!-- Reason text -->
      <p v-html="reason.text" class="text-center text-white font-interRegular 
        text-[0.7rem] lg:text-left lg:leading-[1.1rem] lg:text-[0.92rem]"
      ></p>

    </div>

    <!-- White bookmark -->
    <img src="../../assets/images/why_us/05_bookmark.png" 
      class="absolute bottom-0 left-[18%] w-[8%] z-1"
      v-if="screenWidth < 1024"
    />
        
    <!-- Financial aid Button -->
    <button
      class="finAidButton absolute bottom-8 cursor-pointer w-[264px] h-[63px] 
      font-interBold lg:bottom-0 lg:w-[379px] lg:h-[89px] lg:text-[1.1rem] z-2" 
      @click="showAidToast" 
    >
      ФИН-ПОМОЩЬ
    </button>
  </div>
</template>

<script>
import one_bg from "../../assets/backgrounds/why_us/01_bg.png"
import one_bg_pc from "../../assets/backgrounds/why_us/01_bg_pc.png"
import two_bg from "../../assets/backgrounds/why_us/02_bg.png"
import two_bg_pc from "../../assets/backgrounds/why_us/02_bg_pc.png"
import three_bg from "../../assets/backgrounds/why_us/03_bg.png"
import three_bg_pc from "../../assets/backgrounds/why_us/03_bg_pc.png"
import four_bg from "../../assets/backgrounds/why_us/04_bg.png"
import four_bg_pc from "../../assets/backgrounds/why_us/04_bg_pc.png"
import five_bg from "../../assets/backgrounds/why_us/05_bg.png"
import five_bg_pc from "../../assets/backgrounds/why_us/05_bg_pc.png"

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default {
  name: "WhyUs",
  data() {
    return {
      screenWidth: window.innerWidth,
      reasons: []
    };
  },
  mounted() {
    this.updateReasons(); // Initialize reasons based on screen width
    window.addEventListener('resize', this.handleResize); // Listen to window resize
  },
  beforeMount() {
    window.removeEventListener('resize', this.handleResize); // Clean up listener
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
      this.updateReasons(); // Update reasons when the screen size changes
    },
    updateReasons() {
      this.reasons = [
        { // 01
          pos: "lg:top-[9.5rem] lg:left-[4rem] z-30",
          text: this.screenWidth < 1024 ? `
            <span class="font-interSemiBold">Инновационная система обучения</span>-наша<br />
            платформа и структура уроков помогают<br />
            ребенку удобно сфокусироваться на теме,<br />
            не пропускать уроки и сохранять интерес.
          ` : `
            Лучшая инновационная система обучения<br />
            в Азербайджане. Наша платформа<br />
            и структура уроков помогают ребенку<br />
            удобно сфокусироваться на теме, не<br />
            пропускать уроки и сохранять интерес.<br />
          `,
          bg_img: this.screenWidth < 1024 ? one_bg : one_bg_pc,
        },
        { // 02
          pos: "lg:top-[9.5rem] lg:right-[4rem] z-30",
          text: this.screenWidth < 1024 ? `
            <span class="font-interSemiBold">Удобный график работы.</span> Вы сами<br />
            определяете удобное время и дни<br />
            для учебы благодаря нашей гибкой<br />
            структуре занятий.
          ` : `
            Удобный график работы. Вы сами<br />
            определяете удобное время и дни<br />
            для учебы благодаря нашей гибкой<br />
            структуре занятий.
          `,
          bg_img: this.screenWidth < 1024 ? two_bg : two_bg_pc,
        },
        { // 03
          pos: "lg:top-[23.7rem] lg:left-[4rem]",
          text: this.screenWidth < 1024 ? `
            <span class="font-interSemiBold">Постоянный контроль результатов<br /> 
            и посещаемости ребенка</span>, чтобы<br />
            родители были уверены в его<br />
            прогрессе.
          ` : `
            Постоянный контроль результатов и<br />
            посещаемости ребенка, чтобы родители<br />
            были уверены в его прогрессе.
          `,
          bg_img: this.screenWidth < 1024 ? three_bg : three_bg_pc,
        },
        { // 04
          pos: "lg:top-[23.7rem] lg:right-[4rem]",
          text: this.screenWidth < 1024 ? `
            Лучшие <span class="font-interSemiBold">молодые преподаватели<br />
            с многолетним опытом</span> работы в<br />
            ведущих курсах и частных школах<br />
            Азербайджана.
          ` : `
            Лучшие молодые преподаватели<br />
            с многолетним опытом работы в<br />
            ведущих курсах и частных школах<br />
            Азербайджана.
          `,
          bg_img: this.screenWidth < 1024 ? four_bg : four_bg_pc,
        },
        { // 05
          pos: "lg:top-[36.5rem]",
          text: this.screenWidth < 1024 ? `
            <span class="font-interSemiBold">Мы предлагаем финансовую помощь всем<br />
            нуждающимся, стремясь повысить уровень<br />
            образования в Азербайджане.
            </span>
            <br />
            <br />
            Система грантов позволяет детям получать<br />
            лучшее образование и поступать в ведущие<br />
            университеты, освобождая от частичной или<br />
            полной оплаты курса.
          ` : `
          <span>Мы предлагаем финансовую помощь всем нуждающимся, стремясь повысить уровень<br />
          образования в Азербайджане. Система грантов позволяет детям получать лучшее образование<br />
          и поступать в ведущие университеты, освобождая от частичной или полной оплаты курса.</span>
          `,
          bg_img: this.screenWidth < 1024 ? five_bg : five_bg_pc,
        }
      ];
    },
    showAidToast() {
      Toastify({
        text: "Информация по поводу финансовой помощи будет представлена позже",
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "blue",
          fontFamily: 'Inter-Regular',
          borderRadius: '6px'
        },
        stopOnFocus: true,
      }).showToast();
    }
  }
};
</script>

<style>
.whyUsHeader {
  text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5), 0px 6px 10px rgba(0, 0, 0, 0.7);
}

.finAidButton {
  color: #8D8D8D;
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  ),
  linear-gradient(
    to right, 
    rgba(137, 137, 137, 1) 0%,
    rgba(255, 255, 255, 0) 47%,
    rgba(137, 137, 137, 1) 100%
  ),
  rgba(255, 255, 255, 1);
  border-radius: 7px / 40px;
  border: none;
  box-shadow: 0px 4px 0px #8F8F8F;
  outline: none;
  letter-spacing: 1.2px;
}

.finAidButton:active {
  box-shadow: 0px 0px 0px #8F8F8F;
  transform: translateY(2px);
}
</style>