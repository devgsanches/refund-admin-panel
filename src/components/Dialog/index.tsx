import { MessageSquareWarning, X } from 'lucide-react'

interface DialogProps {
  title: string
  description: string
  setLimitReached: (limitReached: boolean) => void
}

export function Dialog({ title, description, setLimitReached }: DialogProps) {
  const handleCloseDialog = () => {
    setLimitReached(false)
  }

  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-110px)] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#1f8459] rounded-lg flex flex-col gap-6 items-center w-[20rem] h-[16rem]">
        <button
          className=" absolute right-2.5 top-4 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer hover:bg-red-500 transition-all duration-300"
          onClick={handleCloseDialog}
        >
          <X color="#FFFFFF" size={14} />
        </button>
        <div className="flex flex-col pt-12 items-center gap-2.5">
          <h1 className="text-white text-2xl font-bold">{title}</h1>
          <span>
            <MessageSquareWarning color="#ffffff" size={24} />
          </span>
        </div>
        <p className="text-white text-sm text-center pt-5 px-16.5">
          {description}
        </p>
      </div>
    </div>
  )
}
