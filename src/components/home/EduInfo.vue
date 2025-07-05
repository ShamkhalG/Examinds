<!-- FIXME The positioning of the elements are scrambled (for PC) -->
<template>
  <div class="mt-[6rem] lg:mt-[-13rem] lg:min-h-[1930px]">
    <p class="text-[1.3rem] mb-[0.5rem] text-white text-center font-geologicaBold 
    lg:text-[4.8rem] lg:max-w-[1010px]"
    >
      Как проходит обучение?
    </p>
    <div class="relative min-h-[1100px] max-w-[1100px]">
      <div v-for="(eduInfo, index) in eduInfos" :key="index" :class="screenWidth < 1000 ? 'flex flex-col items-center justify-center' : eduInfo.divClass" class="mt-[1.5rem] lg:m-auto">
        <img :src="eduInfo.img" class="lg:w-auto" :class="eduInfo.imgClass" v-if="index !== 4 || screenWidth < 1000" />
        <p v-html="eduInfo.text" class="text-white text-center text-[0.85rem] leading-[1.1rem] mt-1 font-interRegular lg:mt-auto lg:text-[1.2rem] lg:mb-0"></p>
        <!-- The position of the text and the image is reversed for PC -->
        <img :src="eduInfo.img" class="w-[80%] lg:w-auto" :class="eduInfo.imgClass" v-if="index === 4 && screenWidth > 1000" />
      </div>
      
      <img src="../../assets/images/edu_info/lamp_book.png" class="lg:absolute lg:top-[44rem] lg:left-[5%] lg:z-1" v-if="screenWidth > 1000" />
    </div>
  </div>
</template>

<script>
import laptopMobile from "../../assets/images/edu_info/laptop.png";
import laptopDesktop from "../../assets/images/edu_info/laptop_pc.png";
import notebookPenMobile from "../../assets/images/edu_info/notebook_pen.png";
import notebookPenDesktop from "../../assets/images/edu_info/notebook_pen_pc.png";
import puzzleMobile from "../../assets/images/edu_info/puzzle.png";
import puzzleDesktop from "../../assets/images/edu_info/puzzle_pc.png";
import chatHeartsMobile from "../../assets/images/edu_info/chat_hearts.png";
import chatHeartsDesktop from "../../assets/images/edu_info/chat_hearts_pc.png";
import papersApprovedMobile from "../../assets/images/edu_info/papers_approved.png";
import papersApprovedDesktop from "../../assets/images/edu_info/papers_approved_pc.png";

export default {
  name: "EduInfo",
  data() {
    return {
      screenWidth: 0
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth
  },
  computed: {
    eduInfos() {
      return [
        { // Laptop
          text: `
          На платформе размещаются<br class="lg:hidden" /><br class="hidden lg:inline" />
          <span class="text-minds font-interSemiBold">видео-уроки</span> с разбором<br class="hidden lg:inline" /> темы<br class="lg:hidden" />
          и практикой
          `,
          img: this.screenWidth < 1000 ? laptopMobile : laptopDesktop,
          imgClass: "w-[63%] lg:w-auto",
          divClass: "lg:absolute lg:left-[1rem]"
        },
        { // Notebook and Pen
          text: `
            Домашние задания <span class="text-minds font-interSemiBold">после<br class="hidden lg:inline" />
            <br class="lg:hidden" />каждого</span> видео-урока
          `,
          img: this.screenWidth < 1000 ? notebookPenMobile : notebookPenDesktop,
          imgClass: "w-[55%] lg:w-auto",
          divClass: "lg:absolute lg:right-[1rem]"
        },
        { // Puzzle
          text: `
            <span class="text-minds font-interSemiBold">Проверочная работа</span>, чтобы<br class="lg:hidden" /><br class="hidden lg:inline" />
            проверить насколько хорошо<br class="lg:hidden" /><br class="hidden lg:inline" />
            изучен материал
          `,
          img: this.screenWidth < 1000 ? puzzleMobile : puzzleDesktop,
          imgClass: "w-[72%] lg:w-auto",
          divClass: "lg:absolute lg:top-[55%] lg:left-[1rem]"
        },
        { // Chat and Hearts
          text: `
            <span class="text-minds font-interSemiBold">Обратная связь</span> и <span class="text-minds font-interSemiBold">поддержка<br class="lg:hidden" />
            от<br class="hidden lg:inline" /> преподавателя и куратора</span>,<br class="lg:hidden" />
            чтобы<br class="hidden lg:inline" /> улучшить результаты
          `,
          img: this.screenWidth < 1000 ? chatHeartsMobile : chatHeartsDesktop,
          imgClass: "w-[62%] lg:w-auto",
          divClass: "lg:absolute lg:top-[52%] lg:right-[1rem]"
        },
        { // Paper and Approved
          text: `
            <span class="text-minds font-interSemiBold">Разбор вопросов</span> и<br class="hidden lg:inline" /> 
            <span class="text-minds font-interSemiBold">ошибок</span><br class="lg:hidden" />
            на прямом эфире
          `,
          img: this.screenWidth < 1000 ? papersApprovedMobile : papersApprovedDesktop,
          imgClass: "w-[68%] lg:w-auto",
          divClass: "lg:absolute lg:top-[20rem] lg:left-[30%] lg:z-3"
        }
      ]
    }
  }
}
</script>