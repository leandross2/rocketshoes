import { Header } from '@/components/widget/Header'
import { Shelf } from '@/components/widget/Shelf'
import { Container } from './styles'

import { Card } from '@/components/elements/Card'
import { useHomePage } from '@/core/hooks/useHomePage'
import { useEffect } from 'react'

export const HomeLayout: React.FC = () => {
  const { listProducts, isLoadingProductList, isErrored, getListProducts } = useHomePage()

  useEffect(() => {
    getListProducts()
  }, [])

  return (
    <>
      <Header/>

      <Container>
          {
          !isErrored
            ? <Shelf shelfList={listProducts} isLoading={isLoadingProductList} />
            : <Card align='center'><p>{isErrored}</p></Card>
          }
      </Container>
    </>

  )
}
