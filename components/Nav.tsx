import { FiMenu } from 'react-icons/fi'
/* eslint-disable react/no-unescaped-entities */
function Nav() {
  return (
    <nav className="bg-gray-800 h-10 flex items-center pl-3 sm:text-sm text-xs">
      <ul className="flex items-center text-white">
        <li className="flex items-center font-bold border border-transparent hover:border-white p-1 cursor-pointer">
          <FiMenu className="text-white text-xl" />
          All
        </li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Customer Service</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Buy Again</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Amazon Prime</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Gift Cards</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Registry</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Sell</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Free Delivery</li>
      </ul>
    </nav>
  )
}

export default Nav
