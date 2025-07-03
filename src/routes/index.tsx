import { BrowserRouter } from 'react-router'
import { AuthRoutes } from './auth'

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
