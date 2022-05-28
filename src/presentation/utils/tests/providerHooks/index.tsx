import { MainProviders } from 'presentation/utils'
import { WrapperProps } from './types'

export const wrapper = ({ children }: WrapperProps) => (
  <MainProviders>{children}</MainProviders>
)
