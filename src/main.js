import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

import './assets/styles/tailwind.css'
import './assets/styles/fonts.css'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')