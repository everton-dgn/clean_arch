import T from 'presentation/theme'
import styled from 'styled-components'

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
  text-align: center;
  font-size: ${T.fonts.sizes.xSmall};
  color: ${T.colors.error};
`
