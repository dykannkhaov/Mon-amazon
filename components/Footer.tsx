import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex flex-col md:text-base text-sm items-center pt-2 bg-gray-800 text-white h-16">
      Suivez-nous sur nos réseaux sociaux
      <div className="flex text-2xl mt-1">
        <a href="https://twitter.com/amazon" target="_blank" rel="noreferrer">
          <FaTwitter className="cursor-pointer hover:text-gray-500" />
        </a>
        <a href="https://www.facebook.com/amazon" target="_blank" rel="noreferrer">
          <FaFacebookF className="mx-6 cursor-pointer hover:text-gray-500" />
        </a>
        <a href="https://www.instagram.com/amazon" target="_blank" rel="noreferrer">
          <FaInstagram className="cursor-pointer hover:text-gray-500" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
