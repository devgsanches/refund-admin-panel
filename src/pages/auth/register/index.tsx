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

export type RegisterForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const [sucess, setSucess] = useState<boolean>(false)

  const schema = z
    .object({
      name: z.string().trim().min(3, {
        message: 'Nome deve conter pelo menos 3 caracteres.',
      }),
      email: z.string().email({
        message: 'E-mail inválido.',
      }),
      password: z.string().min(6, {
        message: 'Senha deve conter pelo menos 6 caracteres.',
      }),
      confirmPassword: z.string(),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem.',
      path: ['confirmPassword'],
    })

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: RegisterForm) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    const response = await api.post('users', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status !== 201) {
      return
    }

    setSucess(true)
    setTimeout(() => {
      navigate('/auth/login')
    }, 1500)
  }

  return (
    <div className="bg-[#E4ECE9] h-screen w-screen flex items-center justify-center">
      <Container className="flex flex-col items-center">
        <Logo className="pb-8" />
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="NOME"
            type="text"
            {...register('name')}
            placeholder="Digite seu nome"
            className="w-[24.875rem]"
          />
          {errors.name && (
            <p className="text-red-500 text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
          <Input
            label="E-MAIL"
            type="email"
            {...register('email')}
            placeholder="Digite seu e-mail"
            className="w-[24.875rem]"
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-semibold">
              {errors.email.message}
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
              {errors.password.message}
            </p>
          )}
          <Input
            label="CONFIRME A SENHA"
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirme sua senha"
            className="w-[24.875rem]"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs font-semibold">
              {errors.confirmPassword.message}
            </p>
          )}
          <Button
            className="bg-[#1F8459] transition-all duration-300 hover:bg-[#1F8459]/90 text-[#FFF]"
            type="submit"
          >
            Cadastrar
          </Button>
          {sucess && (
            <p className="text-green-500 text-xs font-semibold text-center">
              Cadastro realizado com sucesso!
            </p>
          )}
          <Link
            to={'/auth/login'}
            className="w-full rounded-lg cursor-pointer py-3.5 text-[#1F2523] text-sm font-semibold border-2 border-transparent transition-all duration-300 hover:border-[#CDD5D2] text-center"
          >
            Já tenho uma conta
          </Link>
        </Form>
      </Container>
    </div>
  )
}
