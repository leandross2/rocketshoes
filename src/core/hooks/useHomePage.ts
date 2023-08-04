import { useContext } from 'react'
import { HomePageContext } from '../contexts/HomePageContext'
import { requestProducts } from '../services/http/productsService/requestProducts'

export const useHomePage = () => {
  const context = useContext(HomePageContext)

  if (!Object.keys(context).length) console.warn('HomePageContext context not found')

  const { setIsErrored, setIsLoadingProductList, setListProducts } = context

  const getListProducts = async () => {
    try {
      setIsLoadingProductList(true)
      const productsResponse = await requestProducts()
      setListProducts(productsResponse)
      setIsLoadingProductList(false)
    } catch (err) {
      setIsErrored(true)
    }
  }

  return { getListProducts, ...context }
}
