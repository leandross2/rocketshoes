import { CartProvider } from './core/contexts/CartContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <CartProvider>
      <Home/>
      <GlobalStyle />
    </CartProvider>
  )
}
