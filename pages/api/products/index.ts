import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../items/ProductsList'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json(products)
}
