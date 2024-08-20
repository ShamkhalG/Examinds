<template>
  <div class="whyUs">
    <div class="aboveReasonsContainer relativity centralize">
      <img class="bookLampPaper" src="../../assets/images/why_us/book_lamp_paper.png" v-if="screenWidth < 1000" />
      <p class="whyUsHeader absoluteness">Почему мы?</p>
    </div>

    <div v-for="(reason, index) in reasons" :key="index" :style="{ backgroundImage: `url(${reason.bg_img})` }" class="centralize" 
    :class="{
      [reason.class]: true, 
      reasonContainer: index !== 4 || screenWidth < 1000,
      greenReasonContainer: index === 4 && screenWidth > 1000}">
      <img :src="reason.number_img" alt="Number Image" />
      <p v-html="reason.text" class="reasonText"></p>
      <img :src="reason.image" :class="index === reasons.length - 1 ? 'greenBookmarkImage' : 'bookmarkImage'" alt="Reason Image" />
      <button v-if="index === reasons.length - 1" class="finAidButton">
        ФИН-ПОМОЩЬ
      </button>
    </div>
  </div>
</template>

<script>
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
          number_img: require("../../assets/images/why_us/01.png"),
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
          image: require("../../assets/images/why_us/bottom_img_1.png"),
          bg_img: this.screenWidth < 1000 ? require("../../assets/backgrounds/gray_rect_bg.png") : require("../../assets/backgrounds/gray_rect_bg_pc.png"),
        },
        {
          class: "secondGray",
          number_img: require("../../assets/images/why_us/02.png"),
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
          image: require("../../assets/images/why_us/bottom_img_2.png"),
          bg_img: this.screenWidth < 1000 ? require("../../assets/backgrounds/gray_rect_bg.png") : require("../../assets/backgrounds/gray_rect_bg_pc.png"),
        },
        {
          class: "thirdGray",
          number_img: require("../../assets/images/why_us/03.png"),
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
          image: require("../../assets/images/why_us/bottom_img_3.png"),
          bg_img: this.screenWidth < 1000 ? require("../../assets/backgrounds/gray_rect_bg.png") : require("../../assets/backgrounds/gray_rect_bg_pc.png"),
        },
        {
          class: "fourthGray",
          number_img: require("../../assets/images/why_us/04.png"),
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
          image: require("../../assets/images/why_us/bottom_img_4.png"),
          bg_img: this.screenWidth < 1000 ? require("../../assets/backgrounds/gray_rect_bg.png") : require("../../assets/backgrounds/gray_rect_bg_pc.png"),
        },
        {
          class: "firstGreen",
          number_img: require("../../assets/images/why_us/05.png"),
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
          image: require("../../assets/images/why_us/bottom_img_5.png"),
          bg_img: this.screenWidth < 1000 ? require("../../assets/backgrounds/green_rect_bg.png") : require("../../assets/backgrounds/green_rect_bg_pc.png"),
        }
      ];
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
  box-shadow: 0px 2px 0px #8F8F8F;
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
  }
  
  .whyUsHeader {
    font-size: 5rem;
    z-index: 2;
  }

  .aboveReasonsContainer {
    margin-bottom: 7rem;
  }

  .reasonContainer {
    width: 100%;
    max-width: 460px;
    min-height: 198px;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .greenReasonContainer {
    width: 100%;
    max-width: 1045px;
    min-height: 250px;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .reasonText {
    font-size: 1.1rem;
  }

  .greenReasonContainer {
    width: 98vw;
  }

  .firstGray {
    position: absolute;
    top: 4rem;
    left: 1rem;
  }

  .secondGray {
    position: absolute;
    top: 4rem;
    right: 1rem;
  }

  .thirdGray {
    position: absolute;
    top: 21rem;
    left: 1rem;
  }

  .fourthGray {
    position: absolute;
    top: 21rem;
    right: 1rem;
  }

  .firstGreen {
    position: absolute;
    top: 37rem;
  }

  .bookmarkImage {
    position: absolute;
    bottom: -2.4rem;
    left: 3rem;
    z-index: 2;
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
    /* background-size: cover; */
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 2rem;
    margin-bottom: 4rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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