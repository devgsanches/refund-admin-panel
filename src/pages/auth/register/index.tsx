import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type RegisterForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const schema = z
    .object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem.',
      path: ['confirmPassword'],
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: RegisterForm) => {
    console.log(data)
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
            <p className="text-red-500 text-xs font-semibold">Nome inválido.</p>
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
          <Input
            label="CONFIRME A SENHA"
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirme sua senha"
            className="w-[24.875rem]"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs font-semibold">
              As senhas não coincidem.
            </p>
          )}
          <Button
            className="bg-[#1F8459] transition-all duration-300 hover:bg-[#1F8459]/90 text-[#FFF]"
            type="submit"
          >
            Cadastrar
          </Button>
          <Button className="text-[#1F2523] text-sm font-semibold border-2 border-transparent transition-all duration-300 hover:border-[#CDD5D2]">
            Já tenho uma conta
          </Button>
        </Form>
      </Container>
    </div>
  )
}
