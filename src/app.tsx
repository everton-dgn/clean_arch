import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/configStore'
import GlobalStyles from 'styles/GlobalStyles'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
      <BrowserRouter>{/* <Routes /> */}</BrowserRouter>
      <GlobalStyles />
    </PersistGate>
  </Provider>
)

export default App
