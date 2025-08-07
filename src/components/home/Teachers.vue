<template>
  <div class="flex flex-col items-center justify-center mt-8 lg:mt-[4rem]" id="teachers">
    <p class="text-[1.3rem] text-white text-center font-geologicaBold lg:text-[4.3rem] lg:mb-0"
    >
      Преподаватели Exa<span class="text-minds">Minds</span>
    </p>
    <div v-for="(teacher, index) in teachers" :key="index" class="flex flex-col items-center justify-center">
      <img :src="teacher.img" class="w-[90%] ml-[1.7rem] lg:w-[81%] lg:ml-0 lg:mb-[5rem]" />
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
          img: window.innerWidth < 1024 ? saraInfoMobile : saraInfoDesktop
        },
        {
          img: window.innerWidth < 1024 ? elnaraInfoMobile : elnaraInfoDesktop
        },
        {
          img: window.innerWidth < 1024 ? ninaInfoMobile : ninaInfoDesktop
        }
      ]
    }
  }
};
</script>