import { IProduct } from '@/types/IProduct'
import React, { type ReactNode, createContext, useState } from 'react'

export interface HomePageContextData {
  listProducts: IProduct[]
  setListProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  isLoadingProductList: boolean
  setIsLoadingProductList: React.Dispatch<React.SetStateAction<boolean>>
  isErrored: boolean
  setIsErrored: React.Dispatch<React.SetStateAction<boolean>>

}

export const HomePageContext = createContext<HomePageContextData>({} as HomePageContextData)

interface HomePageProviderProps {
  children: ReactNode
}

export const HomePageProvider: React.FC<HomePageProviderProps> = ({ children }) => {
  const [listProducts, setListProducts] = useState<IProduct[]>([])
  const [isLoadingProductList, setIsLoadingProductList] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  return (
    <HomePageContext.Provider value={{
      listProducts,
      setListProducts,
      isLoadingProductList,
      setIsLoadingProductList,
      isErrored,
      setIsErrored
    }}>
      {children}
    </HomePageContext.Provider>
  )
}
