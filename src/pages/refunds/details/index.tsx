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

  async function handler() {
    const response = await api.get(`/uploads/${refund.filepath}`, {
      responseType: 'arraybuffer', // Pega os bytes reais
    })

    // Cria um Blob a partir do arraybuffer
    const blob = new Blob([response.data], { type: 'image/png' })

    // Cria uma URL temporária para o Blob
    const blobUrl = URL.createObjectURL(blob)

    // Abre a imagem em nova aba
    window.open(blobUrl, '_blank')
  }

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
              <Button
                className="text-[#1F8459] font-semibold"
                type="button"
                onClick={handler}
              >
                Abrir comprovante
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
