import T from 'presentation/theme'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 4rem solid ${T.colors.primaryDark};
  background: ${T.colors.primary};
  align-items: center;

  svg {
    margin-top: 4rem;
  }
`

export const Title = styled.h1`
  color: ${T.colors.white};
  margin: 1.6rem 0 4rem;
`
