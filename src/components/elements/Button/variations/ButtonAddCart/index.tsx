import { ShoppingCart } from '@phosphor-icons/react'
import { Container, IconContainer, Quantity, Text } from './styles'
import { type ButtonHTMLAttributes, useCallback } from 'react'
import { useCart } from '@/core/hooks/useCart'

interface ButtonAddCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  productId: number
}

export const ButtonAddCart: React.FC<ButtonAddCartProps> = ({ productId, onClick, ...rest }) => {
  const { cart, item } = useCart(productId)

  const handleOnCLick = useCallback((event: any) => {
    if (onClick != null)onClick(event)
  }, [cart])

  return (
    <Container onClick={handleOnCLick} {...rest}>
      <IconContainer>
        <ShoppingCart size={22} />
        <Quantity size="small">{`${item?.quantity ?? 0}`}</Quantity>
      </IconContainer>
      <Text size="small" weight="bold" align="center">ADICIONAR AO CARRINHO</Text>
    </Container>
  )
}
