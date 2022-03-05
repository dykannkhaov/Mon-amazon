/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Rating from '../../components/Rating'
import { useCart } from '../../utils/context/cart-context'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

function Article() {
  const { addToCart } = useCart()
  const router = useRouter()

  const { data: article, status } = useQuery({
    queryKey: ['article', router.query.article],
    queryFn: () => fetch(`/api/product/${router.query.article}`).then((res) => res.json()),
  })

  if (status === 'loading') return <h1>LOADING...</h1>

  return (
    <>
      <div className="flex flex-col items-center bg-gray-200 pt-3 pb-6">
        <p className="font-bold underline">{article.name}</p>
        <p>{article.price}€</p>
        <Rating rate={article.rate} />
        <img src={`/${article.imgUrl}`} alt={article.name} style={{ width: '450px', height: '450px' }} />
        <button
          className="bg-green-600 text-white text-sm mt-4 p-2 rounded"
          onClick={() => {
            addToCart(article)
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  )
}

export default Article
