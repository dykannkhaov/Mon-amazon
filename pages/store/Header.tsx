import SearchBar from './SearchBar'
import Nav from './Nav'

export default function Header() {
  return (
    <>
      <header className=" text-white text-xs">
        <SearchBar />
        <Nav />
      </header>
    </>
  )
}
