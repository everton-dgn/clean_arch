import * as C from 'presentation/components'
import * as S from './styles'

const Login = () => {
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

        <S.Button type="submit">Entrar</S.Button>

        <S.WrapperLink>Criar conta</S.WrapperLink>

        <S.WrapperError>
          <C.Load />
          <S.MessageError>Erro</S.MessageError>
        </S.WrapperError>
      </S.Form>

      <C.Footer />
    </S.Login>
  )
}

export default Login
