import apiInstance from '@/lib/axios'
import { GetCurrentUserAPIResponse, LoginUserAPIResponse, SignUpForm } from '@/types'

const signIn = async (username: string, password: string): Promise<LoginUserAPIResponse> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await apiInstance.post<LoginUserAPIResponse, any>(import.meta.env.VITE_SIGNIN_API, {
      username,
      password,
    })
    return data.data
  } catch (error) {
    throw new Error('Invalid username or password')
  }
}

const signUp = async (userData: SignUpForm): Promise<any> => {
  try {
    const response = await apiInstance.post(import.meta.env.VITE_SIGNUP_API, userData)
    return response.data
  } catch (error) {
    throw new Error('Registration failed')
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

// const getCurrentUser = async (userId: string) => {
//   try {
//     const { data } = await apiInstance.get<GetCurrentUserAPIResponse>(import.meta.env.VITE_CURRENT_USER_API + userId)
//     return data
//   } catch (error) {
//     return null
//   }
// }
const getCurrentUser = async (userId: string): Promise<GetCurrentUserAPIResponse | null> => {
  try {
    const { data } = await apiInstance.get<GetCurrentUserAPIResponse>(import.meta.env.VITE_CURRENT_USER_API + userId);
    return data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
};

const authApi = {
  signIn,
  signUp,
  logOut,
  refreshToken,
  getCurrentUser,
}

export default authApi
