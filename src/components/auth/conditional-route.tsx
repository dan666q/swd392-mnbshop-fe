import { useAuth } from '@/hooks/use-auth'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

export default function ConditionalRoute({ children, roles }: { children: React.ReactNode; roles?: number[] }) {
  const { user } = useAuth()
  if (user) {
    return <PrivateRoute roles={roles}>{children}</PrivateRoute>
  } else {
    return <PublicRoute>{children}</PublicRoute>
  }
}
