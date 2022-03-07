import { NextRequest, NextResponse } from 'next/server'
import { products } from '../items/ProductsList'
import { concatenateForUrl } from '../utils/concatenateForUrl'

export function middleware(req: NextRequest) {
  const isRoute = !req.nextUrl.pathname.includes('.')
  const url = req.nextUrl.clone()
  url.pathname = '/'

  if (isRoute) {
    const categories = ['clothes', 'electronic', 'others']
    const productNames = products.map((product) => concatenateForUrl(product.name))
    const isInCategory = categories.some((category) => req.nextUrl.pathname.endsWith(category))
    const isAProduct = productNames.some((product) => req.nextUrl.pathname.endsWith(product))

    // allow homepage redirection
    if (req.nextUrl.pathname === '/') return NextResponse.next()

    //  skip middleware if it requests an endpoint
    if (req.nextUrl.pathname.startsWith('/api/')) return NextResponse.next()

    // redirect to cart if /cart
    if (req.nextUrl.pathname === '/cart') return NextResponse.next()

    // redirect to product page
    if (req.nextUrl.pathname.startsWith('/description') && isAProduct) return NextResponse.next()

    // redirect to index when !isInCategory and !isAProduct
    if (!isInCategory || (isInCategory && req.nextUrl.pathname.startsWith('/description')))
      return NextResponse.redirect(url)
  }
}
