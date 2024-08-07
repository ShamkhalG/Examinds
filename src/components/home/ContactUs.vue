<template>
  <div class="contactUs centralize">
    <p class="contactUsHeader">Свяжитесь с нами</p>
    <img src="../../assets/images/contact_us_image.png" class="contactUsImage" />
    <div class="registerContainer">
      <form class="registerForm">
        <p class="registerText">Имя/Фамилия</p>
        <input type="text" v-model="registerData.fullName" class="registerInputBox" />
  
        <p class="registerText">Номер Телефона</p>
        <input type="text" v-model="registerData.number" class="registerInputBox" />
  
        <p class="registerText">Электронная почта</p>
        <input type="text" v-model="registerData.email" class="registerInputBox" />
  
        <p class="registerText">Пароль</p>
        <input type="text" v-model="registerData.password" class="registerInputBox" />
        
        <p class="registerText">Номер Телефона Родителя</p>
        <input type="text" v-model="registerData.parentNumber" class="registerInputBox" /> 
      </form>
    </div>
    <button class="findOutPriceButton">УЗНАТЬ ЦЕНУ</button>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      registerData: {
        fullName: '',
        number: '',
        email: '',
        password: '',
        parentNumber: ''
      }
    }
  }
}
</script>

<style>
.contactUsHeader {
  color: white;
  font-family: 'Geologica-bold';
}

.registerContainer {
  background-image: url("../../assets/backgrounds/register_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.registerInputBox {
  border: 1px solid #D9D9D9;
  border-radius: 4px;
}

.registerText {
  font-family: 'Inter-Regular';
  font-style: italic;
}

/* FIXME Button's styling is not correct */
.findOutPriceButton {
  font-family: 'Inter-Bold';
  letter-spacing: 1.5px;
  cursor: pointer;
  color: white;
  background: linear-gradient(
    to right, 
    rgba(4, 107, 38, 1) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(4, 107, 38, 1) 100%
  );
  border-radius: 6.96px;
  border: none;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.8);
  padding-left: 4.6rem;
  padding-right: 4.6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* TODO Desktop styles */

/* Mobile styles */
@media(max-width: 767px) {
  .contactUs {
    margin-top: 1rem;
  }

  .contactUsHeader {
    font-size: 2.1rem;
    margin-bottom: 0.7rem;
  }

  .contactUsImage {
    width: 90%;
  }

  /* FIXME Too many empty space on the bottom */
  .registerContainer {
    display: flex;
    justify-content: center;
    margin-top: -1.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    min-height: 442px;
    width: 90%;
  }

  .registerForm {
    margin-top: 3rem;
    width: 90%;
  }
  
  .registerText {
    margin: 0;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    margin-left: 0.5rem;
  }
  
  .registerInputBox {
    font-size: 1rem;
    height: 2rem;
    width: 98%;
  }

  .findOutPriceButton {
    margin-top: -2rem;
  }
}
</style>