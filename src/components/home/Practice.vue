<template>
  <div class="practiceDiv bg-cover bg-center flex flex-col justify-center items-center w-full">
    <h3 class="font-geologicaBold text-[1.65rem] mt-8 mb-[-0.5rem]">Практика</h3>
    <h4 class="font-geologicaMedium text-[1.17rem] mb-2">в передовых лабораториях</h4>
    
    <p class="text-center text-[0.8rem] py-4 px-10 mb-5
      border border-2 border-minds rounded-md font-interMedium"
    >
      У <span class="font-interBold">вас появится шанс</span> открыть мир <br class="lg:hidden" />
      науки через практику в одной из <br class="lg:hidden"/>
      лучших лабораторий страны!
    </p>

    <!-- Lab photos -->
    <img class="w-[84%] mb-[4.75rem]" src="@/assets/images/practice/lab_photos.png" alt="Lab photos"/>

    <!-- Buttons -->
    <div class="flex flex-row justify-end mb-6 w-[270px]">
      <!-- Left button -->
      <button @click="curr_index -= 1" 
        class="w-12 h-12 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 0"
        :style="{ backgroundImage: `url(${curr_index === 0 ? left_arrow_disabled : left_arrow_enabled})` }">
      </button>

      <!-- Right button -->
      <button @click="curr_index += 1" 
        class="w-12 h-12 ml-2 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 1"
        :style="{ backgroundImage: `url(${curr_index === 0 ? right_arrow_enabled : right_arrow_disabled})` }">
      </button>
    </div>

    <!-- Videos -->
    <div class="videoDiv bg-cover bg-center flex flex-col justify-center items-center mb-16 w-[300px] h-[175px]">
      <iframe
        class="w-[285px] h-[161px]"
        :src="curr_index === 0 ? 'https://www.youtube.com/embed/QusWbUPXuqQ' : 'https://www.youtube.com/embed/uukmHfraa68'"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Note about Discovery Week -->
    <div class="dwnoteDiv flex flex-col justify-center mb-16 w-full bg-cover bg-center h-[100px]">
      <p class="ml-auto mr-[2.5rem] text-[0.65rem] font-interSemiBold">
        Откройте для себя, что вас <br class="lg:hidden"/>
        ждёт на <span class="text-minds font-interExtraBold">Discovery Week в UFAZ</span> <br class="lg:hidden"/>
        – <span class="font-interExtraBold">загляните внутрь лабораторий</span> <br class="lg:hidden"/>
        и почувствуйте атмосферу науки!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Practice",
  data() {
    return {
      screenWidth: window.innerWidth,
      curr_index: 0,
      left_arrow_enabled: new URL("@/assets/images/practice/left_arrow_enabled.png", import.meta.url).href,
      left_arrow_disabled: new URL("@/assets/images/practice/left_arrow_disabled.png", import.meta.url).href,
      right_arrow_enabled: new URL("@/assets/images/practice/right_arrow_enabled.png", import.meta.url).href,
      right_arrow_disabled: new URL("@/assets/images/practice/right_arrow_disabled.png", import.meta.url).href
    }
  }
};
</script>

<style>
  .practiceDiv {
    background-image: url('@/assets/backgrounds/practice_bg.png');
  }

  .videoDiv {
    background-image: url('@/assets/images/practice/video_frame.png');
  }

  .dwnoteDiv {
    background-image: url('@/assets/images/practice/dwnote_bg.png');
  }
</style>