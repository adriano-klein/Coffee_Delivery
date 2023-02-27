import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const CartContext = createContext({} as any)

export interface productsProps {
  id: number
  name: string
  imageUrl: string
  price: string
  category: string
  description: string
  amount: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider(): CartContextProviderProps {
  const [products, setProducts] = useState<productsProps[]>()
  const [cart, setCart] = useState<productsProps[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((response) => setProducts(response.data))
  }, [])

  function AddItemToCart(itemId: number) {
    const updatedCart = [...cart]
    const product = products?.find((product) => product.id === itemId)

    if (product) {
      const isIncluded = updatedCart.find((product) => product.id === itemId)
      if (isIncluded) {
        isIncluded.amount += 1
      } else {
        updatedCart.push({ ...product, amount: 1 })
      }
    }
    setCart(updatedCart)
  }

  function RemoveItemToCart(itemId: number) {
    const updatedCart = [...cart]
    const product = products?.find((product) => product.id === itemId)

    if (product) {
      const isIncluded = updatedCart.find((product) => product.id === itemId)
      if (isIncluded && isIncluded.amount > 0) {
        isIncluded.amount -= 1
      }
    }
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{ products, AddItemToCart, RemoveItemToCart }}
      {children}
    ></CartContext.Provider>
  )
}
