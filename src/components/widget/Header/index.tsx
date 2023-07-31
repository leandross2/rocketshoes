import { CartArea, Container, InfoCart, Label, LabelQuantity } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '@/core/hooks/useCart'
import { Logo } from '@/components/elements/Logo'

export const Header: React.FC = () => {
  const { cart } = useCart()

  return (
    <Container>

      <Logo />
      <CartArea>
        <InfoCart>
          <Label weight='bold'>Meu carrinho</Label>
          <LabelQuantity>{cart.itens?.length || 0} itens</LabelQuantity>
        </InfoCart>
        <ShoppingCart size={36}/>
      </CartArea>
   </Container>
  )
}
