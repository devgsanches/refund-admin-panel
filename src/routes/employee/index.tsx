import { Routes, Route } from 'react-router'
import { ConfirmedRefund } from '@/pages/refunds/confirmRefund'
import { NewRefund } from '@/pages/refunds/newRefund'
import { NotFound } from '@/pages/notFound'

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/refunds/new" element={<NewRefund />} />
      <Route path="/refunds/confirmed" element={<ConfirmedRefund />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
