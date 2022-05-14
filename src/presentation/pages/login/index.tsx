import * as C from 'presentation/components'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type FormStatusType = {
  isLoading: boolean
  errorMessage: string
}

const Login = () => {
  const [formStatus, setFormStatus] = useState<FormStatusType>({
    isLoading: false,
    errorMessage: ''
  })

  useEffect(() => {
    formStatus.isLoading && setFormStatus({ ...formStatus })
  }, [formStatus])

  return (
    <S.Login>
      <C.LoginHeader />

      <S.Form>
        <S.SubTitle>Login</S.SubTitle>

        <C.Input type="email" name="email" placeholder="Digite o seu e-mail" />

        <C.Input
          type="password"
          name="password"
          placeholder="Digite a sua senha"
        />

        <S.Button type="submit" disabled={true}>
          Entrar
        </S.Button>

        <S.WrapperLink>Criar conta</S.WrapperLink>

        <C.FormStatus formStatus={formStatus} />
      </S.Form>

      <C.Footer />
    </S.Login>
  )
}

export default Login
