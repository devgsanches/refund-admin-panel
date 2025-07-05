import { Frown } from 'lucide-react'

export function NotFound() {
  return (
    <div className="h-screen w-screen bg-[#E4ECE9] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <p className="text-[#1F8459] text-5xl font-bold">404 Error</p>
        <span>
          <Frown color="#1F8459" size={40} />
        </span>
      </div>
    </div>
  )
}
