import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './components/HomeView.vue'
import LoginView from './components/LoginView.vue'
import ProfileView from './components/ProfileView.vue'

import './assets/styles/tailwind.css'
import './assets/styles/fonts.css'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView}
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