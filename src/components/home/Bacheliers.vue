<template>
  <div class="mt-12 lg:mt-0 flex flex-col items-center">
    <h2 class="text-white text-[1.9rem] lg:text-[4.3rem] font-geologicaBold">
      Наши выпускники
    </h2>
    <p class="text-white text-[0.95rem] lg:text-[1.52rem] text-center font-interRegular">
      <span class="text-minds font-interBold">Результаты</span> студентов, <br class="lg:hidden" />
      которые готовились с <span class="text-minds font-interBold">нами</span>
    </p>
    
    <div class="lg:flex lg:flex-row lg:items-center lg:w-[805px]">
      <!-- Left arrow button (PC) -->
      <button v-if="screenWidth >= 767" @click="curr_index -= 1"
        class="w-20 h-20 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 0"
        :style="{ backgroundImage: `url(${curr_index !== 0 ? left_arrow_enabled : left_arrow_disabled})` }">
      </button>

      <!-- Results of students -->
      <div class="flex flex-col justify-center items-center mt-6
        bg-contain bg-center bg-no-repeat h-[270px] lg:h-[500px] lg:w-[700px]"
        :style="{ backgroundImage: `url(${screenWidth < 767 ? bacheliers_bg : bacheliers_bg_pc})` }"
      >
        <!-- Student results -->
        <img class="mt-8 w-[73%] lg:w-[73%]" :src="currentImage" alt="Results of students"/>
        
      </div>

      <!-- Right arrow button (PC) -->
      <button v-if="screenWidth >= 767" @click="curr_index += 1" 
        class="w-20 h-20 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 5"
        :style="{ backgroundImage: `url(${curr_index !== 5 ? right_arrow_enabled : right_arrow_disabled})` }">
      </button>
    </div>
    
    <!-- Scroll buttons (Mobile) -->
    <div v-if="screenWidth < 767" class="mt-4 w-[132px] flex flex-row justify-between">
      <button @click="curr_index -= 1"
        class="w-12 h-12 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 0"
        :style="{ backgroundImage: `url(${curr_index !== 0 ? left_arrow_enabled : left_arrow_disabled})` }">
      </button>
      <button @click="curr_index += 1" 
        class="w-12 h-12 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 5"
        :style="{ backgroundImage: `url(${curr_index !== 5 ? right_arrow_enabled : right_arrow_disabled})` }">
      </button>
    </div>
  </div>
</template>

<script>
import bacheliers_bg from "../../assets/backgrounds/bacheliers_bg.png"
import bacheliers_bg_pc from "../../assets/backgrounds/bacheliers_bg_pc.png"
import result_01 from "../../assets/images/bacheliers/result_01.png"
import result_01_pc from "../../assets/images/bacheliers/result_01_pc.png"
import result_02 from "../../assets/images/bacheliers/result_02.png"
import result_02_pc from "../../assets/images/bacheliers/result_02_pc.png"
import result_03 from "../../assets/images/bacheliers/result_03.png"
import result_03_pc from "../../assets/images/bacheliers/result_03_pc.png"
import result_04 from "../../assets/images/bacheliers/result_04.png"
import result_04_pc from "../../assets/images/bacheliers/result_04_pc.png"
import result_05 from "../../assets/images/bacheliers/result_05.png"
import result_05_pc from "../../assets/images/bacheliers/result_05_pc.png"
import result_06 from "../../assets/images/bacheliers/result_06.png"
import result_06_pc from "../../assets/images/bacheliers/result_06_pc.png"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bacheliers",
  data() {
    return {
      screenWidth: window.innerWidth,
      bacheliers_bg: bacheliers_bg,
      bacheliers_bg_pc: bacheliers_bg_pc,
      curr_index: 0,
      student_results: [
        result_01,
        result_02,
        result_03,
        result_04,
        result_05,
        result_06
      ],
      student_results_pc: [
        result_01_pc,
        result_02_pc,
        result_03_pc,
        result_04_pc,
        result_05_pc,
        result_06_pc,
      ],
      left_arrow_enabled: new URL("../../assets/images/bacheliers/left_arrow_enabled.png", import.meta.url).href,
      left_arrow_disabled: new URL("../../assets/images/bacheliers/left_arrow_disabled.png", import.meta.url).href,
      right_arrow_enabled: new URL("../../assets/images/bacheliers/right_arrow_enabled.png", import.meta.url).href,
      right_arrow_disabled: new URL("../../assets/images/bacheliers/right_arrow_disabled.png", import.meta.url).href
    }
  },
  computed: {
    currentImage() {
      return this.screenWidth < 767
        ? this.student_results[this.curr_index] // Mobile images
        : this.student_results_pc[this.curr_index] // Desktop images
    }
  }
}
</script>