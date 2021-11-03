/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

type Product = {
  name: string
  imgUrl: string
  price: string
  rate: number
}

const products: Product[] = [
  {
    name: 'Macbook Pro édition 2020, 13 pouces',
    imgUrl: 'macbook-pro.png',
    price: '1449.00€',
    rate: 5,
  },
  {
    name: 'Lot de 3 Cartes Pokémon 1ere Edition 1996',
    imgUrl: 'cartes-pokemon.png',
    price: '350.00€',
    rate: 5,
  },

  {
    name: 'Casque Bose gris sans fil QuietComfort 35 II',
    imgUrl: 'casque-bose.jpeg',
    price: '299.99€',
    rate: 4.5,
  },

  {
    name: 'Equipement pour Cocktail',
    imgUrl: 'cocktail-stuff.png',
    price: '19.99€',
    rate: 3.5,
  },

  {
    name: 'Maillot de foot du PSG extérieur',
    imgUrl: 'maillot-psg.jpeg',
    price: '89.99€',
    rate: 5,
  },

  {
    name: 'Peluche Poro league of legends',
    imgUrl: 'poro.png',
    price: '18.99€',
    rate: 4,
  },
  {
    name: 'Iphone 13 Pro 128 Go, Bleu alpin',
    imgUrl: 'iphone13.png',
    price: '1159.00€',
    rate: 5,
  },

  {
    name: 'Souris Logitech G903',
    imgUrl: 'souris-logitech.png',
    price: '121.90€',
    rate: 4,
  },

  {
    name: 'Robot-Aspirateur, Roomba',
    imgUrl: 'roomba-aspirateur.png',
    price: '599.00€',
    rate: 5,
  },
  {
    name: 'AirPods Pro',
    imgUrl: 'airpods-pro.png',
    price: '279.00€',
    rate: 5,
  },
  {
    name: 'Nike Air Force 1 "07 bleu glacier',
    imgUrl: 'air-force1.png',
    price: '104.95€',
    rate: 4.5,
  },

  {
    name: 'Sac Louis Vuitton',
    imgUrl: 'sac-lv.png',
    price: '1299.00€',
    rate: 5,
  },
]

// type Star = <BsStarFill> |  <BsStarHalf> | <BsStar>

function convertToStars(rate: number, length = 5) {
  return Array(length)
    .fill(null)
    .map((item, index) => {
      if (index < Math.floor(rate)) return <BsStarFill className="text-yellow-400" />
      else if (!Number.isInteger(rate) && Math.floor(rate) === index) return <BsStarHalf className="text-yellow-400" />
      return <BsStar key={index} className="text-yellow-400" />
    })
}

export default function Shopping() {
  const [cart, setCart] = useState<Array<Product>>([])
  const cartLength = cart.length
  console.log(cart)

  return (
    <>
      <div className="pt-4 pl-8">
        <h1 className="font-bold text-2xl mb-1">Notre sélection pour vous</h1>
        <hr className="border-gray-500"></hr>
      </div>

      <div className="flex flex-wrap pt-4 pl-8">
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
              <p className="flex">{convertToStars(item.rate)}</p>
              <p>{item.price}</p>
            </div>
            <button
              className="bg-green-600 text-white text-sm mt-2 p-2 rounded self-center"
              onClick={() => {
                // setCart((oldCart) => [...oldCart, item])
                setCart([...cart, item])
              }}
            >
              Ajouter au panier
            </button>
          </ul>
        ))}
      </div>
    </>
  )
}

// type Star, key uniquement pour BsStar, ajouter la note devant les etoies ?
