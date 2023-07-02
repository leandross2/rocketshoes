import { ButtonAddCart } from '@/components/elements/Button/variations/ButtonAddCart'
import { Container, Image, Price, Title } from './styles'
import { IProduct } from '@/types/IProduct'

interface ProductProps extends IProduct{}
export const Product:React.FC<ProductProps> = ({id,image,title,price}) => {
  return (
    <Container>
      <Image src="https://static.netshoes.com.br/produtos/tenis-oakley-stratus/02/PFN-1494-002/PFN-1494-002_zoom1.jpg?ts=1682602197&ims=544x" alt="" />
      <Title weight='bold'>titulo</Title>
      <Price size='big' weight='bold'>R$ 1.100,00</Price>
      <ButtonAddCart/>
    </Container>
  )
}

