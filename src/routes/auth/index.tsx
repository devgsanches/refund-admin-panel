import { AuthLayout } from '@/layouts/Auth'
import { SignIn } from '@/pages/auth/login'
import { SignUp } from '@/pages/auth/register'
import { NotFound } from '@/pages/notFound'
import { Routes, Route, Navigate } from 'react-router-dom'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
