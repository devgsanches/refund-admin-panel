import { Routes, Route } from 'react-router'
import { ConfirmedRefund } from '@/pages/refunds/confirmRefund'
import { NewRefund } from '@/pages/refunds/newRefund'
import { NotFound } from '@/pages/notFound'
import { Header } from '@/layouts/Header'

export function EmployeeRoutes() {
  const user = JSON.parse(localStorage.getItem('@user') || '{}')

  const name = user.name.split(' ')[0]
  const role = user.role

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
