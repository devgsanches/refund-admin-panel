import { Loading } from '@/components/Loading'
import { AuthRoutes } from './auth'
import { EmployeeRoutes } from './employee'
import { ManagerRoutes } from './manager'
import { useAuth } from '@/hooks/useAuth'
import { useLocation, Navigate } from 'react-router'

export default function Routes() {
  const { session, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  // Se o usuário está logado mas tentando acessar rotas de auth,
  // redireciona para a rota apropriada baseada no papel
  const isAuthRoute = location.pathname.startsWith('/auth')

  function Route() {
    if (session && isAuthRoute) {
      // Se está logado e tentando acessar auth, redireciona baseado no papel
      switch (session.user.role) {
        case 'employee':
          return <Navigate to="/refunds/new" replace />
        case 'manager':
          return <Navigate to="/dashboard" replace />
        default:
          return <AuthRoutes />
      }
    }

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
