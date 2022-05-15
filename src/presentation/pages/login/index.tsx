import * as C from 'presentation/components'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { FormErrorType, FormStatusType } from './types'

const Login = () => {
  const [errorState, setErrorState] = useState<FormErrorType>({
    email: 'Campo de e-mail obrigatório',
    password: 'Campo de senha obrigatório',
    main: ''
  })
  const [formStatus, setFormStatus] = useState<FormStatusType>({
    isLoading: false
  })

  useEffect(() => {
    !errorState && setErrorState(errorState)
    !formStatus && setFormStatus(formStatus)
  }, [errorState, formStatus])

  return (
    <S.Login>
      <C.LoginHeader />

      <S.Form>
        <S.SubTitle>Login</S.SubTitle>

        <C.Input
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          titleCircleFieldStatus={errorState.email}
          isValidatedTheField={false}
        />

        <C.Input
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          titleCircleFieldStatus={errorState.password}
          isValidatedTheField={false}
        />

        <S.Button type="submit" disabled={true}>
          Entrar
        </S.Button>

        <S.WrapperLink>Criar conta</S.WrapperLink>

        <C.FormStatus
          formStatus={{
            ...errorState,
            ...formStatus
          }}
        />
      </S.Form>

      <C.Footer />
    </S.Login>
  )
}

export default Login
