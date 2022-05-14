import { screen } from '@testing-library/react'
import { renderWithProviders } from 'presentation/utils'
import Login from '..'

describe('Login', () => {
  it('should start with initial state', () => {
    renderWithProviders(<Login />)

    const spinner = screen.queryByRole('spinbutton')
    const errorMessage = screen.queryByRole('status')
    const buttonSubmit = screen.getByRole('button', {
      name: /entrar/i
    })

    expect(spinner).not.toBeInTheDocument()
    expect(errorMessage).not.toBeInTheDocument()
    expect(buttonSubmit).toBeDisabled()
  })
})
