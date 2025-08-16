<template>
  <!-- TODO Restricting access to ProfileView if not logged in -->
  <div class="flex flex-col relative bg-[#222222] min-h-screen pt-16 pb-4 px-4">
    <div class="flex flex-col lg:flex-row lg:justify-around items-center lg:items-start">
      <!-- Profile -->
      <!-- TODO Desktop version of Profile section -->
      <div class="mb-6 w-full lg:w-auto flex flex-col items-center">
        <h3 class="text-white font-geologicaBold text-[1.8rem] mb-2">Личная информация</h3>
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
  
      <!-- TODO Exams -->
      <div class="mb-4 flex flex-col items-center">
        <h3 class="text-white font-geologicaBold text-[1.8rem] mb-2">
          Экзамены
        </h3>

        <!-- TODO Message if no exams -->
        <div class="flex flex-col bg-[#303030] rounded-xl px-4 py-2">
          <table class="border-separate border-spacing-y-2">
            <thead>
              <tr class="text-white text-center">
                <th class="pb-2 border-b border-white">Имя</th>
                <th class="pb-2 border-b border-white">Статус</th>
                <th class="pb-2 border-b border-white">Результат</th>
                <th class="pb-2 border-b border-white"></th>
              </tr>
            </thead>
    
            <tbody>
              <tr v-for="exam in mockExams" :key="exam.id" class="text-white text-center text-sm">
                <td class="py-2 border-b border-white">{{ exam.name }}</td>
                <td class="py-2 border-b border-white" 
                  :style="{ color: statusColors[exam.status] }"
                >
                  {{ exam.status }}
                </td>
                <td class="py-2 border-b border-white">{{ exam.result }}</td>
                <td class="py-2 border-b border-white">
                  <RouterLink :to="'/exam/' + exam.link" class="underline text-[#009EFF]">
                    Разбор
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Something wrong, write to us -->
    <p class="text-white text-center text-[0.7rem] lg:text-[1rem] 
      lg:absolute lg:bottom-8 lg:left-0 lg:right-0 italic font-geologicaMedium"
    >
      Если любая указанная информация не соответствует действительности, сообщите нам!
    </p>
  </div>
</template>

<script>
import PersonalData from './profile/PersonalData.vue'

export default {
  name: 'ProfileView',
  components: {
    PersonalData,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      personalData: { // LONGTODO Retrieving data from cookies or from the database
        name: "SG",
        surname: "SGovich",
        email: "shamkhalguliyev83@gmail.com",
        phonenumber: "+994514982421",
        parentnumber: "+994704982121"
      },
      mockExams: [ // LONGTODO Defining the structure of each exam object
        {
          id: 1,
          name: "Пробник Август 2025",
          status: "Результаты готовы",
          result: "82/100",
          link: "aug2025" // NOTE Maybe random strings would be better
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
          link: "oct2025" // NOTE Maybe random strings would be better
        },
        {
          id: 4,
          name: "Пробник Ноябрь 2025",
          status: "Отменено",
          result: "-",
          link: "nov2025" // NOTE Maybe random strings would be better
        },
      ],
      statusColors: {
        "Ожидание начало": "#FF9508",
        "Ожидание результатов": "yellow",
        "Результаты готовы": "#39D600",
        "Отменено": "#FF2B00"
      }
    }
  },
  computed: {
    hiddenEmail() {
      let emailParts = this.personalData.email.split('@')
      let [emailName, domain] = emailParts
      let firstChars = emailName.slice(0, 2)
      const lastChars = emailName.slice(-2)
      firstChars = firstChars.padEnd(emailName.length - 2, '*')
      firstChars = firstChars.concat(lastChars + "@" + domain)
      return firstChars
    }
  }
}
</script>