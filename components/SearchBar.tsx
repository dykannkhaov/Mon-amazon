/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Link from 'next/link'
import { BsSearch, BsFillCartFill } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import { useCart } from '../utils/context/cart-context'
import { useProducts } from '../utils/context/product-context'

function SearchBar() {
  const { cartLength } = useCart()
  const { updateDisplayedProducts } = useProducts()

  return (
    <div className="flex justify-around h-16 items-center bg-gray-900 md:pr-4">
      <Link href="/">
        <div className="p-2 bg-gray-900 border border-transparent hover:border-white cursor-pointer">
          <img alt="amazon-logo" src="/amazon-logo.png" className="h-9" />
        </div>
      </Link>

      <div className="sm:flex border border-transparent hover:border-white cursor-pointer p-2 hidden">
        <BiMap className="text-lg self-end" />
        <div>
          <p className="text-gray-300">Deliver to Guest</p>
          <p className="font-bold">Paris 75000</p>
        </div>
      </div>

      <div className="flex h-10">
        <select
          className="bg-gray-200 text-gray-700 px-2 rounded-tl-md cursor-pointer hover:bg-gray-300 hover:text-black"
          onChange={(e) => {
            updateDisplayedProducts(e)
          }}
        >
          <option>All</option>
          <option>Electronic</option>
          <option>Clothes</option>
          <option>Others</option>
        </select>
        <input
          type="text"
          className="lg:inline xl:w-[576px] lg:w-[320px] hidden pl-2 text-black border-l border-gray-300"
        />
        <div className="lg:flex hidden justify-center border-none text-black bg-yellow-400 w-10 rounded-br-md cursor-pointer hover:bg-yellow-500">
          <button>
            <BsSearch className="text-xl" />
          </button>
        </div>
      </div>

      <div className="sm:block border border-transparent hover:border-white p-2 cursor-pointer hidden">
        <p className="text-gray-300">Hello, Guest</p>
        <p className="font-bold">Account & Lists</p>
      </div>
      <div className="hidden md:block border border-transparent hover:border-white p-2 cursor-pointer">
        <p className="text-gray-300">Returns</p>
        <p className="font-bold">& Orders</p>
      </div>

      <Link href="/cart">
        <div className="flex items-end border border-transparent hover:border-white p-3 cursor-pointer text-sm">
          <BsFillCartFill className="text-2xl mr-1" />
          <a className="font-bold mr-1">Cart</a>
          <span className="font-bold text-yellow-500">({cartLength})</span>
        </div>
      </Link>
    </div>
  )
}

export default SearchBar
