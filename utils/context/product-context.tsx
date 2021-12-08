import * as React from 'react'
import type { Product } from '../../types/product'
import { products } from '../../items/ProductsList'
import { useRouter } from 'next/router'

type ProductProviderValue = {
  displayedProducts: Array<Product>
}

const productContext = React.createContext<ProductProviderValue | undefined>(undefined)

const listOfCategories = ['electronic', 'clothes', 'others']

const getDisplayedProducts = (category: string) => {
  if (listOfCategories.includes(category)) {
    return products.filter((item) => item.category.toLowerCase() === category)
  } else {
    return products
  }
}

function ProductProvider(props) {
  const router = useRouter()
  const category = router.query.category as string
  const displayedProducts = getDisplayedProducts(category)

  return <productContext.Provider value={{ displayedProducts }}>{props.children}</productContext.Provider>
}

function useProducts() {
  const value = React.useContext(productContext)
  if (typeof value === 'undefined') {
    throw new Error('useProducts has been called but component is not wrapped within a ProductProvider')
  }
  return value
}

export { ProductProvider, useProducts }
