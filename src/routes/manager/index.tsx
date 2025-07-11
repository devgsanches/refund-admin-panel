import { useAuth } from '@/hooks/useAuth'
import { Header } from '@/layouts/Header'
import { NotFound } from '@/pages/notFound'
import { Dashboard } from '@/pages/refunds/dashboard'
import { RefundDetails } from '@/pages/refunds/details'
import { Routes, Route, Navigate } from 'react-router'

export function ManagerRoutes() {
  const { session } = useAuth()

  if (!session) {
    return <Navigate to="/auth/login" />
  }

  const name = session.user.name.split(' ')[0]
  const role = session.user.role

  return (
    <Routes>
      <Route element={<Header user={{ name, role }} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id/details" element={<RefundDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
