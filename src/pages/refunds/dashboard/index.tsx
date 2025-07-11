import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'
import { Refund } from '@/components/Refund'
import { Search } from '@/components/Search'

import { api } from '@/services/api'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export function Dashboard() {
  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [refunds, setRefunds] = useState<IRefundResponse[]>([])

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const PER_PAGE = 10

  useEffect(() => {
    async function fetchRefunds() {
      setTimeout(async () => {
        try {
          const response = await api.get<IRefundPaginationResponse>(
            `/refunds?name=${search.trim()}&page=${page}&perPage=${PER_PAGE}`
          )

          setRefunds(response.data.refunds)
          setTotalPages(response.data.pagination.totalPages)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }, 500)
    }

    fetchRefunds()
  }, [page, search])

  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-7.3125rem)] flex flex-col items-center">
      <Container className="max-h-[36rem] h-auto overflow-y-auto mt-10">
        <h1 className="font-bold text-xl">Solicitações</h1>
        <Search search={search} setSearch={setSearch} />

        {loading ? (
          <div className="flex justify-center py-8">
            <p className="text-[#4D5C57]">Só um instante..</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {refunds.length > 0 ? (
              refunds.map((refund: IRefundResponse) => {
                return (
                  <Refund
                    amount={Number(refund.amount)}
                    name={refund.user.name}
                    key={refund.id}
                    category={refund.category}
                    description={refund.name}
                    onClick={() => {
                      navigate(`/dashboard/${refund.id}/details`, {
                        state: {
                          fromDetails: true,
                        },
                      })
                    }}
                  />
                )
              })
            ) : (
              <div className="flex justify-center py-8">
                <p className="text-[#4D5C57]">
                  {search.trim()
                    ? 'Nenhum resultado encontrado'
                    : 'Nenhuma solicitação encontrada'}
                </p>
              </div>
            )}
          </ul>
        )}
      </Container>
      <div className="flex justify-center mt-6">
        <Pagination current={page} total={totalPages} onPageChange={setPage} />
      </div>
    </div>
  )
}
