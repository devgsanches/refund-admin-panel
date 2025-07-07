import { Container } from '@/components/Container'
import { Pagination } from '@/components/Pagination'
import { Refund } from '@/components/Refund'
import { Search } from '@/components/Search'
import type { IRefund } from '@/interfaces/refund'
import { api } from '@/services/api'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export function Dashboard() {
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [refunds, setRefunds] = useState<IRefund[]>([])
  const [allRefunds, setAllRefunds] = useState<IRefund[]>([]) // Para busca local
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const token = localStorage.getItem('@token')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await api.get('/refunds', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            perPage,
            page: currentPage,
            search: search.trim() || undefined,
          },
        })

        const { refunds, pagination } = response.data

        if (!search.trim()) {
          setAllRefunds(refunds)
        }

        setTotalPages(pagination.totalPages)
        setPerPage(pagination.perPage)
        setRefunds(refunds)
      } catch (error) {
        console.error('Erro ao buscar reembolsos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token, search, perPage, currentPage])

  useEffect(() => {
    if (search.trim() && allRefunds.length > 0) {
      const filtered = allRefunds.filter((refund: IRefund) =>
        refund.user.name.toLowerCase().includes(search.toLowerCase().trim())
      )

      if (refunds.length === allRefunds.length) {
        setRefunds(filtered)
        setTotalPages(1)
      }
    }
  }, [search, allRefunds, refunds])

  useEffect(() => {
    if (search.trim()) {
      setCurrentPage(1)
    }
  }, [search])

  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-7.3125rem)] flex flex-col items-center">
      <Container className="max-h-[36rem] h-auto overflow-y-auto mt-10">
        <h1 className="font-bold text-xl">Solicitações</h1>
        <Search search={search} setSearch={setSearch} />

        {loading ? (
          <div className="flex justify-center py-8">
            <p className="text-[#4D5C57]">Carregando...</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {refunds.length > 0 ? (
              refunds.map((refund: IRefund) => {
                return (
                  <Refund
                    amount={Number(refund.amount)}
                    name={refund.user.name}
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
        {totalPages > 1 && !search.trim() && (
          <Pagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}
