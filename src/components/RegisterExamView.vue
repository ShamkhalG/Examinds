<template>
  <!-- TODO RegisterExam page (Mobile and PC) -->
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
          <!-- Remaining places -->
          <p class="text-minds font-interRegular"> Осталось {{ exam.remainingPlaces }} мест</p>

          <!-- Register button -->
          <button class="px-4 py-2 mt-2 self-end examRegisterButton" @click="checkUser">
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
          <button class="px-4 py-2 mt-2 self-end examRegisterButton" @click="checkUser">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- TODO Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="open" class="fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/50" @click="close"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div role="dialog" aria-modal="true"
               class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div class="mb-4 flex items-center justify-between">
              <h2 class="text-lg font-semibold">Заголовок</h2>
              <button class="text-gray-500" @click="close">✕</button>
            </div>
            <p class="text-sm text-gray-700">Контент модального окна…</p>
            <div class="mt-6 flex justify-end gap-3">
              <button class="px-4 py-2 rounded-md bg-gray-200" @click="close">Отмена</button>
              <button class="px-4 py-2 rounded-md bg-orange-600 text-white" @click="registerToExam">Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  name: 'RegisterExamView.vue',
  data() {
    return {
      open: false,
      logged: false, // NOTE This must be imported from Vuex store
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
  },
  methods: {
    checkUser() {
      !this.logged ? this.open = true : this.registerToExam()
    },
    registerToExam() {
      // LONGTODO Sends API request to register the user for the exam
      // TODO Toastify that tells the registration was successfull
      console.log("Register successful.")
    },
    close() { this.open = false }
  },
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