import apiInstance from '@/lib/axios'
import { GetCurrentUserAPIResponse, LoginUserAPIResponse } from '@/types'

const signIn = async (username: string, password: string): Promise<LoginUserAPIResponse> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await apiInstance.post<LoginUserAPIResponse, any>(import.meta.env.VITE_SIGNIN_API, {
      username,
      password,
    })
    return data
  } catch (error) {
    throw new Error('Invalid username or password')
  }
}

const logOut = async () => {
  try {
    const resp = await apiInstance.post(import.meta.env.VITE_LOGOUT_API)
    return resp.data
  } catch (error) {
    return { error: true }
  }
}

const refreshToken = async (refreshToken: string) => {
  try {
    const resp = await apiInstance.post(import.meta.env.VITE_REFRESH_API, {
      refreshToken: refreshToken,
    })
    return resp.data
  } catch (e) {
    return e
  }
}

const getCurrentUser = async () => {
  try {
    const { data } = await apiInstance.get<GetCurrentUserAPIResponse>(import.meta.env.VITE_CURRENT_USER_API)
    return data
  } catch (error) {
    return null
  }
}

const authApi = {
  signIn,
  logOut,
  refreshToken,
  getCurrentUser,
}

export default authApi
