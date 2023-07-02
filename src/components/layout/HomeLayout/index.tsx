import { Header } from '@/components/widget/Header'
import { Shelf } from '@/components/widget/Shelf'
import { Container } from './styles'

export const HomeLayout:React.FC = () => {
  return (
    <>
      <Header/>

      <Container>
        <Shelf shelfList={[1,2,3,4]} />
      </Container>
    </>

  )
}

