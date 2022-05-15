import T from 'presentation/theme'
import styled from 'styled-components'

export const WrapperInputStatus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: ${T.spacings.large};
  justify-content: center;
`

export const CircleFieldStatus = styled.span<{ isValidatedTheField: boolean }>`
  display: block;
  position: absolute;
  background-color: ${({ isValidatedTheField }) =>
    isValidatedTheField ? T.colors.success : T.colors.error};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: ${T.border.circle};
  right: 0.8rem;
`

export const Input = styled.input`
  padding: 0 ${T.spacings.large};
  color: ${T.colors.black};

  &::placeholder {
    opacity: 0.5;
  }
`
