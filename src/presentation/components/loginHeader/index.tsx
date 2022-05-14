import { ReactComponent as Logo } from 'presentation/assets/images/logo.svg'
import * as S from './styles'

const LoginHeader = () => {
  return (
    <S.Header>
      <Logo title="Logo 4D" />
      <S.Title>4Dev - Enquetes para Programadores</S.Title>
    </S.Header>
  )
}

export default LoginHeader
