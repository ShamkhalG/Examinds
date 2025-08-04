<template>
  <!-- FIXME Curve of the background is not seen -->
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

    <!-- Arrows -->
    <div class="flex flex-row justify-end mb-6 mr-auto">
      <!-- TODO Dynamic change of buttons -->
      <img src="@/assets/images/practice/inactive_button.png" alt="Left Button" 
        class="w-[18%]" />
      <img src="@/assets/images/practice/active_button.png" alt="Right Button" 
        class="w-[18%] ml-2" />
    </div>

    <!-- Videos -->
    <!-- FIXME Frame background is too big to fit. Decrease its size -->
    <div class="videoDiv bg-cover bg-center mb-16">
      <iframe
        class="w-[95%] h-[95%]"
        src="https://www.youtube.com/embed/uukmHfraa68"
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