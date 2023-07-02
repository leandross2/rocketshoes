import {ShoppingCart} from "@phosphor-icons/react"
import { Container, IconContainer, Quantity, Text } from './styles'

export const ButtonAddCart:React.FC = () => {
  return (
    <Container >
      <IconContainer>
        <ShoppingCart size={22} >

        </ShoppingCart>
        <Quantity size="small">1</Quantity>
      </IconContainer>
      <Text size="small" weight="bold" align="center">ADICIONAR AO CARRINHO</Text>
    </Container>
  )
}

