import { defineStore } from 'pinia'
import api from '@/api'

const LS_KEY = 'access_token'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'authed' | 'error'
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
      this.status = 'loading'
      const { data } = await api.get('/me') // Fetch user data with JWT
      this.user = data
      this.status = 'authed'
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
      this.status = 'idle'
    },

    // Optional: If backend supports refresh token
    async refresh() {
      const { data } = await api.post('/auth/refresh') // backend should return a new accessToken
      await this.setToken(data.accessToken)
    }
  }
})