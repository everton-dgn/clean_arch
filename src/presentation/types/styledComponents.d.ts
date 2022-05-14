import T from 'presentation/theme'

type Theme = typeof T

declare module 'styled-components' {
  export type DefaultTheme = {} & Theme
}
