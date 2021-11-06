/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useCart } from '../utils/context/cart-context'
import { useProduct } from '../utils/context/product-context'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

type Star = 'full' | 'half' | 'empty'

function convertToStars(rate: number, length = 5): Array<Star> {
  return Array(length)
    .fill(null)
    .map((item, index) => {
      if (index < Math.floor(rate)) return 'full'
      else if (!Number.isInteger(rate) && Math.floor(rate) === index) return 'half'
      return 'empty'
    })
}

export default function Shopping() {
  const { addToCart } = useCart()
  const { displayedProducts } = useProduct()

  return (
    <>
      <div className="pt-4">
        <h1 className="font-bold text-2xl mb-1 text-center">Your suggestions</h1>
        <hr className="border-gray-400"></hr>
      </div>

      <div className="flex flex-wrap pt-4 justify-center">
        {displayedProducts.map((item, id) => (
          <ul key={id} className="flex flex-col border w-80 mb-4">
            <img
              src={`/${item.imgUrl}`}
              style={{ height: '250px', width: '250px' }}
              className="self-center"
              alt={item.name}
            />
            <div className="pl-2 text-sm">
              <p className="font-bold">{item.name}</p>
              <p className="flex">
                {convertToStars(item.rate).map((star, index) => {
                  if (star === 'full') return <BsStarFill key={index} className="text-yellow-500" />
                  else if (star === 'half') return <BsStarHalf key={index} className="text-yellow-500" />
                  return <BsStar key={index} className="text-yellow-500" />
                })}
              </p>
              <p>{item.price}</p>
            </div>
            <button
              className="bg-green-600 text-white text-sm mt-2 p-2 rounded self-center"
              onClick={() => {
                addToCart(item)
              }}
            >
              Add to cart
            </button>
          </ul>
        ))}
      </div>
    </>
  )
}
