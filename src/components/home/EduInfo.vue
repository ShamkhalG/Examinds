<template>
  <div class="eduinfo">
    <p class="eduInfoHeader">Как проходит обучение?</p>
    <div v-for="(eduInfo, index) in eduInfos" :key="index" class="relativity centralize upperMargin">
      <img :src="eduInfo.img" class="eduInfoImage" />
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
        },
        {
          text: `
            Домашние задания <span class="orangeText">после
            <br class="mobileBr" />каждого</span> видео-урока
          `,
          img: require("../../assets/images/edu_info/notebook_and_pen.png"),
        },
        {
          text: `
            <span class="orangeText">Проверочная работа</span>, чтобы<br class="mobileBr" />
            проверить насколько хорошо<br class="mobileBr" />
            изучен материал
          `,
          img: require("../../assets/images/edu_info/puzzle.png"),
        },
        {
          text: `
            <span class="orangeText">Обратная связь</span> и <span class="orangeText">поддержка<br class="mobileBr" />
            от преподавателя и куратора</span>,<br class="mobileBr" />
            чтобы улучшить результаты
          `,
          img: require("../../assets/images/edu_info/chat_and_hearts.png"),
        },
        {
          text: `
            <span class="orangeText">Разбор вопросов</span> и 
            <span class="orangeText">ошибок</span><br class="mobileBr" />
            на прямом эфире
          `,
          img: require("../../assets/images/edu_info/paper_and_approved.png"),
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
/* FIXME Centralize the images */
@media(max-width: 767px){
  .eduInfoHeader {
    font-size: 1.7rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
  .upperMargin {
    margin-top: 1rem;
  }

  .eduInfoImage {
    width: 70%;
  }
}
</style>