import authApi from '@/services/auth'
import axios from 'axios'

export const TOKEN_KEY = 'AccessToken'
export const REFRESH_TOKEN_KEY = 'RefreshToken'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SECRET,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// TODO: Clear local storage and redirect to login
export const logOutApp = async () => {
  const resp = await authApi.logOut()
  if (resp.msg === 'logout') {
    localStorage.clear()
    window.location.reload()
  }
}

export default apiInstance
