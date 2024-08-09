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

    <!-- Around the light bulb -->
     <!-- FIXME Deal with the images -->
    <img src="../../assets/images/bulb.png" />
    <img src="../../assets//images//dust.png" />
    <!-- FIXME Render this using v-for directive -->
    <div class="aroundBulb relativity">
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
    
    <!-- Registration button -->
    <button class="registerButton">РЕГИСТРАЦИЯ</button>
  </div>
</template>

<script>
export default {
  name: "EMBlock"
}
</script>

<style>
.emblock {
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

/* ----- Around the bulb ----- */
.emBigTexts {
  background: linear-gradient(
    to right, 
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%),
    #FFFFFF;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 1.7rem;
  font-family: 'Inter-Bold';
  text-align: center;
  margin-bottom: 0;
}

.emSmallTexts {
  color: #FFFFFF;
  font-size: 0.7rem;
  font-family: 'Inter-Regular';
  font-weight: normal;
  text-align: center;
  margin-top: 0;
}

/* FIXME Button positioning is not complete */
.registerButton {
  font-family: 'Inter-Bold';
  letter-spacing: 1.5px;
  cursor: pointer;
  color: white;
  background: 
  linear-gradient(
    to right, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  ),
  linear-gradient(
    to right, 
    rgba(255, 236, 224, 0) 0%,
    rgba(255, 236, 224, 0.4) 47%,
    rgba(255, 236, 224, 0) 100%
  ),
  #037328;
  border-radius: 10px / 50px;
  border: none;
  box-shadow: 0px 3px 0px #046b26,
              inset 0px 2.18px 11.06px rgba(255, 255, 255, 0.25); 
}

.registerButton:active {
  box-shadow: 0px 0px 0px #046b26;
  transform: translateY(2px);
}

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

  /* ----- Around the bulb ----- */
  .aroundBulb {
    margin-top: 2rem;
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
    width: 120px;
    position: absolute;
    top: -10px;
    right: 40px;
  }

  .abhundredscores {
    position: absolute;
    top: -10px;
    left: 50px;
  }

  .abgraduates {
    position: absolute;
    top: 50px;
    right: 47px;
  }

  .abaveragescore {
    width: 80px;
    position: absolute;
    top: 50px;
    left: 25px;
  }

  .registerButton {
    font-size: 0.8rem;
    width: 250px;
    height: 60px;
    margin-top: 10rem;
  }

}
</style>