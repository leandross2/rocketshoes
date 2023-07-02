import { Product } from '@/components/widget/Product'
import { Container } from './styles'
import { IProduct } from '@/types/IProduct'

interface ShelfProps{
  shelfList: IProduct[]
}

export const Shelf:React.FC<ShelfProps> = ({shelfList}: ShelfProps) => {
  console.log(">>>>>>",shelfList)
  return (

    <Container>
      {shelfList.map((product)=>(
        <Product key={2} {...product}/>
      ))}
    </Container>
  )
  
  
}

