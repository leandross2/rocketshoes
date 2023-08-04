import { Product } from '@/components/widget/Product'
import { Container } from './styles'
import { IProduct } from '@/types/IProduct'

import { Loading } from '@/components/elements/Loading'

interface ShelfProps {
  shelfList: IProduct[]
  isLoading: boolean
}

export const Shelf: React.FC<ShelfProps> = ({ shelfList, isLoading }: ShelfProps) => {
  return (
    !isLoading && !!shelfList.length
      ? <Container>
        {shelfList.map((product) => (
          <Product key={product.id} {...product}/>
        ))}
        </Container>

      : <Loading/>
  )
}
