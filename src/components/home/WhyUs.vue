<!-- FIXME The little flags must be under the <div> -->
<template>
  <div class="whyUs" id="whyUs">
    <div class="aboveReasonsContainer relativity centralize">
      <img class="bookLampPaper" src="../../assets/images/why_us/book_lamp_paper.png" v-if="screenWidth < 1000" />
      <!-- FIXME The sign for the desktop is not in its correct place -->
      <p class="whyUsHeader absoluteness" id="whyUsHeader">Почему мы?</p>
    </div>

    <div v-for="(reason, index) in reasons" :key="index" :style="{ backgroundImage: `url(${reason.bg_img})` }" class="centralize" 
    :class="{
      [reason.class]: true, 
      reasonContainer: index !== 4 || screenWidth < 1000,
      greenReasonContainer: index === 4 && screenWidth > 1000}">
        <img :src="reason.number_img" alt="Number Image" />
        <p v-html="reason.text" class="reasonText"></p>
        <img :src="reason.image" :class="index === reasons.length - 1 ? 'greenBookmarkImage' : 'bookmarkImage'" alt="Reason Image" />
        <button v-if="index === reasons.length - 1" class="finAidButton" @click="showAidToast" >
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
          class: "firstGray",
          number_img: one_img,
          text: this.screenWidth < 1000 ? `
            <span class="boldText">Инновационная система обучения</span>-наша<br />
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
          bg_img: this.screenWidth < 1000 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "secondGray",
          number_img: two_img,
          text: this.screenWidth < 1000 ? `
            <span class="boldText">Удобный график работы.</span> Вы сами<br />
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
          bg_img: this.screenWidth < 1000 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "thirdGray",
          number_img: three_img,
          text: this.screenWidth < 1000 ? `
            <span class="boldText">Постоянный контроль результатов<br /> 
            и посещаемости ребенка</span>, чтобы<br />
            родители были уверены в его<br />
            прогрессе.
          ` : `
            Постоянный контроль результатов и<br />
            посещаемости ребенка, чтобы родители<br />
            были уверены в его прогрессе.
          `,
          image: three_bottom,
          bg_img: this.screenWidth < 1000 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "fourthGray",
          number_img: four_img,
          text: this.screenWidth < 1000 ? `
            Лучшие <span class="boldText">молодые преподаватели<br />
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
          bg_img: this.screenWidth < 1000 ? grayRectBgMobile : grayRectBgDesktop,
        },
        {
          class: "firstGreen",
          number_img: five_img,
          text: this.screenWidth < 1000 ? `
            <span class="boldText">Мы предлагаем финансовую помощь всем<br />
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
          <span class="boldText">Мы предлагаем финансовую помощь всем нуждающимся, стремясь повысить уровень<br />
          образования в Азербайджане. Система грантов позволяет детям получать лучшее образование<br />
          и поступать в ведущие университеты, освобождая от частичной или полной оплаты курса.</span>
          `,
          image: five_bottom,
          bg_img: this.screenWidth < 1000 ? greenRectBgMobile : greenRectBgDesktop,
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
.whyUs {
  position: relative;
}
.whyUsHeader {
  color: white;
  font-family: 'Geologica-bold';
  text-shadow:  0px 5px 4px rgba(0, 0, 0, 0.5), 0px 6px 10px rgba(0, 0, 0, 0.7);
}

.reasonText {
  color: white;
  font-family: 'Inter-Regular';
}

.boldText {
  font-family: 'Inter-Bold';
}

.finAidButton {
  color: #8D8D8D;
  cursor: pointer;
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
  font-family: 'Inter-Bold';
  letter-spacing: 1.2px;
}

.finAidButton:active {
  box-shadow: 0px 0px 0px #8F8F8F;
  transform: translateY(2px);
}

/* Desktop styles */
@media(min-width: 1000px) {
  .whyUs {
    width: 98%;
    min-height: 800px;
    max-width: 1060px;
    margin-top: -7rem;
  }
  
  .whyUsHeader {
    font-size: 5rem;
    z-index: 2;
  }

  .aboveReasonsContainer {
    margin-bottom: 7rem;
  }

  .reasonContainer {
    position: absolute;
    width: 100%;
    max-width: 460px;
    min-height: 198px;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
  }

  .greenReasonContainer {
    position: absolute;
    width: 100%;
    max-width: 1045px;
    min-height: 250px;
    background-repeat: no-repeat;
    z-index: 2;
  }

  .reasonText {
    font-size: 1.1rem;
  }

  .greenReasonContainer {
    width: 98vw;
  }

  .firstGray {
    top: 4rem;
    left: 1rem;
  }

  .secondGray {
    top: 4rem;
    right: 1rem;
  }

  .thirdGray {
    top: 21rem;
    left: 1rem;
  }

  .fourthGray {
    top: 21rem;
    right: 1rem;
  }

  .firstGreen {
    top: 37rem;
  }

  .bookmarkImage {
    position: absolute;
    bottom: -2.4rem;
    left: 3rem;
    z-index: -1;
  }
  
  .greenBookmarkImage {
    position: absolute;
    bottom: 2.2rem;
    left: 3.5rem;
  }

  .finAidButton {
    font-size: 1.1rem;
    width: 379px;
    height: 89px;
  }
}

@media (min-width: 1050px){
  .greenReasonContainer {
    min-width: 1045px;
  }
}

/* Mobile styles */
@media(max-width: 1000px) {
  .bookLampPaper {
    width: 90%;
  }

  .whyUsHeader {
    bottom: 2.5rem;
    font-size: 2rem;
  }

  .reasonContainer {
    max-width: 400px;
    min-height: 290px;
    position: relative;
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 2rem;
    margin-bottom: 4rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    z-index: 2;
  }

  .reasonText {
    font-size: 0.8rem;
    text-align: center;
    max-width: 360px;
  }

  .bookmarkImage {
    position: absolute;
    bottom: 0rem;
    left: 1rem;
    z-index: 1;
  }
  
  .greenBookmarkImage {
    position: absolute;
    bottom: -5rem;
    left: 50%;
    transform: translateX(-118px);
  }

  .finAidButton {
    position: absolute;
    bottom: -2.4rem;
    width: 264px;
    height: 63px;
  }
}

@media (min-width: 380px) and (max-width: 400px) {
  .bookmarkImage {
    bottom: 0.5rem !important;
  }
}

@media (min-width: 340px) and (max-width: 380px) {
  .bookmarkImage {
    bottom: 1.1rem !important;
  }
}
</style>