import { screen } from '@testing-library/react'
import Default from '..'
import { renderWithProviders } from 'presentation/utils'

describe('Default', () => {
  it('should render a children', () => {
    renderWithProviders(<Default />)
    const title = screen.getByRole('heading', { name: 'Template Default' })
    expect(title).toBeInTheDocument()
  })
})
