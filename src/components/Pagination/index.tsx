import previousButton from '@/assets/icons/previousButton.svg'
import nextButton from '@/assets/icons/nextButton.svg'

interface PaginationProps {
  current: number
  total: number
  onPageChange: (page: number) => void
}

export function Pagination({ current, total, onPageChange }: PaginationProps) {
  const handlePageChange = (action: 'previous' | 'next') => {
    if (action === 'previous' && current > 1) {
      onPageChange(current - 1)
    } else if (action === 'next' && current < total) {
      onPageChange(current + 1)
    }
  }

  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-[#1F8459] w-8 h-8 rounded-lg flex items-center justify-center"
        onClick={() => handlePageChange('previous')}
        disabled={current <= 1}
      >
        <img src={previousButton} alt="Botão de voltar" />
      </button>
      <p className="text-[#4D5C57] text-sm font-medium">
        <span>{current}</span>/{total}
      </p>
      <button
        type="button"
        className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-[#1F8459] w-8 h-8 rounded-lg flex items-center justify-center"
        onClick={() => handlePageChange('next')}
        disabled={current >= total}
      >
        <img src={nextButton} alt="Botão de avançar" />
      </button>
    </div>
  )
}
