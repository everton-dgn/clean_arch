import { BrowserRouter } from 'react-router-dom'
import Routes from 'presentation/router'
import { MainProviders } from 'presentation/utils'

const App = () => (
  <MainProviders>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MainProviders>
)

export default App
