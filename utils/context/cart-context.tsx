import * as React from 'react'
import type { ProductCart } from '../../types/productCart'

type CartProviderValue = {
  cart: Array<ProductCart>
  cartLength: number
  cartTotal: string
  addToCart: (item: ProductCart) => void
  deleteItemCart: (item: ProductCart) => void
  emptyCart: () => void
}

const context = React.createContext<CartProviderValue | undefined>(undefined)

function CartProvider(props) {
  const [cart, setCart] = React.useState<Array<ProductCart>>(() => {
    if (typeof window === 'undefined') return []
    return JSON.parse(localStorage.getItem('cart')) ?? []
  })

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const cartLength = cart
    .map((item) => item.quantity)
    .reduce((previousQuantity, currentQuantity) => previousQuantity + currentQuantity, 0)

  const cartTotal = cart
    .map((item) => parseFloat(item.price) * item.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2)

  const addToCart = (item: ProductCart) => {
    setCart((oldCart) => {
      const cartCopy = [...oldCart]
      const matchedProductIndex = oldCart.findIndex((product) => product.name === item.name)
      if (matchedProductIndex !== -1) {
        cartCopy[matchedProductIndex].quantity++
        return cartCopy
      } else {
        const newItem = {
          ...item,
          quantity: 1,
          id: Date.now(),
        }
        return [...cartCopy, newItem].sort((oldItem, newItem) => (oldItem.id > newItem.id ? -1 : 1))
      }
    })
  }

  const deleteItemCart = (item: ProductCart) => {
    const itemToDelete = item.id
    const newCart = cart.filter((item, index) => item.id !== itemToDelete)
    setCart(newCart)
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <context.Provider value={{ cart, cartLength, cartTotal, addToCart, deleteItemCart, emptyCart }}>
      {props.children}
    </context.Provider>
  )
}

function useCart() {
  const value = React.useContext(context)
  if (typeof value === 'undefined') {
    throw new Error('useCart has been called but component is not wrapped within a CartProvider')
  }
  return value
}

export { CartProvider, useCart }
