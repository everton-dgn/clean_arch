import { GlobalStyles } from 'presentation/globalStyles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'presentation/store/configStore'
import * as C from 'presentation/components'
import { MainProvidersProps } from './types'

export const MainProviders = ({ children }: MainProvidersProps) => {
  return (
    <C.ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          {children}
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </C.ErrorBoundary>
  )
}
