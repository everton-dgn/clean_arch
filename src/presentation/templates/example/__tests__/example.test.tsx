import { screen } from '@testing-library/react'
import Example from '..'
import { renderWithProviders } from 'presentation/utils'

describe('Example', () => {
  it('should render a children', () => {
    renderWithProviders(<Example />)
    const title = screen.getByRole('heading', { name: 'Template Example' })
    expect(title).toBeInTheDocument()
  })
})
