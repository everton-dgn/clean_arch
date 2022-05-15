import { screen } from '@testing-library/react'
import T from 'presentation/theme'
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
    const titleEmail = screen.queryByTitle(/campo de e-mail obrigatório/i)
    const titlePassword = screen.queryByTitle(/campo de senha obrigatório/i)

    expect(spinner).not.toBeInTheDocument()
    expect(errorMessage).not.toBeInTheDocument()
    expect(buttonSubmit).toBeDisabled()
    expect(titleEmail).toBeInTheDocument()
    expect(titlePassword).toBeInTheDocument()
    expect(titleEmail).toHaveStyle({ backgroundColor: T.colors.error })
    expect(titlePassword).toHaveStyle({ backgroundColor: T.colors.error })
  })
})
