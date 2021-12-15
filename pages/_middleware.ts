import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const isRoute = !req.url.includes('.')

  if (isRoute) {
    const categories = ['clothes', 'electronic', 'others']
    const isInCategory = categories.some((category) => req.url.endsWith(category))

    if (req.url.endsWith('cart')) return
    else if (!isInCategory && req.url.endsWith('/')) return
    else if (!isInCategory) return NextResponse.redirect('/')
  }
}
