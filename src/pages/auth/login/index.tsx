import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router'
import { api } from '@/services/api'
import { useState } from 'react'
import { Loading } from '@/components/Loading'

export type LoginForm = {
  email: string
  password: string
}

export function SignIn() {
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: LoginForm) => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await api.post('/sessions', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const { token, user } = response.data

        localStorage.setItem('@token', token)
        localStorage.setItem('@user', JSON.stringify(user))

        if (user.role === 'employee') {
          navigate('/refunds/new')
        }

        if (user.role === 'manager') {
          navigate('/dashboard')
        }
        location.reload()
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div className="bg-[#E4ECE9] h-screen w-screen flex items-center justify-center">
      {loading && <Loading />}
      {!loading && (
        <Container className="flex flex-col items-center">
          <Logo className="pb-8" />
          <Form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="E-MAIL"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-[24.875rem]"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-semibold">
                E-mail inválido.
              </p>
            )}
            <Input
              label="SENHA"
              type="password"
              {...register('password')}
              placeholder="Digite sua senha"
              className="w-[24.875rem]"
            />
            {errors.password && (
              <p className="text-red-500 text-xs font-semibold">
                Senha inválida.
              </p>
            )}
            <Button className="bg-[#1F8459] transition-all duration-300 hover:bg-[#1F8459]/90 text-[#FFF]">
              Entrar
            </Button>
            {error && (
              <p className="text-red-500 text-xs font-semibold text-center">
                E-mail ou senha inválidos.
              </p>
            )}
            <Link
              to={'/auth/register'}
              className="w-full rounded-lg cursor-pointer py-3.5 text-[#1F2523] text-sm font-semibold border-2 border-transparent transition-all duration-300 hover:border-[#CDD5D2] text-center"
            >
              Criar conta
            </Link>
          </Form>
        </Container>
      )}
    </div>
  )
}
