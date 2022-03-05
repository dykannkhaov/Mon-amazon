/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Rating from '../components/Rating'
import Link from 'next/link'
import { useCart } from '../utils/context/cart-context'
import { products } from '../items/ProductsList'
import { concatenateForUrl } from '../utils/concatenateForUrl'

const recommendedProducts = products.filter((product) => product.isRecommended)

function Cart() {
  const { cart, cartLength, cartTotal, addToCart, deleteItemCart, emptyCart } = useCart()

  return (
    <section className="bg-gray-200">
      <div className="flex xl:flex-row flex-col lg:justify-around xl:pt-6 xl:mb-8 xl:mx-2">
        <div className="self-start pt-4 px-4 bg-white xl:w-9/12 w-full xl:pb-4 overflow-scroll xl:h-[566px] h-[367px]">
          <div className="flex justify-between mb-2 pr-1">
            <h2 className="text-2xl font-semibold lg:pl-1 xl:pl-0">Shopping Cart</h2>
            <button className="p-1 bg-red-500 rounded" onClick={emptyCart}>
              empty cart
            </button>
          </div>
          <hr className="border-gray-200 border" />
          {cartLength === 0 ? (
            <div className="flex md:justify-evenly xl:justify-start">
              <img src="empty-cart.png" alt="empty-cart" className="w-[300px] xl:w-[400px]" />
              <p className="font-bold text-xl ml-8 pt-10 pr-2 sm:block hidden">Your Amazon Cart is empty</p>
            </div>
          ) : (
            cart.map((item, id) => (
              <ul key={id} className="text-sm flex justify-between items-center border pr-1">
                <Link href={`/description/${concatenateForUrl(item.name)}`}>
                  <a>
                    <img
                      src={`/${item.imgUrl}`}
                      alt={item.name}
                      className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px] cursor-pointer"
                    />
                  </a>
                </Link>
                <li className="">{item.quantity}</li>
                <li className="w-36">{item.name}</li>
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
              Subtotal ({cartLength} items):
              <span className="font-bold ml-1">{cartTotal}€</span>
            </p>
          </div>

          <div className="md:flex md:flex-col pt-4 pb-6 sm:py-4 lg:pl-4 lg:pr-8 bg-white xl:rounded-lg border border-gray-300">
            <p className="pl-3 text-sm font-bold mb-3 sm:mb-2 text-center">Your recently viewed items</p>
            <div className="sm:flex xl:block sm:justify-around sm:pr-0 flex flex-wrap justify-evenly pr-6 pb-0.5">
              {recommendedProducts.map((product, index) => (
                <ul key={index} className="xl:flex xl:text-left sm:block flex items-center sm:text-center text-sm mb-1">
                  <div>
                    <Link href={`/description/${concatenateForUrl(product.name)}`}>
                      <a>
                        <img
                          src={product.imgUrl}
                          alt={product.name}
                          className="sm:w-[100px] sm:h-[100px] w-[90px] h-[90px] cursor-pointer"
                        />
                      </a>
                    </Link>
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
        <img src="gift.png" alt="gift.png" />
      </div>
    </section>
  )
}

export default Cart
