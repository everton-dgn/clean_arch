import { FocusEvent } from 'react'
import { InputProps } from './types'
import * as S from './styles'

const Input = ({
  titleCircleFieldStatus,
  isValidatedTheField,
  ...props
}: InputProps) => {
  const enableInput = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.readOnly = false
  }

  return (
    <S.WrapperInputStatus>
      <S.Input {...props} readOnly onFocus={enableInput} />
      <S.CircleFieldStatus
        title={titleCircleFieldStatus}
        isValidatedTheField={isValidatedTheField}
      />
    </S.WrapperInputStatus>
  )
}

export default Input
