import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

import fileIcon from '@/assets/icons/file.svg'

export function RefundDetails() {
  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-110px)] flex  justify-center pt-6.5">
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
            className="w-[27rem]"
          />
          <div className="flex items-center gap-4">
            <Select />
            <Input
              label="Valor"
              type="number"
              name="value"
              className="w-[9.625rem] px-4"
              placeholder="0,00"
            />
          </div>

          <div className="flex justify-center gap-2">
            <div className="flex gap-1.5">
              <img src={fileIcon} alt="File Icon" />
              <Button className="text-[#1F8459] font-semibold">
                {' '}
                Abrir comprovante
              </Button>
            </div>
          </div>

          <Button className="bg-[#1F8459] text-white transition-all duration-300 hover:bg-[#1F8459]/90">
            Voltar
          </Button>
        </Form>
      </Container>
    </div>
  )
}
