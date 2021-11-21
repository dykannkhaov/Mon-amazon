/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Rating from '../components/Rating'
import { useCart } from '../utils/context/cart-context'
import { products } from '../items/ProductsList'

const recommendedProducts = products.filter((product) => product.isRecommended)

function Cart() {
  const { cart, addToCart, deleteItemCart, emptyCart } = useCart()

  const totalCart = cart
    .map((item) => parseFloat(item.price))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2)

  return (
    <section className="bg-gray-200">
      <div className="flex xl:flex-row flex-col lg:justify-around xl:pt-6 xl:mb-4 xl:mx-2">
        <div className="self-start pt-4 px-4 bg-white xl:w-9/12 w-full xl:pb-4">
          <div className="flex justify-between mb-2 pr-1">
            <h2 className="text-2xl font-semibold lg:pl-1 xl:pl-0">Shopping Cart</h2>
            <button className="p-1 bg-red-500 rounded" onClick={emptyCart}>
              empty cart
            </button>
          </div>
          <hr className="border-gray-200 border" />
          {cart.length === 0 ? (
            <div className="flex">
              <img src="empty-cart.png" alt="empty-cart" width="400" className="" />
              <p className="font-bold text-2xl ml-8 pt-10 pr-2 sm:block hidden">Your Amazon Cart is empty</p>
            </div>
          ) : (
            cart.map((item, id) => (
              <ul key={id} className="text-sm flex justify-between items-center border pr-1 ">
                <img src={`/${item.imgUrl}`} alt={item.name} className="w-[100px] h-[100px]" />
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
          <div className="bg-white xl:mb-2 p-1">
            <p className="xl:mt-0 mt-1 pl-2 lg:pl-3 xl:pl-1">
              Subtotal ({cart.length}):
              <span className="font-bold ml-1">{totalCart}€</span>
            </p>
          </div>

          <div className="md:flex md:flex-col py-3 lg:pl-4 lg:pr-8 bg-white xl:rounded-lg border border-gray-300">
            <p className="lg:pl-0 pl-3 text-sm font-bold mb-3 sm:mb-2 text-center">Your recently viewed items</p>
            <div className="sm:flex xl:block sm:justify-around flex flex-wrap justify-center">
              {recommendedProducts.map((product, index) => (
                <ul
                  key={index}
                  className="xl:flex xl:text-left sm:block flex items-center sm:text-center text-xs sm:text-sm mb-1"
                >
                  <div>
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
                    />
                  </div>
                  <div>
                    <li>{product.name}</li>
                    <Rating rate={product.rate} className="xl:justify-start sm:justify-center" />
                    <li>{product.price}€</li>
                    <button
                      className="bg-green-600 text-white text-xs p-1 sm:p-1.5 rounded"
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
        </div>
      </div>
      <div>
        <img src="gift.png" alt="gift.png" className="sm:inline-block hidden" />
      </div>
    </section>
  )
}

export default Cart
