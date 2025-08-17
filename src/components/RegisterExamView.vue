<template>
  <!-- TODO RegisterExam page -->
  <div class="flex flex-col lg:flex-row items-center lg:justify-center gap-7 lg:gap-20 bg-[#222222] min-h-screen pt-20">
    <!-- Header -->
    <!-- TODO Remove this -->
    <!-- <h1 class="text-white text-center font-geologicaBold text-[1.1rem] 
      border border-2 border-minds rounded-xl max-w-[270px] lg:text-[2rem] mb-2 py-1"
    >
      Регистрация на пробные экзамены
    </h1> -->

    <!-- Offline exams -->
    <div class="flex flex-col items-center justify-center">
      <!-- Header -->
      <h2 class="text-white text-center font-geologicaBold text-[1.8rem] lg:text-[2.5rem] mb-2">
        Оффлайн экзамены
      </h2>
      
      <!-- Exams -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-0.5 bg-[#303030] rounded-xl p-3" v-for="exam in mockOfflineExams" :key="exam.id">
          <!-- Name and date -->
          <div class="flex flex-row justify-between gap-5">
            <p class="text-white font-interBold"> {{ exam.name }} </p>
            <p class="text-white font-interRegular"> {{ exam.date }} </p>
          </div>

          <!-- Place and time -->
          <div class="flex flex-row justify-between">
            <p class="text-white font-interRegular"> {{ exam.place }} </p>
            <p class="text-white font-interRegular"> {{ exam.time }} </p>
          </div>
          
          <!-- Remaining places -->
          <!-- FIXME Changing word "место" according to the number of remaining places -->
          <p class="text-minds font-interRegular"> Осталось {{ exam.remainingPlaces }} мест</p>

          <!-- Register button -->
          <!-- TODO Popup window that contains a form and a submit button -->
          <!-- NOTE No popup for logged in users -->
          <button class="px-4 py-2 mt-2 self-end examRegisterButton">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>

    <!-- Online exams -->
    <div class="flex flex-col items-center justify-center">
      <!-- Header -->
      <h2 class="text-white text-center font-geologicaBold text-[1.8rem] lg:text-[2.5rem] mb-2">
        Онлайн экзамены
      </h2>
      
      <!-- Exams -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-0.5 bg-[#303030] rounded-xl p-3" v-for="exam in mockOnlineExams" :key="exam.id">
          <!-- Name and date -->
          <div class="flex flex-row justify-between gap-5">
            <p class="text-white font-interBold"> {{ exam.name }} </p>
            <p class="text-white font-interRegular"> {{ exam.date }} </p>
          </div>

          <!-- Place and time -->
          <div class="flex flex-row justify-between">
            <p class="text-white font-interRegular"> {{ exam.place }} </p>
            <p class="text-white font-interRegular"> {{ exam.time }} </p>
          </div>
          
          <!-- FIXME Changing word "место" according to the number of remaining places -->
          <!-- Remaining places -->
          <p class="text-minds font-interRegular"> Осталось {{ exam.remainingPlaces }} мест</p>

          <!-- Register button -->
          <button class="px-4 py-2 mt-2 self-end examRegisterButton">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterExamView.vue',
  data() {
    return {
      mockOfflineExams: [ // LONGTODO Retrieving exams from the database
        {
          id: 1,
          name: "Пробник Август 2025",
          date: "17.08.2025",
          time: "10:00",
          place: "UFAZ 308",
          remainingPlaces: 8
        },
        {
          id: 2,
          name: "Пробник Сентярбь 2025",
          date: "13.09.2025",
          time: "09:30",
          place: "UFAZ 204",
          remainingPlaces: 17
        }
      ],
      mockOnlineExams: [ // LONGTODO Retrieving exams from the database
        {
          id: 1,
          name: "Пробник Август 2025",
          date: "17.08.2025",
          time: "14:00",
          place: "Microsoft Teams",
          remainingPlaces: 8
        },
        {
          id: 2,
          name: "Пробник Сентярбь 2025",
          date: "13.09.2025",
          time: "13:30",
          place: "Microsoft Teams",
          remainingPlaces: 17
        }
      ]
    }
  }
}
</script>

<style>
.examRegisterButton {
  background: linear-gradient(
    to bottom,
    #8B3F19 0%,
    #A66C58 50%,
    #8C4019 100%
  );
  color: white;
  border-radius: 0.5rem;
}
</style>