import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
  return (
    <>
      <header className=" text-white text-xs">
        <SearchBar />
        <Nav />
      </header>
    </>
  )
}

export default Header
