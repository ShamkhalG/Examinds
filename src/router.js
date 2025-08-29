import HomeView from './components/HomeView.vue'
import NotFoundView from './components/NotFoundView.vue'
import LoginView from './components/LoginView.vue'
import ProfileView from './components/ProfileView.vue'
import RegisterExamView from './components/RegisterExamView.vue'

import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
  { path: '/login', component: LoginView },
  // FIXME !!! Return this !!!
  // { path: '/profile', meta: { requiresAuth: true }, component: ProfileView },
  { path: '/profile', component: ProfileView },
  { path: '/exams', component: RegisterExamView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) { // Checks if a specific hash (div ID) is present
      return { el: to.hash, behavior: 'smooth' } // Scrolls to the specified section
    }
    return { top: 0 } // Default scroll behavior (scrolls to top of the page)
  },
})

// Route protection
router.beforeEach(async (to) => {
  const auth = useAuthStore()

  // Waits for user to be loaded regardless if token exists. Timeout = logout
  if (auth.token && !auth.user) {
    try { 
      await auth.fetchUser() 
    } catch { 
      await auth.logout() 
    }
  }

  // Blocks protected routes for guests
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  // Redirects to /profile if the user is already logged in
  if (to.path === '/login' && auth.isAuthenticated) {
    return { path: '/profile' }
  }
})