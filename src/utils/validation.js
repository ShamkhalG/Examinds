import { showToast } from "./notifications"

export async function validateData(formData, rules) {
  // Required rule validation
  if (Object.values(formData).some(value => value === '' || value === null || value === undefined)) {
    showToast("red", "Все поля должны быть заполнены!")
    return false
  }

  // Full name validation
  if (rules.includes('fullName')) {
    const [name, surname] = formData.fullName.trim().split(' ');
    if (!formData.fullName.includes(' ')) {
      showToast("red", "Имя / Фамилия должно содержать имя и фамилию, разделенные пробелом!");
      return false
    } else if (!name || name.length < 2) {
      showToast("red", "Имя должно содержать как минимум 2 буквы!");
      return false
    } else if (!surname || surname.length < 2) {
      showToast("red", "Фамилия должна содержать как минимум 2 буквы!");
      return false
    }
  }
  
  // Email validation
  if (rules.includes('email')) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showToast("red", "Введённый мейл недействительный!")
      return false
    }
  }

  // Password validation
  if (rules.includes('password')) {
    const commonPasswords = ["123456", "password", "qwerty", "111111"];
    if (formData.password.length < 10) { // Length check
      showToast("red", "Пароль должен состоять как минимум из 10 символов!")
      return false
    } else if (!/[A-Z]/.test(formData.password)) { // Uppercase letter check
      showToast("red", "Пароль должен содержать хотя бы одну заглавную букву (A-Z)!");
      return false
    } else if (!/[a-z]/.test(formData.password)) { // Lowercase letter check
      showToast("red", "Пароль должен содержать хотя бы одну строчную букву (a-z)!");
      return false
    } else if (!/[0-9]/.test(formData.password)) { // Number check
      showToast("red", "Пароль должен содержать хотя бы одну цифру (0-9)!");
      return false
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) { // Special character check
      showToast("red", "Пароль должен содержать хотя бы один специальный символ (например, !@#$%^&*)!");
      return false
    } else if (/(\d)\1{2}/.test(formData.password)) { // 3 consecutive numbers check
      showToast("red", "Пароль не должен содержать три одинаковых подряд идущих цифры!")
      return false
    } else if (commonPasswords.includes(formData.password)) { // Common passwords check
      showToast("red", "Пароль слишком простой, выберите более сложный!");
      return false
    }
  }

  // Number validation
  if (rules.includes('phoneNumber')) {
    if (formData.phoneNumber[0] !== '+') {
      showToast("red", "Номер должен начатся с '+'!")
      return false
    } else if (formData.phoneNumber.length !== 13 || !/^\+\d{12}$/.test(formData.phoneNumber)) {
      showToast("red", "Номер должен состоять из 13 символов: + и 12 цифр")
      return false
    }
  }

  // Parent number validation
  if (rules.includes('parentNumber')) {
    if (formData.parentNumber[0] !== '+') {
      showToast("red", "Номер родителя должен начатся с '+'!")
      return false
    } else if (formData.parentNumber.length !== 13 || !/^\+\d{12}$/.test(formData.parentNumber)) {
      showToast("red", "Номер родителя должен состоять из 13 символов: + и 12 цифр")
      return false
    } else if (formData.parentNumber === formData.phonenumber) {
      showToast("red", "Номер родителя не должен быть одинаковым с вашим номером!")
      return false
    }
  }

  return true
}