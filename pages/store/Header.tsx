import SearchBar from './SearchBar'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const username = router.query.username
  return (
    <>
      <header className=" text-white text-xs">
        <SearchBar username={username} />
        <Nav />
      </header>
      <Main />
      <Footer />
    </>
  )
}
