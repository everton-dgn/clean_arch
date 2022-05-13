import { InputProps } from './types'
import * as S from './styles'

const Input = ({ ...props }: InputProps) => {
  return (
    <S.WrapperInputStatus>
      <S.Input {...props} />
    </S.WrapperInputStatus>
  )
}

export default Input
