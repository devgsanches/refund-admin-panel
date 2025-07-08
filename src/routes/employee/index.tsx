import { Routes, Route, Navigate } from 'react-router'
import { ConfirmedRefund } from '@/pages/refunds/confirmRefund'
import { NewRefund } from '@/pages/refunds/newRefund'
import { NotFound } from '@/pages/notFound'
import { Header } from '@/layouts/Header'
import { useAuth } from '@/hooks/useAuth'

export function EmployeeRoutes() {
  const { session } = useAuth()

  if (!session) {
    return <Navigate to="/auth/login" />
  }

  const name = session?.user?.name.split(' ')[0]
  const role = session?.user?.role

  return (
    <Routes>
      <Route element={<Header user={{ name, role }} />}>
        <Route path="/refunds/new" element={<NewRefund />} />
        <Route path="/refunds/confirmed" element={<ConfirmedRefund />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
