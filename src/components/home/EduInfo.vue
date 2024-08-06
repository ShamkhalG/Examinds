<template>
  <div class="eduinfo">
    <p class="eduInfoHeader">Как проходит обучение?</p>
    <div class="laptopContainer relativity centralize upperMargin">
      <img class="eduInfoImage" src="../../assets/images/laptop.png" />
      <p class="eduInfoText">
        На платформе размещается <br class="mobileBr" /> 
        <span class="orangeText">видео-уроки</span> с разбором темы<br class="mobileBr" /> и практикой
      </p>
    </div>

    <div class="notebookAndPenContainer relativity centralize upperMargin">
      <img class="eduInfoImage" src="../../assets/images/notebook_and_pen.png" />
      <p class="eduInfoText">
        Домашние задания <span class="orangeText">после <br class="mobileBr" />каждого </span>
        видео-урока
      </p>
    </div>

    <div class="puzzleContainer relativity centralize upperMargin">
      <img class="eduInfoImage" src="../../assets/images/puzzle.png" />
      <p class="eduInfoText">
        <span class="orangeText">Проверочная работа</span>, чтобы <br class="mobileBr" />
        проверить насколько хорошо <br class="mobileBr" />изучен материал
      </p>
    </div>

    <div class="chatAndHeartsContainer relativity centralize upperMargin">
      <img class="eduInfoImage" src="../../assets/images/chat_and_hearts.png" />
      <p class="eduInfoText">
        <span class="orangeText">Обратная связь</span> и 
        <span class="orangeText">поддержка <br class="mobileBr" /> от преподавателя 
        и куратора</span>,<br class="mobileBr" /> чтобы улучшить результаты
      </p>
    </div>

    <div class="PaperAndApprovedContainer relativity centralize upperMargin">
      <img class="eduInfoImage" src="../../assets/images/paper_and_approved.png" />
      <p class="eduInfoText">
        <span class="orangeText">Разбор вопросов</span> и 
        <span class="orangeText">ошибок</span><br class="mobileBr" />на прямом эфире
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EduInfo"
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

@media(max-width: 767px){
  .eduInfoHeader {
    font-size: 1.7rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
  .upperMargin {
    margin-top: 1rem;
  }
}
</style>