import { screen } from '@testing-library/react'
import Default from '..'
import { renderWithProviders } from 'presentation/utils'

describe('[Template] Default', () => {
  it('should render a children', () => {
    renderWithProviders(<Default />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Template Default')
  })
})
