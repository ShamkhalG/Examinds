<!-- FIXME The little flags must be under the <div> -->
<template>
  <div class="relative lg:w-[98%] lg:min-h-[800px] lg:max-w-[1060px] lg:mt-[-7rem]" id="whyUs">
    <div class="relative flex flex-col items-center justify-center lg:mb-[7rem]">
      <img class="w-[90%] lg:w-auto" src="../../assets/images/why_us/book_lamp_paper.png" 
      v-if="screenWidth < 1024" />
      <!-- FIXME The sign for the desktop is not in its correct place -->
      <p class="whyUsHeader text-white font-geologicaBold 
      text-[2rem] absolute bottom-[2.5rem] lg:text-[5rem] lg:bottom-auto lg:z-2" 
      id="whyUsHeader"
      >
        Почему мы?
      </p>
    </div>

    <div v-for="(reason, index) in reasons" :key="index" 
      :style="{ backgroundImage: `url(${reason.bg_img})` }" 
      class="flex flex-col items-center justify-center" 
      :class="{
        [reason.class]: true, 
        'bg-no-repeat bg-center z-[2]': true,
        'relative max-w-[400px] min-h-[290px] bg-contain mt-8 mb-16 mx-2': index !== 4 || screenWidth < 1024,
        'absolute w-[98vw] max-w-[1045px] min-h-[250px] bg-no-repeat z-[2]': index === 4 && screenWidth > 1024
      }
    ">
      <img :src="reason.number_img" alt="Number Image" />
      <p v-html="reason.text" class="text-center text-white font-interRegular 
        max-w-[360px] text-[0.8rem] lg:w-auto lg:text-[1.1rem] lg:text-left"
      ></p>
      <img :src="reason.image" 
        :class="index === reasons.length - 1 ? 
        'absolute bottom-[-5rem] left-[50%] translate-x-[-118px] lg:bottom-[2.2rem] lg:left-[3.5rem]' 
        : 'absolute bottom-0 left-[1rem] z-1 lg:bottom-[-2.4rem] lg:left-[3rem] lg:z-[-1]'" 
      alt="Reason Image" />
      <button v-if="index === reasons.length - 1" 
        class="finAidButton absolute bottom-[-2.4rem] cursor-pointer w-[264px] h-[63px] 
        font-interBold lg:static lg:bottom-auto lg:w-[379px] lg:h-[89px] lg:text-[1.1rem]" 
        @click="showAidToast" 
      >
        ФИН-ПОМОЩЬ
      </button>
    </div>
  </div>
</template>

<script>
import one_img from "../../assets/images/why_us/01.png";
import one_bottom from "../../assets/images/why_us/bottom_img_1.svg";
import two_img from "../../assets/images/why_us/02.png";
import two_bottom from "../../assets/images/why_us/bottom_img_2.svg";
import three_img from "../../assets/images/why_us/03.png";
import three_bottom from "../../assets/images/why_us/bottom_img_3.svg";
import four_img from "../../assets/images/why_us/04.png";
import four_bottom from "../../assets/images/why_us/bottom_img_4.svg";
import five_img from "../../assets/images/why_us/05.png";
import five_bottom from "../../assets/images/why_us/bottom_img_5.svg";

import grayRectBgMobile from "../../assets/backgrounds/gray_rect_bg.png";
import grayRectBgDesktop from "../../assets/backgrounds/gray_rect_bg_pc.png";
import greenRectBgMobile from "../../assets/backgrounds/green_rect_bg.png";
import greenRectBgDesktop from "../../assets/backgrounds/green_rect_bg_pc.png";

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
        {
          class: "lg:top-[4rem] lg:left-[1rem]",
          number_img: one_img,
          text: this.screenWidth < 1024 ? `
            <span class="font-interBold">Инновационная система обучения</span>-наша<br />
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
          image: one_bottom,
          bg_img: this.screenWidth < 1024 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "lg:top-[4rem] lg:right-[1rem]",
          number_img: two_img,
          text: this.screenWidth < 1024 ? `
            <span class="font-interBold">Удобный график работы.</span> Вы сами<br />
            определяете удобное время и дни<br />
            для учебы благодаря нашей гибкой<br />
            структуре занятий.
          ` : `
            Удобный график работы. Вы сами<br />
            определяете удобное время и дни<br />
            для учебы благодаря нашей гибкой<br />
            структуре занятий.
          `,
          image: two_bottom,
          bg_img: this.screenWidth < 1024 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "lg:top-[21rem] lg:left-[1rem]",
          number_img: three_img,
          text: this.screenWidth < 1024 ? `
            <span class="font-interBold">Постоянный контроль результатов<br /> 
            и посещаемости ребенка</span>, чтобы<br />
            родители были уверены в его<br />
            прогрессе.
          ` : `
            Постоянный контроль результатов и<br />
            посещаемости ребенка, чтобы родители<br />
            были уверены в его прогрессе.
          `,
          image: three_bottom,
          bg_img: this.screenWidth < 1024 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "lg:top-[21rem] lg:right-[1rem]",
          number_img: four_img,
          text: this.screenWidth < 1024 ? `
            Лучшие <span class="font-interBold">молодые преподаватели<br />
            с многолетним опытом</span> работы в<br />
            ведущих курсах и частных школах<br />
            Азербайджана.
          ` : `
            Лучшие молодые преподаватели<br />
            с многолетним опытом работы в<br />
            ведущих курсах и частных школах<br />
            Азербайджана.
          `,
          image: four_bottom,
          bg_img: this.screenWidth < 1024 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "lg:top-[37rem]",
          number_img: five_img,
          text: this.screenWidth < 1024 ? `
            <span class="font-interBold">Мы предлагаем финансовую помощь всем<br />
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
          <span class="font-interBold">Мы предлагаем финансовую помощь всем нуждающимся, стремясь повысить уровень<br />
          образования в Азербайджане. Система грантов позволяет детям получать лучшее образование<br />
          и поступать в ведущие университеты, освобождая от частичной или полной оплаты курса.</span>
          `,
          image: five_bottom,
          bg_img: this.screenWidth < 1024 ? greenRectBgMobile : greenRectBgDesktop,
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