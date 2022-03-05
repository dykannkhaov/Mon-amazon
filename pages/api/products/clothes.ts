import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../items/ProductsList'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const clothesProducts = products.filter((product) => product.category === 'Clothes')
  return res.json(clothesProducts)
}
