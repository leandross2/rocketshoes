import { ButtonAddCart } from '@/components/elements/Button/variations/ButtonAddCart'
import { Container, Image, Price, Title } from './styles'
import { IProduct } from '@/types/IProduct'
import { formatCurrency } from '@/helpers/formatCurency'

interface ProductProps extends IProduct{}
export const Product:React.FC<ProductProps> = ({image,title,price}) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <Title weight='bold'>{title}</Title>
      <Price size='big' weight='bold'>{formatCurrency(price) }</Price>
      <ButtonAddCart/>
    </Container>
  )
}

