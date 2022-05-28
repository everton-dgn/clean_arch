import { render, RenderResult } from '@testing-library/react'
import { ReactNode } from 'react'
import { MainProviders } from 'presentation/utils'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProviders>{children}</MainProviders>)
