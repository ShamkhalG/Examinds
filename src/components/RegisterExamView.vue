<template>
  <div class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center 
    gap-7 lg:gap-32 bg-mindsBlack min-h-screen pt-20 lg:pt-24"
  >
    <!-- Offline exams -->
    <div class="flex flex-col items-center justify-center">
      <!-- Header -->
      <h2 class="text-white text-center font-geologicaBold text-[1.8rem] lg:text-[2.5rem] mb-2">
        Оффлайн экзамены
      </h2>
      
      <!-- Exam items -->
      <div class="flex flex-col gap-2 lg:gap-4 max-h-[200px] lg:max-h-[500px] overflow-y-auto">
        <div v-for="exam in mockOfflineExams" :key="exam.id" 
          class="flex flex-col gap-0.5 bg-[#303030] rounded-xl p-3" 
        >
          <!-- Name and date -->
          <div class="flex flex-row justify-between gap-5 lg:gap-10">
            <p class="text-white font-interBold lg:text-[1.3rem]"> {{ exam.name }} </p>
            <p class="text-white font-interRegular lg:text-[1.3rem]"> {{ exam.date }} </p>
          </div>

          <!-- Place and time -->
          <div class="flex flex-row justify-between">
            <p class="text-white font-interRegular lg:text-[1.3rem]"> {{ exam.place }} </p>
            <p class="text-white font-interRegular lg:text-[1.3rem]"> {{ exam.time }} </p>
          </div>
          
          <!-- Remaining places -->
          <p class="text-minds font-interRegular lg:text-[1.3rem]">
            Осталось {{ exam.remainingPlaces }} {{ pluralizePlaces(exam.remainingPlaces) }}
          </p>

          <!-- Register button -->
          <button class="px-4 py-2 mt-2 lg:mt-4 self-end lg:text-[1.3rem] 
            examRegisterButton font-interRegular" @click="openModal(exam)"
          >
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
      
      <!-- Exam items -->
      <div class="flex flex-col gap-2 lg:gap-4 max-h-[200px] lg:max-h-[500px] overflow-y-auto">
        <div v-for="exam in mockOnlineExams" :key="exam.id"
          class="flex flex-col gap-0.5 bg-[#303030] rounded-xl p-3"           
        >
          <!-- Name and date -->
          <div class="flex flex-row justify-between gap-5 lg:gap-10">
            <p class="text-white font-interBold lg:text-[1.3rem]"> {{ exam.name }} </p>
            <p class="text-white font-interRegular lg:text-[1.3rem]"> {{ exam.date }} </p>
          </div>

          <!-- Place and time -->
          <div class="flex flex-row justify-between">
            <p class="text-white font-interRegular lg:text-[1.3rem]"> {{ exam.place }} </p>
            <p class="text-white font-interRegular lg:text-[1.3rem]"> {{ exam.time }} </p>
          </div>
          
          <!-- Remaining places -->
          <p class="text-minds font-interRegular lg:text-[1.3rem]">
            Осталось {{ exam.remainingPlaces }} {{ pluralizePlaces(exam.remainingPlaces) }}
          </p>

          <!-- Register button -->
          <button class="px-4 py-2 mt-2 lg:mt-4 self-end lg:text-[1.3rem] 
            examRegisterButton font-interRegular" @click="openModal(exam)"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="open" class="fixed inset-0 z-50">
        <!-- Makes background transparent -->
        <div class="absolute inset-0 bg-black/50" @click="close"></div> 
        
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div role="dialog" aria-modal="true" class="w-full max-w-md lg:max-w-[700px] rounded-xl 
            bg-mindsBlack p-4 lg:p-6 shadow-xl"
          >
            <!-- Modal Header -->
            <div class="mb-4 flex justify-between">
              <h2 class="text-lg lg:text-[1.5rem] text-white font-interBold leading-normal">
                Регистрация на <br class="lg:hidden"/>
                <span class="text-minds">{{ selectedExam.name }}</span> <br />
                
                <!-- Exam info -->
                <span class="font-interRegular">
                  {{ selectedExam.date }}, 
                  {{ selectedExam.time }}, 
                  {{ selectedExam.place }}
                </span>
              </h2>

              <!-- Close button -->
              <button class="lg:text-[1.8rem] text-white self-start" @click="close">✕</button>
            </div>


            <!-- Modal form -->
            <form class="mt-6 lg:mt-2 flex flex-col gap-4 justify-center" id="examRegisterForm"
            v-if="!isAuthenticated">
              <!-- Full name -->
              <input placeholder="Имя/Фамилия" v-model="registerData.fullName" name="fullName"
                class="bg-mindsBlack w-full px-4 py-2 rounded-lg bg-[#222222] 
                text-white border border-minds focus:outline-none" 
              />

              <!-- Email -->
              <input type="email" placeholder="E-mail" v-model="registerData.email" name="email"
                class="bg-mindsBlack w-full px-4 py-2 rounded-lg bg-[#222222] 
                text-white border border-minds focus:outline-none"
              />
              
              <!-- Phone number -->
              <input placeholder="Номер телефона: +994518287712" v-model="registerData.phoneNumber"
                name="phoneNumber"
                class="bg-mindsBlack w-full px-4 py-2 rounded-lg bg-[#222222] 
                text-white border border-minds focus:outline-none"
              />

              <!-- Parent phone number -->
              <input placeholder="Номер телефона родителя" v-model="registerData.parentNumber"
                name="parentNumber"
                class="bg-mindsBlack w-full px-4 py-2 rounded-lg bg-[#222222] 
                text-white border border-minds focus:outline-none"
              />

            </form>
            <!-- Confirm button -->
            <button type="submit" class="w-full px-4 py-2 mt-6 rounded-md bg-orange-600 
              text-white font-interRegular" @click.prevent="registerToExam"
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
// import api from '@/api'
import { ref, reactive, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { validateData } from '@/utils/validation'

// Data
const auth = useAuthStore()
const isAuthenticated = computed(() => auth.isAuthenticated)
const open = ref(false)
const selectedExam = ref(null)
const registerData = reactive({
  fullName: '',
  email: '',
  phoneNumber: '',
  parentNumber: ''
})

// LONGTODO Retrieving exams from the database
// const offlineExams = api.get('/getOfflineExams')
const mockOfflineExams = [
  {
    id: 1,
    name: "Пробник Август 2025",
    date: "17.08.2025",
    time: "10:00",
    place: "UFAZ 308",
    remainingPlaces: 2
  },
  {
    id: 2,
    name: "Пробник Сентярбь 2025",
    date: "13.09.2025",
    time: "09:30",
    place: "UFAZ 204",
    remainingPlaces: 17
  }
]

// LONGTODO Retrieving exams from the database
// const onlineExams = api.get('/getOnlineExams')
const mockOnlineExams = [
  {
    id: 1,
    name: "Пробник Август 2025",
    date: "17.08.2025",
    time: "14:00",
    place: "Microsoft Teams",
    remainingPlaces: 1
  },
  {
    id: 2,
    name: "Пробник Сентярбь 2025",
    date: "13.09.2025",
    time: "13:30",
    place: "Microsoft Teams",
    remainingPlaces: 13
  },
  {
    id: 3,
    name: "Пробник Сентярбь 2025",
    date: "13.09.2025",
    time: "13:30",
    place: "Microsoft Teams",
    remainingPlaces: 13
  }
]

// Methods
function pluralizePlaces(n) {
  const mod10 = n % 10
  const mod100 = n % 100

  if (mod10 === 1 && mod100 !== 11) return 'место'
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return 'места'
  return 'мест'
}

function openModal(exam) { 
  open.value = true 
  selectedExam.value = exam 
}

function close() { open.value = false }

async function registerToExam() {
  if (!isAuthenticated.value) { // User is not authenticated
    const isValid = await validateData(registerData, ['fullName', 'email', 'phoneNumber', 'parentNumber'])
    if (!isValid)
      return
  }
  // LONGTODO Sends API request directly using cookies (or Pinia store)
  // NOTE Does it take user ID or JWT token to register it?
  // NOTE What about the exam?
  // Registration successful
  // if (await api.post('/registerToExam', id)) {
  //   showToast('green', 'Вы успешно зарегистрировались на экзамен!')
  // } else {
  //   showToast('red', 'Произошла ошибка! Попробуйте позже!')
  // }
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