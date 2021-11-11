import * as React from 'react'
import type { Product } from '../../types/product'

type CartProviderValue = {
  cart: Array<Product>
  addToCart: (item: Product) => void
}

const context = React.createContext<CartProviderValue | undefined>(undefined)

function CartProvider(props) {
  const [cart, setCart] = React.useState<Array<Product>>(() => {
    if (typeof window === 'undefined') return []
    return JSON.parse(localStorage.getItem('cart')) ?? []
  })

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: Product) => {
    setCart((oldCart) => [...oldCart, item])
  }

  return <context.Provider value={{ cart, addToCart }}>{props.children}</context.Provider>
}

function useCart() {
  const value = React.useContext(context)
  if (typeof value === 'undefined') {
    throw new Error('useCart has been called but component is not wrapped within a CartProvider')
  }
  return value
}

export { CartProvider, useCart }
