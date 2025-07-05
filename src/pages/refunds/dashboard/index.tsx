import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'
import { Refund } from '@/components/Refund'
import { Search } from '@/components/Search'
import { db } from '@/utils/db'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function Dashboard() {
  const [search, setSearch] = useState<string>('')
  const [limitReached, setLimitReached] = useState(false)

  const navigate = useNavigate()

  const totalPages = 10

  // value returned by the api
  const perPage = 6

  const dbFiltered = search
    ? db.filter((refund) =>
        refund.name.toLowerCase().includes(search.toLowerCase())
      )
    : db.slice(0, perPage)

  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-110px)] flex justify-center">
      <Container className="max-h-[36rem] mt-10">
        <h1 className="font-bold text-xl">Solicitações</h1>
        <Search search={search} setSearch={setSearch} />
        <ul className="flex flex-col gap-4">
          {dbFiltered.map((refund) => {
            return (
              <Refund
                amount={refund.amount}
                name={refund.name}
                key={refund.id}
                category={refund.category}
                onClick={() => {
                  navigate(`/dashboard/${refund.id}/details`, {
                    state: {
                      fromDetails: true,
                    },
                  })
                }}
              />
            )
          })}
        </ul>
        <div className="flex justify-center mt-4">
          {totalPages > 1 ? (
            <Pagination
              current={1}
              total={totalPages}
              setLimitReached={setLimitReached}
            />
          ) : null}
        </div>
        {limitReached && (
          <p className="text-red-700 text-center text-xs pt-1.5 font-semibold">
            Você atingiu o limite.
          </p>
        )}
      </Container>
    </div>
  )
}
