import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../items/ProductsList'
import { concatenateForUrl } from '../../../utils/concatenateForUrl'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const articleName = req.query.article
  const article = products.find((item) => concatenateForUrl(item.name) === articleName)

  return res.json(article)
}
