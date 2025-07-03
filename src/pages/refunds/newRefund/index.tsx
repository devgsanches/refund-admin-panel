import { Container } from '@/components/Container'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

import uploadIcon from '@/assets/icons/UPLOAD.svg'
import { Button } from '@/components/Button'

export function NewRefund() {
  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-110px)] flex  justify-center pt-6.5">
      <Container className="max-h-[31.5rem]">
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

          <div className="flex flex-col gap-2">
            <label className="text-[#4D5C57] text-xs">COMPROVANTE</label>
            <div className="relative w-[27rem]">
              <input
                type="file"
                name="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="h-[3rem] rounded-lg border border-[#CDD5D2] pl-2.5 flex items-center justify-between bg-white">
                <span className="text-sm text-[#4D5C57] font-medium">
                  Selecionar arquivo
                </span>
                <div className="bg-[#1F8459] w-[3rem] h-[3rem] rounded-md flex items-center justify-center">
                  <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-[#1F8459] text-white">Enviar</Button>
        </Form>
      </Container>
    </div>
  )
}
