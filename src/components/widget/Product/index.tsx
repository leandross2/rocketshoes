import { ButtonAddCart } from '@/components/elements/Button/variations/ButtonAddCart'
import { Container, Image, Price, Title } from './styles'
import { IProduct } from '@/types/IProduct'

interface ProductProps extends IProduct{}
export const Product:React.FC<ProductProps> = ({image,title,price}) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <Title weight='bold'>{title}</Title>
      <Price size='big' weight='bold'>{price}</Price>
      <ButtonAddCart/>
    </Container>
  )
}

