import { NextRequest, NextResponse } from 'next/server'
import { products } from '../items/ProductsList'
import { concatenateForUrl } from '../utils/concatenateForUrl'

export function middleware(req: NextRequest) {
  const isRoute = !req.url.includes('.')

  if (isRoute) {
    const categories = ['clothes', 'electronic', 'others']
    const productNames = products.map((product) => concatenateForUrl(product.name))
    const isInCategory = categories.some((category) => req.url.endsWith(category))
    const isAProduct = productNames.some((product) => req.url.endsWith(product))

    // allow homepage redirection
    if (req.url === '/') return NextResponse.next()

    //  skip middleware if it requests an endpoint
    if (req.url.startsWith('/api/')) return NextResponse.next()

    // redirect to cart if /cart
    if (req.url === '/cart') return NextResponse.next()

    // redirect to product page
    if (req.url.startsWith('/description') && isAProduct) return NextResponse.next()

    // redirect to index when isInCategory === false and isAProduct === false
    if (!isInCategory) return NextResponse.redirect('/')
  }
}
