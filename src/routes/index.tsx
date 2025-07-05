import { BrowserRouter, Navigate } from 'react-router'
import { AuthRoutes } from './auth'
import { EmployeeRoutes } from './employee'
import { ManagerRoutes } from './manager'
import { Loading } from '@/components/Loading'

const useAuth = () => {
  return {
    user: { role: 'employee' },
    isAuthenticated: true,
    isLoading: false,
  }
}

export default function Routes() {
  const { user, isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    )
  }

  const route =
    user.role === 'manager' ? (
      <ManagerRoutes />
    ) : user.role === 'employee' ? (
      <EmployeeRoutes />
    ) : (
      <Navigate to="/auth/login" />
    )

  return <BrowserRouter>{route}</BrowserRouter>
}
