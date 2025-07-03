import previousButton from '@/assets/icons/previousButton.svg'
import nextButton from '@/assets/icons/nextButton.svg'
import { useState } from 'react'

interface PaginationProps {
  current: number
  total: number
  setLimitReached: (limitReached: boolean) => void
}

export function Pagination({
  current,
  total,
  setLimitReached,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(current)

  const handlePreviousPage = (action: 'previous' | 'next') => {
    switch (action) {
      case 'previous':
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1)
          setLimitReached(false)
        } else {
          return currentPage
        }
        break

      case 'next':
        if (currentPage < total) {
          setCurrentPage(currentPage + 1)
        } else {
          setLimitReached(true)
        }
        break

      default:
        return currentPage
    }
  }

  return (
    <div className="flex items-center gap-2.5">
      <button
        className={`cursor-pointer hover:bg-[#1f8459] rounded-full p-1 transition-all duration-300`}
        onClick={() => handlePreviousPage('previous')}
      >
        <img src={previousButton} alt="Botão de voltar" />
      </button>
      <p className="text-[#4D5C57] text-sm font-medium">
        <span>{currentPage}</span>/{total}
      </p>
      <button
        className={`cursor-pointer hover:bg-[#1f8459] rounded-full p-1 transition-all duration-300`}
        onClick={() => handlePreviousPage('next')}
      >
        <img src={nextButton} alt="Botão de avançar" />
      </button>
    </div>
  )
}
