import { Loader } from 'lucide-react'

export function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#E4ECE9]">
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <p className="text-2xl font-bold">Carregando..</p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500">Aguarde um momento..</p>
          <Loader size={18} />
        </div>
      </div>
    </div>
  )
}
