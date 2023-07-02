import Logo from '@/assets/Logo.png'
import { CartArea, Container, InfoCart, MainLogo, Label, LabelQuantity } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

export const Header:React.FC = () => {
  return (
    <Container>
      <MainLogo src={Logo} alt="RocketShoes" />
      <CartArea>
        <InfoCart>
          <Label weight='bold'>Meu carrinho</Label>
          <LabelQuantity>3 itens</LabelQuantity>
        </InfoCart>
        <ShoppingCart size={36}/>
      </CartArea>
   </Container>
  )
}

