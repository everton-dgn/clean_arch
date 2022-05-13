import T from 'presentation/theme'
import styled from 'styled-components'

export const WrapperInputStatus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: ${T.spacings.large};

  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: #f14848;
    width: 10px;
    height: 10px;
    border-radius: ${T.border.circle};
    margin-right: 0.8rem;
    right: 0;
    top: 16px;
  }
`

export const Input = styled.input`
  padding: 0 ${T.spacings.large};
  color: ${T.colors.black};

  &::placeholder {
    opacity: 0.5;
  }
`
