import logo from '@/assets/logo.svg'
import signOutIcon from '@/assets/icons/signOut.svg'
import { Outlet, useNavigate } from 'react-router'

import hiIcon from '@/assets/icons/hi.svg'
import { useState } from 'react'
import { Loading } from '@/components/Loading'

export function Header({
  user,
}: {
  user: {
    name: string
    role: string
  }
}) {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function signOut() {
    setLoading(true)
    setTimeout(() => {
      localStorage.removeItem('@token')
      navigate('/auth/login')
      location.reload()
      setLoading(false)
    }, 500)
  }

  return (
    <div className="w-screen">
      {loading && <Loading />}
      {!loading && (
        <>
          <header className="w-screen px-[5.625rem] py-[2.375rem] flex justify-between items-center bg-[#E8ECE9] border-b border-[#C3C3C3]">
            <img src={logo} alt="Refund Logo" />
            <div className="flex gap-80 items-center justify-center">
              <div className="flex flex-col">
                <p className="text-[#4D5C57] text-sm font-semibold flex items-center gap-2">
                  Olá,
                  <span className="flex items-center gap-2 text-[#1F8459]">
                    {user.name}!
                    <img
                      src={hiIcon}
                      alt="Hi Emoticon"
                      className="w-6 h-6  rounded-full"
                    />
                  </span>
                </p>
                <span className="text-[#4D5C57] text-xs font-semibold text-center">
                  {user.role}
                </span>
              </div>

              <button className="cursor-pointer" onClick={signOut}>
                <img src={signOutIcon} alt="Sign Out" />
              </button>
            </div>
          </header>
          <Outlet />
        </>
      )}
    </div>
  )
}
