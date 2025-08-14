<template>
  <!-- TODO Restricting access to ProfileView if not logged in -->
  <div class="flex flex-col justify-center items-center">
    <!-- TODO Profile -->
    <div>
      <!-- Name and Surname -->
      
      <p>{{ personalData.name }} {{ personalData.surname }}</p>
      
      <!-- Email -->
      <p>{{ hiddenEmail }}</p>
      
      <!-- Phone number -->
      <p>{{ personalData.phonenumber }}</p>

      <!-- Parent phone number -->
      <p>{{ personalData.parentnumber }}</p>
    </div>

    <!-- TODO Exams -->
    <div>
      <!-- TODO Message if no exams -->
      <div v-for="exam in mockExams" :key="exam.index">
        <RouterLink :to="'/exam/' + exam.link">
          Разбор
        </RouterLink>
      </div>
    </div>

    <!-- Something wrong, write to us -->
    <p>Если любая указанная информация не соответствует действительности, сообщите нам!</p>
  </div>
</template>

<script>

export default {
  name: 'ProfileView',
  data() {
    return {
      screenWidth: window.innerWidth,
      personalData: { // LONGTODO Retrieving data from cookies or from the database
        name: "SG",
        surname: "SGovich",
        email: "shamkhalguliyev83@gmail.com",
        phonenumber: "+994514982421",
        parentnumber: "994704982121"
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