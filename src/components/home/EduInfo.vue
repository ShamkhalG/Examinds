<template>
  <div class="mt-[6rem] lg:mt-[-12rem] lg:min-h-[1350px]">
    <p class="text-[1.3rem] mb-[0.5rem] lg:mb-[1rem] text-white 
      text-center font-geologicaBold lg:text-[4.3rem]"
    >
      Как проходит обучение?
    </p>
    
    <!-- Images and "process" text -->
    <div class="relative min-h-[1100px] lg:w-[970px]">
      <div v-for="(eduInfo, index) in eduInfos" :key="index" 
        :class="screenWidth < 1000 ? 'flex flex-col items-center justify-center' 
        : eduInfo.divClass" class="mt-[1.5rem] lg:m-auto"
      >
        <img :src="eduInfo.img" :class="eduInfo.imgClass" 
          v-if="index !== 4 || screenWidth < 1000" />
        <p v-html="eduInfo.text" class="text-white text-center text-[0.85rem] leading-[1.1rem] 
          mt-1 font-interRegular lg:mt-auto lg:text-[1.1rem] lg:mb-0 lg:leading-[1.3rem]"></p>
        
        <!-- The position of the text and the image is reversed for PC -->
        <img :src="eduInfo.img" :class="eduInfo.imgClass" 
          v-if="index === 4 && screenWidth > 1000" />
      </div>
      
      <!-- Lamp and Book image -->
      <img src="../../assets/images/edu_info/lamp_book.png" 
        class="absolute w-[750px] top-[30rem] left-[50%] ml-[-375px] z-10" 
        v-if="screenWidth > 1000" 
      />
    </div>
  </div>
</template>

<script>
import laptop from "../../assets/images/edu_info/laptop.png";
import notebookPen from "../../assets/images/edu_info/notebook_pen.png";
import puzzle from "../../assets/images/edu_info/puzzle.png";
import chatHearts from "../../assets/images/edu_info/chat_hearts.png";
import papersApproved from "../../assets/images/edu_info/papers_approved.png";

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
          img: laptop,
          imgClass: "w-[63%] lg:w-[330px]",
          divClass: "lg:absolute lg:top-[-1rem] lg:left-0"
        },
        { // Notebook and Pen
          text: `
            Домашние задания <span class="text-minds font-interSemiBold">после<br class="hidden lg:inline" />
            <br class="lg:hidden" />каждого</span> видео-урока
          `,
          img: notebookPen,
          imgClass: "w-[55%] lg:w-[285px] lg:mb-4",
          divClass: "lg:absolute lg:top-[1.1rem] lg:right-[1rem]"
        },
        { // Puzzle
          text: `
            <span class="text-minds font-interSemiBold">Проверочная работа</span>, чтобы<br class="lg:hidden" /><br class="hidden lg:inline" />
            проверить насколько хорошо<br class="lg:hidden" /><br class="hidden lg:inline" />
            изучен материал
          `,
          img: puzzle,
          imgClass: "w-[72%] lg:w-[380px]",
          divClass: "lg:absolute lg:top-[37%] lg:left-0"
        },
        { // Chat and Hearts
          text: `
            <span class="text-minds font-interSemiBold">Обратная связь</span> и <span class="text-minds font-interSemiBold">поддержка<br class="lg:hidden" />
            от<br class="hidden lg:inline" /> преподавателя и куратора</span>,<br class="lg:hidden" />
            чтобы<br class="hidden lg:inline" /> улучшить результаты
          `,
          img: chatHearts,
          imgClass: "w-[62%] lg:w-[325px] lg:mb-[-0.2rem]",
          divClass: "lg:absolute lg:top-[35%] lg:right-0"
        },
        { // Papers and Approved
          text: `
            <span class="text-minds font-interSemiBold">Разбор вопросов</span> и<br class="hidden lg:inline" /> 
            <span class="text-minds font-interSemiBold">ошибок</span><br class="lg:hidden" />
            на прямом эфире
          `,
          img: papersApproved,
          imgClass: "w-[68%] lg:w-[360px]",
          divClass: "lg:absolute lg:top-[12rem] lg:left-[50%] lg:ml-[-180px] lg:z-20"
        }
      ]
    }
  }
}
</script>