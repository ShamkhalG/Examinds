<template>
  <div class="mt-12 flex flex-col items-center">
    <h2 class="text-white text-[1.9rem] font-geologicaBold">
      Наши выпускники
    </h2>
    <p class="text-white text-[0.95rem] text-center font-interRegular">
      <span class="text-minds font-interBold">Результаты</span> студентов, <br />
      которые готовились с <span class="text-minds font-interBold">нами</span>
    </p>
    
    <!-- Results of students -->
    <div class="flex flex-col justify-center items-center mt-6
      bg-contain bg-center bg-no-repeat h-[270px]"
      :style="{ backgroundImage: `url(${screenWidth < 767 ? bacheliers_bg : ''})` }"
    >
      <img class="mt-8 w-[73%]" :src="student_results[curr_index]" alt="Results of students"/>
    </div>

    <!-- Scroll buttons -->
    <div class="mt-4 w-[132px] flex flex-row justify-between">
      <button @click="curr_index -= 1"
        class="w-12 h-12 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 0"
        :style="{ backgroundImage: `url(${curr_index !== 0 ? left_arrow : left_arrow_disabled})` }">
      </button>
      <button @click="curr_index += 1" 
        class="w-12 h-12 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 5"
        :style="{ backgroundImage: `url(${curr_index !== 5 ? right_arrow : right_arrow_disabled})` }">
      </button>
    </div>
  </div>
</template>

<script>
import bacheliers_bg from "../../assets/backgrounds/bacheliers_bg.png"
import result_01 from "../../assets/images/bacheliers/result_01.png"
import result_02 from "../../assets/images/bacheliers/result_02.png"
import result_03 from "../../assets/images/bacheliers/result_03.png"
import result_04 from "../../assets/images/bacheliers/result_04.png"
import result_05 from "../../assets/images/bacheliers/result_05.png"
import result_06 from "../../assets/images/bacheliers/result_06.png"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bacheliers",
  data() {
    return {
      screenWidth: window.innerWidth,
      bacheliers_bg: bacheliers_bg,
      curr_index: 0,
      student_results: [
        result_01,
        result_02,
        result_03,
        result_04,
        result_05,
        result_06
      ],
      left_arrow: new URL("../../assets/images/bacheliers/left_arrow.png", import.meta.url).href,
      left_arrow_disabled: new URL("../../assets/images/bacheliers/left_arrow_disabled.png", import.meta.url).href,
      right_arrow: new URL("../../assets/images/bacheliers/right_arrow.png", import.meta.url).href,
      right_arrow_disabled: new URL("../../assets/images/bacheliers/right_arrow_disabled.png", import.meta.url).href
    }
  },
}
</script>