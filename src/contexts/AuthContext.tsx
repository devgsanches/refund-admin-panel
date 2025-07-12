import { createContext } from 'react'

// type
type AuthContext = {
  session: null | UserAPIResponse
  save: (data: UserAPIResponse) => void
  signOut: () => void
  isLoading: boolean
}

export const AuthContext = createContext<AuthContext>({
  session: null,
  save: () => {
    throw new Error('save() called outside of AuthProvider')
  },
  signOut: () => {
    throw new Error('signOut() called outside of AuthProvider')
  },
  isLoading: false,
})
