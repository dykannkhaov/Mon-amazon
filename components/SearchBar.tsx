/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Link from 'next/link'
import { BsSearch, BsFillCartFill } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import { useCart } from '../utils/context/cart-context'

function SearchBar() {
  const { cart } = useCart()

  return (
    <div className="flex justify-around h-16 items-center bg-gray-900 pr-4">
      <div className="p-2 bg-gray-900 border border-transparent hover:border-white cursor-pointer">
        <Link href="/">
          <img alt="amazon-logo" src="/amazon-logo.png" className="h-9" />
        </Link>
      </div>

      <div className="flex border border-transparent hover:border-white cursor-pointer p-2">
        <BiMap className="text-lg self-end" />
        <div>
          <p className="text-gray-300">Deliver to Guest</p>
          <p className="font-bold flex">Paris 75000</p>
        </div>
      </div>

      <div className="flex h-10">
        <select className="bg-gray-200 text-gray-700 px-2 rounded-tl-md cursor-pointer hover:bg-gray-300 hover:text-black">
          <option>All</option>
          <option>Electronic</option>
          <option>Clothes</option>
          <option>Others</option>
        </select>
        <input type="text" className="lg:inline xl:w-144 lg:w-80 hidden pl-2 text-black border-l border-gray-300" />
        <div className="lg:flex hidden justify-center border-none text-black bg-yellow-400 w-10 rounded-br-md cursor-pointer hover:bg-yellow-500">
          <button>
            <BsSearch className="text-xl" />
          </button>
        </div>
      </div>

      <div className="border border-transparent hover:border-white p-2 cursor-pointer">
        <p className="text-gray-300">Hello, Guest</p>
        <p className="font-bold">Account & Lists</p>
      </div>
      <div className="border border-transparent hover:border-white p-2 cursor-pointer">
        <p className="text-gray-300">Returns</p>
        <p className="font-bold">& Orders</p>
      </div>

      <div className="flex items-end border border-transparent hover:border-white p-3 cursor-pointer">
        <BsFillCartFill className="text-2xl mr-1" />
        <Link href="/cart">
          <a className="font-bold">Cart</a>
        </Link>
        <span className="ml-1 font-bold">({cart.length})</span>
      </div>
    </div>
  )
}

export default SearchBar