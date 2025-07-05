import { NotFound } from '@/pages/notFound'
import { Dashboard } from '@/pages/refunds/dashboard'
import { RefundDetails } from '@/pages/refunds/details'
import { Routes, Route } from 'react-router'

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id/details" element={<RefundDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
