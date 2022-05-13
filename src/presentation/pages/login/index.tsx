import { ReactComponent as Logo } from 'presentation/assets/logo.svg'
import * as C from 'presentation/components'
import * as S from './styles'

const Login = () => {
  return (
    <S.Login>
      <S.Header>
        <Logo title="Logo 4D" />

        <S.Title>4Dev - Enquetes para Programadores</S.Title>
      </S.Header>

      <S.Form>
        <S.SubTitle>Login</S.SubTitle>

        <S.WrapperInputStatus>
          <S.Input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
          />
        </S.WrapperInputStatus>

        <S.WrapperInputStatus>
          <S.Input
            type="password"
            name="password"
            placeholder="Digite a sua senha"
          />
        </S.WrapperInputStatus>

        <S.Button type="submit">Entrar</S.Button>

        <S.WrapperLink>Criar conta</S.WrapperLink>

        <S.WrapperError>
          <C.Load />
          <S.MessageError>Erro</S.MessageError>
        </S.WrapperError>
      </S.Form>

      <S.Footer />
    </S.Login>
  )
}

export default Login
