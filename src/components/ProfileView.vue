<template>
  <div class="flex flex-col relative bg-[#222222] min-h-screen pt-16 pb-4 px-4">
    <div class="flex flex-col lg:flex-row lg:justify-center lg:gap-20 lg:mt-16
      items-center lg:items-start"
    >  
      <!-- Personal info -->
      <div class="mb-6 w-full max-w-[500px] lg:max-w-auto lg:w-auto flex flex-col items-center">
        <!-- PI Header -->
        <h3 class="text-white text-center font-geologicaBold text-[1.8rem] lg:text-[2.5rem] mb-2">
          Личная информация
        </h3>

        <!-- Personal data -->
        <div class="flex flex-col w-full bg-[#303030] rounded-xl p-4">
          <!-- Name and Surname -->
          <PersonalData label="Имя / Фамилия" :value="personalData.name + ' ' + personalData.surname" />
          
          <!-- Email -->
          <PersonalData label="Email" :value="hiddenEmail" />
          
          <!-- Phone number -->
          <PersonalData label="Номер телефона" :value="personalData.phonenumber" />
  
          <!-- Parent phone number -->
          <PersonalData label="Номер телефона родителя" :value="personalData.parentnumber" />
        </div>
      </div>
  
      <!-- Exams -->
      <div class="mb-6 flex flex-col items-center">
        <!-- Exams header -->
        <h3 class="text-white font-geologicaBold text-[1.8rem] lg:text-[2.5rem] mb-2">
          Экзамены
        </h3>

        <div class="flex flex-col bg-[#303030] max-h-[393px] overflow-y-auto rounded-xl px-4 pb-2"> 
          <!-- Table -->
          <table v-if="mockExams.length !== 0" class="border-separate border-spacing-y-2 mt-2">
            <!-- Table header -->
            <thead class="sticky top-0 bg-[#303030]">
              <tr class="text-white text-center">
                <th class="pb-2 border-b border-white lg:text-[1.3rem]">Имя</th>
                <th class="pb-2 border-b border-white lg:text-[1.3rem]">Статус</th>
                <th class="pb-2 border-b border-white lg:text-[1.3rem]">Результат</th>
                <th class="pb-2 border-b border-white"></th>
              </tr>
            </thead>
    
            <!-- Table data -->
            <tbody>
              <tr v-for="exam in mockExams" :key="exam.id" 
                class="text-white text-center text-sm lg:text-lg"
              >
                <td class="py-2 lg:px-3 border-b border-white">{{ exam.name }}</td>
                <td class="py-2 lg:px-3 border-b border-white" 
                  :style="{ color: statusColors[exam.status] }"
                >
                  {{ exam.status }}
                </td>
                <td class="py-2 border-b border-white">{{ exam.result }}</td>
                <td class="py-2 pl-6 border-b border-white">
                  <RouterLink v-if="exam.status === 'Результаты готовы'" :to="'/exam/' + exam.link" class="underline text-[#009EFF]">
                    Разбор
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Message if no exams -->
          <p v-else class="text-minds text-center text-sm lg:text-[1.2rem] mt-2 font-geologicaBold">
            Вы не зарегистрированы ни на один экзамен.
          </p>
        </div>
      </div>
    </div>

    <!-- Something wrong, write to us -->
    <p class="text-white text-center text-[0.7rem] lg:text-[1rem] 
      lg:absolute lg:bottom-8 lg:left-0 lg:right-0 italic font-geologicaMedium"
    >
      Если любая указанная информация не соответствует действительности, 
      <span class="text-minds">сообщите нам!</span>
    </p>
  </div>
</template>

<script setup>
// import api from '@/api'
import PersonalData from './profile/PersonalData.vue'
import { computed } from 'vue'

// LONGTODO Retrieving data from cookies or from the database
// NOTE Is it really from cookies or we have to send a request to backend every time the user
// comes back?
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
const personalData = computed(() => auth.user)

// Data
// const personalData = {
//   name: "SG",
//   surname: "SGovich",
//   email: "shamkhalguliyev83@gmail.com",
//   phonenumber: "+994514982421",
//   parentnumber: "+994704982121"
// }
// LONGTODO Retrieving exams from the database
// const exams = api.get('/getExams')
const mockExams = [
  {
    id: 1,
    name: "Пробник Август 2025",
    status: "Результаты готовы",
    result: "82/100",
    link: "aug2025" // NOTE Maybe random strings for the link would be better
  },
  {
    id: 2,
    name: "Пробник Сентябрь 2025",
    status: "Ожидание результатов",
    result: "-",
    link: "sept2025"
  },
  {
    id: 3,
    name: "Пробник Октябрь 2025",
    status: "Ожидание начало",
    result: "-",
    link: "oct2025"
  },
  {
    id: 4,
    name: "Пробник Ноябрь 2025",
    status: "Отменено",
    result: "-",
    link: "nov2025"
  },
]
const statusColors = {
  "Ожидание начало": "#FF9508",
  "Ожидание результатов": "yellow",
  "Результаты готовы": "#39D600",
  "Отменено": "#FF2B00"
}
const hiddenEmail = computed(() => {
  let [emailName, domain] = personalData.value.email.split('@')
  let firstChars = emailName.slice(0, 2)
  const lastChars = emailName.slice(-2)
  firstChars = firstChars.padEnd(emailName.length - 2, '*')
  firstChars = firstChars.concat(lastChars + "@" + domain)
  return firstChars
})
</script>