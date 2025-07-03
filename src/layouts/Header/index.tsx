import logo from '@/assets/logo.svg'
import signOutIcon from '@/assets/icons/signOut.svg'
import { Outlet } from 'react-router'

export function Header({
  user,
}: {
  user: {
    name: string
  }
}) {
  return (
    <div>
      <header className="px-[5.625rem] py-[2.375rem] flex justify-between items-center bg-[#E4ECE9]">
        <img src={logo} alt="Refund Logo" />
        <div className="flex gap-3 items-center">
          <p className="text-[#4D5C57] text-sm font-semibold">
            Olá, <span>{user.name}</span>
          </p>
          <button className="cursor-pointer">
            <img src={signOutIcon} alt="Sign Out" />
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
