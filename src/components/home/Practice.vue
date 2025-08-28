<template>
  <div class="bg-practice_bg-mobile lg:bg-practice_bg-pc bg-cover bg-center flex flex-col justify-center items-center w-full">
    <h3 class="text-[1.65rem] lg:text-[5rem] lg:text-minds mt-8 lg:mt-[5.2rem] mb-[-0.5rem] lg:mb-[-1.7rem] font-geologicaBold">Практика</h3>
    <h4 class="text-[1.17rem] lg:text-[2.4rem] mb-2 font-geologicaMedium">в передовых лабораториях</h4>
    
    <p class="text-center text-[0.8rem] lg:text-[1.25rem] py-4 px-10 mb-5 lg:w-[61%]
      border border-2 lg:border-[3px] border-minds rounded-md font-interMedium"
    >
      У <span class="font-interBold">вас появится шанс</span> открыть мир <br class="lg:hidden" />
      науки через <br class="hidden lg:block" /> практику в одной из <br class="lg:hidden"/>
      лучших лабораторий страны!
    </p>

    <!-- Lab photos -->
    <img class="w-[84%] lg:w-[61%] mb-[4.75rem] lg:mb-[5.5rem]" src="@/assets/images/practice/lab_photos.png" alt="Lab photos"/>

    <!-- Buttons -->
    <div class="flex flex-row justify-end mb-6 w-[270px] lg:w-[760px]">
      <!-- Left button -->
      <button @click="curr_index -= 1" 
        class="w-12 lg:w-[70px] h-12 lg:h-[70px] bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 0"
        :style="{ backgroundImage: `url(${curr_index === 0 ? left_arrow_disabled : left_arrow_enabled})` }">
      </button>

      <!-- Right button -->
      <button @click="curr_index += 1" 
        class="w-12 lg:w-[70px] h-12 lg:h-[70px] ml-2 bg-contain bg-center bg-no-repeat"
        :disabled="curr_index === 1"
        :style="{ backgroundImage: `url(${curr_index === 0 ? right_arrow_enabled : right_arrow_disabled})` }">
      </button>
    </div>

    <!-- Videos -->
    <div class="bg-video-frame-small lg:bg-video-frame-large bg-cover bg-center flex flex-col justify-center items-center mb-16 w-[300px] lg:w-[970px] h-[175px] lg:h-[564px]">
      <iframe
        class="w-[285px] lg:w-[921px] h-[161px] lg:h-[520px]"
        :src="curr_index === 0 ? 'https://www.youtube.com/embed/QusWbUPXuqQ' : 'https://www.youtube.com/embed/uukmHfraa68'"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Note about Discovery Week -->
    <div class="bg-dwnote_bg-small lg:bg-dwnote_bg-large bg-cover bg-center flex flex-col justify-center 
    mb-16 lg:mb-[11rem] w-full lg:w-[820px] h-[100px] lg:h-[150px]"
    >
      <p class="ml-auto mr-[2.5rem] lg:mr-[2rem] text-[0.65rem] lg:text-[1rem] font-interSemiBold">
        Откройте для себя, что вас <br class="lg:hidden"/>
        ждёт на <span class="text-minds font-interExtraBold">Discovery Week в UFAZ</span> <br />
        – <span class="font-interExtraBold">загляните внутрь лабораторий</span> <br class="lg:hidden"/>
        и почувствуйте атмосферу науки!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const curr_index = ref(0)
const left_arrow_enabled = new URL("@/assets/images/practice/left_arrow_enabled.png", import.meta.url).href
const left_arrow_disabled = new URL("@/assets/images/practice/left_arrow_disabled.png", import.meta.url).href
const right_arrow_enabled = new URL("@/assets/images/practice/right_arrow_enabled.png", import.meta.url).href
const right_arrow_disabled = new URL("@/assets/images/practice/right_arrow_disabled.png", import.meta.url).href
</script>