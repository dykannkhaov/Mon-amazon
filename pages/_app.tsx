import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppProviders from '../utils/context/app-providers'
import { CartProvider } from '../utils/context/cart-context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dykann Khaov Amazon</title>
        <link rel="icon" href="amazon.ico" />
      </Head>
      <AppProviders>
        <CartProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </AppProviders>
    </>
  )
}

export default MyApp
