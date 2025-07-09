<template>
  <div class="flex flex-col items-center justify-center mt-8 md:mt-[4rem]" id="teachers">
    <p class="text-[1.3rem] text-white text-center font-geologicaBold md:text-[4.3rem] md:mb-0"
    >
      Преподаватели Exa<span class="text-minds">Minds</span>
    </p>
    <div v-for="(teacher, index) in teachers" :key="index" class="flex flex-col items-center justify-center">
      <img :src="teacher.img" class="w-[90%] ml-[1.7rem] md:w-[81%] md:ml-0 md:mb-[5rem]" />
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
};
</script>