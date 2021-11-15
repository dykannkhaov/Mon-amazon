/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Rating from '../components/Rating'
import { useCart } from '../utils/context/cart-context'
import { products } from '../items/ProductsList'

const randomProducts = [
  {
    name: 'League of legends Poro',
    price: '18.99',
    category: 'Others',
    imgUrl: 'poro.png',
    rate: 4,
  },

  {
    name: 'PSG Away Jersey',
    price: '89.99',
    category: 'Clothes',
    imgUrl: 'maillot-psg.png',
    rate: 5,
  },
  {
    name: 'AirPods Pro',
    price: ' 279.99',
    category: 'Electronic',
    imgUrl: 'airpods-pro.png',
    rate: 5,
  },

  {
    name: 'Nike unisex, White cap',
    price: '12.99',
    category: 'Clothes',
    imgUrl: 'cap.png',
    rate: 4,
  },
]

function Cart() {
  const { cart, addToCart, deleteItemCart, emptyCart } = useCart()

  const total = cart
    .map((item) => parseFloat(item.price))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2)

  return (
    <section className="bg-gray-200 flex justify-around pt-6">
      <div className="self-start pt-4 pl-4 mr-4 bg-white w-9/12">
        <div className="flex justify-between mb-2 pr-2">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <button className="p-1 bg-red-500 rounded" onClick={emptyCart}>
            empty cart
          </button>
        </div>
        <hr className="border-gray-200 border" />
        {cart.length === 0 ? (
          <div className="flex">
            <img src="empty-cart.png" alt="empty-cart" width="400" />
            <p className="font-bold text-2xl ml-8 pt-10">Your Amazon Cart is empty</p>
          </div>
        ) : (
          cart.map((item, id) => (
            <ul key={id} className="flex justify-between items-center border pr-1">
              <img src={`/${item.imgUrl}`} style={{ height: '150px', width: '150px' }} alt={item.name} />
              <li className="w-40">{item.name}</li>
              <li>{item.price}€</li>
              <button className="border bg-gray-100" onClick={() => deleteItemCart(item)}>
                X
              </button>
            </ul>
          ))
        )}
      </div>

      <div>
        <div className="bg-white mb-2 p-1">
          <p>
            Subtotal ({cart.length}):
            <span className="font-bold ml-1">{total}€</span>
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-300">
          <p className="text-sm font-bold">Your recently viewed items</p>
          {randomProducts.map((product, index) => (
            <ul key={index} className="flex text-sm">
              <div>
                <img src={product.imgUrl} alt={product.name} width="100" />
              </div>
              <div>
                <li>{product.name}</li>
                <Rating rate={product.rate} />
                <li>{product.price}</li>
                <button
                  className="bg-green-600 text-white text-xs p-1 rounded"
                  onClick={() => {
                    addToCart(product)
                  }}
                >
                  Add to cart
                </button>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cart
