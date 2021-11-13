/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useCart } from '../utils/context/cart-context'

export default function Cart() {
  const { cart, deleteItemCart, emptyCart } = useCart()

  const total = cart
    .map((item) => item.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2)

  return (
    <section className="bg-gray-200 flex pl-4 pt-6">
      <div className="pt-4 pl-4 border-4 bg-white w-10/12">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <button onClick={emptyCart}>empty cart</button>
        </div>
        <hr className="border-gray-200 border mb-4" />
        {cart.map((item, id) => (
          <ul key={id} className="flex justify-between items-center border">
            <img src={`/${item.imgUrl}`} style={{ height: '150px', width: '150px' }} alt={item.name} />
            <li>{item.name}</li>
            <li>{item.price}€</li>
            <button onClick={() => deleteItemCart(item)}>X</button>
          </ul>
        ))}
      </div>
      <div>
        <p>Subtotal ({cart.length} items)</p>
        <p>Total: {total}€</p>
      </div>
    </section>
  )
}
