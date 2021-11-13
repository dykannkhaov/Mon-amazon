import * as React from 'react'
import type { Product } from '../../types/product'

type CartProviderValue = {
  cart: Array<Product>
  addToCart: (item: Product) => void
  deleteItemCart: (item) => void
  emptyCart: () => void
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

  const deleteItemCart = (item) => {
    const itemToDelete = item
    const newCart = cart.filter((item, index) => item !== itemToDelete)
    setCart(newCart)
  }

  const emptyCart = () => {
    setCart([])
  }

  return <context.Provider value={{ cart, addToCart, deleteItemCart, emptyCart }}>{props.children}</context.Provider>
}

function useCart() {
  const value = React.useContext(context)
  if (typeof value === 'undefined') {
    throw new Error('useCart has been called but component is not wrapped within a CartProvider')
  }
  return value
}

export { CartProvider, useCart }
