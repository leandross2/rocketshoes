import { Header } from '@/components/widget/Header'
import { Shelf } from '@/components/widget/Shelf'
import { Container } from './styles'
import { IProduct } from '@/types/IProduct'

interface HomeLayourProps{
  productList: IProduct[]
}
export const HomeLayout:React.FC<HomeLayourProps> = ({productList}) => {
  return (
    <>
      <Header/>

      <Container>
        <Shelf shelfList={productList} />
      </Container>
    </>

  )
}

