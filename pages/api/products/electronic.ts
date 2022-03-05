import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../items/ProductsList'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const electronicProducts = products.filter((product) => product.category === 'Electronic')
  return res.json(electronicProducts)
}
