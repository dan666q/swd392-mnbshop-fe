import { useAuth } from '@/hooks/use-auth'
import { TOKEN_KEY } from '@/lib/axios'
import { ROUTE_PATHS } from '@/router'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()

  if (user) {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) return <Navigate to={ROUTE_PATHS.ROOT} replace />
  }
  return children
}
