import { screen } from '@testing-library/react'
import { renderWithProviders } from 'presentation/utils'
import CustomError from '..'

describe('CustomError', () => {
  it('should an error page', () => {
    const { container } = renderWithProviders(<CustomError />)
    expect(container).toBeInTheDocument()
  })

  it('should the following section title: Page not found!', () => {
    renderWithProviders(<CustomError />)

    const titleSection = screen.getByRole('heading', {
      name: 'Page not found!'
    })
    expect(titleSection).toBeInTheDocument()
  })
})
