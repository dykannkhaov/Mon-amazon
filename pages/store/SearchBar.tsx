/* eslint-disable @next/next/no-img-element */
import { BsSearch, BsFillCartFill } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'

export default function SearchBar() {
  return (
    <div className="flex justify-around h-16 items-center bg-gray-900 pr-4">
      <div className="p-2 bg-gray-900 border border-transparent hover:border-white cursor-pointer">
        <img alt="amazon-logo" src="/amazon-logo.png" className="h-9" />
      </div>

      <div className="flex border border-transparent hover:border-white cursor-pointer p-2">
        <BiMap className="text-lg self-end" />
        <div>
          <p className="text-gray-300">Livrer à Guest</p>
          <p className="font-bold flex">Paris 75000</p>
        </div>
      </div>

      <div className="flex h-10">
        <select className="bg-gray-200 text-gray-700 px-2 rounded-tl-md cursor-pointer hover:bg-gray-300 hover:text-black">
          <option>Toutes nos catégories</option>
        </select>
        <input type="text" className="w-144 pl-2 text-black border-l border-gray-300" />
        <div className="flex justify-center border-none text-black bg-yellow-400 w-10 rounded-br-md cursor-pointer hover:bg-yellow-500">
          <button>
            <BsSearch className="text-xl" />
          </button>
        </div>
      </div>

      <div className="border border-transparent hover:border-white p-2 cursor-pointer">
        <p className="text-gray-300">Bonjour, Guest</p>
        <p className="font-bold">Compte et listes</p>
      </div>
      <div className="border border-transparent hover:border-white p-2 cursor-pointer">
        <p className="text-gray-300">Retours</p>
        <p className="font-bold">et Commandes</p>
      </div>

      <div className="flex items-end border border-transparent hover:border-white p-3 cursor-pointer">
        <BsFillCartFill className="text-2xl mr-1" />
        <p className="font-bold">Panier</p>
      </div>
    </div>
  )
}
