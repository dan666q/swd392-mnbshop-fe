import { useAuth } from '@/hooks/use-auth'
import apiInstance, { REFRESH_TOKEN_KEY, TOKEN_KEY, logOutApp } from '@/lib/axios'
import { ROUTE_PATHS } from '@/router'
import authApi from '@/services/auth'
import { DecodedToken } from '@/types'
import { jwtDecode } from 'jwt-decode'
import { ReactNode, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function PrivateRoute({ children, roles }: { children: ReactNode; roles: number[] }) {
  const { user } = useAuth()
  console.log(user)
  const navigate = useNavigate()

  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
  const tokenKey = localStorage.getItem(TOKEN_KEY)

  if (!refreshToken || !tokenKey) {
    logOutApp()
    navigate(ROUTE_PATHS.LOGIN)
  }

  useEffect(() => {
    if (refreshToken && tokenKey) {
      const decodedToken = jwtDecode<DecodedToken>(tokenKey)
      const expTime: Date = new Date(decodedToken.exp * 1000)
      const checkTokenExpiration = setInterval(() => {
        const currentTimePlusOneMinute: Date = new Date(Date.now() + 60 * 1000) // Add 60 seconds (1 minute) to the current time
        if (currentTimePlusOneMinute >= expTime) {
          // The token will expire within the next minute, so refresh it
          // eslint-disable-next-line no-extra-semi
          ;(async () => {
            const resp = await authApi.refreshToken(refreshToken || '')
            if (!resp) {
              logOutApp()
              return false
            }
            const accessToken = resp.accessToken
            const newRefreshToken = resp.refreshToken
            localStorage.setItem(TOKEN_KEY, accessToken)
            localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken)
            apiInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
          })()
        }
      }, 1000 * 60) // Check every minute
      return () => clearInterval(checkTokenExpiration) // Clear interval on component unmount
    }
  }, [refreshToken, tokenKey])

  if (!user) {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) {
      return <Navigate to={ROUTE_PATHS.LOGIN} replace />
    }
  }
  if (roles && user && !roles.includes(user.data.roleId)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}
