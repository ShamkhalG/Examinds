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
  scrollBehavior(to) {
    if (to.hash) { // Checks if a specific hash (div ID) is present
      return { el: to.hash } // Scrolls to the specified section
    }
    return { top: 0 } // Default scroll behavior (scroll to top of the page)
  },
})

createApp(App).use(router).mount('#app')