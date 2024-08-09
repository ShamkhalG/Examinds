<template>
  <div class="contactUs centralize">
    <p class="contactUsHeader">Свяжитесь с нами</p>
    <img src="../../assets/images/contact_us_image.png" class="contactUsImage" />
    <div class="registerContainer relativity">
      <img src="../../assets/backgrounds/register_bg.png" class="notebookImage" />
      <form class="registerForm absoluteness">
        <p class="registerText">Имя/Фамилия</p>
        <input type="text" v-model="registerData.fullName" class="registerInputBox" />
  
        <p class="registerText">Номер телефона</p>
        <input type="text" v-model="registerData.number" class="registerInputBox" />
  
        <p class="registerText">Электронная почта</p>
        <input type="text" v-model="registerData.email" class="registerInputBox" />
  
        <p class="registerText">Пароль</p>
        <input type="text" v-model="registerData.password" class="registerInputBox" />
        
        <p class="registerText">Номер телефона Родителя</p>
        <input type="text" v-model="registerData.parentNumber" class="registerInputBox" /> 
        <div class="buttonContainer centralize">
          <button class="findOutPriceButton">УЗНАТЬ ЦЕНУ</button>
        </div>
      </form>
    </div>
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

.registerInputBox {
  border: 1px solid #D9D9D9;
  border-radius: 4px;
}

.registerText {
  font-family: 'Inter-Regular';
  font-style: italic;
}

.findOutPriceButton {
  font-family: 'Inter-Bold';
  letter-spacing: 1.5px;
  cursor: pointer;
  color: white;
  background: 
  linear-gradient(
    to right, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  ),
  linear-gradient(
    to right, 
    rgba(255, 236, 224, 0) 0%,
    rgba(255, 236, 224, 0.4) 47%,
    rgba(255, 236, 224, 0) 100%
  ),
  #037328;
  border-radius: 10px / 50px;
  border: none;
  box-shadow: 0px 3px 0px #046b26,
              inset 0px 2.18px 11.06px rgba(255, 255, 255, 0.25); 
}

.findOutPriceButton:active {
  box-shadow: 0px 0px 0px #046b26;
  transform: translateY(2px);
}

/* TODO Desktop styles */

/* Mobile styles */
@media(max-width: 767px) {
  .contactUs {
    margin-top: 1rem;
    margin-bottom: 5rem;
  }

  .contactUsHeader {
    font-size: 2.1rem;
    margin-bottom: 0.7rem;
  }

  .contactUsImage {
    width: 90%;
  }

  .registerContainer {
    display: flex;
    justify-content: center;
    margin-top: -1.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    min-height: 400px;
    width: 90%;
  }

  .registerForm {
    margin-top: 3rem;
    width: 290px;
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

  .buttonContainer {
    margin-top: 1rem;
  }

  .findOutPriceButton {
    margin-top: 1rem;
    width: 250px;
    height: 60px;
  }
}
</style>