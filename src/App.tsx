import { CartProvider } from './core/contexts/CartContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import 'react-loading-skeleton/dist/skeleton.css'
export const App = () => {
  return (
    <CartProvider>
      <Home/>
      <GlobalStyle />
    </CartProvider>
  )
}
