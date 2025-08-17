import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './components/HomeView.vue'
import NotFoundView from './components/NotFoundView.vue'
import LoginView from './components/LoginView.vue'
import ProfileView from './components/ProfileView.vue'
import RegisterExamView from './components/RegisterExamView.vue'

import '@/assets/styles/tailwind.css'
import '@/assets/styles/fonts.css'

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView },
  { path: '/exams', component: RegisterExamView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) { // Checks if a specific hash (div ID) is present
      return { el: to.hash, behavior: 'smooth' } // Scrolls to the specified section
    }
    return { top: 0 } // Default scroll behavior (scroll to top of the page)
  },
})

createApp(App).use(router).mount('#app')