import { useEffect } from 'react'
import searchIcon from '@/assets/icons/search.svg'

interface setSearchProps {
  search: string
  setSearch: (search: string) => void
}

export function Search({ search, setSearch }: setSearchProps) {
  useEffect(() => {
    setSearch(search)
  }, [search, setSearch])

  return (
    <div className="flex gap-3 mt-6 border-b border-[#CDD5D2] pb-8 mb-6">
      <input
        type="text"
        id="search"
        name="search"
        autoComplete="off"
        className="rounded-lg w-[58.125rem] px-4 border border-[#E4ECE9] focus:outline-none focus:ring-1 focus:ring-[#000]"
        placeholder="Pesquisar pelo nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="w-[3rem] h-[3rem] bg-[#1F8459] flex items-center justify-center rounded-lg cursor-pointer"
        onClick={() => setSearch(search)}
      >
        <img src={searchIcon} alt="" />
      </button>
    </div>
  )
}
