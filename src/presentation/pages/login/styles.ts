import T from 'presentation/theme'
import styled from 'styled-components'

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`

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

export const Button = styled.button`
  margin-top: ${T.spacings.xxxLarge};
`

export const WrapperLink = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  color: ${T.colors.primary};
  margin-top: ${T.spacings.medium};
  cursor: pointer;
  font-weight: ${T.fonts.bold};

  &:hover {
    text-decoration: underline;
  }
`

export const WrapperError = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > div,
  & > p {
    margin-top: ${T.spacings.medium};
  }
`

export const MessageError = styled.p`
  width: 100%;
  font-size: ${T.fonts.sizes.xSmall};
  color: ${T.colors.error};
`

export const Footer = styled.footer`
  background: ${T.colors.primary};
  height: 4.8rem;
`
