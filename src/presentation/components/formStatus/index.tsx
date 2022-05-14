import * as C from 'presentation/components'
import * as S from './styles'
import { FormStatusProps } from './types'

const FormStatus = ({ formStatus }: FormStatusProps) => {
  return (
    <S.WrapperError>
      {formStatus.isLoading && <C.Load />}
      {formStatus.errorMessage && (
        <S.MessageError role="status">{formStatus.errorMessage}</S.MessageError>
      )}
    </S.WrapperError>
  )
}

export default FormStatus
