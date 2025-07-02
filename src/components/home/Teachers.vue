<template>
  <div class="teachers flex flex-col items-center justify-center" id="teachers">
    <p class="teachersHeader">Преподаватели Exa<span class="text-minds">Minds</span></p>
    <div v-for="(teacher, index) in teachers" :key="index" class="flex flex-col items-center justify-center">
      <img :src="teacher.img" class="teacherImage" />
    </div>
  </div>
</template>

<script>
import saraInfoMobile from "../../assets/images/teachers/sara_info.png";
import saraInfoDesktop from "../../assets/images/teachers/sara_info_pc.png";
import elnaraInfoMobile from "../../assets/images/teachers/elnara_info.png";
import elnaraInfoDesktop from "../../assets/images/teachers/elnara_info_pc.png";
import ninaInfoMobile from "../../assets/images/teachers/nina_info.png";
import ninaInfoDesktop from "../../assets/images/teachers/nina_info_pc.png";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teachers",
  data() {
    return {
      screenWidth: window.innerWidth,
      teachers: [
        {
          img: window.innerWidth < 767 ? saraInfoMobile : saraInfoDesktop
        },
        {
          img: window.innerWidth < 767 ? elnaraInfoMobile : elnaraInfoDesktop
        },
        {
          img: window.innerWidth < 767 ? ninaInfoMobile : ninaInfoDesktop
        }
      ]
    }
  }
}
</script>

<style>
.teachersHeader {
  color: white;
  font-family: 'Geologica-Bold';
  text-align: center;
}

/* Desktop styles */
@media(min-width: 767px) {
  .teachers {
    margin-top: 4rem;
  }

  .teachersHeader {
    font-size: 5rem;
    margin-bottom: 0;
  }

  .teacherImage {
    width: 90%;
    margin-bottom: 3rem;
  }
}

/* Mobile styles */
@media(max-width: 767px) {
  .teachers {
    margin-top: 2rem;
  }
  .teachersHeader {
    font-size: 1.6rem;
  }
  
  .teacherImage {
    width: 90%;
    margin-left: 1.7rem;
  }
}
</style>