import { FiMenu } from 'react-icons/fi'
/* eslint-disable react/no-unescaped-entities */
function Nav() {
  return (
    <nav className="bg-gray-800 h-10 flex items-center pl-3 text-sm">
      <ul className="flex text-white">
        <li className="flex items-center font-bold border border-transparent hover:border-white p-1 cursor-pointer">
          <FiMenu className="text-white text-xl" />
          Toutes
        </li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Service Client</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Prime</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Amazon Basics</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Acheter à nouveau</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Jeux et Jouets</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Amazon Business</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Guide de l'acheteur</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Beauté</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Coupons</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Chèques-cadeaux</li>
        <li className="ml-4 border border-transparent hover:border-white p-1 cursor-pointer">Livraison Gratuite</li>
      </ul>
    </nav>
  )
}

export default Nav
