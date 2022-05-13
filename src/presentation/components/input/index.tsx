import { FocusEvent } from 'react'
import { InputProps } from './types'
import * as S from './styles'

const Input = ({ ...props }: InputProps) => {
  const enableInput = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  return (
    <S.WrapperInputStatus>
      <S.Input {...props} readOnly onFocus={enableInput} />
    </S.WrapperInputStatus>
  )
}

export default Input
