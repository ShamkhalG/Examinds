import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'
import { router } from './router'

import App from './App.vue'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/fonts.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Calls init() before mounting the app
const auth = useAuthStore()
auth.init().finally(() => {
  app.mount('#app')
})