<template>
  <div class="flex flex-col items-center justify-center mt-12 lg:mt-[9rem]" id="teachers">
    <p class="text-[2rem] text-white text-center font-geologicaBold lg:text-[4.3rem] mb-8 lg:mb-10"
    >
      <span class="text-minds">Discovery Week</span> <br class="lg:hidden" /> at UFAZ
    </p>
    <div v-for="(image, index) in images" :key="index" 
      class="flex flex-col items-center justify-center mb-12 lg:mb-10"
    >
      <img :src="image.img" class="w-[90%] lg:w-[76%]" />
    </div>
  </div>
</template>

<script setup>
import image_1 from "../../assets/images/discovery_week/image_1.png";
import image_1_pc from "../../assets/images/discovery_week/image_1_pc.png";
import image_2 from "../../assets/images/discovery_week/image_2.png";
import image_2_pc from "../../assets/images/discovery_week/image_2_pc.png";
import image_3 from "../../assets/images/discovery_week/image_3.png";
import image_3_pc from "../../assets/images/discovery_week/image_3_pc.png";

const screenWidth = window.innerWidth
const images = [
  {
    img: screenWidth < 1024 ? image_1 : image_1_pc
  },
  {
    img: screenWidth < 1024 ? image_2 : image_2_pc
  },
  {
    img: screenWidth < 1024 ? image_3 : image_3_pc
  }
]
</script>