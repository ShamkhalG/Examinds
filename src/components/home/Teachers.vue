<template>
  <div class="teachers centralize">
    <p class="teachersHeader">Преподаватели Exa<span class="minds">Minds</span></p>
    <div v-for="(teacher, index) in teachers" :key="index" class="centralize">
      <img :src="teacher.img" class="teacherImage" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teachers",
  data() {
    return {
      teachers: [
        {
          img: require("../../assets/images/teachers/sara_info.png")
        },
        {
          img: require("../../assets/images/teachers/elnara_info.png")
        },
        {
          img: require("../../assets/images/teachers/nina_info.png")
        }
      ]
    }
  }
}
</script>

<style>
.teachersHeader {
  color: white;
  font-family: 'Geologica-Bold';
}
/* TODO Desktop styles */

/* Mobile styles */
@media(max-width: 767px) {
  .teachers {
    margin-top: 2rem;
  }
  .teachersHeader {
    font-size: 1.6rem;
  }
  
  .teacherImage {
    width: 90%;
    margin-left: 1.7rem;
  }
}
</style>