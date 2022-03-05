import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../items/ProductsList'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const otherProducts = products.filter((product) => product.category === 'Others')
  return res.json(otherProducts)
}
