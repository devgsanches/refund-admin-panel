import { BrowserRouter, Navigate } from 'react-router'
import { AuthRoutes } from './auth'
import { EmployeeRoutes } from './employee'
import { ManagerRoutes } from './manager'

export default function Routes() {
  const user = JSON.parse(localStorage.getItem('@user') || '{}')
  const token = localStorage.getItem('@token')

  if (!token || !user) {
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
