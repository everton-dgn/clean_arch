import * as C from 'presentation/components'
import * as S from './styles'

const FormStatus = () => {
  return (
    <S.WrapperError>
      <C.Load />
      <S.MessageError>Erro</S.MessageError>
    </S.WrapperError>
  )
}

export default FormStatus
