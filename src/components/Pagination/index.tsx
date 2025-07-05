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
        className={`flex items-center justify-center cursor-pointer bg-[#1f8459] rounded-lg p-1 w-8 h-8 ${
          currentPage === 1 ? 'opacity-50' : ''
        }`}
        onClick={() => handlePreviousPage('previous')}
        disabled={currentPage === 1}
      >
        <img src={previousButton} alt="Botão de voltar" />
      </button>
      <p className="text-[#4D5C57] text-sm font-medium">
        <span>{currentPage}</span>/{total}
      </p>
      <button
        className={`flex items-center justify-center cursor-pointer bg-[#1f8459] rounded-lg p-1 w-8 h-8 ${
          currentPage === total ? 'opacity-50' : ''
        }`}
        onClick={() => handlePreviousPage('next')}
        disabled={currentPage === total}
      >
        <img src={nextButton} alt="Botão de avançar" />
      </button>
    </div>
  )
}
