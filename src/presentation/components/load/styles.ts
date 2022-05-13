import T from 'presentation/theme'
import styled from 'styled-components'

export const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 1.3rem;
  margin: 0 auto;

  & span {
    position: absolute;
    top: 0;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: ${T.colors.primaryLight};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 0.8rem;
      animation: lds-ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 0.8rem;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 3.2rem;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 5.6rem;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(2.4rem, 0);
    }
  }
`
