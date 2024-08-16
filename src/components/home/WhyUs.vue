<template>
  <div class="whyUs">
    <div class="relativity centralize">
      <img class="bookLampPaper" src="../../assets/images/why_us/book_lamp_paper.png" v-if="screenWidth < 767" />
      <p class="whyUsHeader absoluteness">Почему мы?</p>
    </div>

    <div v-for="(reason, index) in reasons" :key="index" :style="{ backgroundImage: `url(${reason.bg_img})` }" class="reasonContainer relativity centralize">
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
      reasons: [
        {
          number_img: require("../../assets/images/why_us/01.png"),
          text: `
            <span class="boldText">Инновационная система обучения</span>-наша<br class="mobileBr" />
            платформа и структура уроков помогают<br class="mobileBr" />
            ребенку удобно сфокусироваться на теме,<br class="mobileBr" />
            не пропускать уроки и сохранять интерес.
          `,
          image: require("../../assets/images/why_us/bottom_img_1.png"),
          bg_img: require("../../assets/backgrounds/gray_rect_bg.png"),
        },
        {
          number_img: require("../../assets/images/why_us/02.png"),
          text: `
            <span class="boldText">Удобный график работы.</span> Вы сами<br class="mobileBr" />
            определяете удобное время и дни<br class="mobileBr" />
            для учебы благодаря нашей гибкой<br class="mobileBr" />
            структуре занятий.
          `,
          image: require("../../assets/images/why_us/bottom_img_2.png"),
          bg_img: require("../../assets/backgrounds/gray_rect_bg.png"),
        },
        {
          number_img: require("../../assets/images/why_us/03.png"),
          text: `
            <span class="boldText">Постоянный контроль результатов<br class="mobileBr" /> 
            и посещаемости ребенка</span>, чтобы<br class="mobileBr" />
            родители были уверены в его<br class="mobileBr" />
            прогрессе.
          `,
          image: require("../../assets/images/why_us/bottom_img_3.png"),
          bg_img: require("../../assets/backgrounds/gray_rect_bg.png"),
        },
        {
          number_img: require("../../assets/images/why_us/04.png"),
          text: `
            Лучшие <span class="boldText">молодые преподаватели<br class="mobileBr" />
            с многолетним опытом</span> работы в<br class="mobileBr" />
            ведущих курсах и частных школах<br class="mobileBr" />
            Азербайджана.
          `,
          image: require("../../assets/images/why_us/bottom_img_4.png"),
          bg_img: require("../../assets/backgrounds/gray_rect_bg.png"),
        },
        {
          number_img: require("../../assets/images/why_us/05.png"),
          text: `
            <span class="boldText">Мы предлагаем финансовую помощь всем<br class="mobileBr" />
            нуждающимся, стремясь повысить уровень<br class="mobileBr" />
            образования в Азербайджане.
            </span>
            <br class="mobileBr" />
            <br class="mobileBr" />
            Система грантов позволяет детям получать<br class="mobileBr" />
            лучшее образование и поступать в ведущие<br class="mobileBr" />
            университеты, освобождая от частичной или<br class="mobileBr" />
            полной оплаты курса.
          `,
          image: require("../../assets/images/why_us/bottom_img_5.png"),
          bg_img: require("../../assets/backgrounds/green_rect_bg.png"),
        }
      ]
    }
  }
}
</script>

<style>
.whyUsHeader {
  color: white;
  font-family: 'Geologica-bold';
  text-shadow:  0px 5px 4px rgba(0, 0, 0, 0.5), 0px 6px 10px rgba(0, 0, 0, 0.7);
              
}

.reasonContainer {
  padding-top: 0.5rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.reasonText {
  color: white;
  font-family: 'Inter-Regular';
  text-align: center;
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

/* TODO Desktop styles */
@media(min-width: 767px) {
  .whyUsHeader {
    z-index: 1;
    font-size: 5rem;
  } 
}

/* Mobile styles */
@media(max-width: 767px) {
  .bookLampPaper {
    width: 90%;
  }

  .whyUsHeader {
    bottom: 2.5rem;
    font-size: 2rem;
  }

  .reasonContainer {
    margin-top: 2rem;
    margin-bottom: 4rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding-bottom: 1.8rem;
  }

  .reasonText {
    font-size: 0.8rem;
  }

  .bookmarkImage {
    position: absolute;
    bottom: -2.4rem;
    left: 1rem;
  }
  
  .greenBookmarkImage {
    position: absolute;
    bottom: -4.7rem;
    left: 3.5rem;
  }

  .finAidButton {
    position: absolute;
    bottom: -2.5rem;
    width: 264px;
    height: 63px;
  }
}
</style>