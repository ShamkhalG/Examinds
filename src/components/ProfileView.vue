<template>
  <!-- TODO Restricting access to ProfileView if not logged in -->
  <div class="flex flex-col justify-center items-center bg-[#222222]">
    <!-- Profile -->
     <!-- TODO Desktop version of Profile section -->
    <div class="">
      <h3 class="text-white font-geologicaBold text-[1.8rem] mb-2">Личная информация</h3>
      <div class="flex flex-col bg-[#303030] rounded-xl p-4">
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
    <div class="flex flex-col justify-center items-center">
      <h3 class="text-white font-geologicaBold text-[1.8rem]">Экзамены</h3>
      <!-- TODO Message if no exams -->
      <div v-for="exam in mockExams" :key="exam.index">
        <RouterLink :to="'/exam/' + exam.link" class="text-white">
          Разбор
        </RouterLink>
      </div>
    </div>

    <!-- Something wrong, write to us -->
    <p class="text-white text-center font-geologicaMedium">
      Если любая указанная информация не соответствует действительности, сообщите нам!
    </p>
  </div>
</template>

<script>
import PersonalData from './profile/PersonalData.vue'

export default {
  name: 'ProfileView',
  components: {
    PersonalData
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
          index: 1,
          name: "Пробник сентябрь 2025",
          status: "Ожидание результатов",
          result: "-",
          link: "sept2025" // NOTE Maybe random strings would be better
        },
        {
          index: 2,
          name: "Пробник октябрь 2025",
          status: "Ожидание начало",
          result: "-",
          link: "oct2025"
        }
      ],
      statusColors: { // LONGTODO Define all possible status, then define all colors
        "Ожидание начало": "blue",
        "Ожидание результатов": "yellow",
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