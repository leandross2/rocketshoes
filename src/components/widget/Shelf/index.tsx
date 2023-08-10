import { Product } from '@/components/widget/Product'
import { Container } from './styles'
import { IProduct } from '@/types/IProduct'
import { ProductSkeleton } from '../Product/ProductSkeleton'

interface ShelfProps {
  shelfList: IProduct[]
  isLoading: boolean
}

export const Shelf: React.FC<ShelfProps> = ({ shelfList, isLoading }: ShelfProps) => {
  return (
    <Container>
        {
        !isLoading && !!shelfList.length
          ? shelfList.map((product) => (
            <Product key={product.id} {...product}/>
          ))
          : <ProductSkeleton repeat={3}/>
      }
        </Container>
  )
}
