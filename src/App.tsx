import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/cartContext'
import { GlobalStyle } from './global'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
        <GlobalStyle />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
