import { AuthLayout } from '@/layouts/Auth'
import { SignIn } from '@/pages/auth/login'
import { SignUp } from '@/pages/auth/register'
import { NotFound } from '@/pages/notFound'
import { Routes, Route } from 'react-router'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
