<!-- FIXME The positioning of the elements are scrambled -->
<template>
  <div class="eduInfo">
    <p class="eduInfoHeader">Как проходит обучение?</p>
    <div class="relativity eduInfoContainers">
      <div v-for="(eduInfo, index) in eduInfos" :key="index" :class="screenWidth < 1000 ? 'centralize' : eduInfo.divClass" class="upperMargin">
        <img :src="eduInfo.img" class="eduInfoImage" :class="eduInfo.imgClass" v-if="index !== 4 || screenWidth < 1000" />
        <p v-html="eduInfo.text" class="eduInfoText"></p>
        <!-- The position of the text and the image is reversed for PC -->
        <img :src="eduInfo.img" class="eduInfoImage" :class="eduInfo.imgClass" v-if="index === 4 && screenWidth > 1000" />
      </div>
      
      <img src="../../assets/images/edu_info/lamp_book.png" class="lampBookImage" v-if="screenWidth > 1000" />
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
      screenWidth: window.innerWidth,
      eduInfos: [
        {
          text: `
          На платформе размещаются<br class="mobileBr" /><br class="desktopBr" />
          <span class="orangeText">видео-уроки</span> с разбором<br class="desktopBr" /> темы<br class="mobileBr" />
          и практикой
          `,
          img: window.innerWidth < 1000 ? laptopMobile : laptopDesktop,
          imgClass: "laptopImage",
          divClass: "laptopContainer"
        },
        {
          text: `
            Домашние задания <span class="orangeText">после<br class="desktopBr" />
            <br class="mobileBr" />каждого</span> видео-урока
          `,
          img: window.innerWidth < 1000 ? notebookPenDesktop : notebookPenMobile,
          imgClass: "notebookAndPenImage",
          divClass: "notebookAndPenContainer"
        },
        {
          text: `
            <span class="orangeText">Проверочная работа</span>, чтобы<br class="mobileBr" /><br class="desktopBr" />
            проверить насколько хорошо<br class="mobileBr" /><br class="desktopBr" />
            изучен материал
          `,
          img: window.innerWidth < 1000 ? puzzleMobile : puzzleDesktop,
          imgClass: "puzzleImage",
          divClass: "puzzleContainer"
        },
        {
          text: `
            <span class="orangeText">Обратная связь</span> и <span class="orangeText">поддержка<br class="mobileBr" />
            от<br class="desktopBr" /> преподавателя и куратора</span>,<br class="mobileBr" />
            чтобы<br class="desktopBr" /> улучшить результаты
          `,
          img: window.innerWidth < 1000 ? chatHeartsMobile : chatHeartsDesktop,
          imgClass: "chatAndHeartsImage",
          divClass: "chatAndHeartsContainer"
        },
        {
          text: `
            <span class="orangeText">Разбор вопросов</span> и<br class="desktopBr" /> 
            <span class="orangeText">ошибок</span><br class="mobileBr" />
            на прямом эфире
          `,
          img: window.innerWidth < 1000 ? papersApprovedMobile : papersApprovedDesktop,
          imgClass: "paperAndApprovedImage",
          divClass: "paperAndApprovedContainer"
        }
      ]
    }
  }
}
</script>

<style>
.eduInfoHeader {
  color: white;
  font-family: 'Geologica-Bold';
  text-align: center
}

.eduInfoText {
  color: white;
  font-family: 'Inter-Regular';
  text-align: center;
}

.orangeText {
  font-family: 'Inter-SemiBold';
  color: #F96F16;
}

/* Desktop styles */
@media(min-width: 1000px) {
  .eduInfo {
    min-height: 1930px;
    margin-top: -13rem;
  }

  .eduInfoHeader {
    font-size: 4.8rem;
    max-width: 1010px;
  }

  .eduInfoText {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .eduInfoContainers {
    max-width: 1100px;
    min-height: 1100px;
  }

  .laptopContainer {
    position: absolute;
    left: 1rem;
  }

  .notebookAndPenContainer {
    position: absolute;
    right: 1rem;
  }

  .paperAndApprovedContainer {
    position: absolute;
    top: 20rem;
    left: 30%;
    z-index: 3;
  }

  .puzzleContainer {
    position: absolute;
    left: 1rem;
    top: 55%;
  }

  .chatAndHeartsContainer {
    position: absolute;
    top: 52%;
    right: 1rem;
  }

  .lampBookImage {
    position: absolute;
    top: 44rem;
    left: 5%;
    z-index: 1;
  }
}

/* Mobile styles */
@media(max-width: 1000px){
  .eduInfo {
    margin-top: 4rem;
  }
  
  .eduInfoHeader {
    font-size: 1.7rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .upperMargin {
    margin-top: 1.5rem;
  }

  .eduInfoText {
    margin-top: 0rem;
  }

  .eduInfoImage {
    width: 80%;
  }

  .laptopImage {
    margin-right: 2rem;
  }

  .notebookAndPenImage {
    margin-left: 1rem;
  }

  .puzzleImage {
    margin-right: 4rem;
  }

  .chatAndHeartsImage {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
}
</style>