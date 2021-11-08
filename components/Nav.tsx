import { FiMenu } from 'react-icons/fi'
/* eslint-disable react/no-unescaped-entities */
function Nav() {
  return (
    <nav className="flex bg-gray-800 h-10 items-center sm:pl-3 sm:text-sm text-xs">
      <ul className="flex items-center text-white">
        <li className="flex items-center font-bold border border-transparent hover:border-white p-1 cursor-pointer">
          <FiMenu className="text-white text-xl" />
          All
        </li>
        <li className="sm:ml-2 border border-transparent hover:border-white p-1 cursor-pointer">Today's Deals</li>
        <li className="sm:ml-2 border border-transparent hover:border-white p-1 cursor-pointer">Customer Service</li>
        <li className="sm:ml-2 border border-transparent hover:border-white p-1 cursor-pointer">Registry</li>
        <li className="sm:ml-2 border border-transparent hover:border-white p-1 cursor-pointer">Gift Cards</li>
        <li className="sm:ml-2 border border-transparent hover:border-white p-1 cursor-pointer">Sell</li>
      </ul>
    </nav>
  )
}

export default Nav
