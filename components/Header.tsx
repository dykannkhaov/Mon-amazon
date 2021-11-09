import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
  return (
    <>
      <header className=" text-white text-xs sticky top-0">
        <SearchBar />
        <Nav />
      </header>
    </>
  )
}

export default Header
