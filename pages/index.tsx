/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Rating from '../components/Rating'
import Link from 'next/link'
import { useCart } from '../utils/context/cart-context'
import { useQuery } from 'react-query'
import { concatenateForUrl } from '../utils/concatenateForUrl'

export default function Home() {
  const { addToCart } = useCart()

  const { data: products, status } = useQuery({
    queryKey: 'products',
    queryFn: () => fetch('/api/products').then((res) => res.json()),
  })

  if (status === 'loading') return <h1>LOADING...</h1>

  return (
    <main>
      <img src="ad.png" alt="amazon-ad" className="w-full sm:h-auto h-20 mb-2" />
      <div>
        <h1 className="font-bold text-2xl mb-1 text-center">Your suggestions</h1>
        <hr className="border-gray-400" />
      </div>

      <ul className="flex flex-wrap pt-4 justify-center">
        {products.map((item, id) => (
          <li key={id} className="md:flex-col md:items-start flex items-center border w-full md:w-80 mb-4">
            <Link href={`/description/${concatenateForUrl(item.name)}`}>
              <a className="self-center cursor-pointer">
                <img src={`/${item.imgUrl}`} style={{ height: '200px', width: '200px' }} alt={item.name} />
              </a>
            </Link>
            <div className="pl-2 sm:text-sm text-xs">
              <p className="font-bold">{item.name}</p>
              <p>{item.price}€</p>
              <Rating rate={item.rate} />
              <button
                className="bg-green-600 text-white text-xs p-2 rounded mt-3 block md:hidden"
                onClick={() => addToCart(item)}
              >
                Add to cart
              </button>
            </div>
            <button
              className="bg-green-600 text-white text-sm mt-2 p-2 rounded self-center md:block hidden"
              onClick={() => {
                addToCart(item)
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
