import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

import fileIcon from '@/assets/icons/file.svg'
import { Navigate, useLocation, useParams, useNavigate } from 'react-router'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import type { IRefund } from '@/interfaces/refund'

export function RefundDetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()

  const [refund, setRefund] = useState<IRefund>({
    id: '',
    name: '',
    amount: '0',
    category: '',
    createdAt: '',
    updatedAt: '',
    filePath: '',
    user: {
      name: '',
    },
    userId: '',
  })

  const token = localStorage.getItem('@token')

  useEffect(() => {
    const fetchData = async () => {
      const db = await api.get('/refunds', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const { refunds } = db.data
      const foundRefund = refunds.find((refund: IRefund) => refund.id === id)

      if (foundRefund) {
        setRefund(foundRefund)
      }
    }

    fetchData()
  }, [id, token])

  if (!location.state?.fromDetails) {
    return <Navigate to="/dashboard" />
  }

  const categoryTranslate =
    refund?.category === 'transport'
      ? 'Transporte'
      : refund?.category === 'accommodation'
      ? 'Hospedagem'
      : refund?.category === 'services'
      ? 'Serviços'
      : refund?.category === 'food'
      ? 'Alimentação'
      : 'Outros'

  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-7.3125rem)] flex  justify-center pt-6.5">
      <Container className="max-h-[30.125rem]">
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="text-[#1F2523] text-xl font-bold">
            Solicitação de reembolso
          </h1>
          <span className="text-[#4D5C57] text-sm">
            Dados da despesa para solicitar reembolso.
          </span>
        </div>
        <Form className="flex flex-col gap-6">
          <Input
            label="NOME DA SOLICITAÇÃO"
            type="text"
            name="name"
            id="name"
            className="w-[27rem]"
            disabled
            value={refund?.name}
          />
          <div className="flex items-center gap-4">
            <Select
              label="Categoria"
              options={[
                'Alimentação',
                'Transporte',
                'Hospedagem',
                'Serviços',
                'Outros',
              ]}
              disabled
              value={categoryTranslate}
            />
            <Input
              label="Valor"
              type="number"
              name="value"
              className="w-[9.625rem] px-4"
              placeholder="0,00"
              disabled
              value={Number(refund?.amount).toFixed(2)}
            />
          </div>

          <div className="flex justify-center gap-2">
            <div className="flex gap-1.5">
              <img src={fileIcon} alt="File Icon" />
              <Button className="text-[#1F8459] font-semibold" type="button">
                Abrir comprovante
              </Button>
            </div>
          </div>

          <Button
            className="bg-[#1F8459] text-white transition-all duration-300 hover:bg-[#1F8459]/90"
            onClick={() => {
              navigate('/dashboard')
            }}
          >
            Voltar
          </Button>
        </Form>
      </Container>
    </div>
  )
}
