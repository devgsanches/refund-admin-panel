import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import uploadIcon from '@/assets/icons/UPLOAD.svg'
import { Button } from '@/components/Button'

import { api } from '@/services/api'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Nome deve conter pelo menos 3 caracteres.' }),
  category: z.string().min(1, { message: 'Categoria é obrigatória.' }),
  value: z
    .string()
    .min(1, { message: 'Valor é obrigatório.' })
    .refine(
      val => {
        const numericValue = Number(val.replace(',', '.'))
        return !isNaN(numericValue) && numericValue > 0
      },
      {
        message: 'Valor deve ser um número positivo.',
      }
    ),
  file: z.instanceof(File, {
    message: 'Arquivo é obrigatório.',
  }),
})

export function NewRefund() {
  const [selectedFileName, setSelectedFileName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      let category = ''

      switch (data.category) {
        case 'Alimentação':
          category = 'food'
          break
        case 'Transporte':
          category = 'transport'
          break
        case 'Hospedagem':
          category = 'accommodation'
          break
        case 'Serviços':
          category = 'services'
          break
        default:
          category = 'others'
          break
      }

      // Upload file
      const fileUploadForm = new FormData()
      fileUploadForm.append('file', data.file)

      // Upload file to server *com retorno do filename
      const response = await api.post('/uploads', fileUploadForm)

      if (data) {
        const refund: IRefundItem = {
          name: data.name,
          category: category as ICategoryEnum,
          amount: Number(data.value.replace(',', '.')),
          filepath: response.data.filename,
        }
        setLoading(true)

        await api.post('/refunds', refund)
        navigate('/refunds/confirmed', {
          state: {
            fromSubmit: true,
          },
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#E4ECE9] h-screen sm:h-[calc(100vh-7.3125rem)] flex justify-center pt-8.5">
      <Container
        className={`${
          errors.category || errors.file || errors.value || errors.name
            ? 'max-h-[35rem]'
            : 'max-h-[31.5rem]'
        }`}
      >
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="text-[#1F2523] text-xl font-bold">
            Solicitação de reembolso
          </h1>
          <span className="text-[#4D5C57] text-sm">
            Dados da despesa para solicitar reembolso.
          </span>
        </div>
        <Form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1.5">
            <Input
              label="NOME DA SOLICITAÇÃO"
              type="text"
              className="w-[27rem]"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-red-500 text-xs font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <Select
                label="Categoria"
                options={[
                  'Alimentação',
                  'Transporte',
                  'Hospedagem',
                  'Serviços',
                  'Outros',
                ]}
                {...register('category')}
              />
              {errors.category && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Input
                label="Valor"
                type="text"
                className="w-[9.625rem] px-4"
                placeholder="0,00"
                {...register('value')}
              />
              {errors.value && (
                <p className="text-red-500 text-xs font-semibold w-[9.625rem]">
                  {errors.value.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="relative w-[27rem] flex flex-col gap-2">
              <label className="text-[#4D5C57] text-xs">COMPROVANTE</label>
              <input
                type="file"
                accept="image/*,.pdf,.doc,.docx"
                onChange={e => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setSelectedFileName(file.name)
                    setValue('file', file)
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              <div className="h-[3rem] rounded-lg border border-[#CDD5D2] pl-2.5 flex items-center justify-between bg-white">
                <span className="text-sm text-[#4D5C57] font-medium">
                  {selectedFileName || 'Selecionar arquivo'}
                </span>
                <div className="bg-[#1F8459] w-[3rem] h-[3rem] rounded-md flex items-center justify-center">
                  <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6" />
                </div>
              </div>
            </div>
            {errors.file && (
              <p className="text-red-500 text-xs font-semibold">
                {errors.file.message}
              </p>
            )}
          </div>
          <Button
            className={`bg-[#1F8459] text-white ${
              loading ? 'opacity-50 cursor-progress' : ''
            }`}
            disabled={loading}
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  )
}
