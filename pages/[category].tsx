import { useRouter } from 'next/router'

function Category() {
  const router = useRouter()
  return <h1>{router.query.category}</h1>
}
export default Category
