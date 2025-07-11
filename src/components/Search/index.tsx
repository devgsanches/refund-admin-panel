import { useState } from 'react'
import searchIcon from '@/assets/icons/search.svg'

interface SearchProps {
  search: string
  setSearch: (search: string) => void
}

export function Search({ search, setSearch }: SearchProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearch(search.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mt-6 border-b border-[#CDD5D2] pb-8 mb-6"
    >
      <div className="flex items-center gap-3">
        <input
          type="text"
          id="search"
          name="search"
          autoComplete="off"
          className={`rounded-lg sm:w-[58.125rem] w-[20.5rem] px-4 h-12 border ${
            isFocused
              ? 'border-[#1F8459] ring-1 ring-[#1F8459]'
              : 'border-[#E4ECE9]'
          } focus:outline-none transition-colors`}
          placeholder="Pesquisar pelo nome do usuário..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          type="button"
          className="w-[3rem] h-[3rem] bg-[#1F8459] flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#1F8459]/90 transition-colors"
          onClick={handleSubmit}
          title={search.trim() ? 'Limpar busca' : 'Buscar'}
        >
          <img src={searchIcon} alt="Buscar" />
        </button>
      </div>

      {search.trim() && (
        <div className="flex items-center">
          <span className="text-[#4D5C57] text-xs">
            Buscando por: "{search.trim()}"
          </span>
        </div>
      )}
    </form>
  )
}
