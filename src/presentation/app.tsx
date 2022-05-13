import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'presentation/globalStyles'
import Routes from 'presentation/router'
import { persistor, store } from 'presentation/store/configStore'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </PersistGate>
  </Provider>
)

export default App
