import { AuthLayout } from '@/layouts/Auth'
import { SignIn } from '@/pages/auth/login'
import { SignUp } from '@/pages/auth/register'
import { NotFound } from '@/pages/notFound'
import { Routes, Route, Navigate } from 'react-router'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/signin" replace />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
