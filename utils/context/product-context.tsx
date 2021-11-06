import * as React from 'react'
import type { Product } from '../../types/product'
import { products } from '../../variables/ProductsList'

type ProductProviderValue = {
  displayedProducts: Array<Product>
  updateDisplayedProducts: (e) => void
}

const productContext = React.createContext<ProductProviderValue | undefined>(undefined)

function ProductProvider(props) {
  const [displayedProducts, setDisplayedProducts] = React.useState<Array<Product>>(products)

  const updateDisplayedProducts = (e) => {
    const newDisplayedProducts = products.filter((item) => item.category === e.currentTarget.value)
    setDisplayedProducts(newDisplayedProducts)
    if (e.currentTarget.value === 'All') setDisplayedProducts(products)
  }

  return (
    <productContext.Provider value={{ displayedProducts, updateDisplayedProducts }}>
      {props.children}
    </productContext.Provider>
  )
}

function useProduct() {
  const value = React.useContext(productContext)
  if (typeof value === 'undefined') {
    throw new Error('useProduct has been called but component is not wrapped within a ProductProvider')
  }
  return value
}

export { ProductProvider, useProduct }
