import { AuthContext } from '@/contexts/AuthContext'
import { useEffect, useState } from 'react'
import { api } from '@/services/api'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<UserAPIResponse | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const LOCAL_STORAGE_KEY = '@refund'

  function save(data: UserAPIResponse) {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
    setSession(data)

    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
  }

  function signOut() {
    setSession(null)
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`)
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)

    window.location.assign('/auth/login')
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setSession({
        token,
        user: JSON.parse(user),
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider value={{ session, save, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
