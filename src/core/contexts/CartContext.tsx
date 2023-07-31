import { type ICart } from '@/types/Cart/ICart'
import { type IItem } from '@/types/Cart/IItem'
import { type IProduct } from '@/types/IProduct'

import React, { type ReactNode, createContext, useState } from 'react'

export interface CartContextData {
  cart: ICart
  setCart: React.Dispatch<React.SetStateAction<ICart>>
  sendProductToCart: (newProduct: IProduct) => void
  decrementQuantityItem: (itemId: number) => void
  incrementQuantityItem: (itemId: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ICart>({} as ICart)

  const addItemToCart = (newItem: IItem) => {
    const cartItensDraft = [...cart?.itens ?? []]

    cartItensDraft.push(newItem)

    setCart({ itens: cartItensDraft })
  }

  const incrementQuantityItem = (itemId: number) => {
    const cartDraft = cart.itens.map(item => {
      return item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    })

    setCart({ ...cart, itens: cartDraft })
  }

  const decrementQuantityItem = (itemId: number) => {
    const cartDraft = cart.itens.map(item => {
      return item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    })

    setCart({ ...cart, itens: cartDraft })
  }

  const sendProductToCart = (newProduct: IProduct) => {
    const cartDraft = { ...cart }

    const productExistIndex = cartDraft.itens?.findIndex((item) => item.id === newProduct.id)

    productExistIndex >= 0
      ? incrementQuantityItem(cart.itens[productExistIndex].id)
      : addItemToCart({ ...newProduct, quantity: 1 })
  }

  return (
    <CartContext.Provider value={{ cart, setCart, sendProductToCart, incrementQuantityItem, decrementQuantityItem }}>
      {children}
    </CartContext.Provider>
  )
}
