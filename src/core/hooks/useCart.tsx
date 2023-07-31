import { useContext } from 'react'
import { CartContext, type CartContextData } from '../contexts/CartContext'
import { type IItem } from '@/types/Cart/IItem'

interface IuseCartReturn extends CartContextData {
  item?: IItem
}

export const useCart = (itemId?: number): IuseCartReturn => {
  const context = useContext(CartContext)

  if (!Object.keys(context).length) console.warn('cart context not found')

  if (itemId) {
    const item = context?.cart.itens?.find(findItem => findItem.id === itemId) ?? undefined

    return { ...context, item }
  }

  return context
}
