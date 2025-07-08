import { AuthRoutes } from './auth'
import { EmployeeRoutes } from './employee'
import { ManagerRoutes } from './manager'
import { useAuth } from '@/hooks/useAuth'

export default function Routes() {
  const { session } = useAuth()

  function Route() {
    switch (session?.user?.role) {
      case 'employee':
        return <EmployeeRoutes />
      case 'manager':
        return <ManagerRoutes />
      default:
        return <AuthRoutes />
    }
  }

  if (!session) {
    return <AuthRoutes />
  }

  return <Route />
}
