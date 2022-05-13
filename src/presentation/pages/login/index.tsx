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

        <C.FormStatus />
      </S.Form>

      <C.Footer />
    </S.Login>
  )
}

export default Login
