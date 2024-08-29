<!-- FIXME This block fully and the button must be seen from the beginning -->
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
    <div class="aroundBulb relativity">
      <div class="bulbImageContainer centralize">
        <img :src="bulbPath" class="bulbImage" />
      </div>


      <div v-for="(achievement, index) in achievements" :key=index :class="achievement.class">
        <h3 class="emBigTexts">{{ achievement.bigText }}</h3>
        <h5 class="emSmallTexts">{{ achievement.smallText }}</h5>
      </div>

      <!-- Registration button -->
      <button class="registerButton" @click="toRegister">РЕГИСТРАЦИЯ</button>
    </div>

    <div class="dustImageContainer centralize">
      <img :src="dustPath" class="dustImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EMBlock",
  data() {
    return {
      bulbPath: window.innerWidth < 767 ? require("../../assets/images/bulb.png") : require("../../assets/images/bulb_pc.png"),
      dustPath: window.innerWidth < 767 ? require("../../assets/images/dust.png") : require("../../assets/images/dust_pc.png"),
      achievements: [
        {
          class: "abyears",
          bigText: "6 лет",
          smallText: window.innerWidth < 767 ? "Готовим к экзамену" : "Профессионально готовим к экзаменам",
        },
        {
          class: "abhundredscores",
          bigText: "20",
          smallText: "Стобалльников",
        },
        {
          class: "abgraduates",
          bigText: "600+",
          smallText: "Выпускников",
        },
        {
          class: "abaveragescore",
          bigText: "70+",
          smallText: window.innerWidth < 767 ? "Средний балл" : "Средний балл учеников",
        }
      ]
    }
  },
  methods: {
    toRegister() {
      const element = document.getElementById('registerForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
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
.aroundBulb {
  width: 100%;
}

.bulbImage {
  mix-blend-mode: color-dodge;
}

.dustImage {
  mix-blend-mode: lighten;
  z-index: 1;
}

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
  box-shadow: 0px 4px 0px #046b26,
              inset 0px 2.18px 11.06px rgba(255, 255, 255, 0.25);
  z-index: 2;
}

.registerButton:active {
  box-shadow: 0px 0px 0px #046b26;
  transform: translate(-50%, -48%);
}

/* Desktop styles */
@media(min-width: 767px) {
  .emblock {
    margin-top: 0.5rem;
  }

  .examindsText {
    font-size: 4.8rem;
    margin-bottom: -0.5rem;
    margin-top: 1rem;
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

  /* ----- Around the bulb ----- */
  .aroundBulb {
    max-width: 975px;
  }
  .dustImage {
    margin-top: -4.5rem;
    width: 100%;
  }
  
  .emBigTexts {
    font-size: 3.6rem;
    margin-bottom: 0;
  }

  .emSmallTexts {
    font-size: 1.1rem;
    margin-top: 0;
  }

  .abyears {
    width: 200px;
    position: absolute;
    top: 80px;
    left: 20px;
  }

  .abhundredscores {
    position: absolute;
    top: 80px;
    right: 20px;
  }

  .abgraduates {
    position: absolute;
    top: 280px;
    left: 120px;
  }

  .abaveragescore {
    position: absolute;
    top: 280px;
    right: 85px;
  }

  .registerButton {
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    top: 520px;
    font-size: 1rem;
    width: 379px;
    height: 80px;
  }
}

/* Mobile styles */
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
    max-width: 398px;
  }

  .dustImage {
    margin-top: -3rem;
    width: 100vw;
    height: auto;
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
    top: 30px;
    left: 5px;
  }

  .abhundredscores {
    position: absolute;
    top: 30px;
    right: 10px;
  }

  .abgraduates {
    position: absolute;
    top: 90px;
    left: 40px;
  }

  .abaveragescore {
    width: 80px;
    position: absolute;
    top: 90px;
    right: 40px;
  }

  .registerButton {
    position: absolute;
    left: 50%;
    right: 50%;
    top: 290px;
    transform: translate(-50%, -50%);
    font-size: 0.8rem;
    width: 250px;
    height: 60px;
  }
}
</style>