<template>
  <div class="contactUs centralize">
    <p class="contactUsHeader">Свяжитесь с нами</p>
    <img class="contactUsImage" v-if="screenWidth < 767" src="../../assets/images/contact_us_image.png" />
    <div class="registerContainer relativity">
      <img class="contactUsImage" v-if="screenWidth >= 767" src="../../assets/images/contact_us_image_pc.png" />
      <img class="notebookImage" :src="screenWidth < 767 ? require('../../assets/backgrounds/register_bg.png') : require('../../assets/backgrounds/register_bg_pc.png')" />
      <form @submit.prevent="signUp" class="registerForm absoluteness" id="registerForm">
        <!-- Name/Surname -->
        <div>
          <p class="registerText">Имя/Фамилия</p>
          <input type="text" v-model="registerData.name" class="registerInputBox" />
        </div>
  
        <!-- Number -->
        <div>
          <p class="registerText">Номер телефона</p>
          <input type="text" v-model="registerData.phonenumber" placeholder="Пример: +994501234567" class="registerInputBox" />
        </div>
  
        <!-- Email -->
        <div>
          <p class="registerText">Электронная почта</p>
          <input type="text" v-model="registerData.email" class="registerInputBox" />
        </div>
  
        <!-- Password -->
        <div>
          <p class="registerText">Пароль</p>
          <input type="text" v-model="registerData.password" class="registerInputBox" />
        </div>
        
        <!-- Parent number -->
        <div>
          <p class="registerText">Номер телефона Родителя</p>
          <input type="text" v-model="registerData.parentnumber" class="registerInputBox" /> 
        </div>
        
        <div class="buttonContainer centralize">
          <button type="submit" class="findOutPriceButton">УЗНАТЬ ЦЕНУ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default {
  name: "ContactUs",
  data() {
    return {
      screenWidth: window.innerWidth,
      registerData: {
        name: '',
        phonenumber: '',
        email: '',
        password: '',
        parentnumber: ''
      }
    }
  },
  methods: {
    showToast(toastType, toastMessage) {
      Toastify({
        text: toastMessage,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: toastType === 0 ? "green" : "red",
          fontFamily: 'Inter-Regular',
          borderRadius: '6px'
        },
        stopOnFocus: true,
      }).showToast();
    },
    
    async validateData() {
      // Required rule validation
      if (Object.values(this.registerData).some(value => !value)) {
        this.showToast(1, "Все поля должны быть заполнены!")
        return false
      }

      // Name validation
      const [name, surname] = this.registerData.name.trim().split(' ');
      if (!this.registerData.name.includes(' ')) {
        this.showToast(1, "Имя / Фамилия должно содержать имя и фамилию, разделенные пробелом!");
        return false;
      } else if (!name || name.length < 2) {
        this.showToast(1, "Имя должно содержать как минимум 2 буквы!");
        return false;
      } else if (!surname || surname.length < 2) {
        this.showToast(1, "Фамилия должна содержать как минимум 2 буквы!");
        return false;
      }

      // Number verification
      if (this.registerData.phonenumber[0] !== '+') {
        this.showToast(1, "Номер должен начатся с '+'!")
        return false;
      } else if (this.registerData.phonenumber.length !== 13 || !/^\+\d{12}$/.test(this.registerData.phonenumber)) {
        this.showToast(1, "Номер должен состоять из 13 символов: + и 12 цифр")
        return false;
      }
      
      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registerData.email)) {
        this.showToast(1, "Введённый мейл недействительный!")
        return false
      }

      // Password verification
      const commonPasswords = ["123456", "password", "qwerty", "111111"];
      if (this.registerData.password.length < 10) { // Length check
        this.showToast(1, "Пароль должен состоять как минимум из 10 символов!")
        return false
      } else if (!/[A-Z]/.test(this.registerData.password)) { // Uppercase letter check
        this.showToast(1, "Пароль должен содержать хотя бы одну заглавную букву (A-Z)!");
        return false;
      } else if (!/[a-z]/.test(this.registerData.password)) { // Lowercase letter check
        this.showToast(1, "Пароль должен содержать хотя бы одну строчную букву (a-z)!");
        return false;
      } else if (!/[0-9]/.test(this.registerData.password)) { // Number check
        this.showToast(1, "Пароль должен содержать хотя бы одну цифру (0-9)!");
        return false;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.registerData.password)) { // Special character check
        this.showToast(1, "Пароль должен содержать хотя бы один специальный символ (например, !@#$%^&*)!");
        return false;
      } else if (commonPasswords.includes(this.registerData.password)) { // Common passwords check
        this.showToast(1, "Пароль слишком простой, выберите более сложный!");
        return false;
      }

      // Parent number verification
      if (this.registerData.parentnumber[0] !== '+') {
        this.showToast(1, "Номер родителя должен начатся с '+'!")
        return false;
      } else if (this.registerData.parentnumber.length !== 13 || !/^\+\d{12}$/.test(this.registerData.parentnumber)) {
        this.showToast(1, "Номер родителя должен состоять из 13 символов: + и 12 цифр")
        return false;
      } else if (this.registerData.parentnumber === this.registerData.phonenumber) {
        this.showToast(1, "Номер родителя не должен быть одинаковым с вашим номером!")
        return false;
      }

      return true;
    },

    async signUp() {
      const isValid = await this.validateData();
      if (isValid) {
        const baseURL = "https://bold-aurelea-examinds-0e0bfd9d.koyeb.app/";
        const url = baseURL + "auth/signup";
        axios.post(url, this.registerData)
          .then(() => {
            this.showToast(0, "С вами в скором времени свяжутся.");
          })
          .catch(error => {
            console.error('Error: ', error.message);
            this.showToast(1, "Произошла ошибка! Пожалуйста, повторите ещё раз.");
          });
      }
    },
  },
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

@media(max-width: 1717px) {
  .contactUsImage {
    max-width: 100%;
  }
}

/* Desktop styles */
@media(min-width: 767px) {
  .contactUs {
    min-height: 1000px;
  }

  .contactUsHeader {
    font-size: 5rem;
    margin-bottom: -2.7rem;
    margin-top: 0;
  }

  .registerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .contactUsImage {
    height: auto;
  }

  .notebookImage {
    position: absolute;
    top: 46%;
  }

  .registerForm {
    margin-top: 28.5rem;
    margin-left: 1rem;
    width: 660px;
  }

  .registerText {
    margin: 0;
    margin-top: 0.4rem;
    margin-bottom: 0.2rem;
    margin-left: 0.5rem;
  }

  .registerInputBox {
    border-radius: 8px;
    border-width: 2px;
    font-size: 1rem;
    height: 2rem;
    width: 96%;
  }

  .findOutPriceButton {
    margin-top: 1rem;
    font-size: 1.1rem;
    width: 379px;
    height: 90px;
  }
}

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