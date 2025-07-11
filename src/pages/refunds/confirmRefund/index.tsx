import { Container } from '@/components/Container'

import checkIcon from '@/assets/icons/check.svg'
import { Button } from '@/components/Button'
import { Navigate, useLocation, useNavigate } from 'react-router'

export function ConfirmedRefund() {
  const location = useLocation()
  const navigate = useNavigate()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/refunds/new" />
  }

  return (
    <div className="bg-[#E4ECE9] h-[calc(100vh-7.3125rem)] flex  justify-center pt-6.5">
      <Container className="max-h-[24.25rem] sm:w-auto w-[24.5rem]">
        <div className="flex items-center flex-col gap-6">
          <h1 className="text-[#1F8459] text-2xl font-bold">
            Solicitação enviada!
          </h1>
          <img src={checkIcon} alt="Check Icon" />
          <p className="text-[#4D5C57] text-sm max-w-[27rem] text-center">
            Agora é apenas aguardar! Sua solicitação será analisada e, em breve,
            o setor financeiro irá entrar em contato com você.
          </p>
        </div>
        <Button
          className="bg-[#1F8459] text-white mt-10 transition-all duration-300 hover:bg-[#1F8459]/90"
          onClick={() => navigate('/refunds/new')}
        >
          Nova solicitação
        </Button>
      </Container>
    </div>
  )
}
