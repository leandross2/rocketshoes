import { HomeLayout } from '@/components/layout/HomeLayout'
import { getProducts } from '@services/http/productsService/getProducts'
import { IProduct } from '@/types/IProduct'
import { useEffect, useState } from 'react'

export const Home: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([])
  const [isError, setIsError] = useState('')

  useEffect(() => {
    getProducts()
      .then(res => setProductList(res))
      .catch(err => setIsError(err.message))
  }, [])

  return (
    <HomeLayout productList={productList} isError={isError} />
  )
}
