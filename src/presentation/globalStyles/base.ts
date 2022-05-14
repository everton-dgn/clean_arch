import T from 'presentation/theme'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    font-family: ${T.fonts.family};
    font-size: ${T.fonts.sizes.medium};
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #root {
    background-color: ${T.colors.background};
    color: ${T.colors.black};
  }

  #root,
  body,
  input,
  select,
  textarea,
  button {
    font: ${T.fonts.normal} ${T.fonts.sizes.medium} Inter, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${T.border.radius};
    color: ${T.colors.white};
    background-color: ${T.colors.primary};
    line-height: 6rem;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${T.colors.white}, 0 0 0 0.4rem ${T.colors.black};
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  input[type="password"],
  input[type="email"] {
    width: 100%;
    border: none;
    box-shadow: 0 0 0 0.1rem ${T.colors.primaryLight};
    line-height: 4rem;
    border-radius: 0.4rem;

    &:focus {
      box-shadow: 0 0 0 0.2rem ${T.colors.black};
    }
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.6rem !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.primary};
    border-radius: 2rem;
    border: 0.3rem solid ${T.colors.white};
  }

  :root {
    scrollbar-color: ${T.colors.primary} ${T.colors.white} !important;
    scrollbar-width: 1.6rem !important;
  }
`
