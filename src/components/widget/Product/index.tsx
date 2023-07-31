import { Image, Price, Title } from './styles'
import { type IProduct } from '@/types/IProduct'
import { formatCurrency } from '@/helpers/formatCurency'
import { ButtonAddCart } from '@/components/elements/Button/variations/ButtonAddCart'
import { useCart } from '@/core/hooks/useCart'
import { Card } from '@/components/elements/Card'
import { Badge } from '@/components/elements/Badge'

interface ProductProps extends IProduct {}

export const Product: React.FC<ProductProps> = ({ id, image, title, price, special }) => {
  const { sendProductToCart } = useCart()
  return (
    <Card special={special} full={false}>
     {special && <Badge color='#7159C1' size={60}/>}

      <Image src={image} alt={title} />
      <Title weight='bold'>{title}</Title>
      <Price size='big' weight='bold'>{formatCurrency(price)}</Price>
      <ButtonAddCart productId={id} onClick={() => { sendProductToCart({ id, image, title, price }) }}/>
    </Card>
  )
}
