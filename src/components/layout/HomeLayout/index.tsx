import { Header } from '@/components/widget/Header'
import { Shelf } from '@/components/widget/Shelf'
import { Container } from './styles'
import { type IProduct } from '@/types/IProduct'
import { Card } from '@/components/elements/Card'

interface HomeLayourProps {
  productList: IProduct[]
  isError: string
}
export const HomeLayout: React.FC<HomeLayourProps> = ({ productList, isError }) => {
  return (
    <>
      <Header/>

      <Container>
        {
          !isError
            ? <Shelf shelfList={productList} />
            : <Card align='center'><p>{isError}</p></Card>
          }
      </Container>
    </>

  )
}
