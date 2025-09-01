import axios from 'axios'
import { useAuthStore } from './stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL, // LONGTODO Fix baseURL
  withCredentials: true // LONGTODO keep true if using HttpOnly cookie for refresh token
})

// Adds token to every request
api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.token
  if (token) 
    config.headers.Authorization = `Bearer ${token}`

  return config
})

// TODO Understand this
// Optional: auto-refresh on 401 error if backend exposes refresh route
let refreshing = null
api.interceptors.response.use(
  (r) => r,
  async (error) => {
    const { response, config } = error
    if (response?.status === 401 && !config.__isRetryRequest) {
      try {
        if (!refreshing) refreshing = useAuthStore().refresh()
        await refreshing
        refreshing = null
        config.__isRetryRequest = true
        return api(config) // retry original request
      } catch {
        refreshing = null
        await useAuthStore().logout()
      }
    }
    return Promise.reject(error)
  }
)

export default api