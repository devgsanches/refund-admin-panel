import { AuthContext } from '@/contexts/AuthContext'

import { useState } from 'react'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<UserAPIResponse | null>(null)

  function save(data: UserAPIResponse) {
    setSession(data)
  }

  function signOut() {
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, save, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
