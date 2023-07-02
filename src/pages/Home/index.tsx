import { HomeLayout } from '@/components/layout/HomeLayout'
import { IProduct } from '@/types/IProduct'
import axios from 'axios'
import { useEffect, useState } from 'react'


export const Home:React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([])

  useEffect(()=>{
  const getProducts = async ()=>{
    const response = await axios.get("https://raw.githubusercontent.com/leandross2/rocketshoes/main/MOCK_DATA.json")

    setProductList(response.data)
  }
  getProducts()
  },[])

  return (
    <HomeLayout productList={productList} />
  )
}
