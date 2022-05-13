import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { render, RenderResult } from '@testing-library/react'
import { persistor, store } from 'presentation/store/configStore'
import { PersistGate } from 'redux-persist/integration/react'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
