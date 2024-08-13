<template>
  <div class="eduInfo">
    <p class="eduInfoHeader">Как проходит обучение?</p>
    <div v-for="(eduInfo, index) in eduInfos" :key="index" class="relativity centralize upperMargin">
      <img :src="eduInfo.img" class="eduInfoImage" :class="eduInfo.class" />
      <p v-html="eduInfo.text" class="eduInfoText"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EduInfo",
  data() {
    return {
      eduInfos: [
        {
          text: `
          На платформе размещается<br class="mobileBr" /> 
          <span class="orangeText">видео-уроки</span> с разбором темы<br class="mobileBr" />
          и практикой
          `,
          img: require("../../assets/images/edu_info/laptop.png"),
          class: "laptopImage"
        },
        {
          text: `
            Домашние задания <span class="orangeText">после
            <br class="mobileBr" />каждого</span> видео-урока
          `,
          img: require("../../assets/images/edu_info/notebook_and_pen.png"),
          class: "notebookAndPenImage"
        },
        {
          text: `
            <span class="orangeText">Проверочная работа</span>, чтобы<br class="mobileBr" />
            проверить насколько хорошо<br class="mobileBr" />
            изучен материал
          `,
          img: require("../../assets/images/edu_info/puzzle.png"),
          class: "puzzleImage"
        },
        {
          text: `
            <span class="orangeText">Обратная связь</span> и <span class="orangeText">поддержка<br class="mobileBr" />
            от преподавателя и куратора</span>,<br class="mobileBr" />
            чтобы улучшить результаты
          `,
          img: require("../../assets/images/edu_info/chat_and_hearts.png"),
          class: "chatAndHeartsImage"
        },
        {
          text: `
            <span class="orangeText">Разбор вопросов</span> и 
            <span class="orangeText">ошибок</span><br class="mobileBr" />
            на прямом эфире
          `,
          img: require("../../assets/images/edu_info/paper_and_approved.png"),
          class: "paperAndApprovedImage"
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

/* TODO Desktop styles */

/* Mobile styles */
@media(max-width: 767px){
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