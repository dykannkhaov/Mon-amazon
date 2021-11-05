/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useCart } from '../utils/context/cart-context'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import type { Product } from '../types/product'

const products: Product[] = [
  {
    name: 'MacBook Pro M1 2020, 13-inch',
    imgUrl: 'macbook-pro.png',
    price: '1449.00€',
    rate: 5,
  },
  {
    name: 'Pokemon Base Set First Edition 1996',
    imgUrl: 'cartes-pokemon.png',
    price: '350.00€',
    rate: 5,
  },

  {
    name: 'Bose QuietComfort 35 II Headphones',
    imgUrl: 'casque-bose.jpeg',
    price: '299.99€',
    rate: 4.5,
  },

  {
    name: 'Stuff for Cocktails',
    imgUrl: 'cocktail-stuff.png',
    price: '19.99€',
    rate: 3.5,
  },

  {
    name: 'PSG away jersey',
    imgUrl: 'maillot-psg.jpeg',
    price: '89.99€',
    rate: 5,
  },

  {
    name: 'League of legends Poro',
    imgUrl: 'poro.png',
    price: '18.99€',
    rate: 4,
  },
  {
    name: 'Iphone 13 Pro 128 GB, Sierra Blue',
    imgUrl: 'iphone13.png',
    price: '1159.00€',
    rate: 5,
  },

  {
    name: 'Logitech G903 Mouse',
    imgUrl: 'souris-logitech.png',
    price: '121.90€',
    rate: 4,
  },

  {
    name: 'Robot vacuum cleaner, Roomba',
    imgUrl: 'roomba-aspirateur.png',
    price: '599.00€',
    rate: 4.5,
  },
  {
    name: 'AirPods Pro',
    imgUrl: 'airpods-pro.png',
    price: '279.00€',
    rate: 5,
  },
  {
    name: 'Nike Air Force 1 "07 blue fury',
    imgUrl: 'air-force1.png',
    price: '104.95€',
    rate: 4.5,
  },

  {
    name: 'Louis Vuitton Handbag',
    imgUrl: 'sac-lv.png',
    price: '1299.00€',
    rate: 5,
  },
]

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
  const { cart, addToCart } = useCart()

  console.log(cart)

  return (
    <>
      <div className="pt-4">
        <h1 className="font-bold text-2xl mb-1 text-center">Your suggestions</h1>
        <hr className="border-gray-400"></hr>
      </div>

      <div className="flex flex-wrap pt-4 justify-center">
        {products.map((item, id) => (
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
