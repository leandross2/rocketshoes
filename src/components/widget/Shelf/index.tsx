import { Product } from '@/components/widget/Product'
import { Container } from './styles'
import { type IProduct } from '@/types/IProduct'
import { Card } from '@/components/elements/Card'

interface ShelfProps {
  shelfList: IProduct[]
}

export const Shelf: React.FC<ShelfProps> = ({ shelfList }: ShelfProps) => {
  return (
    !!shelfList.length
      ? <Container>
        {shelfList.map((product) => (
          <Product key={product.id} {...product}/>
        ))}
        </Container>
      : <Card align='center'>Nenhum Produto Encontrado</Card>
  )
}
