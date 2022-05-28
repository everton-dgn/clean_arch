import T from 'presentation/theme'
import styled from 'styled-components'

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`

export const SubTitle = styled.h2`
  color: ${T.colors.black};
  font-size: ${T.fonts.sizes.Large};
  text-align: center;
  text-transform: uppercase;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 50rem;
  padding: 6rem 4rem;
  background-color: ${T.colors.white};
  border-radius: ${T.border.radius};
  box-shadow: 0 8px 32px 0 #bebdc94f;
`

export const Button = styled.button`
  margin-top: ${T.spacings.xxxLarge};

  &:disabled {
    font-weight: 500;
    color: ${T.colors.disabledColor};
    background-color: ${T.colors.disabledBackground};
    cursor: not-allowed;

    &:hover {
      opacity: 1;
    }
  }
`

export const WrapperLink = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  color: ${T.colors.primaryLight};
  margin-top: ${T.spacings.medium};
  cursor: pointer;
  font-weight: ${T.fonts.bold};

  &:hover {
    text-decoration: underline;
  }
`
