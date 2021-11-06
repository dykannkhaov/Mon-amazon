import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../utils/context/cart-context'
import { ProductProvider } from '../utils/context/product-context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ProductProvider>
      </CartProvider>
    </>
  )
}

export default MyApp
