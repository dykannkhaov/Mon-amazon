import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../utils/context/cart-context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default MyApp
