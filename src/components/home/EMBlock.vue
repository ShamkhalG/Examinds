<template>
  <div class="emblock">
    <div class="aboveBulb">
      <h1 class="examindsText">Exa<span class="minds">Minds</span></h1>
      <h4 class="partTwoText">
        Лучшие революционные курсы с топовыми
        <br class="emLineBreak" />
        преподавателями и гибким графиком
      </h4>
      <p class="partThreeText">
        Меняем подход к образованию и
        <br class="emLineBreak" />
        вдохновляем любовь к учёбе у детей
      </p>
    </div>

    <!-- TODO Info around the light bulb -->
    <div class="aroundBulb">
      <div class="abyears">
        <h3 class="emBigTexts">6 лет</h3>
        <h5 class="emSmallTexts">Готовим к экзамену</h5>
      </div>
      
      <div class="abhundredscores">
        <h3 class="emBigTexts">20</h3>
        <h5 class="emSmallTexts">Стобалльников</h5>
      </div>
      
      <div class="abgraduates">
        <h3 class="emBigTexts">600+</h3>
        <h5 class="emSmallTexts">Выпускников</h5>
      </div>
      
      <div class="abaveragescore">
        <h3 class="emBigTexts">70+</h3>
        <h5 class="emSmallTexts">Средний балл</h5>
      </div>
    </div>

    <!-- LONGTODO Registration button -->
    <button>РЕГИСТРАЦИЯ</button>
  </div>
</template>

<script>
export default {
  name: "EMBlock"
}
</script>

<style>
/* TODO Desktop styles */
@media(min-width: 767px) {
  .emblock {
    margin-top: 2rem;
  }
}

/* TODO Mobile styles */
@media(max-width: 767px) {
  /* ----- Above the bulb ----- */
  .examindsText {
    font-size: 4.063rem;
    margin-bottom: 0;
    margin-top: 2rem;
  }

  .partTwoText {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.875rem;
  }

  .partThreeText {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  /* ----- Around the buld ----- */
  .emBigTexts {
    font-size: 1.856rem;
  }

  .emSmallTexts {
    font-size: 0.742rem;
  }
}

.emblock {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ----- Above the bulb ----- */
.aboveBulb {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.examindsText {
  color: white;
  font-family: "Geologica-Bold";
}

.minds {
  color: #F96F16;
}

.partTwoText {
  font-family: 'Inter-Bold';
  text-align: center;
  color: white;
}

.partThreeText {
  font-family: 'Inter-Regular';
  text-align: center;
  color: white;
}

/* ----- Around the bulb ----- */
.aroundBulb {
  position: relative;
}

.emBigTexts {
  font-family: 'Inter-Bold';
  color: white;
}

.emSmallTexts {
  font-family: 'Inter-Regular';
  font-weight: normal;
  color: white;
}
</style>