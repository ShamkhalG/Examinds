import { defineStore } from 'pinia'
import api from '@/api'

const LS_KEY = 'access_token'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    // Called once to load the user
    async init() {
      const token = localStorage.getItem(LS_KEY)
      if (token) {
        await this.setToken(token)
        try {
          await this.fetchUser() // Validates token
        } catch {
          await this.logout()
        }
      }
    },

    async register(registerData) {
      try {
        // LONGTODO Does this request return the access token right away?
        const { data } = await api.post('/auth/register', registerData)
        await this.setToken(data.accessToken)
        await this.fetchUser()
        return true
      } catch (e) {
        return false
      }
    },
    
    async login(loginData) {
      try {
        const { data } = await api.post('/auth/login', loginData)
        await this.setToken(data.accessToken)
        await this.fetchUser()
        return true
      } catch (e) {
        return false
      }
    },

    async setToken(token) {
      this.token = token
      localStorage.setItem(LS_KEY, token)
    },

    async fetchUser() {
      const { data } = await api.get('/me') // Fetches user data with JWT
      this.user = data
    },

    async logout() {
      try { 
        await api.post('/auth/logout')
      } catch {
        // Nothing.
      }
      localStorage.removeItem(LS_KEY)
      this.token = null
      this.user = null
    },

    // Optional: If backend supports refresh token
    async refresh() {
      const { data } = await api.post('/auth/refresh') // backend should return a new accessToken
      await this.setToken(data.accessToken)
    }
  }
})