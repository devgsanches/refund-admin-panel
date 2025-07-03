import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './pages/auth/login/index.tsx'
import { Register } from './pages/auth/register/index.tsx'
import { NotFound } from './pages/notFound/index.tsx'
import { Header } from './layouts/Header/index.tsx'
import { Dashboard } from './pages/refunds/dashboard/index.tsx'
import { NewRefund } from './pages/refunds/newRefund/index.tsx'
import { ConfirmRefund } from './pages/refunds/confirmRefund/index.tsx'
import { RefundDetails } from './pages/refunds/details/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<Header user={{ name: 'Manager' }} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="refunds/new" element={<NewRefund />} />
          <Route path="refunds/confirm" element={<ConfirmRefund />} />
          <Route path="refunds/details" element={<RefundDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
