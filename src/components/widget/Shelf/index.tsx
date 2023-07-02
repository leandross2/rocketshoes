import { Product } from '@/components/widget/Product'
import { Container } from './styles'

interface ShelfProps{
  shelfList: any[]
}

export const Shelf:React.FC<ShelfProps> = ({shelfList}: ShelfProps) => {
  return (

    <Container>
      {shelfList.map((product)=>(
        <Product key={2} {...product}/>
      ))}
    </Container>
  )
  
  
}

