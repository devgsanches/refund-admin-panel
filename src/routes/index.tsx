import { Loading } from '@/components/Loading'
import { AuthRoutes } from './auth'
import { EmployeeRoutes } from './employee'
import { ManagerRoutes } from './manager'
import { useAuth } from '@/hooks/useAuth'

export default function Routes() {
  const { session, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  const LOCAL_STORAGE_KEY = '@refund'

  if (session) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(session.user)
    )
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, session.token)
  }

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

  return <Route />
}
