import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

import fileIcon from '@/assets/icons/file.svg'
import { Navigate, useLocation, useParams } from 'react-router'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'

export function RefundDetails() {
  const location = useLocation()
  const { id } = useParams()

  const [refund, setRefund] = useState<IRefundItem>({
    id: '',
    name: '',
    amount: 0,
    category: 'accommodation' as ICategoryEnum,
    filepath: '',
  })

  useEffect(() => {
    const fetchRefunds = async () => {
      const response = await api.get(`/refunds/${id}`)

      const refund = response.data

      setRefund(refund)
    }

    fetchRefunds()
  }, [id])

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
      <Container className="max-h-[30.125rem] sm:w-auto w-[24.5rem] px-6">
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
            className="sm:w-[27rem] w-[20.5rem]"
            disabled
            value={refund?.name}
          />
          <div className="flex items-center sm:gap-4 gap-2">
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
              className="sm:w-[18rem] w-[14rem] border border-[#CDD5D2] rounded-lg px-2 py-2.5"
            />
            <Input
              label="Valor"
              type="number"
              name="value"
              className="sm:w-[8rem] w-[6rem] px-4"
              placeholder="0,00"
              disabled
              value={Number(refund?.amount).toFixed(2)}
            />
          </div>

          <div className="flex justify-center gap-2">
            <div className="flex gap-1.5">
              <img src={fileIcon} alt="File Icon" />
              <Button className="text-[#1F8459] font-semibold" type="button">
                <a
                  href={`https://refund-api-58aj.onrender.com/uploads/${refund.filepath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir comprovante
                </a>
              </Button>
            </div>
          </div>

          <Button
            className="bg-[#1F8459] text-white transition-all duration-300 hover:bg-[#1F8459]/90"
            onClick={() => {
              window.location.href = '/dashboard'
            }}
          >
            Voltar
          </Button>
        </Form>
      </Container>
    </div>
  )
}
