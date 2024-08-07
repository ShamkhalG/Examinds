<template>
  <div class="emblock">
    <div class="aboveBulb">
      <h1 class="examindsText">Exa<span class="minds">Minds</span></h1>
      <h4 class="partTwoText">
        Лучшие революционные курсы с топовыми
        <br class="mobileBr" />
        преподавателями и гибким графиком
      </h4>
      <p class="partThreeText">
        Меняем подход к образованию и
        <br class="mobileBr" />
        вдохновляем любовь к учёбе у детей
      </p>
    </div>

    <!-- REVIEW Info around the light bulb -->
    <!-- <div class="aroundBulb">
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
    </div> -->

    <!-- LONGTODO Registration button -->
    <button class="registerButton">РЕГИСТРАЦИЯ</button>
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
    margin-top: 0.5rem;
  }

  .examindsText {
    font-size: 4.8rem;
    margin-bottom: -0.5rem;
    margin-top: 0;
  }

  .partTwoText {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  .partThreeText {
    font-size: 1rem;
    margin-top: 0;
  }

  .registerButton {
    font-size: 1rem;
  }
}

/* FIXME Mobile styles */
@media(max-width: 767px) {
  .emblock {
    width: 100%;
    /* aspect-ratio: 1 / 4; */
  }

  /* ----- Above the bulb ----- */
  .examindsText {
    font-size: 3.7rem;
    margin-bottom: 0;
    margin-top: 2rem;
  }

  .partTwoText {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.8rem;
  }

  .partThreeText {
    font-size: 0.7rem;
    margin-top: 0.5rem;
  }

  .registerButton {
    font-size: 0.8rem;
    /* FIXME Temporary fix */
    margin-top: 15rem;
  }

  /* REVIEW Around the bulb ----- */
  /* .aroundBulb {
    min-height: 160px;
  }
  
  .emBigTexts {
    font-size: 1.7rem;
    margin-bottom: 0;
  }

  .emSmallTexts {
    font-size: 0.7rem;
    margin-top: 0;
  }

  .abyears {
    min-width: 120px;
    position: absolute;
    top: -10px;
    left: 20px;
  }

  .abhundredscores {
    position: absolute;
    top: -10px;
    right: 30px;
  }

  .abgraduates {
    position: absolute;
    top: 50px;
    left: 55px;
  }

  .abaveragescore {
    position: absolute;
    top: 50px;
    right: 60px;
  } */
}

.emblock { /* FIXME Fix the styles */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 80%;
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

/* FIXME Button style and positioning is not complete */
.registerButton {
  font-family: 'Inter-Bold';
  letter-spacing: 1.5px;
  cursor: pointer;
  color: white;
  background: linear-gradient(
    to right, 
    rgba(4, 107, 38, 1) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(4, 107, 38, 1) 100%
  );
  border-radius: 6.96px;
  border: none;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.8);
  /* margin-top: 15rem; */
  padding-left: 4.6rem;
  padding-right: 4.6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* REVIEW Around the bulb ----- */
/* .aroundBulb {
  position: relative;
  width: 100%;
}

.emBigTexts {
  font-family: 'Inter-Bold';
  text-align: center;

  color: rgba(255, 255, 255, 1);
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.emSmallTexts {
  color: white;
  font-family: 'Inter-Regular';
  font-weight: normal;
  text-align: center;
} */
</style>