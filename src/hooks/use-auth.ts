import authApi from '@/services/auth'
import { queryClient } from '@/constants'
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '@/lib/axios'
import { ROUTE_PATHS, ROUTE_PATHS_MANAGER } from '@/router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { DecodedToken } from '@/types'

export const useAuth = () => {
  const navigate = useNavigate()

  // Decode token
  const decodeToken = (token: string) => {
    const decodedToken = jwtDecode<DecodedToken>(token)
    return decodedToken
  }
  const {
    data: user,
    isLoading: loadingInitial,
    error: error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const userId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').Id
      const response = await authApi.getCurrentUser(userId)
      if (!response) {
        // TODO: Redirect to login
        // localStorage.clear()
        // navigate(ROUTE_PATHS.LOGIN)
        return null
      } else return response
    },
  })

  const signInMutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) => authApi.signIn(username, password),
    onSuccess: (data) => {
      localStorage.setItem(TOKEN_KEY, data.data.accessToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken)
      queryClient.invalidateQueries({ queryKey: ['user'] })
      const roleId = decodeToken(localStorage.getItem(TOKEN_KEY) || '').RoleId
      if (roleId == '1') {
        console.log('Manager')
        navigate(ROUTE_PATHS_MANAGER.DASHBOARD)
      } else {
        console.log('User')
        navigate(ROUTE_PATHS.ROOT)
      }
      notification.success({
        message: data.message,
        description: 'You have successfully logged in',
      })
    },
    onError: (error) => {
      notification.error({
        message: error.message,
        description: 'Your username or password is incorrect.',
      })
    },
  })

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logOut(),
    onSuccess: () => {
      localStorage.clear()
      window.location.reload()
    },
    onError: (error) => {
      notification.error({
        message: error.message,
        description: 'Logout Failed!',
      })
    },
  })

  return { user, loadingInitial, error, signInMutation, logoutMutation }
}
